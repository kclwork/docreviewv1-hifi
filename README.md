# Elle Summary — Hi-Fi Prototype (Variant 1: Partial Reveal)

LegalShield's AI-powered document review experience. Hi-fi prototype built to match Figma designs pixel-accurately. Includes both the desktop funnel (live at `/`) and a mobile-specific funnel under `/mobile-v1`.

## Running Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

> Deployed to Vercel. Repo: https://github.com/kclwork/docreviewv1-hifi

## File Structure

```
freemium-doc-review-v1-hifi/
├── design-tokens.css          # Stratos DS tokens (colors, type, spacing) — do not recreate
├── stratos-components.md      # Component specs — read before building any UI
├── brief.md                   # Project brief — update between sessions
├── README.md
├── index.html
├── vite.config.js
├── package.json
├── public/
│   ├── fonts/                 # ABC Otto + Instrument Rounded variable fonts
│   └── images/
│       ├── homepage/          # hero/, awards/, aol/, logo-cloud/, how-it-works/, info/
│       ├── marketing-landing-page/
│       └── logo.svg           # LegalShield wordmark + shield mark
├── references/                # Figma reference images (hi-fi + annotations per screen)
│   └── mobile-v1/             # Mobile flowchart + 7 annotated screens
└── src/
    ├── main.jsx
    ├── index.css              # Imports design-tokens.css + global resets
    ├── App.jsx                # Router + route definitions (desktop + mobile)
    ├── components/
    │   ├── Nav.jsx / Nav.module.css                          (desktop)
    │   ├── Footer.jsx / Footer.module.css                    (desktop)
    │   ├── Accordion.jsx / Accordion.module.css              (desktop)
    │   ├── HeroMarquee.jsx / HeroMarquee.module.css          (desktop)
    │   ├── HowWeHelpCarousel.jsx / HowWeHelpCarousel.module.css (desktop)
    │   └── mobile/
    │       ├── MobileNav.jsx / .module.css
    │       ├── MobileMenuOverlay.jsx / .module.css
    │       ├── MobileFooter.jsx / .module.css
    │       ├── MobileFunnelSections.jsx / .module.css   # shared mobile hero/FAQ/Benefits/Pricing
    │       └── MobileContractModal.jsx / .module.css
    └── pages/
        ├── Homepage.jsx / Homepage.module.css                ✅ Desktop complete
        ├── MarketingLandingPage.jsx / .module.css            ✅ Desktop complete
        ├── UploadScreen.jsx / .module.css                    ✅ Desktop complete
        ├── ProcessingState.jsx / .module.css                 ✅ Desktop complete
        ├── PartialResults.jsx / .module.css                  ✅ Desktop complete
        ├── FullReveal.jsx / .module.css                      ✅ Desktop complete
        ├── PlaceholderPage.module.css
        └── mobile/
            ├── MobileHomepage.jsx / .module.css              ✅ Mobile Phase 1
            ├── MobileMktLandingPage.jsx / .module.css        ✅ Mobile Phase 2
            ├── MobileUpload.jsx / .module.css                ✅ Mobile Phase 2
            ├── MobileProcessing.jsx / .module.css            ✅ Mobile Phase 3
            ├── MobilePartialResults.jsx / .module.css        ✅ Mobile Phase 4
            └── MobileFullReveal.jsx / .module.css            ✅ Mobile Phase 5
```

## Routes

**Desktop:** `/` → `/get-a-free-document-review` → `/upload` → `/processing` → `/partial-results` → `/full-reveal`

**Mobile (`/mobile-v1`):** `/mobile-v1` → `/mobile-v1/get-a-free-document-review` → `/mobile-v1/upload` → `/mobile-v1/processing` → `/mobile-v1/partial-results` → `/mobile-v1/full-reveal`

## Updating brief.md

At the end of each session, update `brief.md` to reflect:
- Which phases are complete
- What was built in each phase
- Any deviations from the original plan
- Current file structure changes
- What is left to do
