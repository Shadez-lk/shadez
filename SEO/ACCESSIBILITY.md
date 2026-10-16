# ACCESSIBILITY.md — Accessibility Rules (WCAG 2.2 AA)

> Part of the SEO Website Kit. Follow with the other files in this folder. Examples use Next.js (App Router); apply the same rule in any stack.
> Target: **WCAG 2.2 level AA.** Accessible sites also help SEO: clear structure, alt text and readable content.

## 1. Structure and landmarks

- Use real HTML elements: `<header>`, `<nav>`, `<main>` (one per page), `<footer>`, `<section>`, `<article>`, `<button>`, `<a>`.
- Add a **"Skip to main content"** link as the first focusable item.
- Set the page language: `<html lang="en">` (or the site's language).
- Every page has a unique, descriptive `<title>`.

## 2. Headings

- One H1 per page; H2 for sections; H3 inside them. Never skip levels.
- Headings describe the content below them. Never use a heading tag only for styling, or styling instead of a heading.

## 3. Images and alt text

- Every meaningful image has alt text describing **what it shows** in context, in one short sentence: `alt="Team reviewing a website design on a laptop"`.
- Decorative images get empty alt text: `alt=""`.
- Images of text: avoid; if unavoidable, the alt text contains the same text.
- Icons that carry meaning (e.g. a phone icon used as a link) have an accessible label. Decorative icons have `aria-hidden="true"`.
- Alt text is for people, not keywords. Never stuff keywords.

## 4. Links and buttons

- Links go somewhere (`<a href>`); buttons do something (`<button>`). Never use a `<div>` with a click handler.
- Link text makes sense on its own: "View web design services", not "Click here" or "Read more" alone. If several "Read more" links exist, give each an accessible name (e.g. visually hidden text).
- Links that open a new tab say so.

## 5. Keyboard

- Everything works with a keyboard only: Tab, Shift+Tab, Enter, Space, Esc.
- The tab order follows the visual order.
- No keyboard traps; menus, modals and pop-ups close with Esc and return focus to the button that opened them.
- Dropdown menus open with the keyboard, not only on hover.

## 6. Focus

- A clearly visible focus outline on every interactive element (contrast at least 3:1). Never remove outlines without a visible replacement.
- Focused elements are never hidden behind sticky headers or cookie banners.

## 7. Forms

- Every field has a visible `<label>` connected to it. Placeholder text is not a label.
- Required fields are marked in text, not only by colour.
- Error messages are specific ("Enter a valid email address"), shown next to the field, and announced to screen readers.
- Use the right input types (`email`, `tel`) and `autocomplete` values (`name`, `email`, `tel`).
- Never ask users to re-enter information they've already given in the same process.

## 8. ARIA

- Use native HTML first. ARIA only when no HTML element does the job.
- Interactive widgets (menu button, accordion, tabs) use correct states: `aria-expanded`, `aria-controls`, `aria-selected`.
- Never add `role` or `aria-*` attributes that contradict the element.

## 9. Colour and contrast

- Normal text: at least **4.5:1** against its background. Large text (24 px+, or 18.66 px+ bold): at least **3:1**.
- Buttons, form borders, icons and focus outlines: at least **3:1**.
- Check all states: hover, focus, disabled text that must be read, error, placeholder, and text over images (add an overlay if needed).
- Never use colour alone to convey meaning (e.g. errors also have text or an icon).

## 10. Touch targets, zoom and reflow

- Tap targets at least **24 × 24 px** (main mobile buttons ideally 44 × 44 px), with enough space between them.
- Zoom is never disabled (no `maximum-scale=1` or `user-scalable=no`).
- No horizontal scrolling at 320 px width or 400 % zoom (except tables, maps and code, which scroll inside their own box).
- Carousels and sliders that use dragging also have buttons.

## 11. Motion

- Respect `prefers-reduced-motion`: turn off non-essential animation and parallax.
- Nothing flashes more than 3 times per second.
- Anything that moves, auto-plays or auto-advances for more than 5 seconds (carousels, background videos) has a pause control. Prefer no auto-advance.

## 12. Media

- Videos have captions; audio-only content has a transcript.
- No autoplaying sound.

## 13. Dynamic content

- Content that updates without a page load (form success, cart count, filters) is announced with a live region (`aria-live="polite"`).
- When moving between pages in a single-page app, the new page's title updates and focus moves sensibly.
- Cookie and consent banners are reachable by keyboard and don't block the page for screen readers.

## 14. Check before going live

- [ ] Lighthouse Accessibility: 100 on every page type
- [ ] Keyboard test: Tab through every page, open and close the menu, use every form
- [ ] Focus always visible
- [ ] Contrast checked (e.g. WebAIM Contrast Checker)
- [ ] Every meaningful image has alt text; decorative images have `alt=""`
- [ ] One H1; logical heading order
- [ ] Zoom to 200 % and 400 %: nothing breaks or overlaps
- [ ] Reduced motion setting turns animations off
- [ ] A quick screen reader check (VoiceOver on Mac/iPhone, TalkBack on Android)

Automated tools catch only part of the problems. The keyboard and zoom checks are required.
