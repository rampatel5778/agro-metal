# Agrometal Astro Rebuild — Phase 2 Foundation Summary

**Project:** Agrometal Website Rebuild  
**Phase:** 2 — Architecture & Project Foundation  
**Status:** Complete — awaiting approval for Phase 3  
**Location:** `agrometal-astro/`

---

Phase 2 foundation is complete in `agrometal-astro/`. The previous SCSS prototype has been removed; the project now uses **Tailwind CSS v4** (`@tailwindcss/vite`) with Astro 7. **`npm run build` succeeds — all 14 routes generate.**

---

## 1. Folder Tree

```
agrometal-astro/
├── astro.config.mjs          # Static, trailingSlash, compressHTML, Sharp images, aliases
├── eslint.config.js
├── netlify.toml              # Netlify deploy config
├── .prettierrc / .prettierignore
├── DEVELOPMENT.md            # Naming, commits, aliases, standards
├── package.json
├── public/
│   ├── images/agrometal/     # 149 localized assets (Phase 0)
│   ├── videos/ icons/ fonts/ assets/
├── src/
│   ├── components/
│   │   ├── layout/ sections/ ui/ forms/   (.gitkeep — empty)
│   ├── content/pages/        # 14 JSON audit files + _audit-summary.json
│   ├── data/
│   │   ├── site.ts navigation.ts footer.ts social.ts
│   │   ├── company.ts seo.ts constants.ts index.ts
│   ├── layouts/              (.gitkeep)
│   ├── lib/
│   │   ├── schemas/          # 12 Zod schemas (typed)
│   │   ├── assets.ts performance.ts accessibility.ts
│   ├── pages/                # 14 route placeholders
│   │   ├── index.astro
│   │   ├── about-us/ … contact-us/
│   ├── styles/
│   │   ├── global.css variables.css utilities.css animations.css
│   ├── types/                # 15 interface modules + index.ts
│   └── utils/ route.ts content.ts
└── scripts/                    # Phase 0 audit scripts (retained)
```

---

