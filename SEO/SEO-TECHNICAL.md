# SEO-TECHNICAL.md — Technical SEO Rules

> Part of the SEO Website Kit. Follow with the other files in this folder. Examples use Next.js (App Router); apply the same rule in any stack.

## 1. Core rules

- Every public page has: one URL, a unique title, a unique meta description, a self-referencing canonical, one H1, and real crawlable links to it.
- All of these are in the server HTML (see RENDERING.md).
- Keep one list of all pages (a page registry, e.g. `src/lib/pages.ts`) with each page's URL, title, description and indexable flag. Metadata, the sitemap and breadcrumbs all read from this one list, so they can never disagree.

## 2. URLs

- Lowercase, words separated by hyphens: `/services/web-design/`
- Short and descriptive. No IDs, dates, file extensions, spaces, underscores or random strings.
- Child pages sit under their parent: `/services/<service-name>/`, `/blog/<post-name>/`
- One trailing-slash style for the whole site (set `trailingSlash` in `next.config` and use it everywhere).
- One preferred domain (with or without `www`, always HTTPS); the other version redirects permanently.
- Never change a live URL without a permanent redirect (see §8).

## 3. Titles and meta descriptions

- **Title:** unique per page, describes the page's main topic, about 50–60 characters. Add the brand name (e.g. `Topic | Brand`) and the location where it helps. The homepage may lead with the brand.
- **Meta description:** unique per page, about 140–160 characters, summarises the page and gives a reason to click. Only claims that appear on the page.
- Never repeat the same title or description on two pages. Never stuff keywords.
- In Next.js: a title template in the root layout (`title: { default, template: '%s | Brand' }`), and `generateMetadata` or `metadata` on each page.
- Set `metadataBase` to the production URL so canonical and Open Graph URLs are absolute.

## 4. Headings

- Exactly **one H1** per page, describing the page's main topic.
- H2 for main sections, H3 for points inside them. Never skip levels (H2 → H4).
- Headings describe the content; don't use heading tags just to make text big.
- Never put the logo or site name in an H1 on every page.

## 5. Canonicals and social tags

- Every indexable page has a canonical pointing to its own clean URL (no tracking parameters).
- Open Graph and Twitter tags on every page: title, description, URL, and an image of 1200 × 630.
- Favicon and app icons in place (e.g. `app/icon.png`, `app/apple-icon.png`).

## 6. Indexing and test sites

- The live (production) site is indexable by default (`index, follow`).
- **Preview, staging and test sites are always `noindex`**, and their robots.txt disallows everything. Control this with one environment variable (e.g. `SITE_ENV=production` only on the live site).
- Thank-you, login, internal search and similar pages: `noindex, follow`, and left out of the sitemap.
- Never add `noindex` to a page that should rank.

## 7. robots.txt and sitemap

**robots.txt** (in Next.js: `app/robots.ts`)
- Live site: allow crawling and point to the sitemap: `Sitemap: https://yourdomain.com/sitemap.xml`
- Never block the files pages need to display (CSS, JavaScript, images, `/_next/`).
- robots.txt is not security. Don't use it to hide private pages.

**XML sitemap** (in Next.js: `app/sitemap.ts`)
- **Generated automatically** from the page list (§1). Never maintained by hand.
- Contains only live, indexable pages that return 200, with their canonical URLs.
- Excludes `noindex` pages, redirects, 404s and duplicate URLs.
- Don't use `priority` or `changefreq`. Use `lastmod` only when the content really changed.
- When a page is added or removed, the sitemap updates by itself.

## 8. Status codes and redirects

- A page that doesn't exist returns a real **404** status with a helpful 404 page (links to Home and main sections). Never a "not found" message with a 200 status.
- A page that was removed for good may return **410**.
- When a URL changes, redirect the old URL to the new one permanently (**301/308**; in Next.js: `redirects()` in `next.config` with `permanent: true`).
- Redirect straight to the final URL. No redirect chains or loops.
- Never redirect everything to the homepage.

## 9. Internal links and navigation

- Use real `<a href>` links (Next.js `<Link>`). Never navigate with buttons or click handlers.
- Menu and footer links are in the HTML of every page.
- Every page is linked from at least one other page. No orphan pages.
- Use descriptive link text that says where the link goes. Never "click here".
- Link related pages to each other (e.g. a service page to related services, a blog post to the matching service).

## 10. Breadcrumbs

- Every page below the homepage shows a visible breadcrumb: `Home › Services › Web Design`.
- Each item except the current page is a real link. The current page is plain text with `aria-current="page"`.
- The breadcrumb follows the URL structure and uses the page names from the page list (§1).
- Add matching `BreadcrumbList` structured data (see SCHEMA.md §5). Visible breadcrumb and structured data must be identical.
- Put the breadcrumb in a `<nav aria-label="Breadcrumb">`.

## 11. Pagination and parameters

- Paginated lists (e.g. blog pages) use real links with clean URLs (`/blog/page/2/`); each page has its own canonical.
- "Load more" buttons must also have a real link to the next page.
- Tracking and filter parameters (`?utm_…`, `?sort=`) are not indexed: canonical points to the clean URL.

## 12. Images (SEO side)

- Descriptive file names: `team-reviewing-website-design.webp`, lowercase, hyphens. Never `IMG_2034.jpg` or keyword lists.
- Meaningful alt text on every meaningful image (see ACCESSIBILITY.md §3).
- Images that matter for search are real `<img>`/`next/image` elements in the HTML, not CSS backgrounds.

## 13. Check before going live

- [ ] Every page: unique title and description, one H1, canonical, Open Graph tags
- [ ] `/robots.txt` allows crawling on the live site and lists the sitemap
- [ ] `/sitemap.xml` lists only live, indexable pages
- [ ] Test sites are `noindex`
- [ ] A made-up URL returns a real 404
- [ ] Old URLs redirect permanently in one step
- [ ] Every page linked from at least one other page
- [ ] Breadcrumbs visible and matching their structured data
