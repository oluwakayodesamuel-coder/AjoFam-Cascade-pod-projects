# AjoFam

<img src="image/ajofam-mark.svg" alt="AjoFam" width="72" />

**Your contribution. Your turn. Your record.**
*A simple digital home for ajo, esusu and adashe groups.*

Built by **Pod Cascade**. Static HTML, CSS and vanilla JavaScript — no build
step, no framework, no dependencies.

---

## Table of contents

- [The problem](#the-problem)
- [What we're building](#what-were-building)
- [Brand thinking](#brand-thinking)
- [Running the site](#running-the-site)
- [Project structure](#project-structure)
- [Page map](#page-map)
- [Design system](#design-system)
- [Responsive behaviour](#responsive-behaviour)
- [Accessibility](#accessibility)
- [JavaScript](#javascript)
- [Editing guide](#editing-guide)
- [Known limits / next steps](#known-limits--next-steps)
- [Changelog — production-readiness pass](#changelog--production-readiness-pass)
- [The team](#the-team)

---

## The problem

Ajo (also known as esusu or adashe) is a rotational savings system where a group
of people contribute money regularly and take turns receiving the pooled amount.
It is built entirely on trust — but most groups still manage that trust with
paper notebooks, WhatsApp messages, spreadsheets, bank-transfer screenshots,
manual calculations, and memory.

This creates real problems for coordinators and members alike:

- Difficulty tracking who has paid and how much
- Forgotten contribution deadlines
- Miscalculated contributions or balances
- Lost physical records
- No transparency once a group grows past a handful of people
- Disputes over payments and outstanding balances

Without a reliable record, members can't confirm their own contribution history
or the group's financial status — and since ajo runs on trust, unclear records
breed confusion, suspicion, and disagreements. Coordinators end up spending most
of their time tracking payments and chasing reminders instead of running the
group.

This affects market traders, artisans, small business owners, salary earners,
and any community or family group running a collective savings circle.

## What we're building

**AjoFam** brings the core activities of running an ajo group into one place. It
gives members a clear, shared record where they can:

- See the rotation order and who is collecting next
- See each member's contribution for the current cycle
- Track contribution history, outstanding balances, and missed payments
- Understand contribution amounts and schedules
- Get reminders when contributions are due
- Understand what happens when a member misses or delays a payment, per the
  group's own rules
- Monitor the group's progress through a simple dashboard

AjoFam doesn't try to change how ajo works — it replaces unreliable memory and
scattered records with one transparent, shared digital record.

> **AjoFam — bringing clarity to the money, so the trust can stay with the people.**

### An important product boundary

**AjoFam never holds, receives or moves money.** It is a record, not a bank or a
wallet. Contributions move exactly the way the group already moves them — cash
to the coordinator, bank transfer, or mobile money. No fee is taken from the
pot. This is stated plainly on [`trust.html`](trust.html) because it is the
first thing a cautious group will want to know, and it keeps the product clear
of the "don't look like a bank" brand rule.

## Brand thinking

**Brand idea:** *"Everyone knows where they stand."*

The name comes from "Ajo" + "Fam" (family) — a trusted financial family. The
brand is built on five pillars:

| Pillar | Meaning |
|---|---|
| **Clarity** | The most important information should be visible without searching |
| **Trust** | Clear records support trust between people |
| **Community** | Ajo is people helping people |
| **Accountability** | Facts without public shaming |
| **Simplicity** | If someone understands the notebook, they understand AjoFam |

**Voice:** friendly, clear, trustworthy, simple, and non-judgemental — talk like
a helpful member of the group, use words people already know (paid, pending,
missed, next, collect), and show missed payments as information, not shame.

**Every group page answers four questions at a glance:**

1. Who is collecting next?
2. Who has contributed?
3. Where are we in the rotation?
4. What happens if someone misses?

These four questions are rendered literally as a section on the home page, and
they drive the layout of [`dashboard.html`](dashboard.html).

**Don'ts:** don't look like a bank or a spreadsheet, don't use fintech jargon,
don't shame members for missed payments, don't hide key information behind extra
clicks.

## Running the site

There is no build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

A local server is recommended over `file://` so that root-relative behaviour and
the 404 page work the way a host will serve them.

**Deploying:** upload the repository as-is to any static host (GitHub Pages,
Netlify, Vercel, Cloudflare Pages). `404.html` is picked up automatically by
GitHub Pages and Netlify.

## Project structure

```
.
├── index.html            Landing page
├── problem.html          The Problem
├── how-it-works.html     How It Works
├── dashboard.html        The Main Page (live group page)
├── details.html          The Details (single member record)
├── trust.html            Trust & Verification
├── request.html          Get Started (group set-up form)
├── faq.html              Guide & FAQ
├── pod.html              The Pod (team + brand sheet)
├── contact.html          Contact
├── 404.html              Not-found page
│
├── Css-style/
│   ├── Brand.css         Design system — tokens + every shared component
│   ├── landing.css       Page-specific styles
│   ├── problem.css
│   ├── how-it-works.css
│   ├── dashboard.css
│   ├── details.css
│   ├── trust.css
│   ├── request.css
│   ├── guide-faq.css
│   ├── pod.css
│   ├── contact.css
│   └── notfound.css
│
├── js/
│   └── site.js           Nav drawer, dropdown, accordion, reveal, form handling
│
└── image/
    ├── ajofam-mark.svg   The Ajo Loop — logo used across the site
    ├── favicon.svg       Browser tab icon
    └── Ajo-fam-logo.png  Original illustrated logo (kept for reference/social)
```

**Every page loads `Brand.css` first, then its own stylesheet.** Page
stylesheets only add what is unique to that page; anything reused by two or more
pages belongs in `Brand.css`.

## Page map

| Page | Purpose | Owner |
|---|---|---|
| [`index.html`](index.html) | The brand idea, the problem in brief, the solution, and the four questions | Oluwakayode Samuel Ojo |
| [`problem.html`](problem.html) | The full research: today's tools, six failure modes, what it costs, who it affects | Omolafe Joshua |
| [`how-it-works.html`](how-it-works.html) | The ajo loop, eight-step process, and a worked five-member example | Akinade Hassan |
| [`dashboard.html`](dashboard.html) | A live group page — rotation order, this week's contributions, the group's rules | — |
| [`details.html`](details.html) | One member's full record, week by week, plus the group terms | Ogunniyi Roseline |
| [`trust.html`](trust.html) | How a payment becomes a record, who can change it, corrections, data handling | Ogunniyi David |
| [`request.html`](request.html) | Group set-up form and the five default rules | Ogunwale Felix |
| [`faq.html`](faq.html) | Four categories of plain-language Q&A plus a glossary | Edward Wisdom Michael |
| [`pod.html`](pod.html) | The team, the brand pillars, and the live brand sheet | Oluwatosin Amos Odesola |
| [`contact.html`](contact.html) | WhatsApp, email and a contact form | Ogunlade Korede |

## Design system

All tokens live in `:root` at the top of [`Css-style/Brand.css`](Css-style/Brand.css).

### Colour

| Token | Value | Use |
|---|---|---|
| `--green` | `#176B4D` | Ajo Green — primary. Buttons, links, the loop |
| `--green-deep` | `#0F4E38` | Hover states, headings on light panels |
| `--green-ink` | `#0B3728` | Dark sections, footer, ledger headers |
| `--ink` | `#18221D` | Deep Charcoal — body text and UI |
| `--cream` | `#F8F6EF` | Warm Cream — page background |
| `--mint` | `#DCEFE5` | Fresh Mint — supporting and positive states |
| `--gold` | `#D5A83A` | Contribution Gold — key moments ("next to collect") |
| `--red` | `#C94C4C` | Alert Red — missed and overdue, used sparingly |

Derived tokens (`--ink-body`, `--ink-muted`, `--ink-faint`, `--gold-deep`,
`--red-deep`, `--surface-raised`, `--line`) exist so that text contrast is
handled once rather than guessed per page. `--gold-deep` and `--red-deep` are
darkened variants used for *text* on gold/red tints, where the raw brand colour
would not meet contrast requirements.

### Typography

- **DM Sans** — display and headings (`--font-display`)
- **Inter** — body, navigation, records, buttons (`--font-body`)

Sizes use a fluid `clamp()` scale, `--step--1` through `--step-5`, so headings
scale smoothly between mobile and desktop without breakpoint jumps.

### Status language

Five states, driven by one `.stamp` component:

| Class | Reads as | Colour |
|---|---|---|
| `.stamp.paid` | Paid | Mint / green |
| `.stamp.pending` | Pending | Neutral |
| `.stamp.missed` | Missed | Red tint |
| `.stamp.next` | Next to collect | Gold |
| `.stamp.collecting` | Collecting | Solid green |

Each stamp's icon is a **CSS mask on an inline data-URI SVG**, coloured by
`currentColor`. There are no emoji or icon fonts anywhere in the project — see
[Changelog](#changelog--production-readiness-pass).

### Shared components

Defined once in `Brand.css` and reused across pages:

`.wrap` · `.section` · `.section-ink` · `.section-mint` · `.section-paper` ·
`.kicker` · `.lede` · `.section-head` · `.button` (+ `.ghost`, `.on-ink`,
`.small`, `.block`, `.has-arrow`) · `.text-link` · `.card` / `.card-grid` ·
`.stamp` / `.stamp-legend` · `.ledger-card` (+ `.ledger-head`, `.next-banner`,
`.ledger-row`, `.ledger-foot`) · `.data-table` / `.table-scroll` · `.stat` /
`.stat-grid` · `.checklist` · `.cross-list` · `.step` / `.steps` · `.rule` /
`.rules-list` · `.accordion` · `.callout` · `.form-card` / `.field` / `.choice` ·
`.page-header` / `.breadcrumb` · `.cta-band` · `.site-footer`

## Responsive behaviour

The site is fluid rather than fixed-breakpoint. Layouts use
`repeat(auto-fit, minmax(min(100%, Npx), 1fr))` so grids reflow on content
width, and `min(100%, …)` prevents the classic overflow at very narrow widths.

Deliberate breakpoints:

| Width | Behaviour |
|---|---|
| `> 1080px` | Full horizontal nav with dropdown, inline CTA button |
| `≤ 1080px` | Hamburger opens an off-canvas drawer; CTA moves inside the drawer |
| `≤ 920px` | Two-column form/contact layouts stack; sticky sidebars unstick |
| `≤ 900px` | Hero, solution, detail and FAQ splits go single-column |
| `≤ 560px` | Tighter chips, glossary rows stack |
| `≤ 420px` | Ledger rows drop the status stamp onto its own line |

Wide content (every data table) is wrapped in `.table-scroll`, which scrolls
horizontally *inside its own container* — the page body never scrolls
sideways.

## Accessibility

- Skip link to `#main` on every page
- One `<h1>` per page, headings in order
- `aria-current="page"` on the active nav item; the dropdown parent is marked
  `is-current` when one of its children is active
- The mobile drawer toggle is a real `<button>` with `aria-expanded` /
  `aria-controls`; Escape closes it and returns focus to the toggle
- Visible `:focus-visible` outline in brand green on all interactive elements
- Decorative SVGs and avatar initials are `aria-hidden`; meaningful SVGs carry
  `<title>` and `<desc>`
- Tables use `<caption>` (visually hidden), `<thead>` and `scope="col"`
- Form fields have real `<label>`s; grouped inputs use `<fieldset>` / `<legend>`
- Form confirmation uses `role="status"` and moves focus
- `prefers-reduced-motion: reduce` disables transitions, animations and scroll
  reveal
- Text contrast on tinted surfaces uses the darkened `--*-deep` tokens

## JavaScript

[`js/site.js`](js/site.js) is ~150 lines of dependency-free, progressively
enhanced script. **Every page is fully readable and navigable with JavaScript
disabled** — `<html class="no-js">` is cleared on load, and the reveal animation
defaults to visible.

It handles:

1. **Mobile drawer** — open/close, scrim click, Escape, close on link tap,
   body scroll lock, auto-close when resizing back to desktop
2. **Nav dropdown** — click to toggle with `aria-expanded`, closes on outside
   click and Escape (CSS hover still works on desktop as a fallback)
3. **Scroll reveal** — `IntersectionObserver`, with a no-observer fallback that
   simply shows everything
4. **Accordion** — `data-exclusive` groups keep one panel open at a time
5. **Demo forms** — `data-demo-form` intercepts submit, validates, and shows an
   in-place confirmation instead of posting to a non-existent endpoint
6. **Footer year** — `[data-year]` is filled from the client clock

## Editing guide

**Changing a colour or spacing value** — edit the token in `:root` in
`Brand.css`. Do not hard-code hex values in page stylesheets.

**Adding a status** — add a `.stamp.<name>` rule next to the existing five and
give it an `--ico-*` mask. Do not introduce an emoji.

**Adding a page** — copy the `<head>`, header and footer from any existing page
verbatim, change the `<title>`, `<meta name="description">`, the `og:` tags, the
page stylesheet link, and move `aria-current="page"` to the right nav item. The
header and footer markup is byte-identical across all 11 pages; keep it that
way.

**Adding a nav item** — it must be added to all 11 pages. The desktop nav is
close to full at 1080px; prefer adding to the "The Group Page" dropdown or the
footer rather than the top level.

## Known limits / next steps

This is a **front-end prototype**. Specifically:

- **No back end.** Both forms (`request.html`, `contact.html`) are intercepted
  by `site.js` and confirm in place. They do not send anything. Wiring them up
  means adding an `action`/`method` (or a `fetch`) and removing the
  `data-demo-form` attribute.
- **All group data is static markup.** The ledgers, rotations and member records
  are hand-written HTML illustrating a realistic group, not live data.
- **No authentication.** Roles are described on `trust.html` but not enforced.
- **Fonts load from Google Fonts.** For an offline-capable or
  privacy-stricter deployment, self-host DM Sans and Inter.
- **`Ajo-fam-logo.png` is 1.1 MB** and is now only referenced as the
  `apple-touch-icon` and `og:image`. It should be resized (a 512×512 PNG is
  ample) before a real launch.

## Changelog — production-readiness pass

This pass rebuilt the site's shell, design system and content while keeping the
brand, the copy direction and each member's page ownership intact.

### Fixed — broken things

- **Dead navigation links.** Every page linked to `problem.html` and
  `dashboard.html` (and `how-it-works.html` linked to `main-page.html`) — none
  of which existed. Both pages have now been written, and the stray
  `main-page.html` link is gone.
- **Divergent navigation.** The nav markup had drifted between pages: differing
  link sets, and `trust.html` marked *Contact* as the active page. The header
  and footer are now byte-identical on all 11 pages, with `aria-current` set
  correctly per page.
- **Missing doctype.** `index.html` had no `<!doctype html>`, putting it in
  quirks mode.
- **Fonts loaded inconsistently.** Only some pages loaded Google Fonts, so
  DM Sans and Inter silently fell back elsewhere. `request.html` loaded
  *Fraunces* and *Public Sans* — neither is a brand typeface. All pages now
  load the same two families.
- **Invisible button.** The FAQ sidebar's "Ask the team" button rendered dark
  green on dark green, because `.faq-nav a` out-specified `.button`. Sidebar
  link styles are now scoped to `.faq-nav ul a`.
- **Clipped table rows.** The dashboard ledger cards had a `max-height` that
  sliced a member row in half mid-stamp. Removed.
- **Inline styles.** `details.html` carried a dozen `style="…"` attributes.
  All replaced with classes.

### Fixed — off-brand content

- **`details.html` was selling a different product.** It described "on-chain"
  weekly verification, a "smart lock escrow", "ledger hashes" and an "Audit
  Contribution Hash" button. This directly contradicts the brand sheet's *don't
  use fintech jargon* and *don't look like a bank* rules. The page has been
  rewritten as what it was meant to be: one member's plain-language record, week
  by week, including what a missed week meant and how it was cleared.
- **`trust.html` had no trust content** — it was a copy of the landing hero. It
  is now a real Trust & Verification page: the money boundary, the four-step
  verification path, a who-can-do-what table, dispute handling, and data
  handling.
- **`pod.html` was a second landing page.** It is now the Pod Cascade team page,
  with the brand pillars, a live brand sheet (colour, type, status language) and
  the explicit "what we ruled out" list.
- **`faq.html` was actually a group dashboard.** Its dashboard content moved to
  the new `dashboard.html`; `faq.html` is now a genuine guide — four Q&A
  categories, a status-word primer, and a glossary.

### Removed — emoji and stickers

Per the brand and the request, **no emoji or sticker glyphs remain** anywhere in
the HTML, CSS or JS. Removed: `☰ ↻ ▤ ✓ ● ✕ ★ → ■` and the `⏰` alarm-clock
emoji on the old trust page. Replaced with:

- **CSS mask icons** from inline data-URI SVGs (check, dot, cross, star, arrow,
  loop), coloured by `currentColor` so they inherit each state's colour
- **A CSS-drawn hamburger** that animates into a close icon
- **CSS-drawn chevrons** (rotated borders) for the dropdown and accordion

### Added

- `problem.html`, `dashboard.html` — the two pages the nav had been pointing at
- `404.html` — with routes back into the site
- `js/site.js` — the site had no JavaScript at all; the old mobile menu was a
  checkbox hack with no `aria-expanded`, no Escape handling and no scroll lock
- `image/ajofam-mark.svg` and `image/favicon.svg` — a proper **Ajo Loop** mark
  (circle + arrow + centre dot), matching the brand sheet's described logo.
  The previous PNG was a 1.1 MB raster illustration on an opaque **white**
  background, which showed as a white box against the cream page and was
  unreadable at 38 px. It is retained for social/touch-icon use.
- Per-page `<title>`, `<meta name="description">`, Open Graph and Twitter card
  tags; `theme-color`; SVG favicon
- Skip links, breadcrumbs, `<caption>`s, `aria-*` wiring (see
  [Accessibility](#accessibility))
- A print stylesheet that drops the chrome and flattens shadows

### Rebuilt

- **`Brand.css` is now a real design system** — a token layer plus ~20 shared
  components. The eight original stylesheets repeated the nav, footer, buttons,
  cards and stamps with slightly different values in each; page stylesheets are
  now thin (1–4 KB) and only hold what is unique to their page.
- **Fluid type and space scales** replace fixed pixel sizes.
- **Every page's layout was rebuilt** on the shared components, which is what
  makes the site consistent and genuinely responsive rather than merely
  not-broken at one width.

### Verified

- All 11 pages: every internal link and asset path resolves (0 broken)
- All 11 pages: one `<h1>`, `#main` landmark, skip link, shared nav and footer
- No emoji or pictograph codepoints in any `.html`, `.css` or `.js`
- Rendered in headless Chrome at 1400 px and 390 px; no horizontal page scroll
- Dead CSS aliases removed after a usage scan

## The team

| Member | Page | Role |
|---|---|---|
| **Oluwakayode Samuel Ojo** *(Leader)* | Landing Page | Brand keeper |
| Omolafe Joshua | The Problem | Research keeper |
| Akinade Hassan | How It Works | Brand sheet owner |
| Ogunniyi Roseline | The Details | Consistency check |
| Ogunniyi David | Trust & Verification | Accessibility check |
| Ogunwale Felix | Get Started | Forms and flows |
| Edward Wisdom Michael | Guide & FAQ | Copy and tone |
| Oluwatosin Amos Odesola | The Pod | README owner |
| Ogunlade Korede | Contact & Site Shell | Navigation and deploy |

---

**Contact** — [ajofambuild@gmail.com](mailto:ajofambuild@gmail.com) ·
[WhatsApp 0813 480 6343](https://wa.me/2348134806343)

*AjoFam isn't trying to change how people save together — it's simply making the
contributions, rotation, and rules easier for everyone to see.*
