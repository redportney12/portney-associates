import type { TimelineRole } from "@/types";

/** Editable professional timeline. Unverified roles are visibly flagged. */
export function Timeline({ roles }: { roles: TimelineRole[] }) {
  return (
    <ol className="relative space-y-10 border-l border-fog pl-8">
      {roles.map((role, i) => (
        <li key={i} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full border-2 border-gold bg-ivory"
          />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="text-h4 font-serif text-navy">{role.position}</h3>
            <span className="text-sm text-slate-brand">{role.dates}</span>
          </div>
          <p className="mt-1 text-sm font-semibold text-gold-dark">
            {role.organization} · {role.location}
          </p>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-brand">
            {role.scope}
          </p>
          {!role.verified ? (
            <p className="mt-2 text-xs italic text-slate-brand/70">
              Placeholder — confirm details before publishing.
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
