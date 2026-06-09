# Project Brief — Elle Summary (freemium-doc-review-v1-hifi)

## Project Description
A hi-fi desktop prototype of Elle Summary — an AI-powered document review experience using LegalShield's AI assistant, Elle. Built to match Figma designs as closely as possible in colors, typography, spacing, and interactions.

## Concept
**Elle Summary — Variant 1: Partial Reveal / Curiosity Model**
Users see a teaser of document issues but must provide their email to unlock the full summary.

## Screens & Routes

| Screen | Route | Phase |
|--------|-------|-------|
| Homepage | `/` | Phase 2 |
| Marketing Landing Page | `/get-a-free-document-review` | Phase 3 |
| Upload Screen | `/upload` | Phase 4 |
| Processing State | `/processing` | Phase 5 |
| Partial Results + Email Gate | `/partial-results` | Phase 6 |
| Full Reveal | `/full-reveal` | Phase 7 |

## Tech Stack
- React 18 + Vite 5
- React Router DOM v6
- Plain CSS Modules (no Tailwind, no styled-components)
- Design tokens via `design-tokens.css` (imported at root in `src/index.css`)

## Design System
**Stratos DS**
- Tokens: `design-tokens.css` (project root)
- Component specs: `stratos-components.md` (project root)
- Fonts: ABC Otto (`--font-primary`) + Instrument Rounded (`--font-secondary`) in `public/fonts/`
- ABC Otto: headings and display text only
- Instrument Rounded: buttons, labels, UI elements, stats figures, pricing figures
- Never hardcode colors, spacing, or typography — always use CSS variables

## Phase Plan
- **Phase 1** ✅ — Project setup, shared Nav + Footer, routing scaffold
- **Phase 2** ✅ — Homepage — all sections complete and approved
- **Phase 3** ✅ — Marketing Landing Page — complete and approved
- **Phase 4** ✅ — Upload Screen — complete and approved
- **Phase 5** ✅ — Processing State — complete and approved
- **Phase 6** ✅ — Partial Results + Email Gate — complete and approved
- **Phase 7** ✅ — Full Reveal — complete and approved
- **Phase 8** ✅ — GitHub + Vercel Deployment — complete

## Phase 2 — What Was Built
All homepage sections in order:
- Hero: two-column vertical marquee (col 1 scrolls up, col 2 scrolls down), headline, body, purple CTA button
- Stats bar: 4.5M / 22 yrs / $1/day — centered, Instrument Rounded font, separated from hero with border
- "One simple legal solution. Zero hourly rates." — two-column with family-of-4.png image left, FAQ accordion right (first row interactive)
- Awards banner: dark green (`--color-secondary-green`), ABC Otto heading, 4 Forbes badge images at 120px height
- Logo cloud: "FEATURED IN" eyebrow (centered), 5 media logos (centered, grayscale)
- "How we help" carousel: ABC Otto heading, prev/next buttons inline on the right, 4-card view with slide interaction
- "How it works": 3 alternating steps with images
- Testimonial: italic ABC Otto quote, `--color-secondary-cream` background
- Pricing: 3 equal-height cards, Instrument Rounded price figures, purple and secondary CTAs
- FAQ: centered heading + centered Help Center button, first row interactive
- CTA: "Ready to get legal help?" warm background (`--color-neutral-warm-200`), purple button
- Footer: reused from Phase 1

## Phase 2 — Corrections Made During Review
- Stats section: given clear visual separation (border) from hero; content centered; font switched from ABC Otto to Instrument Rounded
- Forbes banner: padded taller (64px), badge images enlarged to 120px, text switched to ABC Otto H5
- Logo cloud: added "FEATURED IN" eyebrow label; logos enlarged to 40px; centered
- "How we help": heading switched from eyebrow/Instrument Rounded to ABC Otto H3; prev/next buttons moved inline with heading on the right
- Pricing cards: price figures switched from ABC Otto to Instrument Rounded; cards set to equal height with `align-items: stretch`
- FAQ: heading and Help Center button changed from left-aligned to center-aligned
- CTA banner: background changed from `--color-neutral-black` (dark) to `--color-neutral-warm-200` (light warm)

