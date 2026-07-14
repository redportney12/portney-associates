// Central, restrained icon registry. Lucide is used only for small functional
// marks (capability labels, list markers), never as decorative grids.
import {
  Compass,
  ShieldCheck,
  HeartPulse,
  Siren,
  Gauge,
  Users,
  Landmark,
  Building2,
  GraduationCap,
  HandHeart,
  Scale,
  Target,
  ClipboardCheck,
  MessageSquareText,
} from "lucide-react";

export const icons = {
  compass: Compass,
  shield: ShieldCheck,
  health: HeartPulse,
  siren: Siren,
  gauge: Gauge,
  users: Users,
  landmark: Landmark,
  building: Building2,
  education: GraduationCap,
  nonprofit: HandHeart,
  scale: Scale,
  target: Target,
  clipboard: ClipboardCheck,
  message: MessageSquareText,
} as const;

export type IconName = keyof typeof icons;
