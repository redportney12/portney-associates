import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Checklist } from "@/components/ui/checklist";
import { CtaPanel } from "@/components/ui/cta-panel";
import {
  ABOUT_HERO,
  COMPANY_STORY,
  COMPANY_PRINCIPLE,
  FOUNDER_CONNECTION,
  LEADERSHIP_PHILOSOPHY,
  VALUES,
  ABOUT_DIFFERENTIATORS,
  FUTURE_CREDENTIALS,
} from "@/content/about";
import { HOME_FINAL_CTA } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "About Portney & Associates LLC | Executive Advisory Firm",
  description:
    "Learn about Portney & Associates LLC, a specialized advisory firm founded by Jonathan Portney to support public health, healthcare, emergency management, and government leaders.",
  path: "/about",
  ogImage: "/social/portney-associates-about.png",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow={ABOUT_HERO.eyebrow}
        headline={ABOUT_HERO.headline}
        supporting={ABOUT_HERO.supporting}
        crumbs={crumbs}
      />

      {/* STORY */}
      <section className="bg-white">
        <Container className="py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading eyebrow="Our Story" title="Founded to address problems that cross boundaries" />
            <div className="max-w-measure space-y-6 text-lg leading-relaxed text-slate-brand">
              {COMPANY_STORY.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
              <div className="border-l-4 border-gold bg-ivory p-6">
                <p className="text-slate-brand">{COMPANY_PRINCIPLE.lead}</p>
                <p className="mt-2 font-serif text-xl text-navy">
                  {COMPANY_PRINCIPLE.statement}
                </p>
                <p className="mt-3 text-slate-brand">{COMPANY_PRINCIPLE.follow}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FOUNDER CONNECTION */}
      <section className="bg-ivory">
        <Container className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="hairline mx-auto mb-6" />
            <p className="font-serif text-xl leading-relaxed text-navy">
              {FOUNDER_CONNECTION}
            </p>
            <Link href="/jonathan-portney" className="mt-6 inline-flex items-center gap-1 font-semibold text-gold-dark link-underline">
              About Jonathan Portney →
            </Link>
          </div>
        </Container>
      </section>

      {/* LEADERSHIP PHILOSOPHY */}
      <section className="bg-navy text-ivory">
        <Container className="py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="eyebrow text-gold">Leadership Philosophy</p>
              <div className="hairline my-6" />
              <h2 className="text-h2 text-ivory">{LEADERSHIP_PHILOSOPHY.headline}</h2>
            </div>
            <div className="max-w-measure space-y-6 self-center text-lg leading-relaxed text-fog/85">
              {LEADERSHIP_PHILOSOPHY.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* VALUES */}
      <section className="bg-white">
        <Container className="py-20 md:py-28">
          <SectionHeading eyebrow="Values" title="Principles that guide every engagement" />
          <div className="mt-14 grid gap-px overflow-hidden border border-fog bg-fog md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white p-8">
                <h3 className="text-h4 font-serif text-navy">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-brand">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="bg-ivory">
        <Container className="py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading eyebrow="Why Clients Engage Us" title="Why clients engage Portney & Associates" />
            <div className="self-center">
              <Checklist items={ABOUT_DIFFERENTIATORS} columns={2} />
            </div>
          </div>

          {/* Future credentials — hidden until verified */}
          {FUTURE_CREDENTIALS.active ? (
            <div className="mt-16 border border-fog bg-white p-8">
              <h3 className="text-h4 font-serif text-navy">Credentials &amp; Recognition</h3>
              <Checklist className="mt-5" items={[...FUTURE_CREDENTIALS.items]} columns={2} />
            </div>
          ) : (
            /* TODO: Set FUTURE_CREDENTIALS.active = true once certifications,
               affiliations, registrations, and insurance are verified. */
            null
          )}
        </Container>
      </section>

      <CtaPanel {...HOME_FINAL_CTA} button={HOME_FINAL_CTA.button} />
    </>
  );
}
