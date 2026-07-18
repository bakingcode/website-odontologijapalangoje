# Project & Teaching Plan — odontologijapalangoje.lt rebuild

Our shared roadmap. We rebuild the dentist website from scratch while you learn HTML, CSS, and
JavaScript. We'll go module by module. Each module has: **what you'll learn**, **what we'll build**,
and a **"you can now..." checkpoint**. We don't move on until the checkpoint is true and you've seen
it working in the browser.

Legend: ☐ not started · ◐ in progress · ☑ done

---

## The end goal (what "finished" looks like)

A fast, mobile-friendly website with the same information as the current one:
- Home, Services (+ 3 service detail pages), Staff, Prices, Contacts
- A **mobile tap-to-call button** (the boc.lt feature you liked)
- A responsive menu that works on phone and desktop
- A map + address + opening hours
- A contact / appointment-request form (this one needs a decision — see Module 7)
- Hosted on the real domain, replacing WordPress

---

## How the web actually works (5-minute mental model before Module 1)

Three languages, three jobs:
- **HTML** = the *structure & content* (headings, paragraphs, links, images). The skeleton.
- **CSS** = the *look* (colors, spacing, layout, responsiveness). The skin and clothes.
- **JavaScript** = the *behavior* (things that react to the user). The muscles.

Your browser downloads these files and assembles the page. That's it. No WordPress, no PHP, no
database required for a site like this. This is called a **static website**, and it's cheaper,
faster, and safer than WordPress for our needs.

---

