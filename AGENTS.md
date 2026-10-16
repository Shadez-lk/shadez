# Shadez — Agent Directive & Project Guidelines (`AGENTS.md`)

This repository is **Shadez** (`shadez`), a multidisciplinary technology, design, and architecture studio connecting thinking and making.

All AI agents working in this repository must strictly adhere to the brand guidelines, design system, required skills, benchmark studios, and engineering standards defined below.

---

## 1. Brand Identity & Product Vision

- **Brand Name:** `shadez` (lowercase wordmark)
- **Tagline:** *"Different shades. One business."*
- **Positioning:** A multidisciplinary studio shaped around client needs. Connecting strategy, software, product design, physical architecture/spatial design, and marketing into complete, high-impact solutions.
- **Origin & Story:** Founded by an independent developer and an architect based in Galle, Sri Lanka. The work marries structural discipline, physical environment design, and digital engineering.
- **The Core Duality (Physical + Digital):**
  - **Digital & Technology:** Software engineering, cloud systems, product design (UI/UX), AI/ML, and digital marketing.
  - **Physical & Spatial Design:** Architectural planning, commercial space design, retail store layouts, and spatial experience.
  - *Example synergy:* For a retail client, Shadez can design the physical retail store layout, craft the brand identity, build the e-commerce platform & POS systems, and execute the launch marketing campaign — all as one unified studio.

- **The 5 Core Disciplines:**
  1. `01 / Strategy` — Business/product strategy, market positioning, digital transformation, research-led planning.
  2. `02 / Software` — Scalable web/mobile applications, cloud platforms, AI/ML systems, backend automation.
  3. `03 / Product Design` — UI/UX design, prototyping, design systems, digital interaction.
  4. `04 / Architecture` — Physical architecture, commercial interiors, retail store planning, spatial design, and technical systems.
  5. `05 / Marketing` — Brand identity, digital presence, narrative campaigns, growth execution.

- **The Studio Process:**
  `01 Understand` → `02 Plan` → `03 Design` → `04 Build` → `05 Deliver`
- **Brand Mottos:** `THINK. BUILD.` | `MAKE A MARK.` | `STRATEGY MEETS DESIGN.`

---

## 2. Studio Benchmarks & References

When designing copy, layouts, case studies, and user flows, reference these benchmark studios:

1. **ustwo (Primary Benchmark):** Master of overall studio positioning, value-driven storytelling, unified multi-capability presentation, and proof of credibility.
2. **BATSTACK (Sri Lanka Benchmark):** High-impact independent Sri Lankan studio positioning, crisp homepage narrative, balanced design + engineering.
3. **AKQA (Visual Reference):** Premium dark-mode aesthetics, bold typography hierarchy, restrained high-contrast animation, project-focused showcase.
4. **IDEO (Strategic Framework):** Human-centered design, connecting research to execution, explaining the "why" behind every solution.
5. **frog (Physical + Digital Fusion):** Seamlessly bridging physical environment design with digital products and brand systems.
6. **Calden Digital (Process Communication):** Clear step-by-step workflow (`Understand → Plan → Design → Build → Deliver`) and human team credibility.
7. **Level Up:** Direct, accessible service categorization and clear client call-to-actions.
8. **Digital Affine:** Independent regional studio breadth and local market grounding.

---

## 3. Information Architecture

```text
SHADEZ
├── Home (Studio manifesto, 5 disciplines, cross-disciplinary showcase, process, featured work, lead CTA)
├── What We Do / Services
│   ├── 01 / Strategy
│   ├── 02 / Software
│   ├── 03 / Product Design
│   ├── 04 / Architecture (Physical spaces, retail/commercial layout, structural systems)
│   └── 05 / Marketing
├── Our Work / Portfolio (Filterable: All | Digital Projects | Brand & Design | Architecture & Spatial)
├── Process (Understand → Plan → Design → Build → Deliver)
├── About Us (The Developer + Architect origin in Galle, team, vision)
└── Contact (Inquiry builder, Galle office, direct outreach)
```

---

## 4. Design System & Tokens

### Color Palette
- **Obsidian / Black:** `#171717` (RGB 23, 23, 23) — Primary background / dark surfaces / high-contrast base.
- **Industrial Orange:** `#F25623` (RGB 242, 86, 35) — Signature accent, focal points, interactive CTAs, active highlights.
- **Graphite / Dark Grey:** `#4D4D4D` (RGB 77, 77, 77) — Secondary typography, borders, structural gridlines.
- **Clean Slate / Light Grey:** `#DEDEDE` (RGB 222, 222, 222) — Subtle divider lines, muted cards, light mode accents.
- **White:** `#FFFFFF` — Primary heading text on dark surfaces.

