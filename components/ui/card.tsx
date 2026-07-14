import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import type { IconName } from "@/lib/icons";
import { cn } from "@/lib/utils";

/** Capability / feature card. Restrained: hairline border, gold accent on hover. */
export function CapabilityCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href?: string;
  icon?: IconName;
}) {
  const inner = (
    <div
      className={cn(
        "group flex h-full flex-col border border-fog bg-white p-7 transition-colors duration-200 ease-editorial",
        href && "hover:border-gold/70",
      )}
    >
      {icon ? (
        <Icon name={icon} className="mb-5 h-7 w-7 text-gold-dark" />
      ) : null}
      <h3 className="text-h4 font-serif text-navy">{title}</h3>
      <p className="mt-3 text-[0.98rem] leading-relaxed text-slate-brand">{description}</p>
      {href ? (
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold-dark">
          Learn more
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
        </span>
      ) : null}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
        {inner}
      </Link>
    );
  }
  return inner;
}
