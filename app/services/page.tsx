import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Checklist } from "@/components/ui/checklist";
import { CtaPanel } from "@/components/ui/cta-panel";
import {
  SERVICES_HERO,
  SERVICES,
  ENGAGEMENT_FORMATS,
  PROCUREMENT,
} from "@/content/services";
import { HOME_FINAL_CTA } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Government and Public Health Consulting Services",
  description:
    "Explore executive advisory, public health strategy, healthcare consulting, emergency preparedness, strategic planning, and leadership facilitation services.",
  path: "/services",
  ogImage: "/social/portney-associates-services.png",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow={SERVICES_HERO.eyebrow}
        headline={SERVICES_HERO.headline}
        supporting={SERVICES_HERO.supporting}
        crumbs={crumbs}
      />

      {/* SERVICES */}
      <div className="bg-white">
        {SERVICES.map((service, i) => (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-24 ${i % 2 === 1 ? "bg-ivory" : "bg-white"}`}
          >
            <Container className="py-16 md:py-20">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                <div>
                  <span className="font-serif text-5xl text-gold">{service.number}</span>
                  <h2 className="mt-4 text-h2">{service.title}</h2>
                  <p className="mt-5 max-w-measure leading-relaxed text-slate-brand">
                    {service.overview}
                  </p>
                </div>
                <div className="grid gap-10 sm:grid-cols-2">
                  <div>
                    <h3 className="eyebrow text-gold-dark">Possible Deliverables</h3>
                    <Checklist className="mt-5" items={service.deliverables} />
                  </div>
                  <div>
                    <h3 className="eyebrow text-gold-dark">Expected Outcomes</h3>
                    <Checklist className="mt-5" items={service.outcomes} />
                  </div>
                </div>
              </div>
            </Container>
          </section>
        ))}
      </div>

      {/* ENGAGEMENT FORMATS */}
      <section className="bg-navy text-ivory">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow text-gold">Engagement Formats</p>
            <div className="hairline my-6" />
            <h2 className="text-h2 text-ivory">Flexible structures to match the work</h2>
          </div>
          <ul className="mt-12 grid gap-px overflow-hidden border border-ivory/15 bg-ivory/15 sm:grid-cols-2 lg:grid-cols-3">
            {ENGAGEMENT_FORMATS.map((f) => (
              <li key={f} className="bg-navy p-7 font-serif text-lg text-ivory">
                {f}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* PROCUREMENT */}
      <section className="bg-ivory">
        <Container className="py-20 md:py-28">
          <SectionHeading eyebrow="Procurement & Contracting" title={PROCUREMENT.headline} intro={PROCUREMENT.copy} />
          <div className="mt-14 overflow-hidden border border-fog bg-white">
            <dl className="grid sm:grid-cols-2 lg:grid-cols-3">
              {PROCUREMENT.items.map((item, idx) => (
                <div key={item.label} className={`border-fog p-6 ${idx % 3 !== 2 ? "lg:border-r" : ""} ${idx % 2 === 0 ? "sm:border-r lg:border-r" : ""} border-b`}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-dark">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-slate-brand">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-6 text-sm italic text-slate-brand/80">
            {/* All procurement values are editable placeholders — none are fabricated. */}
            Registration numbers, certifications, and insurance details will be published once
            confirmed. A capability statement and W-9 are available on request.
          </p>
        </Container>
      </section>

      <CtaPanel {...HOME_FINAL_CTA} button={HOME_FINAL_CTA.button} />
    </>
  );
}
