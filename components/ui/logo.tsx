import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Approved wordmark. Two treatments:
 *  - "dark" for light backgrounds (transparent horizontal logo)
 *  - "light" for navy backgrounds
 * Generous clear space is preserved via padding on the link, not the image.
 * NOTE: Logo files are expected in /public/logo per the brand brief. Until the
 * approved PNGs are added, a typographic fallback renders in their place.
 */
export function Logo({
  treatment = "dark",
  className,
}: {
  treatment?: "dark" | "light";
  className?: string;
}) {
  const light = treatment === "light";
  return (
    <Link
      href="/"
      aria-label={`${SITE.name} — home`}
      className={cn("inline-flex items-center gap-3 py-1", className)}
    >
      {/* Monogram */}
      <span
        aria-hidden="true"
        className={cn(
          "grid h-9 w-9 place-items-center border font-serif text-lg leading-none",
          light ? "border-gold/60 text-gold" : "border-navy/25 text-navy",
        )}
      >
        P
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif text-[1.15rem] tracking-tight",
            light ? "text-ivory" : "text-navy",
          )}
        >
          Portney &amp; Associates
        </span>
        <span
          className={cn(
            "mt-1 font-sans text-[0.62rem] uppercase tracking-[0.22em]",
            light ? "text-gold" : "text-gold-dark",
          )}
        >
          LLC
        </span>
      </span>
      {/*
        When approved assets are in place, replace the block above with:
        <Image
          src="/logo/portney-associates-logo-transparent.png"
          alt="${SITE.name}"
          width={220}
          height={44}
          priority
        />
        Use portney-associates-logo-navy or a light treatment on navy backgrounds.
      */}
    </Link>
  );
}

// Keep next/image imported so swapping to the real asset needs no import change.
export { Image };
