import type { Service } from "@/types";

export const SERVICES_HERO = {
  eyebrow: "Services",
  headline: "Advisory Services for Public Institutions and Healthcare Leaders",
  supporting:
    "Every engagement is tailored to the client's operating environment, leadership needs, institutional constraints, and desired outcomes.",
} as const;

export const SERVICES: Service[] = [
  {
    slug: "executive-advisory",
    number: "01",
    title: "Executive Advisory",
    overview:
      "Confidential, objective support for executives managing complex decisions, organizational challenges, competing priorities, leadership transitions, or high-stakes initiatives.",
    deliverables: [
      "Executive decision briefs",
      "Strategic options analysis",
      "Leadership meeting facilitation",
      "Priority-setting frameworks",
      "Executive communications",
      "Implementation roadmaps",
      "Risk and stakeholder assessments",
    ],
    outcomes: [
      "Clearer decisions",
      "Better alignment",
      "Stronger accountability",
      "More disciplined execution",
    ],
  },
  {
    slug: "strategic-planning",
    number: "02",
    title: "Strategic Planning",
    overview:
      "Development of practical strategic plans connecting mission, priorities, resources, leadership responsibilities, and measurable implementation steps.",
    deliverables: [
      "Environmental assessment",
      "Stakeholder interviews",
      "Strategic priorities",
      "Goals and objectives",
      "Implementation roadmap",
      "Performance measures",
      "Governance structure",
      "Executive presentation",
    ],
    outcomes: [
      "Shared direction",
      "Defined priorities",
      "Realistic implementation",
      "Improved organizational alignment",
    ],
  },
  {
    slug: "public-health-consulting",
    number: "03",
    title: "Public Health Consulting",
    overview:
      "Strategic and operational support for public health departments, regional collaboratives, workforce initiatives, leadership teams, and cross-jurisdictional programs.",
    deliverables: [
      "Regional coordination strategies",
      "Workforce development plans",
      "Leadership convenings",
      "Program assessments",
      "Public health initiative design",
      "Stakeholder engagement",
      "Implementation support",
      "Executive summaries and reports",
    ],
    outcomes: [
      "Improved coordination",
      "Stronger partnerships",
      "Actionable priorities",
      "Better-supported leadership",
    ],
  },
  {
    slug: "emergency-management",
    number: "04",
    title: "Emergency Management and Preparedness",
    overview:
      "Preparedness, coordination, facilitation, and improvement support for organizations responsible for emergency response, continuity, resilience, and public safety.",
    deliverables: [
      "Preparedness assessments",
      "Workshop facilitation",
      "Executive tabletop exercises",
      "After-action reviews",
      "Improvement plans",
      "Coordination frameworks",
      "Leadership briefings",
      "Emergency communication planning",
    ],
    outcomes: [
      "Improved readiness",
      "Clearer roles",
      "Stronger coordination",
      "Actionable corrective priorities",
    ],
  },
  {
    slug: "healthcare-strategy",
    number: "05",
    title: "Healthcare Strategy",
    overview:
      "Strategic support for healthcare organizations, public-private partnerships, executive teams, and programs operating across healthcare and public health systems.",
    deliverables: [
      "Strategic assessments",
      "Partnership development",
      "Program planning",
      "Operational reviews",
      "Stakeholder engagement",
      "Executive facilitation",
      "Implementation roadmaps",
      "Healthcare-public health alignment strategies",
    ],
    outcomes: [
      "Better strategic alignment",
      "Stronger partnerships",
      "Clearer operating models",
      "More coordinated implementation",
    ],
  },
  {
    slug: "organizational-performance",
    number: "06",
    title: "Organizational Performance",
    overview:
      "Assessment and improvement support for organizations seeking greater clarity, accountability, coordination, or operational effectiveness.",
    deliverables: [
      "Organizational assessments",
      "Process reviews",
      "Roles and responsibility frameworks",
      "Priority dashboards",
      "Accountability systems",
      "Meeting redesign",
      "Governance recommendations",
      "Implementation tracking tools",
    ],
    outcomes: [
      "Improved execution",
      "Reduced ambiguity",
      "Better accountability",
      "More effective leadership structures",
    ],
  },
  {
    slug: "leadership-facilitation",
    number: "07",
    title: "Leadership Development and Facilitation",
    overview:
      "Executive-level facilitation and leadership support for teams, boards, departments, regional groups, and cross-sector partnerships.",
    deliverables: [
      "Executive retreats",
      "Leadership workshops",
      "Strategic convenings",
      "Board facilitation",
      "Regional roundtables",
      "Conflict-sensitive facilitation",
      "Leadership development sessions",
      "Decision-focused meeting design",
    ],
    outcomes: [
      "Stronger alignment",
      "More productive meetings",
      "Better decisions",
      "Increased leadership cohesion",
    ],
  },
];

export const ENGAGEMENT_FORMATS: string[] = [
  "Short-term executive advisory",
  "Project-based consulting",
  "Strategic planning engagements",
  "Facilitation and convening support",
  "Retained advisory relationships",
  "Subcontracting and government partnership support",
];

export const PROCUREMENT = {
  headline: "Designed to support public-sector and institutional contracting",
  copy:
    "Portney & Associates can support clearly scoped consulting engagements, project-based work, facilitation assignments, strategic planning initiatives, organizational assessments, and executive advisory needs. Statements of work may be tailored to agency requirements, timelines, deliverables, and procurement structures.",
  // Editable placeholders — do not invent any of these values.
  items: [
    { label: "UEI", value: "To be provided" },
    { label: "SAM Registration", value: "To be provided" },
    { label: "Small-Business Certifications", value: "To be provided" },
    { label: "State Vendor Number", value: "To be provided" },
    { label: "Insurance", value: "To be provided" },
    { label: "NAICS Codes", value: "To be provided" },
    { label: "Capability Statement", value: "Available on request" },
    { label: "W-9", value: "Available on request" },
    { label: "Geographic Service Area", value: "California and nationwide" },
  ],
} as const;
