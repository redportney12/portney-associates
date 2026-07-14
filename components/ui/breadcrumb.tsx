import Link from "next/link";
import type { Crumb } from "@/lib/schema";

export function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-brand">
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-navy">
                  {c.name}
                </span>
              ) : (
                <Link href={c.path} className="link-underline">
                  {c.name}
                </Link>
              )}
              {!last ? <span aria-hidden="true" className="text-gold">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
