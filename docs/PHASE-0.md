# Phase 0 — Discovery & Setup

Phase 0 establishes the Astro project foundation, ports the Agriva design system, audits existing content, and localizes remote assets. **No production pages are built yet** — only scaffolding and inventory.

## What was done

### 1. Astro project initialized

Location: `agrometal-astro/`

| Setting | Value |
|---------|-------|
| Output | `static` |
| URLs | Nested with trailing slash (`/products/ferrous-metals/`) |
| Build format | Directory (`index.html` per route folder) |
| TypeScript | Strict |
| SCSS | `sass` package, Agriva partials in `src/styles/agriva/` |

### 2. Design system ported

- **Agriva template assets** copied to `public/assets/` (CSS, JS, fonts, images)
- **SCSS source** copied to `src/styles/agriva/` (26 partials)
- **Agrometal brand override** in `src/styles/_agrometal-tokens.scss` — accent `#D95648`
- Entry stylesheet: `src/styles/main.scss`

During Phase 1+, template CSS in `public/assets/css/main.css` can be used alongside compiled SCSS until components are fully migrated off jQuery/GSAP dependencies.

### 3. Site configuration

| File | Purpose |
|------|---------|
| `src/data/site.ts` | Company name, contact, logos, videos, fonts |
| `src/data/navigation.ts` | Header/footer nav + legacy HTML → Astro route map |
| `src/components/SEO.astro` | Title, description, canonical, Open Graph |
| `src/types/content.ts` | JSON content schema (sections, images, SEO) |

### 4. Content audit (14 pages)

Auto-extracted from `../existing website/*.html` into `src/content/pages/`:

| JSON file | Source HTML | Images |
|-----------|-------------|--------|
| `home.json` | index.html | 31 |
| `about-us.json` | about-us.html | 14 |
| `our-history.json` | our-history.html | 9 |
| `trading-logistics-warehousing.json` | trading-logistics-warehousing.html | 8 |
| `products.json` | products.html | 7 |
| `ferrous-metals.json` | ferrous-metals.html | 22 |
| `non-ferrous-metals.json` | non-ferrous-metals.html | 26 |
| `agricultural-commodities.json` | agricultural-commodities.html | 30 |
| `services.json` | services.html | 9 |
| `commodity-hedging.json` | commodity-hedging.html | 9 |
| `currency-hedging.json` | currency-hedging.html | 9 |
| `logistics.json` | logistics.html | 9 |
| `sustainability.json` | sustainability.html | 7 |
| `contact-us.json` | contact-us.html | 3 |

Summary: `src/content/pages/_audit-summary.json`

Re-run extraction: `npm run audit:content`

> Content JSON is a **first-pass audit**. Section mapping to Agriva components happens in Phase 1–3. Review headings, body copy, and image inventories before building pages.

### 5. Asset localization

**148 of 149** remote assets downloaded from `agrodemo.360websitedemo.com` to `public/images/agrometal/`.

Manifest: `src/content/asset-manifest.json`

Re-run download: `npm run audit:assets`

**Failed asset (1):** `2026/02/refined-oils–-food-2.jpeg` — source HTML has mojibake in the filename; needs manual fix on agricultural-commodities page during Phase 3.

### 6. Locked decisions applied

- Home template base: **Agriva Home 01**
- Fonts: **Instrument Sans + Inter** (Agriva)
- No ScrollSmoother, no custom cursor, no jQuery (rewrite in Phase 1+)
- Content: **JSON** files (CMS-ready later)
- Forms: **Astro API route** (Phase 4 — not Formspree)
- Images: **local + WebP conversion** (WebP pass in Phase 4)
- Icons: **Font Awesome** from template
- SEO: improved titles/descriptions; remove `noindex` on launch

## Project structure

```
agrometal-astro/
├── public/
│   ├── assets/          # Agriva template (css, js, fonts, img)
│   └── images/
│       └── agrometal/   # Localized site images (149 URLs → 148 files)
├── scripts/
│   ├── extract-content.mjs
│   └── download-assets.mjs
├── src/
│   ├── components/
│   │   └── SEO.astro
│   ├── content/
│   │   ├── pages/       # 14 page JSON audits
│   │   └── asset-manifest.json
│   ├── data/
│   │   ├── navigation.ts
│   │   └── site.ts
│   ├── pages/
│   │   └── index.astro  # Phase 0 status page (temporary)
│   ├── styles/
│   │   ├── agriva/      # Ported SCSS partials
│   │   ├── _agrometal-tokens.scss
│   │   └── main.scss
│   └── types/
│       └── content.ts
└── docs/
    └── PHASE-0.md       # This file
```

## URL map (target routes)

| Page | Astro path |
|------|------------|
| Home | `/` |
| About Agrometal | `/about-us/` |
| Our History | `/about-us/our-history/` |
| Trading, Logistics & Warehousing | `/about-us/trading-logistics-warehousing/` |
| Products hub | `/products/` |
| Ferrous Metals | `/products/ferrous-metals/` |
| Non-Ferrous Metals | `/products/non-ferrous-metals/` |
| Agricultural Commodities | `/products/agricultural-commodities/` |
| Services hub | `/services/` |
| Commodity Hedging | `/services/commodity-hedging/` |
| Currency Hedging | `/services/currency-hedging/` |
| Logistics | `/services/logistics/` |
| Sustainability | `/sustainability/` |
| Contact Us | `/contact-us/` |

## YouTube videos (inventory)

| Location | Video ID | Pages |
|----------|----------|-------|
| Home hero | `7AGfbbcy8Ro` | home |
| Footer CTA block | `nr3_0zjTlsI` | 11 pages (not history, products hub, trading) |

## Commands

```bash
cd agrometal-astro
npm install
npm run dev          # http://localhost:4321
npm run build        # static output → dist/
npm run phase0       # re-run content + asset audit
```

## Phase 1 preview (next)

1. `BaseLayout.astro` — HTML shell, font/CSS loading
2. `Header.astro` — Agriva Home 01 nav with dropdowns from `navigation.ts`
3. `Footer.astro` — contact block, useful links, newsletter placeholder
4. `BreadcrumbHero.astro` — inner page banner pattern
5. Vanilla JS islands for mobile menu (replace MeanMenu/jQuery)

No page content until layout shell is verified against Agriva Home 01 markup.
