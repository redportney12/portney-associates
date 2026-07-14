import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { profilePageSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/json-ld";
import { Container } from "@/components/ui/container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SectionHeading } from "@/components/ui/section-heading";
import { Checklist } from "@/components/ui/checklist";
import { Timeline } from "@/components/ui/timeline";
import { CtaPanel } from "@/components/ui/cta-panel";
import {
  FOUNDER,
  FOUNDER_PROFILE_PARAGRAPHS,
  AREAS_OF_EXPERIENCE,
  LEADERSHIP_APPROACH,
  PROFESSIONAL_TIMELINE,
  CREDENTIALS,
  FOUNDER_FOCUS_LINKS,
  FOUNDER_CTA,
} from "@/content/founder";

export const metadata: Metadata = pageMetadata({
  title: FOUNDER.seoTitle,
  description: FOUNDER.metaDescription,
  path: "/jonathan-portney",
  ogImage: "/social/jonathan-portney.png",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Jonathan Portney", path: "/jonathan-portney" },
];

export default function JonathanPortneyPage() {
  return (
    <>
      <JsonLd data={profilePageSchema()} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      {/* HERO */}
      <section className="bg-navy text-ivory">
        <Container className="py-16 md:py-24">
          <div className="mb-8 text-ivory/70 [&_a]:text-ivory/70 [&_[aria-current]]:text-gold">
            <Breadcrumb crumbs={crumbs} />
          </div>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="eyebrow text-gold">Founder &amp; Principal</p>
              <div className="hairline my-6" />
              <h1 className="text-display text-ivory">{FOUNDER.name}</h1>
              <p className="mt-4 font-serif text-xl text-gold">{FOUNDER.title}</p>
              <p className="mt-7 max-w-measure text-lg leading-relaxed text-fog/85">
                {FOUNDER.intro}
              </p>
            </div>
            <div className="relative mx-auto aspect-[5/6] w-full max-w-sm overflow-hidden border border-ivory/15 bg-navy-midnight">
              <Image
                src={FOUNDER.imageFile || "/placeholder.svg"}
                alt={FOUNDER.imageAlt}
                fill
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* EXECUTIVE PROFILE */}
      <section className="bg-white">
        <Container className="py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <SectionHeading eyebrow="Executive Profile" title="Direct, senior-level advisory leadership" />
            <div className="max-w-measure space-y-6 text-lg leading-relaxed text-slate-brand">
              {FOUNDER_PROFILE_PARAGRAPHS.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* AREAS OF EXPERIENCE */}
      <section className="bg-ivory">
        <Container className="py-20 md:py-28">
          <SectionHeading eyebrow="Areas of Experience" title="Where his work is concentrated" />
          <div className="mt-14">
            <Checklist items={AREAS_OF_EXPERIENCE} columns={2} />
          </div>
        </Container>
      </section>

      {/* LEADERSHIP APPROACH */}
      <section className="bg-white">
        <Container className="py-20 md:py-28">
          <SectionHeading eyebrow="Leadership Approach" title="How he supports leaders and institutions" />
          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP_APPROACH.map((a) => (
              <div key={a.title} className="border-t-2 border-gold pt-5">
                <h3 className="text-h4 font-serif text-navy">{a.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-brand">{a.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section className="bg-ivory">
        <Container className="py-20 md:py-28">
          <SectionHeading
            eyebrow="Professional Experience"
            title="Career timeline"
            intro="A selection of leadership roles across public health, healthcare, government, and community organizations."
          />
          <div className="mt-14 max-w-3xl">
            <Timeline roles={PROFESSIONAL_TIMELINE} />
          </div>
        </Container>
      </section>

      {/* EDUCATION & CREDENTIALS */}
      <section className="bg-white">
        <Container className="py-20 md:py-28">
          <SectionHeading eyebrow="Education & Credentials" title="Credentials" />
          {CREDENTIALS.active ? (
            <div className="mt-14 grid gap-px overflow-hidden border border-fog bg-fog sm:grid-cols-2 lg:grid-cols-4">
              {CREDENTIALS.groups.map((g) => (
                <div key={g.label} className="bg-white p-6">
                  <h3 className="eyebrow text-gold-dark">{g.label}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-brand">
                    {g.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            /* TODO: Populate content/founder.ts CREDENTIALS and set active = true
               once degrees, certifications, licenses, and affiliations are verified. */
            <p className="mt-8 max-w-measure text-slate-brand">
              Verified education, certifications, licenses, affiliations, speaking engagements, and
              publications will be listed here once confirmed. Unverified entries are intentionally
              not published.
            </p>
          )}
        </Container>
      </section>

      {/* FOCUS AREAS */}
      <section className="bg-ivory">
        <Container className="py-20 md:py-24">
          <SectionHeading eyebrow="Focus Areas" title="Related advisory services" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FOUNDER_FOCUS_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group flex items-center justify-between border border-fog bg-white p-5 transition-colors hover:border-gold/70"
                >
                  <span className="font-serif text-lg text-navy">{l.label}</span>
                  <span aria-hidden="true" className="text-gold transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaPanel
        headline={FOUNDER_CTA.headline}
        copy={FOUNDER_CTA.copy}
        button={FOUNDER_CTA.button}
      />
    </>
  );
}
