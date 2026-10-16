# RENDERING.md — Make Every Page Readable by Google

> Part of the SEO Website Kit. Follow with the other files in this folder. Examples use Next.js (App Router); apply the same rule in any stack.

## 1. The main rule: server HTML first

Everything important must be in the **HTML the server sends**, before any JavaScript runs:

- title, meta description, canonical, robots tag
- H1 and all headings
- all page text, lists, prices, FAQs
- all links (menu, footer, internal links)
- images and their alt text
- structured data (JSON-LD)

Static pre-rendering counts as server HTML. Server-side rendering on every request is **not** required.

**Test:** right-click → **View Page Source** (not Inspect). Search for a sentence from the page. If it's there, Google can read it. If not, the page is broken for SEO.

## 2. Server and client parts (Next.js)

- Pages and sections are **Server Components** by default.
- Add `"use client"` only to small interactive pieces: menu toggle, carousel controls, accordion button, form validation, theme switch.
- Never put `"use client"` on a whole page or layout.
- Client components receive content from the server (as props or `children`); they don't fetch or own the page content.
- Never fetch page content in the browser (`useEffect` + fetch) for anything Google should read.

## 3. Content inside interactive widgets

- **Carousels and sliders:** every slide's content is in the HTML, including the last card, not only the visible ones.
- **Tabs and accordions:** all panels are in the HTML; JavaScript only shows or hides them. Prefer `<details>`/`<summary>` for FAQs.
- **"Read more" / "Load more":** the content or a real link to it is in the HTML.
- **Modals and pop-ups:** never the only place important content lives.

## 4. Static vs dynamic

| Page | How to render |
|---|---|
| Home, About, Services, Contact, most pages | **Static** (pre-rendered at build time) |
| Blog posts, service detail pages | Static, generated for each item (`generateStaticParams`) |
| Content that changes often (e.g. prices from a CMS) | Static with revalidation (regenerated on a schedule or when content changes) |
| Truly per-visitor pages (account, cart) | Dynamic; usually `noindex` |

Avoid making pages dynamic by accident: reading cookies, headers or search parameters in a layout forces every page to be dynamic. Check the build output route table; marketing pages should show as static (○).

## 5. Status codes

- Unknown URLs call `notFound()` and return a real **404** status.
- Removed pages return 404/410; moved pages redirect permanently (SEO-TECHNICAL.md §8).
- Never show a "not found" message on a page that returns 200.

## 6. Loading states

- Never show a spinner or empty skeleton **instead of** indexable content on first load.
- Streaming / `loading.tsx` is fine for slow, non-essential parts; the main content and H1 must still arrive in the initial HTML.

## 7. Hydration

- The HTML from the server and the first render in the browser must match (no hydration errors in the console).
- Don't render dates, random numbers or browser-only values differently on server and client.

## 8. Animations

Order of preference:
1. CSS transitions and keyframes
2. CSS scroll-driven animations (with a static fallback)
3. A small script using `IntersectionObserver`
4. An animation library, only when needed and only where it's used

Rules:
- **Content never starts hidden.** Text and images are visible in the HTML even if the animation script never loads. Don't start sections at `opacity: 0` waiting for JavaScript.
- Split animated sections: the section with all text, links and images is a server component; the animation is a separate small client layer on top.
- Heavy effects (3D, canvas, Lottie, particles) load only when visible or after interaction, never as the main (LCP) element. In Next.js, `dynamic(..., { ssr: false })` must be inside a small client component, never in a server component, and only for decorative layers.
- No entrance animation on the hero heading or hero image.
- Respect reduced motion (`prefers-reduced-motion`): turn non-essential animation off.

## 9. Navigation

- Use `<Link>` for internal navigation (real `<a href>` in the HTML).
- Never use `onClick` + `router.push` as the only way to reach a page.

## 10. Common mistakes (don't do these)

| Mistake | Fix |
|---|---|
| `"use client"` on the whole page | Server page with small client pieces |
| Content fetched in `useEffect` | Fetch on the server |
| Carousel renders only visible slides | Render all slides in HTML |
| Sections start at `opacity: 0` | Visible by default; animate as enhancement |
| Spinner instead of content on first load | Content in initial HTML |
| Navigation with buttons and `router.push` | `<Link href>` |
| `ssr: false` for real content | Only for decorative layers |

## 11. Check before going live

- [ ] View Page Source shows the H1, all text, links and JSON-LD of every page
- [ ] Marketing pages are static in the build output
- [ ] Carousels, tabs and FAQs: all content in the HTML
- [ ] Page still readable with JavaScript turned off
- [ ] Unknown URLs return a real 404
- [ ] No hydration errors in the browser console
