import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Capability {
  title: string;
  description: string;
  href: string;
  icon: keyof typeof import("@/lib/icons").icons;
}

export interface Differentiator {
  title: string;
  description: string;
  icon: keyof typeof import("@/lib/icons").icons;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  number: string;
  title: string;
  overview: string;
  deliverables: string[];
  outcomes: string[];
}

export interface TimelineRole {
  organization: string;
  position: string;
  dates: string;
  location: string;
  scope: string;
  verified: boolean;
}

export interface Testimonial {
  quote: string;
  attribution: string;
  verified: boolean;
}

export type { LucideIcon };
