import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SITE } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Portney & Associates LLC handles information submitted through this website.",
  path: "/privacy",
  noIndex: true, // placeholder pending legal review
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy" },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" headline="Privacy Policy" crumbs={crumbs} />
      <section className="bg-white">
        <Container className="py-16 md:py-24">
          <div className="mx-auto max-w-measure space-y-8 text-slate-brand">
            <div className="border-l-4 border-gold bg-ivory p-5 text-sm">
              <strong className="text-navy">Draft placeholder.</strong> This draft requires
              professional legal review before publication.
            </div>

            <div>
              <h2 className="text-h3 font-serif text-navy">Information we collect</h2>
              <p className="mt-3 leading-relaxed">
                When you submit the contact form, we collect the information you provide — such as
                your name, title, organization, email address, phone number, and the details of your
                inquiry — solely to respond to your request.
              </p>
            </div>
            <div>
              <h2 className="text-h3 font-serif text-navy">Analytics</h2>
              <p className="mt-3 leading-relaxed">
                We may use privacy-friendly, aggregate analytics to understand general site usage.
                Any analytics used are described here once implemented and are configured to avoid
                collecting personally identifiable information where possible.
              </p>
            </div>
            <div>
              <h2 className="text-h3 font-serif text-navy">Cookies</h2>
              <p className="mt-3 leading-relaxed">
                This site aims to minimize cookies. If cookies are used, their purpose and duration
                will be described in this section.
              </p>
            </div>
            <div>
              <h2 className="text-h3 font-serif text-navy">Data retention &amp; security</h2>
              <p className="mt-3 leading-relaxed">
                Inquiry information is retained only as long as necessary to respond and maintain
                appropriate business records, and is handled with reasonable safeguards.
              </p>
            </div>
            <div>
              <h2 className="text-h3 font-serif text-navy">Contact for privacy inquiries</h2>
              <p className="mt-3 leading-relaxed">
                Questions about this policy may be directed to{" "}
                <a href={`mailto:${SITE.contact.email}`} className="link-underline">{SITE.contact.email}</a>.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