## 2. Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    docs/ — Source of Truth                   │
│  sitemap.md │ pages.md │ components.md │ architecture…      │
└────────────────────────────┬────────────────────────────────┘
                             │
         ┌───────────────────┼───────────────────┐
         ▼                   ▼                   ▼
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ Global Config   │ │ Zod Schemas     │ │ Page JSON       │
│ src/data/       │ │ src/lib/schemas │ │ src/content/    │
│ site, nav, seo  │ │ validation      │ │ pages/*.json    │
└────────┬────────┘ └────────┬────────┘ └────────┬────────┘
         │                   │                   │
         └───────────────────┼───────────────────┘
                             ▼
                  ┌─────────────────────┐
                  │ Route Placeholders  │
                  │ src/pages/ (×14)    │
                  └──────────┬──────────┘
                             │
                  ┌──────────▼──────────┐
                  │ Tailwind v4 Tokens  │
                  │ src/styles/         │
                  └──────────┬──────────┘
                             ▼
                  ┌─────────────────────┐
                  │ dist/ → Netlify CDN │
                  └─────────────────────┘
```

---

## 3. Content Flow

```
existing website HTML (reference)
        ↓ Phase 0 audit
src/content/pages/{pageId}.json
        ↓ Zod validation (pageContentSchema)
src/utils/content.ts → loadPageContent()
        ↓ Phase 5+ (not yet wired)
Page .astro files → Section components → HTML output
```

Content stays in JSON. Pages will compose sections from validated data in Phase 5+.

---

## 4. Data Flow

```
src/data/constants.ts     → ROUTES, VIDEOS, ASSET_PATHS
src/data/company.ts       → NAP, logos, map URLs
src/data/navigation.ts    → Header + footer nav (Zod-validated)
src/data/footer.ts        → Footer config + form definitions
src/data/seo.ts           → Per-page titles/descriptions/canonicals
src/data/social.ts        → Empty links → icons hidden
        ↓
Phase 4+ components consume @data/* imports
        ↓
Static HTML in dist/ (Netlify)
```

---

## 5. Hydration Strategy

| Layer | Strategy |
|-------|----------|
| **Default** | Zero JS — static HTML + CSS only |
| **Carousels** (Brand, ESG slider) | `client:visible` — Swiper island when in viewport |
| **Counters** | `client:visible` — vanilla IntersectionObserver |
| **Mobile menu** | `client:load` — small vanilla JS island |
| **Forms** | `client:load` — validation UI only (no backend yet) |
| **YouTube** | Facade pattern — iframe on click (`performanceConfig.youtubeFacade`) |
| **GSAP timelines** | Lazy dynamic import on Home/History only (Phase 5+) |

No jQuery, ScrollSmoother, or custom cursor.

---

## 6. Image Strategy

- **Storage:** `public/images/agrometal/` (localized, no remote deps)
- **Runtime:** Astro `<Image>` + Sharp service (configured in `astro.config.mjs`)
- **Formats:** WebP primary, JPEG fallback (`IMAGE_FORMATS`)
- **Responsive:** 640–1536px widths (`IMAGE_WIDTHS`)
- **Loading:** Lazy default; `eager` for LCP hero only
- **SVG logos:** Unchanged Agrometal SVGs served as static assets

---

## 7. Performance Strategy

- Static output → CDN on Netlify
- `compressHTML: true`
- CSS code splitting via Vite
- Font preconnect to Google Fonts (`performanceConfig.preconnect`)
- Vendor chunk separation in Vite rollup
- Long-cache headers for `/images/`, `/fonts/`, `/assets/` (`netlify.toml`)
- **Targets:** Lighthouse 90+, LCP < 2.5s, CLS < 0.1

---

## 8. Accessibility Strategy

- WCAG 2.1 AA target (`src/lib/accessibility.ts`)
- `:focus-visible` ring (`#D95648`, 3px)
- `prefers-reduced-motion` disables animations (`animations.css`)
- Skip link utility (`.skip-link`) ready for BaseLayout
- `#main-content` landmark on all route placeholders
- Form labels/ARIA defined in form schemas
- Social icons hidden when no official URLs (approved decision)

---

## 9. Architectural Concerns Before Phase 3

| Concern | Notes |
|---------|-------|
| **Tailwind v4 + Astro 7** | `@astrojs/tailwind` doesn't support Astro 7 yet — using `@tailwindcss/vite` instead. Tokens live in `variables.css` `@theme` block. |
| **Zod at runtime** | Config files (`company.ts`, `footer.ts`, etc.) validate at import time — good for safety, but build fails on bad data. |
| **Phase 0 JSON vs new schema** | Audit JSON may need schema alignment when wired in Phase 5 — run validation then. |
| **Google Maps embed URL** | Placeholder coordinates in `company.ts` — verify exact Jebel Ali office pin before launch. |
| **Font Awesome** | Not yet added — Phase 3 will add FA subset from template reference. |
| **Netlify + forms** | Static now; `@astrojs/netlify` adapter needed in Phase 13 for Resend API routes. |
| **OG image** | Default is logo SVG — need 1200×630 PNG/WebP before SEO phase. |

---

## What Was Delivered

| Item | Status |
|------|--------|
| Astro config (static, trailingSlash, compressHTML, Sharp, aliases) | Done |
| Tailwind v4 theme (colors, typography, spacing, breakpoints) | Done |
| Folder structure | Done |
| 12 Zod schemas + TypeScript interfaces | Done |
| Global config (site, nav, footer, SEO, company, social, constants) | Done |
| 14 empty route files | Done |
| Global CSS (4 files, no component styling) | Done |
| ESLint + Prettier + DEVELOPMENT.md | Done |
| netlify.toml | Done |
| SCSS prototype removed | Done |

**Not built (as requested):** components, layouts, page content, template HTML migration.

---

## Approved Decisions Applied (Phase 2)

1. **Hosting:** Netlify (`netlify.toml`)
2. **Contact Form:** Resend via Astro API routes — documented for Phase 13
3. **Newsletter:** UI schema only — no backend
4. **Home Trends section:** Static content — no blog CMS
5. **Social Media:** Empty links — icons hidden (no `#` placeholders)
6. **Privacy Policy:** Not added — sitemap unchanged (14 pages)
7. **Google Maps:** Embedded map URL in `company.ts`
8. **Canonical Domain:** `https://agrometal.ae`
9. **Content Changes:** Up to 20% refinement permitted
10. **SCSS Prototype:** Discarded — Tailwind from scratch
11. **Template:** Design reference only — no HTML migration

---

## Next Step

Ready for **Phase 3 — Design System** (Tailwind component layer: buttons, section titles, typography utilities). Awaiting approval to proceed.

---

*Document generated from Phase 2 completion report. `/docs` folder remains the single source of truth for implementation.*
