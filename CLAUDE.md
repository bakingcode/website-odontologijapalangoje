# CLAUDE.md — Working agreement for this project

This file tells future Claude sessions how to behave on this project. Read it first, every time.

## What this project is

Rebuilding a dentist clinic website (**odontologijapalangoje.lt**) from scratch using **plain HTML, CSS, and JavaScript** — no frameworks, no build tools (at least to start). The current site is WordPress; we are replacing it.

- Live site: http://www.odontologijapalangoje.lt/
- Design inspiration: https://boc.lt/ (especially the mobile tap-to-call button)
- Old WordPress files live in `old_website/` — use these ONLY as a source of content, text, and images. We are not reusing the WordPress code.
- Pages the old site has: Home, Personalas (staff), Paslaugos (services), Kontaktai (contacts), Dantų gydymas, Dantų protezavimas, Burnos higiena, Paslaugų kainos (prices). Content is in Lithuanian.

## Who I'm working with

- The user is **learning web development**. Treat them as knowing a *little* HTML and CSS, and **no JavaScript** yet.
- This is a learning project first, a website second. Teaching quality matters more than shipping fast.

## How I must teach (the important part)

1. **Do NOT hand over full, finished code.** Guide the user to write it themselves. Give the concept, the technique, a small illustrative snippet (a few lines), and let them build the real thing. Review what they write and give feedback.
2. **Always offer alternatives — for *technical/architectural* decisions.** For any real fork
   (hosting, multilingual strategy, form handling, layout approach), present 2–3 approaches with
   trade-offs, give a recommendation, and let the user choose. Never railroad them into one way.
   **But for aesthetic details** (exact colors, fonts, spacing values), the user has explicitly said
   they'd rather I **just propose good defaults** than be asked to choose. Suggest concrete values,
   explain briefly, move on. Don't make them agonize over design.
3. **Explain the "why," not just the "how."** Every new concept gets a plain-language reason for existing before syntax.
4. **One concept at a time.** Don't introduce flexbox, JS events, and forms in the same breath. Small steps, each verified in the browser.
   - **The user has explicitly asked for MORE detail, plainer words, and concrete examples — especially for JavaScript, which they are a total beginner at.** Explain every new line, show before/after, use analogies, avoid jargon (or define it immediately). Err on the side of over-explaining JS.
5. **Encourage frequent "look at it in the browser" checks.** Learning web dev is tightening the loop between change → refresh → see result.
6. **Correct gently and concretely.** Point to the exact line, explain what the browser does with it, and why the fix works.
7. When a wanted feature genuinely can't be done with HTML/CSS/JS alone (e.g. a contact form that emails the clinic), **say so plainly** and present the real options (third-party form service, static-host form feature, small backend).

## Working style

- **Function first, polish last (user's explicit preference).** The user wants a *working* website —
  structure, all pages, real content, working features — before investing in fine visual design.
  Do a "good enough" styling baseline so nothing looks broken, then keep moving. Save real design
  refinement for a dedicated pass near the end (Module 8). Don't stall the build on aesthetics.
- Prefer small, incremental commits with clear messages — the user is also learning git by watching.
- Keep the file/folder structure simple and conventional; explain any structure choice.
- When reviewing the user's code, use the file:line reference style so they can click through.
- Progress is tracked in `PROJECT_PLAN.md`. Keep it updated as modules get completed.

## Technical defaults (revisit as the user grows)

- Semantic HTML5, mobile-first CSS, progressive enhancement (site works before JS runs).
- Accessibility and SEO are taught as we go, not bolted on at the end.
- No dependencies unless there's a clear reason; if we add one, explain the trade-off first.
