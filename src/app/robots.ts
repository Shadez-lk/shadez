import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/pages";

/**
 * Dynamic robots.txt
 * Adheres strictly to SEO/SEO-TECHNICAL.md §6 & §7
 * Disallows all crawling on preview/staging environments
 */
export default function robots(): MetadataRoute.Robots {
  const isPreview =
    process.env.VERCEL_ENV === "preview" ||
    process.env.SITE_ENV === "staging" ||
    process.env.SITE_ENV === "preview";

  if (isPreview) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