## Key Constraints
- Target viewport: 1440px desktop, fixed width, centered — content does not stretch
- Layout margins: 66px left and right on all screens
- All copy pulled directly from hi-fi mockup reference images
- All images pre-supplied in `public/images/` — no placeholder images where real assets exist
- Nav: only "Get a free document review [AI]" is clickable (routes to marketing landing page); hover underlines text; "AI" is a small purple badge inline with the nav link
- Footer: links do not need to work
- File upload accepts PDF and .doc only, opens real file browser
- Processing uses simulated delay — no real API call
- Partial results: 3 visible, 5 blurred; email gate inline (not modal)
- Full reveal: issues section scrollable; bottom CTA fixed to widget bottom
- No GitHub/Vercel until Phase 8

## Phase 3 — What Was Built
- Hero: center-aligned, warm bg (`#F5F4EE`), H2 headline, subtext below (32px gap)
- Elle Document Review Widget: two-column; left has eyebrow "MEET ELLE · YOUR AI ASSISTANT", H3 heading, body copy, 3 purple checkmark trust signals; right has gray card (`#F4F4F5`) with white dashed upload zone, purple circle upload icon, "Upload document" CTA, drag text, accepted formats, legal disclaimer
- FAQ: centered heading + Help Center button, first row interactive only
- Benefits of Elle: two-column with laptop image left, accordion right (first row interactive)
- Pricing: 3-card layout matching homepage (Personal & Family / Small Business / Enterprise)
- Footer: reused from Phase 1
- Selecting a file on this page navigates to `/upload`

## Phase 3 — Corrections Made During Review
- Hero: headline and subcopy order swapped (headline first, subtext below)
- Widget section: background changed from warm to white (clearly separated from hero)
- Spacing between headline and subcopy set to 32px
- Upload card: outer card background changed to `#F4F4F5` (surface/muted gray); inner dashed zone remains white; accepted formats and disclaimer moved outside the dashed zone onto the gray card background; drop shadow removed

## Phase 4 — What Was Built
- Same page layout as Marketing Landing Page (hero, left widget column, FAQ, Benefits, Pricing, Footer)
- Upload widget right column shows the uploaded file confirmed state: dark circle checkmark icon, filename ("Service_Contract_2026.doc") in semibold, muted file size, "Change file" underlined link — all stacked and center-aligned inside the dashed zone
- "Review my document" black button below the dashed zone, centered and auto-width (not full-width)
- Accepted formats and legal disclaimer hidden in this state
- "Change file" opens real file picker; "Review my document" navigates to `/processing`

## Phase 5 — What Was Built
- Same page layout as Marketing Landing Page
- Processing widget: spinning CSS loader, rotating value props (5 phrases cycling every 1.2s), hint text "Usually ~20 seconds · Don't close this window"
- Auto-advances to `/partial-results` after 6 seconds

## Phase 6 — What Was Built
- Same page structure (hero, FAQ, Benefits, Pricing, Footer)
- Widget section rebuilt with custom layout: eyebrow + H3 heading above two columns, tighter gap (24px)
- Left column: warm surface background (`--color-surface-warm-default`), realistic contract text (Wedding Photography Services Agreement with 6 numbered sections), "Preview · page 1 of 12" label, encryption note below column
- Right column: light purple background (`--color-accent-subtle-bg`), "POWERED BY ELLE" header with shield icon, Document Summary section, Issues Found label with count badge (8), 3 visible issue cards, 4th card blurred with fade gradient, inline email gate (headline, subtext, email+arrow input, fine print)
- Email input uses inline arrow submit button (not full-width button); fine print below: "By signing up, you agree to receive emails from LegalShield. View our Privacy Policy."
- Email gate is not sticky — flows naturally at bottom of scrollable panel
- Valid email navigates to `/full-reveal` after 800ms; invalid shows inline error

