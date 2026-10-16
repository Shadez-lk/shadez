/**
 * Single Source of Truth for Page Registry
 * Adheres strictly to SEO/SEO-TECHNICAL.md §1
 */

export interface PageInfo {
  path: string;
  title: string;
  description: string;
  h1: string;
  indexable: boolean;
  lastModified: string;
  breadcrumbs: Array<{ name: string; path: string }>;
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://shadez.lk");

export const PAGES: Record<string, PageInfo> = {
  "/": {
    path: "/",
    title: "shadez — Different shades. One business.",
    description:
      "Shadez is a multidisciplinary technology, product design, and physical architecture studio founded in Galle, Sri Lanka. Connecting strategy, software, spatial design, and marketing.",
    h1: "Different shades. One business.",
    indexable: true,
    lastModified: "2026-10-16",
    breadcrumbs: [{ name: "Home", path: "/" }],
  },
};

export function getPageByPath(path: string): PageInfo | undefined {
  return PAGES[path];
}

export function getAllIndexablePages(): PageInfo[] {
  return Object.values(PAGES).filter((page) => page.indexable);
}

