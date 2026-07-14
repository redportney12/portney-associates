import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema, type FieldErrors } from "@/lib/validation";

/**
 * Contact route handler.
 * - Zod server-side validation (defense in depth; the client also validates)
 * - Honeypot check
 * - Lightweight in-memory rate limiting (see note below)
 * - Resend delivery; API key never leaves the server
 * Sensitive message content is not logged.
 */

export const runtime = "nodejs";

// NOTE: This in-memory limiter resets on cold start and is per-instance only.
// For production behind multiple instances, use a durable store (Upstash Redis,
// Vercel KV) or a WAF/edge rate limit. This is a reasonable baseline.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; start: number }>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || now - entry.start > WINDOW_MS) {
    hits.set(key, { count: 1, start: now });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  return fwd?.split(",")[0]?.trim() || "unknown";
}

export async function POST(req: Request) {
  // Rate limit
  if (rateLimited(clientIp(req))) {
    return NextResponse.json(
      { message: "Too many requests. Please try again shortly." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: FieldErrors = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof FieldErrors;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return NextResponse.json(
      { message: "Please correct the highlighted fields.", fieldErrors },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // Honeypot: silently accept to avoid tipping off bots, but do not send.
  if (data.company_website && data.company_website.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    // Misconfiguration — do not expose details to the client.
    console.error("Contact form is not fully configured (missing env vars).");
    return NextResponse.json(
      { message: "The contact form is temporarily unavailable. Please email us directly." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  const subject = `New inquiry — ${data.organization} (${data.service})`;
  const lines = [
    `Name: ${data.fullName}`,
    data.title ? `Title: ${data.title}` : null,
    `Organization: ${data.organization}`,
    `Organization type: ${data.organizationType}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    `Service of interest: ${data.service}`,
    `Timeline: ${data.timeline}`,
    `Preferred contact: ${data.preferredContact}`,
    "",
    "Message:",
    data.message,
  ].filter(Boolean);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject,
      text: lines.join("\n"),
    });
    if (error) {
      console.error("Resend delivery error."); // no message content logged
      return NextResponse.json(
        { message: "We could not send your message. Please try again or email us directly." },
        { status: 502 },
      );
    }
  } catch {
    console.error("Unexpected error sending contact email.");
    return NextResponse.json(
      { message: "An unexpected error occurred. Please try again shortly." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
