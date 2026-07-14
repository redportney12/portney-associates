import type { Metadata } from "next";
import { absoluteUrl, siteUrl } from "@/lib/utils";
import { SITE } from "@/content/site";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  /** Custom OG image path (defaults to the page-specific social image). */
  ogImage?: string;
  noIndex?: boolean;
}

/** Per-page metadata builder — unique title, description, canonical, OG/Twitter. */
export function pageMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const image = ogImage ?? "/social/portney-associates-default.png";
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title,
      description,
      url,
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: `${SITE.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

/** Root metadata shared via metadataBase + template. */
export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: `${SITE.name} | Government, Public Health and Healthcare Consulting`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.footerDescription,
  applicationName: SITE.name,
  authors: [{ name: SITE.founder }],
  creator: SITE.name,
  icons: {
    icon: "/logo/portney-associates-favicon.png",
    shortcut: "/logo/portney-associates-favicon.png",
    apple: "/logo/portney-associates-favicon.png",
  },
  formatDetection: { telephone: false },
};
