/** Company (About) page content. Company narrative only — the founder profile
 *  lives on /jonathan-portney and is not duplicated here. */

export const ABOUT_HERO = {
  eyebrow: "About the Firm",
  headline:
    "Experienced leadership. Practical judgment. Public-service perspective.",
  supporting:
    "Portney & Associates was founded to provide public institutions and healthcare organizations with direct access to experienced executive-level guidance.",
} as const;

export const COMPANY_STORY: string[] = [
  "Portney & Associates was established to help leaders address complex problems that do not fit neatly within a single department, discipline, or standard consulting framework.",
  "The firm brings together experience in public health, government leadership, emergency management, healthcare strategy, executive facilitation, regional coordination, workforce planning, and organizational improvement.",
];

export const COMPANY_PRINCIPLE = {
  lead: "The firm's approach is based on a simple principle:",
  statement: "Good strategy must account for how institutions actually operate.",
  follow:
    "Recommendations must be credible, practical, politically aware, operationally realistic, and useful to the people responsible for implementation.",
} as const;

export const FOUNDER_CONNECTION =
  "Portney & Associates LLC was founded by Jonathan Portney, a public-sector and public health leader whose work spans government leadership, public health strategy, healthcare coordination, emergency preparedness, workforce development, and executive facilitation.";

export const LEADERSHIP_PHILOSOPHY = {
  headline: "Clarity is a leadership responsibility.",
  paragraphs: [
    "Complex organizations rarely suffer from a lack of information. More often, they struggle with unclear priorities, fragmented accountability, competing expectations, and difficulty turning decisions into action.",
    "Portney & Associates helps leadership teams identify what matters most, clarify ownership, establish practical direction, and move forward with greater confidence.",
  ],
} as const;

export const VALUES: { title: string; description: string }[] = [
  {
    title: "Integrity",
    description:
      "Provide candid, objective advice grounded in facts and professional judgment.",
  },
  {
    title: "Service",
    description:
      "Recognize the responsibility carried by institutions that serve communities and protect public well-being.",
  },
  {
    title: "Clarity",
    description:
      "Translate complexity into understandable priorities, decisions, and actions.",
  },
  {
    title: "Accountability",
    description:
      "Create realistic structures connecting strategy with ownership and execution.",
  },
  {
    title: "Partnership",
    description:
      "Work collaboratively while maintaining the independence needed to provide honest guidance.",
  },
];

export const ABOUT_DIFFERENTIATORS: string[] = [
  "Direct access to senior leadership",
  "Specialized public-sector and healthcare knowledge",
  "Practical recommendations",
  "Understanding of institutional constraints",
  "High-quality facilitation",
  "Discreet executive support",
  "Strong written deliverables",
  "Cross-sector perspective",
  "Flexible engagement structure",
];

// Inactive until verified. Render nothing publicly while active === false.
export const FUTURE_CREDENTIALS = {
  active: false,
  items: [
    "Certifications",
    "Professional affiliations",
    "Vendor registrations",
    "Insurance",
    "Education",
    "Awards",
    "Speaking",
    "Publications",
  ],
} as const;
