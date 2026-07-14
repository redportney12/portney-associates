/** Small, dependency-free helpers. */

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Canonical site origin. Reads env, falls back to production display domain. */
export function siteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.portney-associates.com";
  return raw.replace(/\/+$/, "");
}

/** Build an absolute URL for a site-relative path. */
export function absoluteUrl(path = "/"): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl()}${p === "/" ? "" : p}`;
}

export const CURRENT_YEAR = new Date().getFullYear();
