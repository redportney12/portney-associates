"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { NAV_LINKS, PRIMARY_CTA } from "@/content/site";
import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-300 ease-editorial",
        scrolled
          ? "border-fog bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/80"
          : "border-transparent bg-ivory",
      )}
    >
      <Container className="flex items-center justify-between py-3">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "font-sans text-sm font-medium tracking-wide text-slate-brand transition-colors hover:text-navy",
                  active && "text-navy",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <ButtonLink href={PRIMARY_CTA.href} className="px-5 py-2.5">
            {PRIMARY_CTA.label}
          </ButtonLink>
        </nav>

        <button
          onClick={() => setMenuOpen(true)}
          className="grid h-11 w-11 place-items-center text-navy md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <Menu aria-hidden="true" className="h-6 w-6" />
        </button>
      </Container>

      <MobileNavigation open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
