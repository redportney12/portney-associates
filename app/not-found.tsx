import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="bg-navy text-ivory">
      <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow text-gold">Error 404</p>
        <div className="hairline my-6" />
        <h1 className="text-h1 text-ivory">This page could not be found.</h1>
        <p className="mt-5 max-w-measure text-lg text-fog/80">
          The page you are looking for may have moved or no longer exists. You can return to the
          homepage or explore the firm&rsquo;s services.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/" variant="ghost">Return Home</ButtonLink>
          <ButtonLink href="/services" variant="ghost">Explore Services</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
