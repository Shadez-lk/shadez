# SCHEMA.md — Structured Data Rules (JSON-LD)

> Part of the SEO Website Kit. Follow with the other files in this folder. Examples use Next.js (App Router); apply the same rule in any stack.

## 1. Principles

- Use **JSON-LD** only.
- Markup describes **only what is visible on the same page**, or real business facts the user has confirmed.
- **Never invent:** reviews, ratings, prices, opening hours, addresses, phone numbers, coordinates, authors, dates, awards or credentials. If a value is unknown, leave the property out (and list it as a placeholder for the user).
- More schema is not better. Add a type only when it accurately describes the page.
- Structured data helps search engines understand the page. It does not improve rankings by itself, and valid markup does not guarantee rich results.

## 2. Don't add these

| Markup | Why |
|---|---|
| `FAQPage` to get FAQ rich results | FAQ rich results are no longer shown for normal websites in Google |
| `HowTo` | No Google rich result |
| `WebSite` + `SearchAction` (sitelinks search box) | Retired by Google |
| `Review` / `AggregateRating` for the business on its own website | Self-serving reviews are not eligible for review stars |
| Any review or rating that is not a genuine, visible customer review | Against Google's policies |

## 3. Which schema on which page

| Page | Add |
|---|---|
| Homepage | `Organization` (or the most specific `LocalBusiness` type, if customers visit a location) + `WebSite` |
| About | `WebPage` (or `AboutPage`) + `BreadcrumbList` |
| Service page | `WebPage` + `BreadcrumbList`; `Service` optional (provider = the Organization) |
| Blog post / article | `BlogPosting` or `Article` + `BreadcrumbList` |
| Product page (real product with a price) | `Product` + `Offer` + `BreadcrumbList` |
| Location page (real branch) | `LocalBusiness` for that branch + `BreadcrumbList` |
| Team member / author page | `ProfilePage` with `Person` |
| Event page | `Event` (real, dated events only) |
| Contact, legal, list pages | `WebPage` + `BreadcrumbList` |

The full Organization/LocalBusiness appears on the homepage. Other pages **refer** to it by `@id` instead of repeating it.

## 4. IDs that connect everything

Use stable, absolute IDs built from the live domain:

| Entity | `@id` |
|---|---|
| Organization / LocalBusiness | `https://yourdomain.com/#organization` |
| WebSite | `https://yourdomain.com/#website` |
| Web page | `{page URL}#webpage` |
| Breadcrumb | `{page URL}#breadcrumb` |
| Person | `{profile URL}#person` |

- The same entity uses the same `@id` on every page.
- Link entities with references: `"publisher": { "@id": "https://yourdomain.com/#organization" }`, `"isPartOf": { "@id": "https://yourdomain.com/#website" }`.
- All `url` values are canonical URLs.

## 5. Type rules

**Organization / LocalBusiness**
- `name`: exactly the business name. No keywords added.
- `logo`: a crawlable image, at least 112 × 112 px.
- `telephone`, `email`, `address`: exactly as shown on the site.
- `openingHoursSpecification`, `geo`, `priceRange`: only if confirmed by the user.
- `sameAs`: only the business's own official profiles (e.g. its LinkedIn, Instagram, Facebook pages). Never directories.
- Use the most specific accurate `LocalBusiness` subtype (e.g. `Dentist`, `Bakery`, `LegalService`). Use `Organization` if customers don't visit a location.

**BreadcrumbList**
- Matches the visible breadcrumb exactly: same names, same order, canonical URLs, `position` starting at 1.
- The last item is the current page.
- Example:

```json
{
  "@type": "BreadcrumbList",
  "@id": "https://yourdomain.com/services/web-design/#breadcrumb",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourdomain.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://yourdomain.com/services/" },
    { "@type": "ListItem", "position": 3, "name": "Web Design", "item": "https://yourdomain.com/services/web-design/" }
  ]
}
```

**Article / BlogPosting**
- `headline` matches the visible title.
- `author`: a `Person` (with `name` and profile `url`) or the `Organization`.
- `datePublished` / `dateModified` in ISO 8601 with timezone, matching the visible dates. `dateModified` changes only when the content really changes.
- `image`: the article's main image.
- `publisher`: reference to the Organization `@id`.

**Product**
- Only where the product can really be bought or enquired about, with a real price.
- `price`, `priceCurrency`, `availability` always match the visible page (use the same data for both).
- Ratings and reviews only from genuine customer reviews shown on the page.

**Person**
- Only confirmed facts. No invented job titles, qualifications or awards.

## 6. Implementation (Next.js)

- One helper module builds all schema (e.g. `src/lib/schema.ts`). Components don't hand-write JSON-LD.
- One `<script type="application/ld+json">` per page containing a single `@graph` array.
- Render it in a **Server Component**, so it's in the initial HTML.
- Escape it safely:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }}
/>
```

- Values shown on the page and in schema come from the same variable, so they can't differ.
- Don't output the same entity twice (e.g. from both the layout and the page).

## 7. Check before going live

- [ ] Google **Rich Results Test**: no errors on each page type
- [ ] **Schema Markup Validator** (validator.schema.org): valid
- [ ] Every value in schema is visible on the page or confirmed by the user
- [ ] Breadcrumb schema matches the visible breadcrumb
- [ ] No FAQ/HowTo/self-review markup added to chase rich results
- [ ] JSON-LD visible in View Page Source
