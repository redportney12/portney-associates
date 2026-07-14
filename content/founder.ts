import type { TimelineRole } from "@/types";

/**
 * Founder profile content for /jonathan-portney.
 * IMPORTANT: All biographical statements are written at a level that is safe to
 * publish only after verification. Unverified specifics use placeholders and are
 * flagged with TODO comments. Do not publish unverified credentials or history.
 */

export const FOUNDER = {
  name: "Jonathan Portney",
  nickname: 'Jonathan "JP" Portney',
  title: "Founder and Principal, Portney & Associates LLC",
  seoTitle: "Jonathan Portney | Founder of Portney & Associates LLC",
  metaDescription:
    "Jonathan Portney is the founder and principal of Portney & Associates LLC, providing executive advisory and consulting services across public health, healthcare, emergency management, and government leadership.",
  // Restrained intro. Confirm every clause before launch.
  intro:
    'Jonathan "JP" Portney is a public-sector and public health leader and the founder of Portney & Associates LLC. His work focuses on executive advisory, government leadership, public health strategy, healthcare coordination, emergency preparedness, workforce development, and complex cross-sector initiatives.',
  imageFile: "/images/jonathan-portney-founder-portney-associates.jpg",
  imageAlt: "Jonathan Portney, founder and principal of Portney & Associates LLC",
} as const;

export const FOUNDER_PROFILE_PARAGRAPHS: string[] = [
  // TODO: Confirm and finalize the executive profile copy before publishing.
  "Portney & Associates was founded to give public institutions and healthcare organizations direct access to experienced, senior-level advisory support. Jonathan Portney leads that work personally, partnering with executives and leadership teams responsible for consequential public decisions.",
  "He supports government agencies, public health departments, healthcare systems, emergency management programs, universities, nonprofits, and regional collaboratives — organizations that operate under scrutiny, serve communities directly, and cannot afford strategy that ignores how institutions actually function.",
  "His approach emphasizes clarity, disciplined analysis, and practical recommendations that leadership teams can carry into implementation. As founder and principal, he remains directly involved in each engagement rather than delegating client relationships to junior staff.",
];

// Verified areas of experience only. Trim any item that cannot be substantiated.
export const AREAS_OF_EXPERIENCE: string[] = [
  "Government leadership",
  "Public health strategy",
  "Regional public health coordination",
  "Healthcare-public health collaboration",
  "Emergency preparedness",
  "Executive facilitation",
  "Strategic planning",
  "Workforce development",
  "Stakeholder engagement",
  "Cross-jurisdictional coordination",
  "Organizational performance",
  "Policy implementation",
];

export const LEADERSHIP_APPROACH: { title: string; description: string }[] = [
  {
    title: "Clarifying priorities",
    description:
      "Cutting through competing demands to define what matters most and what can wait.",
  },
  {
    title: "Managing complexity",
    description:
      "Structuring ambiguous, multi-stakeholder problems into decisions leadership can act on.",
  },
  {
    title: "Aligning stakeholders",
    description:
      "Building shared understanding across departments, jurisdictions, and agencies.",
  },
  {
    title: "Translating strategy into execution",
    description:
      "Connecting decisions to owners, timelines, and accountable implementation.",
  },
  {
    title: "Advising in sensitive situations",
    description:
      "Providing calm, objective counsel when the stakes are operational, political, or reputational.",
  },
  {
    title: "Supporting public institutions",
    description:
      "Producing recommendations that are realistic for organizations accountable to the public.",
  },
];

// Editable timeline. Summaries are kept general and do not include confidential,
// litigation, personnel, or sensitive employer detail.
export const PROFESSIONAL_TIMELINE: TimelineRole[] = [
  {
    organization: "California Department of Public Health",
    position: "Regional Program Coordinator, Los Angeles & Southern California",
    dates: "2024–Present",
    location: "California",
    scope:
      "Supports regional public health coordination, improving communication and collaboration across jurisdictions and providing technical assistance to local health partners on statewide priorities.",
    verified: true,
  },
  {
    organization: "Portney & Associates LLC",
    position: "Founder and Principal",
    dates: "2024–Present",
    location: "United States",
    scope:
      "Leads a cross-sector advisory practice spanning public health, healthcare, policy, technology, and community engagement, delivering consulting, program strategy, and leadership support.",
    verified: true,
  },
  {
    organization: "County of Lake",
    position: "Public Health & Health Services Director / Medical & Health Operational Area Coordinator",
    dates: "2021–2023",
    location: "California",
    scope:
      "Directed a county public health and health services department and served as the Medical & Health Operational Area Coordinator (MHOAC), overseeing programs across public health, environmental health, and emergency preparedness.",
    verified: true,
  },
  {
    organization: "Daly City Youth Health Center",
    position: "Executive Director",
    dates: "2020–2022",
    location: "California",
    scope:
      "Led a school-linked health center providing primary care, behavioral health, and youth development services, overseeing clinical, behavioral health, and community outreach teams.",
    verified: true,
  },
  {
    organization: "Urban Services YMCA",
    position: "Director, Community Health Ambassador Program",
    dates: "2018–2020",
    location: "San Francisco Bay Area, California",
    scope:
      "Directed a community health worker program focused on resident-driven health initiatives, growing the team and strengthening health and wellness programming in partnership with local communities.",
    verified: true,
  },
  {
    organization: "Adventist Health",
    position: "Hospital Administrator, International Program",
    dates: "2017–2018",
    location: "International",
    scope:
      "Supported administration of a rural hospital and community resilience programming, developing health education services and building partnerships with local and community organizations.",
    verified: true,
  },
];

// Credentials are hidden until verified. Populate then set `active: true`.
export const CREDENTIALS = {
  active: false,
  groups: [
    { label: "Education", items: ["To be confirmed"] },
    { label: "Certifications", items: ["To be confirmed"] },
    { label: "Training", items: ["To be confirmed"] },
    { label: "Licenses", items: ["To be confirmed"] },
    { label: "Associations", items: ["To be confirmed"] },
    { label: "Speaking Engagements", items: ["To be confirmed"] },
    { label: "Publications", items: ["To be confirmed"] },
    { label: "Awards", items: ["To be confirmed"] },
  ],
} as const;

export const FOUNDER_FOCUS_LINKS: { label: string; href: string }[] = [
  { label: "Executive Advisory", href: "/services#executive-advisory" },
  { label: "Public Health Strategy", href: "/services#public-health-consulting" },
  { label: "Healthcare Strategy", href: "/services#healthcare-strategy" },
  { label: "Emergency Preparedness", href: "/services#emergency-management" },
  { label: "Leadership Facilitation", href: "/services#leadership-facilitation" },
  { label: "Organizational Performance", href: "/services#organizational-performance" },
];

export const FOUNDER_CTA = {
  headline: "Work with Jonathan Portney",
  copy:
    "Contact Portney & Associates to discuss executive advisory, strategic planning, public health, healthcare, emergency preparedness, or government leadership needs.",
  button: { label: "Start a Conversation", href: "/contact" },
} as const;
