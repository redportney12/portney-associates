import type {
  Capability,
  Differentiator,
  NavLink,
  ProcessStep,
  Testimonial,
} from "@/types";

/**
 * Global, structured site content. Kept in plain data so it can migrate to a
 * CMS later without touching components. No fabricated facts appear here.
 */

export const SITE = {
  name: "Portney & Associates LLC",
  shortName: "Portney & Associates",
  founder: "Jonathan Portney",
  founderNickname: 'Jonathan "JP" Portney',
  founderTitle: "Founder and Principal",
  tagline: "Leadership for Complex Public Challenges",
  descriptor:
    "Executive Advisory for Public Health, Healthcare, Emergency Management, and Government Leadership",
  supportingLine:
    "Strategy, leadership, and operational guidance for organizations responsible for public health, healthcare, emergency preparedness, and essential government services.",
  footerDescription:
    "Executive advisory and strategic consulting for public health, healthcare, emergency management, and government leadership.",
  contact: {
    email: "Redportney12@gmail.com",
    phone: "(909) 894-8523",
    linkedinCompany: "#", // TODO: verified LinkedIn company page URL
    linkedinPersonal: "https://www.linkedin.com/in/jonathanportney/",
    serviceArea:
      "Based in Southern California and available for engagements throughout California and across the United States.",
  },
  // Canonical domain is read from NEXT_PUBLIC_SITE_URL; this is the display fallback.
  domainDisplay: "portney-associates.com",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Jonathan Portney", href: "/jonathan-portney" },
  { label: "Contact", href: "/contact" },
];

export const PRIMARY_CTA = { label: "Schedule a Consultation", href: "/contact" };

export const HOME_HERO = {
  eyebrow: "Portney & Associates LLC",
  headline: "Leadership for Complex Public Challenges",
  supporting:
    "Portney & Associates provides executive advisory, strategic planning, and operational guidance to public health agencies, healthcare organizations, emergency management programs, and government leaders.",
  primaryCta: PRIMARY_CTA,
  secondaryCta: { label: "Explore Our Services", href: "/services" },
  trustLine:
    "Specialized advisory support for organizations responsible for essential public services.",
} as const;

export const CAPABILITIES: Capability[] = [
  {
    title: "Executive Advisory",
    description:
      "Objective guidance for executives navigating strategic, operational, political, or organizational challenges.",
    href: "/services#executive-advisory",
    icon: "compass",
  },
  {
    title: "Public Health Strategy",
    description:
      "Planning, coordination, and implementation support for public health departments and regional initiatives.",
    href: "/services#public-health-consulting",
    icon: "health",
  },
  {
    title: "Healthcare Strategy",
    description:
      "Strategic and operational support for healthcare organizations, leadership teams, and cross-sector partnerships.",
    href: "/services#healthcare-strategy",
    icon: "shield",
  },
  {
    title: "Emergency Preparedness",
    description:
      "Preparedness planning, coordination, facilitation, after-action support, and leadership guidance.",
    href: "/services#emergency-management",
    icon: "siren",
  },
  {
    title: "Organizational Performance",
    description:
      "Assessment, priority setting, accountability structures, implementation planning, and operational improvement.",
    href: "/services#organizational-performance",
    icon: "gauge",
  },
  {
    title: "Leadership and Facilitation",
    description:
      "Executive facilitation, stakeholder engagement, leadership alignment, and high-value convening design.",
    href: "/services#leadership-facilitation",
    icon: "users",
  },
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    title: "Senior-Level Attention",
    description:
      "Clients work directly with experienced leadership throughout the engagement.",
    icon: "target",
  },
  {
    title: "Institutional Understanding",
    description:
      "Recommendations account for the realities of government, healthcare, and public-sector organizations.",
    icon: "landmark",
  },
  {
    title: "Practical Strategy",
    description:
      "Complex issues are translated into clear decisions, priorities, and executable plans.",
    icon: "clipboard",
  },
  {
    title: "Calm Under Pressure",
    description:
      "The firm provides disciplined, objective guidance during high-stakes or sensitive situations.",
    icon: "scale",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "Clarify the challenge, operating context, stakeholders, constraints, and desired result.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "Review available information, identify risks, and define the most important issues.",
  },
  {
    number: "03",
    title: "Advise",
    description:
      "Develop practical options, recommendations, priorities, and an implementation path.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Assist leadership with execution, facilitation, communication, and accountability.",
  },
];

export const SECTORS: { title: string; icon: import("@/lib/icons").IconName }[] = [
  { title: "State and Local Government", icon: "landmark" },
  { title: "Public Health", icon: "health" },
  { title: "Healthcare", icon: "shield" },
  { title: "Emergency Management", icon: "siren" },
  { title: "Higher Education", icon: "education" },
  { title: "Nonprofit and Regional Partnerships", icon: "nonprofit" },
];

// Verified outcome categories only — no invented statistics.
export const OUTCOME_CATEGORIES: string[] = [
  "Stronger executive alignment",
  "Clearer strategic priorities",
  "Improved cross-agency coordination",
  "More actionable plans",
  "Better-prepared leadership teams",
  "Practical implementation support",
];
// TODO: Add verified engagement metrics here when available (e.g. named outcomes,
// verifiable results). Do not publish numbers that cannot be substantiated.

// Placeholder testimonials. These are NOT real client statements and must not be
// presented as such. They are labeled and rendered with a clear placeholder note.

];

export const HOME_FINAL_CTA = {
  headline: "Bring clarity to your next critical initiative.",
  copy:
    "Whether your organization is developing strategy, aligning leadership, preparing for risk, strengthening operations, or managing a complex public challenge, Portney & Associates can provide focused executive support.",
  button: { label: "Start a Conversation", href: "/contact" },
} as const;
