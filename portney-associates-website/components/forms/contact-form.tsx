"use client";

import { useId, useRef, useState } from "react";
import {
  ORGANIZATION_TYPES,
  SERVICE_OPTIONS,
  TIMELINE_OPTIONS,
  CONTACT_METHODS,
  CONFIDENTIALITY_NOTICE,
} from "@/content/contact";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Select, Label, FieldError } from "@/components/forms/fields";
import type { FieldErrors } from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string>("");
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const fid = (name: string) => `${uid}-${name}`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setFormError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        if (json?.fieldErrors) setErrors(json.fieldErrors as FieldErrors);
        setFormError(
          json?.message ?? "Something went wrong. Please try again or email us directly.",
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setFormError("A network error occurred. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border border-fog bg-white p-8 text-center"
      >
        <div className="hairline mx-auto mb-5" />
        <h2 className="text-h3 font-serif text-navy">Thank you — your message was received.</h2>
        <p className="measure mx-auto mt-3 text-slate-brand">
          Every inquiry is reviewed directly. We will respond to determine whether Portney &amp;
          Associates is the right fit for your needs.
        </p>
        <Button className="mt-6" variant="secondary" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Screen-reader + visual status region */}
      <div aria-live="assertive" className="sr-only" role="status">
        {status === "submitting" ? "Submitting your message." : ""}
      </div>

      {status === "error" && formError ? (
        <div
          role="alert"
          className="border-l-4 border-[color:var(--color-error)] bg-white p-4 text-sm text-[color:var(--color-error)]"
        >
          {formError}
        </div>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor={fid("fullName")} required>Full name</Label>
          <Input id={fid("fullName")} name="fullName" autoComplete="name"
            aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? fid("fullName-err") : undefined} required />
          <FieldError id={fid("fullName-err")} message={errors.fullName} />
        </div>
        <div>
          <Label htmlFor={fid("title")}>Title</Label>
          <Input id={fid("title")} name="title" autoComplete="organization-title" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor={fid("organization")} required>Organization</Label>
          <Input id={fid("organization")} name="organization" autoComplete="organization"
            aria-invalid={!!errors.organization} aria-describedby={errors.organization ? fid("organization-err") : undefined} required />
          <FieldError id={fid("organization-err")} message={errors.organization} />
        </div>
        <div>
          <Label htmlFor={fid("organizationType")} required>Organization type</Label>
          <Select id={fid("organizationType")} name="organizationType" defaultValue=""
            aria-invalid={!!errors.organizationType} aria-describedby={errors.organizationType ? fid("organizationType-err") : undefined} required>
            <option value="" disabled>Select an option</option>
            {ORGANIZATION_TYPES.map((o) => <option key={o} value={o}>{o}</option>)}
          </Select>
          <FieldError id={fid("organizationType-err")} message={errors.organizationType} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor={fid("email")} required>Email address</Label>
          <Input id={fid("email")} name="email" type="email" inputMode="email" autoComplete="email"
            aria-invalid={!!errors.email} aria-describedby={errors.email ? fid("email-err") : undefined} required />
          <FieldError id={fid("email-err")} message={errors.email} />
        </div>
        <div>
          <Label htmlFor={fid("phone")}>Phone number</Label>
          <Input id={fid("phone")} name="phone" type="tel" inputMode="tel" autoComplete="tel" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor={fid("service")} required>Service of interest</Label>
          <Select id={fid("service")} name="service" defaultValue=""
            aria-invalid={!!errors.service} aria-describedby={errors.service ? fid("service-err") : undefined} required>
            <option value="" disabled>Select an option</option>
            {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </Select>
          <FieldError id={fid("service-err")} message={errors.service} />
        </div>
        <div>
          <Label htmlFor={fid("timeline")} required>Project timeline</Label>
          <Select id={fid("timeline")} name="timeline" defaultValue=""
            aria-invalid={!!errors.timeline} aria-describedby={errors.timeline ? fid("timeline-err") : undefined} required>
            <option value="" disabled>Select an option</option>
            {TIMELINE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </Select>
          <FieldError id={fid("timeline-err")} message={errors.timeline} />
        </div>
      </div>

      <div>
        <Label htmlFor={fid("message")} required>Brief description</Label>
        <Textarea id={fid("message")} name="message"
          placeholder="Describe the challenge, initiative, or leadership need — without confidential details."
          aria-invalid={!!errors.message} aria-describedby={errors.message ? fid("message-err") : undefined} required />
        <FieldError id={fid("message-err")} message={errors.message} />
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-navy">Preferred contact method</legend>
        <div className="mt-3 flex gap-6">
          {CONTACT_METHODS.map((m, i) => (
            <label key={m} className="flex items-center gap-2 text-sm text-charcoal">
              <input type="radio" name="preferredContact" value={m} defaultChecked={i === 0}
                className="h-4 w-4 accent-[color:var(--color-primary)]" />
              {m}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Honeypot — visually hidden, off-screen, not announced */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
        <label htmlFor={fid("company_website")}>Company website (leave blank)</label>
        <input id={fid("company_website")} name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="border-l-4 border-gold bg-fog/40 p-4 text-sm text-slate-brand">
        {CONFIDENTIALITY_NOTICE}
      </div>

      <div className="flex items-start gap-3">
        <input id={fid("consent")} name="consent" type="checkbox" required
          className="mt-1 h-5 w-5 accent-[color:var(--color-primary)]"
          aria-invalid={!!errors.consent} aria-describedby={errors.consent ? fid("consent-err") : undefined} />
        <div>
          <Label htmlFor={fid("consent")} required>
            I understand this form is not for confidential information and consent to being contacted.
          </Label>
          <FieldError id={fid("consent-err")} message={errors.consent} />
        </div>
      </div>

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
