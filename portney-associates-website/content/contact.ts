export const CONTACT_HERO = {
  eyebrow: "Contact",
  headline: "Start a Conversation",
  supporting:
    "Tell us about the challenge, initiative, or leadership need your organization is addressing. Initial conversations are confidential and focused on determining whether Portney & Associates is the right fit.",
} as const;

export const ORGANIZATION_TYPES: string[] = [
  "State government",
  "Local government",
  "Public health",
  "Healthcare",
  "Emergency management",
  "Higher education",
  "Nonprofit",
  "Private-sector organization",
  "Other",
];

export const SERVICE_OPTIONS: string[] = [
  "Executive advisory",
  "Strategic planning",
  "Public health consulting",
  "Emergency preparedness",
  "Healthcare strategy",
  "Organizational performance",
  "Leadership facilitation",
  "Other",
];

export const TIMELINE_OPTIONS: string[] = [
  "Immediate",
  "Within 1–3 months",
  "3–6 months",
  "6+ months",
  "Exploring options",
];

export const CONTACT_METHODS: string[] = ["Email", "Phone"];

export const CONFIDENTIALITY_NOTICE =
  "Please do not submit confidential, legally privileged, medical, procurement-sensitive, or personally identifiable information through this form. Sensitive project details can be discussed after contact has been established.";

export const REASSURANCE = {
  headline: "Focused, senior-level support from the first conversation.",
  copy:
    "Every inquiry is reviewed directly. Portney & Associates works with a limited number of clients to preserve responsiveness, discretion, and direct involvement in each engagement.",
} as const;
