# PERFORMANCE.md — Page Speed Rules

> Part of the SEO Website Kit. Follow with the other files in this folder. Examples use Next.js (App Router); apply the same rule in any stack.

## 1. Targets

Core Web Vitals, measured on real users (75th percentile), mobile and desktop:

| Metric | Measures | Good |
|---|---|---|
| **LCP** (Largest Contentful Paint) | How fast the main content appears | ≤ 2.5 s |
| **INP** (Interaction to Next Paint) | How fast the page reacts to taps and clicks | ≤ 200 ms |
| **CLS** (Cumulative Layout Shift) | How much the layout jumps while loading | ≤ 0.1 |

Lab target (PageSpeed Insights / Lighthouse): **mobile 90+, desktop 95+.** Real users matter more than the lab score. Never hurt users, accessibility or features to raise a score.

## 2. Find the main (LCP) element first

For every page template, identify the LCP element on mobile (~412 px wide) and desktop (~1350 px wide), usually the hero image or the hero heading. Use Lighthouse ("Largest Contentful Paint element") and write it in the task report.

## 3. LCP rules

- The LCP element is in the server HTML (RENDERING.md). Never loaded by client JavaScript.
- No entrance animation, fade-in or delay on the LCP element.
- **Hero image** (in Next.js: `next/image`):
  - is a real image, not a CSS background
  - is **not** lazy-loaded: `loading="eager"` and `fetchPriority="high"`
  - has an accurate `sizes` value (e.g. `sizes="(max-width: 768px) 100vw, 50vw"`). Without `sizes`, phones download a desktop-sized image
  - source about 1,600 px wide, compressed as small as possible (target ≤ 150 KB at mobile width)
- **Only one image per page** gets high priority, the measured LCP image. Logos and other images near the top don't.
- Don't use the deprecated `priority` prop in current Next.js; use `fetchPriority="high"` + `loading="eager"`.
- Check on a 412 px screen that the hero image downloaded is about 828 px wide or less.

Real example: an oversized hero with no accurate `sizes` gave a 3.0 s mobile LCP. Resizing the source and fixing `sizes` brought it to 2.3 s.

## 4. Images

- Use `next/image` (or responsive `srcset`) for photos. Keep the default modern format output (WebP/AVIF).
- Source files: **WebP** for photos, **SVG** for logos and icons, PNG only for transparency. Ideally ≤ 200 KB, never > 500 KB. Longest side ≤ 2,000 px.
- Create images in the right **aspect ratio** for their slot (hero 16:9, cards 3:2, square 1:1, portraits 4:5) and keep the same ratio for all images of one kind.
- Always give width and height, or a container with a fixed aspect ratio, so nothing jumps (CLS).
- Below-the-fold images lazy-load (the default).
- Never load a desktop image and hide it on mobile with CSS. For a different mobile crop use `<picture>` (Next.js: `getImageProps()`).
- Don't hot-link images from other websites or placeholder services.

## 5. Fonts

- Load fonts with the framework's font system (Next.js: `next/font`), called once in the root layout with `subsets` set. This self-hosts the font and preloads it.
- At most 2 font families. Load only the weights used.
- Never add the same font again through `@import`, `<link>` or `@font-face`.
- Set `preload: false` on fonts not used above the fold.
- Check: the built HTML `<head>` contains `<link rel="preload" as="font">` for the main font. If PageSpeed shows a chain HTML → CSS → font file, the font is not preloaded.

## 6. JavaScript

- Server-render by default; send JavaScript only for interactive parts (RENDERING.md).
- Don't add large libraries for small effects (a slider, an icon, a date format).
- Import only what you use (e.g. single icons, not a whole icon set).
- Heavy widgets that are below the fold or only used on click load later (dynamic import).
- No long tasks on page load; keep event handlers fast (INP).

## 7. Third-party scripts

- Analytics, chat widgets, pixels and tag managers load **after** the page is usable (Next.js: `next/script` with `strategy="afterInteractive"` or `"lazyOnload"`).
- Only add third-party scripts the site actually needs.
- Maps and videos: **click-to-load**. Show a lightweight image placeholder with fixed size and a play/"load map" button; load the embed only on click.
- No autoplaying video with sound.

## 8. CSS and layout stability (CLS)

- Keep CSS small (Tailwind removes unused styles automatically).
- Reserve space for everything that loads later: images, embeds, ads, banners, cookie notices (use fixed-height containers or overlays).
- Never insert content above existing content after load (except in response to a user action).
- Animate only `transform` and `opacity`.

## 9. Caching and delivery

- Pages that don't change per visitor are **static** (pre-rendered at build time) and served from the CDN.
- Use HTTPS, HTTP/2+ and compression (default on Vercel, Netlify and similar hosts).
- Don't make every page dynamic by accident (e.g. reading cookies or headers in the layout).

## 10. Reading PageSpeed results correctly

- Run **3–5 times** per page and use the **median**. Scores vary 3–5 points between runs.
- The score comes only from the metrics (FCP, LCP, TBT, CLS, Speed Index). Items marked **"Unscored"** don't change the score directly; fix them only when they explain a slow metric.
- Known framework items, don't "fix" them with hacks:
  - "Legacy JavaScript" (~14 KiB of small polyfills added by Next.js): leave it; recheck after upgrades.
  - "Render-blocking requests" for one small CSS file: keep CSS small instead of using experimental CSS-inlining flags.
- Never add experimental flags, webpack hacks or hand-written preload tags just to silence a warning.

## 11. Check before going live

- [ ] LCP element identified for each page; hero image eager, high priority, accurate `sizes`
- [ ] Only one high-priority image per page
- [ ] Images in WebP/SVG, compressed, with width/height or aspect ratio
- [ ] Font preload present in the HTML; at most 2 families
- [ ] Third-party scripts load after the page; maps and videos click-to-load
- [ ] PageSpeed (median of 3–5 runs): mobile 90+, desktop 95+
- [ ] No layout jumps while loading (CLS ≤ 0.1)
