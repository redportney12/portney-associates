import { Container } from "@/components/ui/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import type { Crumb } from "@/lib/schema";

/** Interior page hero — navy band, editorial heading, optional breadcrumb. */
export function PageHero({
  eyebrow,
  headline,
  supporting,
  crumbs,
  as = "h1",
}: {
  eyebrow?: string;
  headline: string;
  supporting?: string;
  crumbs?: Crumb[];
  as?: "h1" | "h2";
}) {
  const Heading = as;
  return (
    <section className="relative overflow-hidden bg-navy text-ivory">
      {/* Subtle architectural hairline grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F7F6F2 1px, transparent 1px)",
          backgroundSize: "72px 100%",
        }}
      />
      <Container className="relative py-20 md:py-28">
        {crumbs ? (
          <div className="mb-8 text-ivory/70 [&_a]:text-ivory/70 [&_[aria-current]]:text-gold">
            <Breadcrumb crumbs={crumbs} />
          </div>
        ) : null}
        {eyebrow ? <p className="eyebrow mb-5 text-gold">{eyebrow}</p> : null}
        <div className="hairline mb-7" />
        <Heading className="max-w-4xl text-h1 text-ivory">{headline}</Heading>
        {supporting ? (
          <p className="mt-6 max-w-measure text-lg text-fog/85">{supporting}</p>
        ) : null}
      </Container>
    </section>
  );
}