## Phase 6 — Corrections Made During Review
- Added missing eyebrow "MEET ELLE — YOUR AI ASSISTANT" and H3 "Get your document reviewed" above two-column layout
- Column gap tightened from 80px to 24px
- Left column background changed from white to `--color-surface-warm-default`
- Replaced gray placeholder lines with realistic dummy contract (Wedding Photography Services Agreement)
- Added "Preview · page 1 of 12" and encryption note below left column
- Right column background changed from white to `--color-accent-subtle-bg` (light purple)
- Right panel structure rebuilt: POWERED BY ELLE → Document Summary → Issues Found count → 3 visible cards → 1 blurred card with fade → email gate
- Email input changed from full-width button to inline input+arrow pattern
- Added fine print below email gate
- Email gate confirmed non-sticky (inline scroll)

## Phase 7 — What Was Built
- Same page structure as partial-results (hero, Elle widget section, FAQ, Benefits, Pricing, Footer)
- Widget section rebuilt with same two-column layout: eyebrow + H3 heading above columns, gap: 0 between columns
- Left column: same warm surface background, white inner contract card (max-height 600px, scrollable), "Preview · page 1 of 12" label 24px below card, encryption note below that
- Right column: light purple background, white inner Elle card with POWERED BY ELLE header, Document Summary, Issues Found label + count badge (8), all 8 issue cards fully visible and unblurred, scrollable issues area (max-height 500px)
- "Elle's bottom line" CTA pinned to bottom of right column: label in ABC Otto H6 regular, subcopy in Instrument Rounded paragraph SM regular, black "Subscribe to speak to a lawyer" button (centered) with 16px margin-top — clicking scrolls to pricing section via `useRef` + `scrollIntoView`
- Email gate removed entirely on this screen — replaced by the CTA

## Phase 7 — Corrections Made During Review
- "Elle's bottom line" label changed from Instrument Rounded semibold to ABC Otto H6 (24px, 28.8px line-height, regular weight)
- Subcopy changed from ABC Otto to Instrument Rounded paragraph SM (14px / 21px, regular)
- Black button changed from left-aligned to center-aligned
- 16px margin-top added between subcopy and button
- Phase 6 widget also updated this session: blurred cards expanded from 1 to 5, two-column layout restructured with proper nested containers (outer columns flush, inner white cards for content), email gate repositioned to be pinned to bottom of right column with upward box shadow, column corners rounded (12px), bottom padding added to widget section (64px matching top), email gate headline changed to ABC Otto H6

## Post-Launch Tweaks (Session — 2026-06-05)

### Pricing Section (all funnel pages: marketing landing, upload, processing, partial results, full reveal)
- Enterprise card removed
- Remaining 2 cards (Personal & Family, Small Business) centered using `repeat(2, minmax(0, 480px))` + `justify-content: center`



### Upload Screen (`/upload`)
- Checkmark icon background changed from `--color-neutral-black` to `--color-action-primary-default` (accent purple)
- "Review my document" button changed from black to `--color-action-primary-default` (accent purple); hover uses `--color-action-primary-hover`

### Partial Results + Full Reveal (`/partial-results`, `/full-reveal`)
- `.elleCard` bottom corners flattened: `border-radius` changed from `8px` to `8px 8px 0 0`
- "Powered by Elle" header divider changed from light purple (`rgba(105, 43, 238, 0.15)`) to `--color-border-default` (standard grey)

## Current Status
**Desktop: all phases complete and pushed.** Repo live at https://github.com/kclwork/docreviewv1-hifi. Deployed to Vercel manually by user.

---

# Mobile V1 — `/mobile-v1` Funnel

A mobile-specific build of the same Elle Summary V1 funnel, added under `/mobile-v1` without touching any existing desktop screens or shared components. Designed at 375px width, fluid above, 28px page margins, 44×44 minimum tap targets, no hover states.

## Mobile Routes

