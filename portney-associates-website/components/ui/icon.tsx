import { icons, type IconName } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function Icon({
  name,
  className,
  strokeWidth = 1.5,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = icons[name];
  return <Cmp aria-hidden="true" strokeWidth={strokeWidth} className={cn("h-6 w-6", className)} />;
}
