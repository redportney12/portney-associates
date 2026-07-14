import { absoluteUrl, siteUrl } from "@/lib/utils";
import { SITE } from "@/content/site";
import { FOUNDER } from "@/content/founder";

const ORG_ID = `${siteUrl()}/#organization`;
const PERSON_ID = `${siteUrl()}/jonathan-portney#jonathan-portney`;

/** Organization schema for the homepage. Only verified sameAs URLs are included. */
export function organizationSchema() {
  const sameAs = [SITE.contact.linkedinCompany as string].filter(
    (u) => u && u !== "#",
  ) as string[];

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: siteUrl(),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/logo/portney-associates-logo-transparent.png"),
    },
    founder: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE.founder,
    },
    description: SITE.footerDescription,
    ...(sameAs.length ? { sameAs } : {}),
  };
}

/** ProfilePage + Person schema for /jonathan-portney. */
export function profilePageSchema() {
  const sameAs = [SITE.contact.linkedinPersonal as string].filter(
    (u) => u && u !== "#",
  ) as string[];

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl()}/jonathan-portney#profilepage`,
    url: absoluteUrl("/jonathan-portney"),
    name: FOUNDER.seoTitle,
    mainEntity: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: FOUNDER.name,
      alternateName: ["JP Portney", "J. Portney", "J Portney"],
      givenName: "Jonathan",
      familyName: "Portney",
      jobTitle: "Founder and Principal",
      url: absoluteUrl("/jonathan-portney"),
      image: {
        "@type": "ImageObject",
        url: absoluteUrl(FOUNDER.imageFile),
      },
      worksFor: {
        "@type": "Organization",
        "@id": ORG_ID,
        name: SITE.name,
        url: siteUrl(),
      },
      knowsAbout: [
        "Executive Advisory",
        "Government Leadership",
        "Public Health Strategy",
        "Healthcare Strategy",
        "Emergency Management",
        "Strategic Planning",
        "Leadership Facilitation",
        "Workforce Development",
      ],
      ...(sameAs.length ? { sameAs } : {}),
    },
  };
}

export interface Crumb {
  name: string;
  path: string;
}

/** BreadcrumbList schema. */
export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

/** Safe JSON-LD serialization guarding against XSS via </script> and line separators. */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