| Screen | Route |
|--------|-------|
| Mobile Homepage | `/mobile-v1` |
| Mobile Marketing Landing | `/mobile-v1/get-a-free-document-review` |
| Mobile Upload | `/mobile-v1/upload` |
| Mobile Processing | `/mobile-v1/processing` |
| Mobile Partial Results + Email Gate | `/mobile-v1/partial-results` |
| Mobile Full Reveal | `/mobile-v1/full-reveal` |

## Mobile Phase Plan
- **Phase 1** ✅ — Setup + Mobile Nav + Mobile Menu Overlay + Mobile Homepage
- **Phase 2** ✅ — Mobile Marketing Landing + Mobile Upload
- **Phase 3** ✅ — Mobile Processing State
- **Phase 4** ✅ — Mobile Partial Results + Email Gate
- **Phase 5** ✅ — Mobile Full Reveal
- **Phase 6** ⏳ — End-to-End Mobile Flow QA (pending)
- **Phase 7** ⏳ — GitHub Push & Vercel Deploy of mobile build (pending)

## Mobile Phase 1 — What Was Built
- `src/components/mobile/MobileNav.jsx` — sticky header (LegalShield logo left, hamburger right, 44×44 tap target)
- `src/components/mobile/MobileMenuOverlay.jsx` — full-viewport white overlay, X close top right, no logo. Primary items (Personal / Business / Resources / Pricing / Get a free document review [AI]) use Instrument Rounded Paragraph XL (22px / 33px) regular weight, primary text color. Only "Get a free document review [AI]" is clickable → `/mobile-v1/get-a-free-document-review`. Utility items (Sign In / Search / Cart / Call Us) with icons stacked at the bottom.
- `src/components/mobile/MobileFooter.jsx` — dark footer with newsletter, 4 stacked link columns, country/app/legal rows
- `src/pages/mobile/MobileHomepage.jsx` at `/mobile-v1` — full mobile homepage in this order:
  1. Hero — copy first (headline, body, purple Shop plans), horizontal infinite marquee of 6 hero images below
  2. Stats — 4.5M / 22 yrs / $1/day inline with dividers
  3. One simple legal solution — family-of-4 image + 4-row FAQ accordion (row 1 interactive)
  4. Awards — dark green section, ABC Otto headline, Forbes 2x2 grid 2023→2026
  5. Logo cloud — FEATURED IN eyebrow + 5 grayscale logos
  6. How we help — single-card carousel with prev/next chevrons below (cards not tappable)
  7. How it works — 3 stacked steps with images
  8. Testimonial — italic ABC Otto, cream background
  9. Pricing — 2 stacked cards (Personal & Family / Small Business)
  10. FAQ — 4 rows (row 1 interactive) + Help Center button
  11. Ready to get legal help CTA — warm-200 background
  12. Mobile footer

### Mobile Phase 1 — Deviations / Corrections
- Initial hero ordering had marquee first then copy; swapped per user request so headline + body + CTA come first, marquee below
- Menu overlay initial implementation used ABC Otto 36px; switched to Instrument Rounded Paragraph XL (22px / 33px, regular, primary text) per user request

## Mobile Phase 2 — What Was Built
- `src/components/mobile/MobileFunnelSections.jsx` — shared mobile sections (`MobileMktHero`, `MobileElleFaq`, `MobileBenefits`, `MobilePricing`) reused across all funnel pages from the marketing landing page onward
- `src/pages/mobile/MobileMktLandingPage.jsx` at `/mobile-v1/get-a-free-document-review`:
  - Warm `#F5F4EE` hero with centered "Understand any legal document in minutes" + subtext
  - Elle widget: eyebrow text "MEET ELLE • YOUR AI LEGAL ASSISTANT" in primary purple uppercase, "Get your document reviewed" ABC Otto headline, body copy, 3 trust signals with purple checkmarks
  - Dashed-border upload card with purple circle upload icon, purple "+ Upload document" CTA bound to real `<input type="file" accept=".pdf,.doc,.docx,...">`; selecting a file navigates to `/mobile-v1/upload`
  - Accepted formats + legal disclaimer below dashed zone
  - FAQ → Benefits → Pricing → footer
