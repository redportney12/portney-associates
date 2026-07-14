import { z } from "zod";
import {
  ORGANIZATION_TYPES,
  SERVICE_OPTIONS,
  TIMELINE_OPTIONS,
  CONTACT_METHODS,
} from "@/content/contact";

const nonEmpty = (label: string, max = 200) =>
  z
    .string({ required_error: `${label} is required.` })
    .trim()
    .min(1, `${label} is required.`)
    .max(max, `${label} is too long.`);

export const contactSchema = z.object({
  fullName: nonEmpty("Full name", 120),
  title: z.string().trim().max(120).optional().or(z.literal("")),
  organization: nonEmpty("Organization", 160),
  email: z
    .string({ required_error: "Email address is required." })
    .trim()
    .min(1, "Email address is required.")
    .email("Enter a valid email address.")
    .max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  organizationType: z
    .string()
    .refine((v) => ORGANIZATION_TYPES.includes(v), "Select an organization type."),
  service: z
    .string()
    .refine((v) => SERVICE_OPTIONS.includes(v), "Select a service of interest."),
  timeline: z
    .string()
    .refine((v) => TIMELINE_OPTIONS.includes(v), "Select a project timeline."),
  message: nonEmpty("A brief description", 4000),
  preferredContact: z
    .string()
    .refine((v) => CONTACT_METHODS.includes(v), "Select a preferred contact method."),
  consent: z
    .union([z.literal("on"), z.literal("true"), z.boolean()])
    .refine((v) => v === "on" || v === "true" || v === true, {
      message: "Consent is required to submit this form.",
    }),
  // Honeypot — must stay empty. Bots tend to fill every field.
  company_website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type FieldErrors = Partial<Record<keyof ContactInput, string>>;
