import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/** Gold-marked list — used for deliverables, outcomes, differentiators. */
export function Checklist({
  items,
  columns = 1,
  className,
}: {
  items: string[];
  columns?: 1 | 2;
  className?: string;
}) {
  return (
    <ul className={cn("space-y-3", columns === 2 && "sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3 sm:space-y-0", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[0.98rem] text-slate-brand">
          <Check aria-hidden="true" className="mt-1 h-4 w-4 flex-none text-gold-dark" strokeWidth={2.5} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