- `src/pages/mobile/MobileUpload.jsx` at `/mobile-v1/upload`:
  - Same page structure
  - Confirmed file widget: purple checkmark icon on purple circle, "Service_Contract_2026.doc" semibold, "248 KB" muted, underlined "Change file" link, purple full-width "Review my document" CTA → navigates to `/mobile-v1/processing`
  - Accepted formats and disclaimer hidden in this state

### Mobile Phase 2 — Deviations / Corrections
- Eyebrow originally rendered as a pill; changed to plain eyebrow text (all caps, primary purple, paragraph SM medium weight)
- Pricing section initially used `--color-neutral-warm-200` background; changed to white per user request
- Pricing cards initially had grey borders + white bg; changed to `#EEF1FF` background, no border
- Price figures (e.g. $35) initially semibold 40px; changed to Instrument Rounded H3 (48px) medium weight per user request

## Mobile Phase 3 — What Was Built
- `src/pages/mobile/MobileProcessing.jsx` at `/mobile-v1/processing`:
  - Same page structure as marketing landing/upload (hero, Elle widget area, FAQ, Benefits, Pricing, footer)
  - Widget area shows processing state: dashed-border card with CSS spinning loader (purple ring on light-purple track), filename "Service_Contract_2026.doc" semibold, rotating value prop (5 phrases cycling every 1.2s), hint text "Usually ~20 seconds · Don't close this window"
  - Auto-advances to `/mobile-v1/partial-results` after 6 seconds (matches desktop timing)

## Mobile Phase 4 — What Was Built
- `src/components/mobile/MobileContractModal.jsx` — full-screen white modal triggered by tapping filename, with filename header + X close button (44×44), scrollable Wedding Photography Services Agreement body (6 sections matching desktop). Closes on X tap or backdrop tap.
- `src/pages/mobile/MobilePartialResults.jsx` at `/mobile-v1/partial-results`:
  - Hero + "MEET ELLE - YOUR AI ASSISTANT" eyebrow + "Get your document reviewed" headline above the widget
  - Widget container: 20px rounded corners on all sides, `overflow: hidden`, 16px internal content padding on top and bottom sections
  - **Top section (light purple `--color-accent-subtle-bg`):** POWERED BY ELLE eyebrow with shield icon, tappable filename row (opens contract modal), "Elle flagged 8 issues." H5 headline, subtext, Document Summary accordion (0px vertical padding for tight feel), "ISSUE X OF 8" label, single issue card with severity badge + category + title + 3-line clamped description and "Read more" hint
  - Tap card to expand to full description (locked cards 4–8 not tappable). Issues 1–3 fully readable; issues 4–8 blurred with CSS `filter: blur(4px)`
  - Pagination: prev/next ghost chevrons (44×44) + 8 dots — active dot purple, dots 4–8 muted opacity to signal locked
  - **Bottom section (warm cream `--color-neutral-warm-200`):** "Elle found 5 more issues worth reviewing" headline, "Enter your email to unlock the full review." subtext, pill email input with inline arrow submit, inline error for invalid email, fine print
  - Valid email submission navigates to `/mobile-v1/full-reveal` after 800ms, passing the email via `location.state`
- Route added to `App.jsx`

### Mobile Phase 4 — Deviations / Corrections
- Initial widget had no eyebrow/heading above the rounded container; user requested they be added back ("MEET ELLE - YOUR AI ASSISTANT" + "Get your document reviewed")
- Initial widget structure was a flat two-stacked-sections block; user requested wrapping in a 20px rounded container with `overflow: hidden`
- Initial widget content padding was 32px / 28px / 40px; reduced to 16px on all sides
- "Elle flagged 8 issues." headline was 40px ABC Otto; scaled down to H5 (32px / 35.2px / -0.96 letter-spacing)
- Document Summary accordion padding iterated: 8px → 4px → 0px vertical padding (final)

