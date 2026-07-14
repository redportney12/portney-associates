import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SITE } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility Statement",
  description: "Portney & Associates LLC is committed to accessible, inclusive digital experiences.",
  path: "/accessibility",
  noIndex: true, // placeholder pending review
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Accessibility Statement", path: "/accessibility" },
];

export default function AccessibilityPage() {
  return (
    <>
      <PageHero eyebrow="Commitment" headline="Accessibility Statement" crumbs={crumbs} />
      <section className="bg-white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-measure space-y-8 text-slate-brand">
            <div className="border-l-4 border-gold bg-ivory p-5 text-sm">
              <strong className="text-navy">Draft placeholder.</strong> This draft requires
              professional review before publication.
            </div>
            <p className="leading-relaxed">
              {SITE.name} is committed to providing a website that is accessible to the widest
              possible audience. We aim to conform substantially with the Web Content Accessibility
              Guidelines (WCAG) 2.2 at Level AA.
            </p>
            <div>
              <h2 className="text-h3 font-serif text-navy">Measures we take</h2>
              <p className="mt-3 leading-relaxed">
                Semantic HTML, keyboard-operable navigation, visible focus states, sufficient color
                contrast, descriptive alternative text, accessible form labels and error messaging,
                and support for reduced-motion preferences.
              </p>
            </div>
            <div>
              <h2 className="text-h3 font-serif text-navy">Feedback</h2>
              <p className="mt-3 leading-relaxed">
                If you encounter an accessibility barrier, please contact us at{" "}
                <a href={`mailto:${SITE.contact.email}`} className="link-underline">{SITE.contact.email}</a>{" "}
                so we can address it.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
