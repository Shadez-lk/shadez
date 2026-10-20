# Shadez — Agent Directive & Project Guidelines (`AGENTS.md`)

This repository is **Shadez** (`shadez`), a multidisciplinary technology, design, and architecture studio connecting thinking and making.

All AI agents working in this repository must strictly adhere to the brand guidelines, design system, required skills, benchmark studios, and engineering standards defined below.

---

## 1. Brand Identity & Product Vision

- **Brand Name:** `shadez` (lowercase wordmark)
- **Tagline:** *"Different shades. One business."*
- **Positioning:** A multidisciplinary studio shaped around client needs. Connecting strategy, software, product design, physical architecture/spatial design, and marketing into complete, high-impact solutions.
- **Origin & Story:** Founded in 2026 by a computer engineering lead and a landscape architecture lead based in Maruthamunai, Sri Lanka. The work marries structural discipline, physical environment design, top-tier Google search visibility, and digital engineering.
- **The Core Duality (Physical + Digital):**
  - **Digital & Technology:** Software engineering, dynamic web applications, top-rank SEO, product design (UI/UX), and digital marketing.
  - **Physical & Spatial Design:** Architectural planning, commercial space design, retail store layouts, and spatial experience.
  - *Example synergy:* For a retail client, Shadez can design the physical retail store layout, craft the brand identity, build the dynamic web presence with top-rank SEO, and execute the launch marketing campaign — all as one unified studio.

- **The 5 Core Disciplines:**
  1. `01 / Strategy` — Business growth roadmaps, market gap analysis, digital transformation, research-led planning.
  2. `02 / Software` — High-speed dynamic web applications, top-tier Google search SEO, custom web engineering.
  3. `03 / Product Design` — Disciplined visual systems, logo design, commercial posters, digital product showcases.
  4. `04 / Architecture` — Physical architecture, commercial shop interiors, retail store planning, spatial design, and technical systems.
  5. `05 / Marketing` — Social media advertising, algorithmic campaigns, audience targeting, growth execution.

- **The Studio Process:**
  `01 Understand` → `02 Plan` → `03 Design` → `04 Build` → `05 Launch & Grow`
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

---

## 8. Anti-Slop Visual Hierarchy, Clarity & Layout Standards

All AI agents working on Shadez web interfaces must adhere strictly to these 4 principles:

1. **Above-the-Fold Clarity (The 4 Core Questions):**
   - **What it is:** Clearly state the multidisciplinary studio model (Digital marketing, web engineering with top SEO, and commercial spatial design).
   - **Who it is for:** Specifically qualify the audience (Ambitious retail brands, growing enterprises, and founders who refuse to manage 5 disconnected agencies).
   - **Why it matters:** Clearly establish the contrast (Eliminating fragmented freelancers and agency bloat through unified digital + physical execution).
   - **What to do next:** Deliver an unmissable, commanding primary CTA with high visual contrast and zero ambiguity.

2. **Visual Hierarchy & Scanning Priority:**
   - **Focal Point 1:** Authoritative display headline (`font-display`, uppercase, tight tracking, `leading-[0.9]`).
   - **Focal Point 2:** Primary CTA button with commanding scale (52px height, prominent Industrial Orange `#F25623`, high contrast, confident micro-interactions).
   - **Focal Point 3:** Value proposition deck and audience qualification statement.
   - **Focal Point 4:** Architectural specification terminal and verified proof metrics.

3. **Elimination of "AI Slop" & Generic Layouts:**
   - **Zero Pill Soup:** Never spam rows of uniform pill tags (`px-2 py-1` badges). Replace with typographic lists, architectural specification tables, or clean hairline grids.
   - **Zero Repetitive Card Grids:** Never repeat uniform 3-column or 5-column box grids across consecutive sections. Use asymmetric editorial compositions, split blueprints, and alternating visual weights.
   - **Zero Generic Gradients & Glows:** Stick to the authentic Swiss architectural palette: Obsidian `#171717`, Industrial Orange `#F25623`, Graphite `#4D4D4D`, and Clean Slate `#DEDEDE`.

4. **Continuous Quality & Defect Remediation:**
   - Prioritize real-world verified proof (such as the live `#1 Google Search Rank` for Madeena Warriors) with high visual prominence.
   - Regularly audit spacing rhythm, hairline alignment, and keyboard accessibility.

---

## 9. The Expensive-UI Swipe File: 5 Premium React Libraries

To elevate Shadez web interfaces into cinematic, highly tactile, and expensive-feeling experiences without compromising Swiss architectural discipline, agents reference and leverage these 5 curated component ecosystems:

1. **Componentry (`componentry.dev`) — Cinematic Visual Moments:**
   - **Specialty:** Hero sections, portfolio visual anchors, kinetic typographic reveals, and cinematic scroll choreography.
   - **Key Treatments:** Liquid-glass carousels, particle/split-text typography, interactive 3D stacks, and WebGL depth treatments.
   - **Application in Shadez:** Hero section headline reveal, dynamic interactive architectural viewport, and high-impact case study hero cards.

2. **Space UI (`spaceui.one`) — Expressive Motion & Tactile Controls:**
   - **Specialty:** Cursor-reactive motion, tactile physics, micro-interactions, and living controls.
   - **Key Treatments:** Liquid switches, morphing controls, animated loaders, shaders, sliders, and gooey tactile feedback.
   - **Application in Shadez:** Interactive discipline toggles, interactive inquiry sliders, and tactile magnetic button interactions.

3. **Skecher UI (`skecher-ui.com`) — Living Micro-Interactions & Nav:**
   - **Specialty:** Adding micro-motion to otherwise static screens to eliminate stiffness.
   - **Key Treatments:** Morphing navigation bars, gooey floating toolbars, liquid-glass surface reflections, and live status indicators.
   - **Application in Shadez:** Floating architectural header, dynamic breadcrumbs, live commission availability status, and smooth disclosure panels.

4. **Planes (`useplanes.com`) — Agent-Readable Production Components:**
   - **Specialty:** Editable React components engineered with TypeScript, Tailwind CSS, and Motion, with native MCP and `llms.txt` support for AI agents.
   - **Key Treatments:** High-utility layout primitives, interactive card stacks, animated marquees, and specification grids.
   - **Application in Shadez:** Clean, copy-paste editable architecture that AI agents can inspect, adjust, and compose seamlessly within existing codebases.

5. **Arc UI (`uiarc.dev`) — Polished Dashboards & Product Blocks:**
   - **Specialty:** Finished-feeling interfaces with consistent design tokens, loading states, and true interaction behavior.
   - **Key Treatments:** Data tables, settings consoles, metric terminals, and realistic interaction states installed directly as source code.
   - **Application in Shadez:** The Architectural Duality Terminal, Google SERP Proof Terminal, and Project Commission Inquiry Terminal.

### Layering Strategy for Shadez Implementations:
- **Layer 1 (Structure & Blueprint):** Use **Componentry** or **Arc UI** patterns for high-contrast structural layouts and hero anchors.
- **Layer 2 (Tactile Polish & Feedback):** Layer **Space UI** or **Skecher UI** micro-interactions on buttons, switches, tabs, and hover states.
- **Layer 3 (Agent Rigor & Maintainability):** Reference **Planes** conventions (clean TypeScript + Tailwind v4 + Motion) so all components stay 100% editable, typed, and local.
- **Strict Rule:** Always map external component colors and radii to the Shadez design tokens (Obsidian `#171717`, Industrial Orange `#F25623`, Graphite `#4D4D4D`, Clean Slate `#DEDEDE`, zero ungrounded purple gradients).




<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
