import type { Metadata } from "next";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/forms/contact-form";
import { CONTACT_HERO, REASSURANCE } from "@/content/contact";
import { SITE } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact Portney & Associates LLC",
  description:
    "Contact Jonathan Portney and Portney & Associates to discuss executive advisory, public health, healthcare, emergency management, or government consulting needs.",
  path: "/contact",
  ogImage: "/social/portney-associates-contact.png",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        eyebrow={CONTACT_HERO.eyebrow}
        headline={CONTACT_HERO.headline}
        supporting={CONTACT_HERO.supporting}
        crumbs={crumbs}
      />

      <section className="bg-ivory">
        <Container className="py-20 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20">
            {/* FORM */}
            <div>
              <h2 className="sr-only">Contact form</h2>
              <ContactForm />
            </div>

            {/* SIDEBAR */}
            <aside className="space-y-10">
              <div>
                <h2 className="eyebrow text-gold-dark">Direct Contact</h2>
                <ul className="mt-5 space-y-4 text-slate-brand">
                  <li className="flex items-center gap-3">
                    <Mail aria-hidden="true" className="h-5 w-5 flex-none text-gold-dark" />
                    <a href={`mailto:${SITE.contact.email}`} className="link-underline break-all">
                      {SITE.contact.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone aria-hidden="true" className="h-5 w-5 flex-none text-gold-dark" />
                    <a href={`tel:${SITE.contact.phone.replace(/[^\d+]/g, "")}`} className="link-underline">
                      {SITE.contact.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Linkedin aria-hidden="true" className="h-5 w-5 flex-none text-gold-dark" />
                    <a href={SITE.contact.linkedinPersonal} className="link-underline" target="_blank" rel="noreferrer noopener">
                      LinkedIn
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-gold-dark" />
                    <span>{SITE.contact.serviceArea}</span>
                  </li>
                </ul>
                {/* A residential address is intentionally not published. */}
              </div>

              <div className="border border-fog bg-white p-7">
                <div className="hairline mb-5" />
                <h2 className="text-h4 font-serif text-navy">{REASSURANCE.headline}</h2>
                <p className="mt-3 leading-relaxed text-slate-brand">{REASSURANCE.copy}</p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
