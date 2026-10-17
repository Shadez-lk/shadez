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
      "Shadez is an all-in-one digital marketing and growth studio connecting strategy, software engineering, product design, physical architecture, and marketing. Founded in Maruthamunai, Sri Lanka.",
    h1: "Different shades. One business.",
    indexable: true,
    lastModified: "2026-10-17",
    breadcrumbs: [{ name: "Home", path: "/" }],
  },
};

export function getPageByPath(path: string): PageInfo | undefined {
  return PAGES[path];
}

export function getAllIndexablePages(): PageInfo[] {
  return Object.values(PAGES).filter((page) => page.indexable);
}
