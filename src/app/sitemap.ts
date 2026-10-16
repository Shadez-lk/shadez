import { MetadataRoute } from "next";
import { SITE_URL, getAllIndexablePages } from "@/lib/pages";

/**
 * Dynamic XML Sitemap
 * Adheres strictly to SEO/SEO-TECHNICAL.md §7
 * Automatically generated from centralized page registry
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = getAllIndexablePages();

  return pages.map((page) => ({
    url: page.path === "/" ? SITE_URL : `${SITE_URL}${page.path}`,
    lastModified: new Date(page.lastModified),
  }));
}