## Mobile Phase 5 — What Was Built
- `src/pages/mobile/MobileFullReveal.jsx` at `/mobile-v1/full-reveal`:
  - Reuses the same hero + eyebrow + "Get your document reviewed" headline + 20px rounded widget container as partial results
  - **Success banner** placed as the visual header of the widget card itself (first child inside the rounded container, capped by the widget's `overflow: hidden`): soft light green `--color-status-success-subtle` background, filled green circular checkmark icon on left, "Unlocked. Sent full results to **[email]**" text (Instrument Rounded Paragraph XS — 12px / 18px, email bolded). Reads `email` from `location.state` (defaults to `you@example.com` when navigated directly).
  - **Top section** identical to partial results, but all 8 issue cards are fully accessible — no blur filter on cards 4–8, no muted pagination dots; every card is tappable to expand
  - **Bottom section** (replaces email gate): warm `--color-surface-warm-default` (= `--color-neutral-warm-200`) background matching the partial-results email gate, "Elle's bottom line" H6 headline, body copy, full-width black pill CTA "Subscribe to speak to a lawyer" → smooth-scrolls to the Pricing section via `useRef` + `scrollIntoView`
  - Filename row still opens the contract preview modal

### Mobile Phase 5 — Deviations / Corrections
- Success banner was initially placed above the nav as a full-width page banner; user requested it move inside the widget. Iterated to its final position as the capped header of the widget card (rounded top corners inherited from widget container, square bottom, sits flush with light purple section below)
- Bottom section background initially white, then `--color-surface-warm-subtle` (warm-100); finalized to `--color-surface-warm-default` (warm-200) to match the email gate
- Success banner text size iterated: 14px → 10px → 12px (Paragraph XS)

## Mobile — Key Constraints & Rules
- Design target: 375px screen width, 28px left/right page margins, fluid above 375px (content stretches; margins remain 28px)
- Minimum 44×44px tap targets on all interactive elements
- No CSS hover states — touch interface only; use `:active` for press feedback
- Single column layout throughout
- All tokens via `design-tokens.css` (no hardcoded colors, type, spacing)
- ABC Otto for headings and display text only; Instrument Rounded for buttons, labels, UI, stats, pricing figures
- No desktop pages, routes, or shared components modified
- All copy pulled from `references/mobile-v1/` annotated screens
- Mobile nav + menu overlay used on all mobile screens
- Funnel pages 2–5 share `MobileFunnelSections.jsx` (`MobileMktHero`, `MobileElleFaq`, `MobileBenefits`, `MobilePricing`) and the marketing-landing widget eyebrow/heading CSS

## Mobile — Current File Additions
```
src/
├── App.jsx                                            (updated — adds 6 mobile routes)
├── components/
│   └── mobile/
│       ├── MobileNav.jsx / .module.css
│       ├── MobileMenuOverlay.jsx / .module.css
│       ├── MobileFooter.jsx / .module.css
│       ├── MobileFunnelSections.jsx / .module.css     (shared hero/FAQ/Benefits/Pricing)
│       └── MobileContractModal.jsx / .module.css      (shared by partial + full reveal)
└── pages/
    └── mobile/
        ├── MobileHomepage.jsx / .module.css
        ├── MobileMktLandingPage.jsx / .module.css
        ├── MobileUpload.jsx / .module.css
        ├── MobileProcessing.jsx / .module.css
        ├── MobilePartialResults.jsx / .module.css
        └── MobileFullReveal.jsx / .module.css
references/
└── mobile-v1/                                          (Figma reference images + annotations)
```

## Mobile — What's Left
- **Phase 6:** End-to-end mobile flow QA — walk the full funnel (`/mobile-v1` → marketing → upload → processing → partial-results → full-reveal) at 375px + larger viewports, confirm contract modal / issue card expand-collapse / accordion / email validation / blurred-card gating / scroll-to-pricing all work, confirm no desktop regressions, audit tap targets and absence of hover styles
- **Phase 7:** Push to GitHub and confirm Vercel auto-deploy (mobile build will be live at `docreviewv1-hifi.vercel.app/mobile-v1`)
