import type { Testimonial } from "@/types";

/**
 * Renders placeholder OR verified testimonials. Placeholders are clearly marked
 * and never presented as real client statements.
 */
export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="flex h-full flex-col border border-fog bg-white p-8">
      {!item.verified ? (
        <span className="mb-4 inline-block w-max border border-gold/50 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-gold-dark">
          Placeholder — not a client statement
        </span>
      ) : null}
      <blockquote className="font-serif text-lg leading-relaxed text-navy">
        <span aria-hidden="true" className="mr-1 text-gold">&ldquo;</span>
        {item.quote}
      </blockquote>
      <figcaption className="mt-6 text-sm text-slate-brand">
        {item.attribution}
      </figcaption>
    </figure>
  );
}