### Typography
- **Headings / Display:** `Rajdhani` (Bold & Medium) — Condensed, mechanical, architectural feel. Uppercase for badges, navigation, and section labels (`01 /`, `02 /`).
- **Body / Interface:** Clean, legible sans-serif (`Inter` or `Geist`) with restrained weights and open leading.
- **Multilingual:** Native support for Tamil typography (`தமிழ்` Regular, Bold, Italic) where applicable.

### Visual Language: Swiss Architectural Grid
- **Structured Grids:** Explicit modular grids with visible, fine hairline borders (`border-neutral-800` / `#4D4D4D`).
- **Technical Markers:** Crosshair registration marks (`+`) and corner ticks (`┌ ┐ └ ┘`) on key panels and cards.
- **Numbered Indexing:** Every major section and service card uses formal indexing (`01 /`, `02 /`, `03 /`).
- **Confident Contrast:** High-contrast dark canvas punctuated by vibrant `#F25623` orange accents. Avoid generic gradients, blurry drop shadows, or cookie-cutter templates.

---

## 5. Mandatory Agent Skills & Tooling

Agents must leverage the pre-installed skills in `.agents/skills/`:

1. **`shadcn` (`.agents/skills/shadcn/`)**
   - Use shadcn components as base UI primitives.
   - Compose components semantically; never write raw repetitive HTML for form controls, cards, or dialogs.
   - Respect semantic tokens (`bg-background`, `text-primary`, `border-border`).
   - Follow strict composition rules: `CardHeader` / `CardTitle` / `CardContent` / `CardFooter`.

2. **`design-taste-frontend` (`.agents/skills/design-taste-frontend/`)**
   - Strictly avoid generic "AI slop" (no floating purple gradients, generic illustrations, or uniform rounded cards).
   - Enforce confident typography hierarchy, intentional whitespace, and authentic editorial art direction.

3. **`transitions-dev` (`.agents/skills/transitions-dev/`)**
   - Implement fluid CSS micro-interactions: card hover tilts, smooth accordion reveals, sliding tabs, and staggered entrances.
   - Use defined motion tokens for consistent animation timing.

4. **`ux-designer` (`.agents/skills/ux-designer/`)**
   - Ensure WCAG 2.2 AA accessibility standards.
   - Maintain full keyboard navigation, accessible form validation states (`aria-invalid`), and visible focus rings.
   - Support responsive layouts across Mobile (375px), Tablet (768px), and Desktop (1280px+).

5. **`app-store-screenshots` & `canvas-design`**
   - Use when building exportable marketing assets, mockup frames, and visual canvas layouts.

---

## 6. Frontend & Architecture Standards

- **Framework:** Next.js (App Router), TypeScript (Strict), Tailwind CSS.
- **Code Quality:** Type safety across all props and data models; no `any` types.
- **Components:** Modular, single-responsibility components placed in `components/`.
- **Assets:** Original brand assets live in `Assets/` and should be served from `public/` when referenced by Next.js.
- **CI/CD:** Automated linting, type-checking, and build validation configured via GitHub Actions.

---

## 7. Technical SEO, Performance & Accessibility Kit (`SEO/`)

All pages, layouts, and components must follow the 5 core rule files in `SEO/`:
1. **`SEO-TECHNICAL.md`:** Single page registry (`src/lib/pages.ts`), unique title/description, self-referencing canonicals, dynamic `robots.ts` & `sitemap.ts`, strict heading hierarchy (`H1` -> `H2` -> `H3`), visible breadcrumbs matching schema, real crawlable `<Link>` tags.
2. **`PERFORMANCE.md`:** Target Core Web Vitals (LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1). LCP element identified; hero image eager with `fetchPriority="high"` and accurate `sizes`. WebP/SVG assets, font preloading via `next/font`.
3. **`RENDERING.md`:** Server HTML first. Server Components by default; `"use client"` restricted to minimal interactive leaves. All content in static HTML before JS runs. No hidden content waiting on JS animation.
4. **`SCHEMA.md`:** JSON-LD structured data via `src/lib/schema.ts` using stable absolute `@id`s (`#organization`, `#website`, `#breadcrumb`). Zero invented facts/reviews.
5. **`ACCESSIBILITY.md`:** WCAG 2.2 AA compliant. Skip-to-main-content link, 3:1 visible focus rings, 4.5:1 contrast ratio, labeled forms, accessible touch targets (44×44px primary).
6. **Reporting Protocol (`START-HERE.md`):** After every page addition or change, report the 8 verification points (URLs, Title/Meta, H1, LCP element, JSON-LD, Sitemap status, Image alt text, Open placeholders).


<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
