import Link from "next/link";
import { Linkedin } from "lucide-react";
import { SITE, NAV_LINKS } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { CURRENT_YEAR } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo treatment="light" />
            <p className="mt-5 text-sm leading-relaxed text-fog/75">
              {SITE.footerDescription}
            </p>
            <p className="mt-4 text-sm text-fog/60">
              Founded by{" "}
              <Link href="/jonathan-portney" className="text-gold link-underline">
                Jonathan Portney
              </Link>
              .
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow text-gold">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-fog/80 hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-gold">Firm</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-fog/80 hover:text-ivory">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-fog/80 hover:text-ivory">
                  Accessibility Statement
                </Link>
              </li>
              <li>
                <a
                  href={SITE.contact.linkedinCompany}
                  className="inline-flex items-center gap-2 text-fog/80 hover:text-ivory"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Linkedin aria-hidden="true" className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-ivory/15 pt-6 text-xs text-fog/55">
          <p>
            &copy; {CURRENT_YEAR} {SITE.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