## Module 0 — Setup & workflow  ☑
**Learn:** how to edit, preview, and save your work like a developer.
- Folder structure for a website (`index.html`, `css/`, `js/`, `images/`)
- Opening a page in the browser; the change → refresh → look loop
- Browser DevTools (the single most useful tool you'll learn) — inspecting elements
- What git is doing for us (a save-history / undo button for the whole project)
- **Alternatives we'll discuss:** editor setup, VS Code Live Server vs. plain refresh, local preview options.
- **Checkpoint:** you can create a file, open it in the browser, change it, and see the change.

## Module 1 — HTML foundations, done properly  ☑
> Home page has semantic bones (header/main/footer), an h1, a tagline, and a working tap-to-call
> link in both hero and footer. More home content (services overview, etc.) added later once we
> know layout. Checkpoint met.
**Learn:** semantic HTML5 — not just tags that work, but the *right* tags.
- The document skeleton (`<!doctype>`, `head`, `body`, `meta`, `lang="lt"`, charset)
- Semantic structure: `header`, `nav`, `main`, `section`, `footer`
- Text, links, images (with `alt`), lists
- **The tap-to-call link** — `tel:` and `mailto:` (your favorite feature, day one)
- **Build:** the skeleton + real content of the Home page, using text pulled from `old_website/`.
- **Checkpoint:** a structured Home page with a working phone link you can tap on your phone.

## Module 2 — CSS fundamentals  ☑
> Covered: external stylesheet + `<link>`, rule anatomy, selectors, classes, the box model,
> `box-sizing: border-box`, browser default styles, inheritance, CSS variables (`:root` + `var()`),
> a color palette, typography baseline, `position: fixed`/`z-index`, inline SVG icons, `aria-label`.
> Deliberately NOT polished — user prefers function first, design pass at the end.
**Learn:** how to make it look intentional instead of default-browser-ugly.
- How CSS attaches to HTML; selectors; the cascade & specificity (the "C" in CSS)
- The box model (margin/border/padding/content) — the concept that explains 80% of CSS confusion
- Colors, fonts, spacing, a simple design system (pick colors + fonts once, reuse everywhere)
- **Alternatives:** custom CSS from scratch (what we'll do, to learn) vs. a framework later.
- **Checkpoint:** the Home page looks styled and deliberate on a desktop screen.

## Module 3 — Responsive & mobile-first layout  ☑
> **Decided:** the floating icon call button is **mobile-only** — a `tel:` link does nothing useful
> on a desktop, so desktop shows the phone number as *text* instead (footer/contact page).
> Covered: `@media (min-width)`, mobile-first, flexbox (axes, justify-content, align-items, gap),
> descendant selectors, `max-width` container + `margin: 0 auto`, `rem`, full-bleed background
> pattern (bg on full-width element, `.container` wrapper for content). Home page responsive. ✅
**Learn:** making one page look good on phone AND desktop.
- Flexbox and CSS Grid (the two modern layout tools) — when to reach for each
- The viewport meta tag; relative units (`rem`, `%`, `vw`) vs. pixels
- Media queries and the mobile-first approach
- **Build:** turn the Home page into a proper responsive layout.
- **Checkpoint:** the Home page looks good from phone width up to desktop, no horizontal scroll.

## Module 4 — Multi-page site & shared layout  ☑
> All 8 pages built and navigable: index, personalas, paslaugos (+ 3 service detail pages),
> kainos, kontaktai. Chrome copy-pasted (Option A). Covered: page titles, semantic sectioning
> (section vs div), lists (incl. nested), and HTML tables (thead/tbody/th scope/caption).
> NOTE: kainos.html prices are transcribed from the user's paste and NEED VERIFICATION — the
> "Dantų protezavimas" table had 32 services / 31 prices (last row marked "kaina tikslinama").
> Migrate chrome to a static-site generator when English (Module) is added — 8 files → 16.
**Learn:** building the rest of the pages without copy-paste chaos.
- Consistent header/footer across pages; linking pages together
- The DRY problem: keeping shared parts in sync (we'll discuss options: copy-paste discipline,
  HTML includes, a tiny template step, or a static-site generator — trade-offs explained)
- **Build:** Services, Staff, Prices, Contacts + the 3 service detail pages.
- **Checkpoint:** all pages exist, share a look, and link to each other.

## Module 5 — JavaScript from zero  ☑
> Covered: what JS is, progressive enhancement, external `js/main.js` + `<script defer>`, the console,
> `const`/variables, `document.querySelector` (CSS selectors in JS), `addEventListener("click", fn)`,
> callback functions, `classList.toggle` (and its boolean return), `setAttribute`, `aria-expanded`.
> Built: working mobile hamburger menu on all 8 pages. Concept "variable vs fixed JS syntax" taught.
**Learn:** your first programming language, gently.
- What JS is and where it runs; adding a `<script>`; the console as a playground
- Variables, values, functions — the absolute basics with tiny examples
- Selecting elements and reacting to clicks (events) — the core of interactive web pages
- **Build:** the mobile menu toggle (hamburger button that opens/closes navigation).
- **Checkpoint:** you understand what a function and an event are, and the menu opens/closes.

## Module 6 — Interactive enhancements  ☐
**Learn:** using JS to improve, not replace, the working page (progressive enhancement).
- Small, useful behaviors: smooth scrolling, sticky call button, simple image gallery/lightbox,
  "open now / closed" hours indicator
- **Alternatives:** which of these are worth it, which are gold-plating — we choose together.
- **Checkpoint:** at least one enhancement built and understood line by line.

## Module 7 — Contact section (call + email)  ☐
**Decided:** no form for now — contact is **tap-to-call + email link** (simplest, no third parties).
**Learn:** building a clear, trustworthy contact area; why we chose this over a form.
- A prominent tap-to-call button + `mailto:` email link + address + hours + map embed
- The reasoning: a form can *collect* input with HTML but can't *email the clinic* by itself; it
  needs a third-party service or a backend, which is complexity this clinic doesn't need yet.
- **If we ever want a form later**, the options (kept here for reference): third-party service
  (Formspree/Web3Forms), static-host form feature (Netlify Forms), or a small backend (Node/PHP).
- **Checkpoint:** the Contacts page makes it effortless to call, email, or find the clinic — tested on a phone.

## Module 8 — Polish: SEO, accessibility, performance  ☐
**Learn:** the things that separate a hobby page from a professional one.
- Page titles, meta descriptions, Open Graph (link previews), favicon, sitemap
- Accessibility pass (keyboard nav, contrast, alt text, labels)
- Image optimization (huge win for a photo-heavy dentist site), Lighthouse audit
- **Checkpoint:** a good Lighthouse score and a site that's usable by keyboard/screen reader.

## Module 9 — Going live (Cloudflare Pages)  ☐
**Decided host:** Cloudflare Pages — free, fast global CDN, deploys straight from this git repo.
**Learn:** getting your files onto the real internet.
- Connecting this GitHub repo to Cloudflare Pages so every push auto-deploys
- Keeping the existing domain and pointing it at Cloudflare (DNS basics)
- The switch-over plan so the site is never broken for visitors
- **Checkpoint:** the new site is live on the real domain, served by Cloudflare Pages.

---

## Project decisions (settled)
- **Visual direction:** clean redesign, modern & simple, inspired by boc.lt. Not bound to old design.
- **Mobile-friendly is a hard requirement.** The site must look and work great on phones first
  (mobile-first). Many clinic visitors arrive on a phone looking to call — that experience comes first.
- **Page scope:** mirror the current site — 8 pages (Home, Services, 3 service detail pages,
  Staff, Prices, Contacts).
- **Contact method:** tap-to-call + email link only. No form for now (see Module 7).
- **Call button:** icon-only (phone icon, no text), present on **every page** — boc.lt-style. The
  written phone number additionally appears as text on the Kontaktai page (and in the footer) —
  that is intentional, not duplication: the button is the *action*, the text is the *information*.
- **Shared chrome** (header, nav, footer, call button) is finalized *before* mass-producing pages,
  since Option A (copy-paste) means every later change costs 8 edits.
- **Languages:** Lithuanian (primary, at site root) + English (under `/en/`). **Approach A** —
  one folder per language; the toggle is a plain header link, no JS. Built LT-first, EN mirror after.
  Adding more languages later = copy folder + translate. `hreflang` tags added in Module 8 (SEO).
- **Preview workflow:** plain double-click `index.html`, refresh browser with Ctrl+R after saving.
- **Hosting:** Cloudflare Pages (free, fast global CDN, easy git-connected deploys) — Module 9.

## Still open (decide as we reach them)
- Exact color palette, fonts, and logo treatment (Module 2).
- Whether to keep 3 separate service pages or add sections — confirmed "keep 3" but revisit if it
  gets repetitive (Module 4).
- How much we care about editing content later without touching code (affects Module 4 tooling).

## Ground rules (from CLAUDE.md)
- I guide; you write the code. I won't dump finished files on you.
- Every real fork in the road comes with alternatives and a recommendation.
- We verify each step in the browser before moving on.
