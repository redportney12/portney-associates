"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { NAV_LINKS, PRIMARY_CTA } from "@/content/site";
import { ButtonLink } from "@/components/ui/button";

/** Accessible, keyboard-operable mobile menu. Traps focus and closes on Escape. */
export function MobileNavigation({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <div
        className="absolute inset-0 bg-navy-midnight/60"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-ivory shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-fog px-6 py-4">
          <span className="eyebrow">Menu</span>
          <button
            ref={closeRef}
            onClick={onClose}
            className="grid h-11 w-11 place-items-center text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-label="Close menu"
          >
            <X aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex flex-col px-6 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="border-b border-fog py-4 font-serif text-lg text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto px-6 pb-8">
          <ButtonLink href={PRIMARY_CTA.href} className="w-full">
            {PRIMARY_CTA.label}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
