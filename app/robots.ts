import type { MetadataRoute } from "next";
import { absoluteUrl, siteUrl } from "@/lib/utils";

/**
 * Allows crawling of all public pages (CSS/JS/images included).
 * Only private/utility paths are disallowed. Staging environments should be
 * protected at the platform level (e.g. Vercel deployment protection) rather
 * than relying on robots alone.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${siteUrl()}/sitemap.xml`,
    host: absoluteUrl("/"),
  };
}
