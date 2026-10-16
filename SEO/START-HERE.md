# START HERE — SEO Website Kit for AI Builders

> Five rule files that make any AI coding tool build your website with a proper technical SEO foundation: Google can read every page, pages load fast, structured data is correct and the site is accessible.
> It does not guarantee rankings. Rankings still depend on useful content and links. It fixes the technical SEO most AI-built websites get wrong.

---

## What's in the kit

| File | Makes the AI handle |
|---|---|
| `SEO-TECHNICAL.md` | URLs, titles, meta descriptions, headings, canonicals, robots.txt, sitemap, redirects, 404s, internal links, breadcrumbs |
| `PERFORMANCE.md` | Page speed: Core Web Vitals, hero image, images, fonts, scripts |
| `RENDERING.md` | Server-rendered HTML, so Google can read every page |
| `SCHEMA.md` | Structured data (JSON-LD): Organization, LocalBusiness, BreadcrumbList, Article |
| `ACCESSIBILITY.md` | WCAG 2.2 AA: contrast, keyboard, alt text, headings, forms, motion |

## Works with

Antigravity, Cursor, Claude Code, Windsurf, Copilot, Codex, ChatGPT and Claude (upload the files to the chat). **Works best with Next.js.** Tools that build a browser-only React app (some no-code builders) cannot follow every rendering rule; the other rules still help.

## How to use it

1. Create a folder called `seo-rules/` in your project and put the 5 rule files in it (keep this file too).
   - In ChatGPT or Claude chat: upload all 6 files at the start of the chat instead.
2. Type this as your first message:

```
Read every file in seo-rules/ (start with START-HERE.md) and follow these rules for everything you build in this project.
Build the website with Next.js (App Router, TypeScript, Tailwind) unless I say otherwise.
Confirm in a few lines which rules you will follow, then wait for my next instruction.
```

3. Then build as normal, e.g. *"Build a website for my bakery in Coimbatore with Home, About, Menu and Contact pages."*

---

## Rules for the AI (read before every task)

1. **Follow all 5 rule files** for every page and every change. If a request conflicts with a rule, say so and ask before breaking it.
2. **Default stack:** Next.js (App Router), TypeScript, Tailwind CSS, latest supported and security-patched versions, unless the user chooses something else. If the user's tool or stack cannot follow a rule, say which rule and why.
3. **Never invent business facts:** names, addresses, phone numbers, emails, prices, opening hours, reviews, ratings, results, awards, qualifications, team members or client names.
4. **Missing information does not stop the build.** Use clearly marked placeholders such as `[Your phone number]` or `[Add a real customer review]`, keep a list of them, and show the list after every task. Never use lorem ipsum or fake details that look real.
5. **Never rewrite content the user has written or approved.** If it breaks a rule (e.g. a title is too long), report it instead.
6. **Preview and test sites are never indexed by Google** (see SEO-TECHNICAL.md §6).
7. **After every task, give this report:**
   1. Pages added or changed, with URLs
   2. Title, meta description and canonical of each page
   3. The H1 of each page
   4. The main (LCP) element of each page and how it loads
   5. Structured data added to each page
   6. Whether each page is indexable and in the sitemap
   7. Images added, with file names and alt text
   8. Open placeholders the user must replace

## Before going live (for you)

- [ ] Right-click → **View Page Source**: all headings, text and links are visible
- [ ] **PageSpeed Insights** (pagespeed.web.dev): mobile 90+, desktop 95+ (median of 3–5 runs)
- [ ] **Rich Results Test** (search.google.com/test/rich-results): no errors
- [ ] `yourdomain.com/robots.txt` and `/sitemap.xml` open and look correct
- [ ] No placeholders left, no invented facts
- [ ] Keyboard test: press Tab through the page; you can always see where you are
