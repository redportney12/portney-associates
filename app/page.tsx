import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { organizationSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/json-ld";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { CapabilityCard } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Checklist } from "@/components/ui/checklist";
import { TestimonialCard } from "@/components/ui/testimonial";
import { CtaPanel } from "@/components/ui/cta-panel";
import { Process } from "@/components/sections/process";
import {
  HOME_HERO,
  CAPABILITIES,
  DIFFERENTIATORS,
  SECTORS,
  OUTCOME_CATEGORIES,
  TESTIMONIALS,
  HOME_FINAL_CTA,
  SITE,
} from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Portney & Associates LLC | Government, Public Health and Healthcare Consulting",
  description:
    "Portney & Associates LLC, founded by Jonathan Portney, provides executive advisory and strategic consulting for government, public health, healthcare, and emergency management leaders.",
  path: "/",
  ogImage: "/social/portney-associates-home.png",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-ivory">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(to right, #F7F6F2 1px, transparent 1px)",
            backgroundSize: "80px 100%",
          }}
        />
        <Container className="relative grid gap-12 py-24 md:py-32 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="eyebrow text-gold">{HOME_HERO.eyebrow}</p>
            <div className="hairline my-7" />
            <h1 className="text-display text-ivory">{HOME_HERO.headline}</h1>
            <p className="mt-7 max-w-measure text-lg leading-relaxed text-fog/85">
              {HOME_HERO.supporting}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={HOME_HERO.primaryCta.href} variant="ghost">
                {HOME_HERO.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={HOME_HERO.secondaryCta.href} variant="ghost">
                {HOME_HERO.secondaryCta.label}
              </ButtonLink>
            </div>
            <p className="mt-10 border-t border-ivory/15 pt-6 text-sm text-fog/60">
              {HOME_HERO.trustLine}
            </p>
          </div>

          {/*
            IMAGE SLOT — architectural / civic photography.
            Recommended: /public/images/portney-associates-home-hero.jpg
            Dimensions: 1200 × 1500 (4:5 portrait), AVIF/WebP, ~<200KB.
            Documentary tone: government architecture, civic institution, or
            emergency operations environment. No text baked into the image.
          */}
          <div
            className="relative hidden aspect-[4/5] w-full border border-ivory/15 bg-navy-midnight lg:block"
            role="img"
            aria-label="Architectural photography of a civic institution"
          >
            <div className="absolute inset-0 grid place-items-center text-center text-ivory/30">
              <div>
                <Icon name="landmark" className="mx-auto h-10 w-10" />
                <p className="mt-3 px-6 text-xs uppercase tracking-[0.18em]">
                  Civic / architectural image
                  <br />1200 × 1500
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CREDIBILITY */}
      <section className="bg-ivory">
        <Container className="py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <div className="hairline mb-6" />
              <h2 className="text-h2">
                Experienced guidance where leadership, public service, and complex operations
                intersect.
              </h2>
            </div>
            <p className="self-center text-lg leading-relaxed text-slate-brand">
              Portney &amp; Associates works with leaders navigating consequential decisions,
              organizational complexity, cross-agency coordination, workforce challenges, public
              health priorities, and operational risk. Every engagement is grounded in disciplined
              analysis, practical judgment, and an understanding of how public institutions operate.
            </p>
          </div>
        </Container>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-white">
        <Container className="py-20 md:py-28">
          <SectionHeading eyebrow="Core Capabilities" title="Where the firm concentrates its work" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <CapabilityCard key={c.title} {...c} />
            ))}
          </div>
        </Container>
      </section>

      {/* WHY PORTNEY */}
      <section className="bg-ivory">
        <Container className="py-20 md:py-28">
          <SectionHeading eyebrow="Why Portney & Associates" title="What clients can expect" />
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title} className="flex gap-5">
                <Icon name={d.icon} className="h-8 w-8 flex-none text-gold-dark" />
                <div>
                  <h3 className="text-h4 font-serif text-navy">{d.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-brand">{d.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ENGAGEMENT MODEL */}
      <Process />

      {/* SECTORS */}
      <section className="bg-ivory">
        <Container className="py-20 md:py-28">
          <SectionHeading eyebrow="Sectors Served" title="Organizations responsible for essential public services" />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((s) => (
              <li key={s.title} className="flex items-center gap-4 border border-fog bg-white p-6">
                <Icon name={s.icon} className="h-6 w-6 flex-none text-gold-dark" />
                <span className="font-serif text-lg text-navy">{s.title}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* OUTCOMES */}
      <section className="bg-white">
        <Container className="py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <SectionHeading eyebrow="Outcomes" title="What engagements are designed to produce" />
            <div className="self-center">
              <Checklist items={OUTCOME_CATEGORIES} columns={2} />
              {/* TODO: When verified engagement metrics exist, add a substantiated
                  results block here. Do not publish unverifiable numbers. */}
            </div>
          </div>
        </Container>
      </section>

      {/* FOUNDER */}
      <section className="bg-navy text-ivory">
        <Container className="py-20 md:py-28">
          <div>
            <p className="eyebrow text-gold">The Founder</p>
            <div className="hairline my-6" />
            <h2 className="text-h2 text-ivory">Led by Jonathan Portney</h2>
            <p className="mt-6 max-w-measure text-lg leading-relaxed text-fog/85">
              {SITE.name} was founded by Jonathan &ldquo;JP&rdquo; Portney to provide government
              agencies, healthcare organizations, public health departments, and executive leaders
              with direct access to experienced, practical advisory support.
            </p>
            <div className="mt-8">
              <ButtonLink href="/jonathan-portney" variant="ghost">
                Learn More About Jonathan Portney
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ivory">
        <Container className="py-20 md:py-28">
          <SectionHeading
            eyebrow="Client Perspectives"
            title="Placeholders for verified client testimonials"
            intro="These placeholders are shown for layout only and will be replaced with verified client statements before launch."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} item={t} />
            ))}
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <CtaPanel {...HOME_FINAL_CTA} button={HOME_FINAL_CTA.button} />
    </>
  );
}
