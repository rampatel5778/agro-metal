# Phase 4 — Component Library

> **Status:** Complete — awaiting approval before Phase 5  
> **Project:** `agrometal-astro`  
> **Design System:** Phase 3 `ds-*` classes (required on all components)  
> **Constraint:** No pages assembled, no HTML migration, no content wiring

---

## Summary

Phase 4 delivers **58 reusable Astro components** across five groups (4A–4E), with TypeScript prop interfaces, default values, accessibility patterns, responsive behaviour, and vanilla JS islands only where interaction is required (mobile menu, counters, carousels, form UI feedback).

All business content flows through **props** — components never hardcode Agrometal copy.

---

## File Structure

```
src/
├── components/
│   ├── layout/          # 4A — BaseLayout, Header, Footer, SEO, etc.
│   ├── ui/              # 4B — Button, Icon, Image, Card, etc.
│   ├── forms/           # 4C — Input, ContactForm, NewsletterForm, etc.
│   └── sections/        # 4D + 4E — content & business blocks
├── types/components/    # Prop interfaces (layout, ui, forms, content, business)
├── styles/components.css
└── utils/classNames.ts
```

---

## Component Index

| Group | Count | Location |
|-------|-------|----------|
| 4A Layout | 12 | `src/components/layout/` |
| 4B UI | 11 | `src/components/ui/` |
| 4C Forms | 9 | `src/components/forms/` |
| 4D Content | 13 | `src/components/sections/` |
| 4E Business | 13 | `src/components/sections/` |

---

## 4A — Layout Components

### BaseLayout

| | |
|---|---|
| **Purpose** | HTML document shell: SEO head, skip link, header, main slot, footer |
| **Props** | `seo`, `header`, `footer.config`, `structuredData?`, `socialLinks?`, `showSkipLink?`, `bodyClass?` |
| **Slots** | default (main), `head`, `scripts` |
| **Events** | None |
| **Dependencies** | SEO, StructuredData, Header, Footer, `@styles/global.css` |
| **Responsive** | Delegates to Header/Footer |
| **Accessibility** | Skip link, semantic `<main>`, lang attribute |

```astro
---
import BaseLayout from '@components/layout/BaseLayout.astro';
import { company } from '@data/company.js';
import { navigation } from '@data/navigation.js';
import { footer } from '@data/footer.js';
---
<BaseLayout
  seo={{ title: 'Page', description: '...', canonical: 'https://agrometal.ae/' }}
  header={{ logo: { src: company.logos.header, alt: 'Agrometal' }, navigation: navigation.main }}
  footer={{ config: footer }}
>
  <!-- page sections in Phase 5 -->
</BaseLayout>
```

### Header

| | |
|---|---|
| **Purpose** | Site header with logo, desktop nav, mobile toggle |
| **Props** | `logo`, `navigation`, `currentPath?`, `sticky?` (default `true`) |
| **Slots** | None |
| **Dependencies** | Container, MainNavigation, MobileNavigation, Image, Link |

### MainNavigation

| | |
|---|---|
| **Purpose** | Desktop dropdown navigation |
| **Props** | `items`, `currentPath?`, `ariaLabel?` |
| **Accessibility** | `role="menubar"`, `aria-current="page"`, keyboard focus-within submenus |

### MobileNavigation

| | |
|---|---|
| **Purpose** | Accordion mobile menu |
| **Props** | `items`, `currentPath?`, `id?`, `ariaLabel?` |
| **Events** | Toggle panel, expand/collapse submenus (client script) |
| **Accessibility** | `aria-expanded`, `aria-controls`, 44px touch targets |

### Footer / FooterBottom

| | |
|---|---|
| **Purpose** | Footer widgets + copyright bar |
| **Props** | Footer: `config`, `socialLinks?` — FooterBottom: `copyright` |
| **Dependencies** | NewsletterForm, Image, Link, Icon |

### BreadcrumbHero

| | |
|---|---|
| **Purpose** | Inner page title banner with optional background |
| **Props** | `title`, `breadcrumbs?`, `backgroundImage?` |

### SEO / StructuredData

| | |
|---|---|
| **Purpose** | Meta, OG, Twitter tags / JSON-LD injection |
| **Props** | SEO: `title`, `description`, `canonical`, overrides — StructuredData: `data` |

### Container / SectionWrapper / SectionTitle

| | |
|---|---|
| **Purpose** | Layout primitives wrapping `ds-container`, `ds-section`, heading pattern |
| **Props** | Container: `width` — SectionWrapper: `variant` — SectionTitle: `title`, `subtitle?`, `align?`, `as?` |

---

## 4B — UI Components

| Component | Purpose | Key Props | ds-* classes |
|-----------|---------|-----------|--------------|
| **Button** | CTA / submit | `variant`, `size`, `href?`, `disabled?` | `ds-btn`, `ds-btn--*` |
| **Icon** | Font Awesome wrapper | `name`, `style?`, `label?`, `decorative?` | `ds-icon` |
| **Image** | Responsive image | `src`, `alt`, `aspect?`, `lazy?`, `priority?` | `ds-img`, `ds-img-wrap` |
| **Video** | HTML5 video | `src`, `poster?`, `autoplay?`, `controls?` | `ds-video` |
| **Badge** | Label badge | `text`, `variant?` | `ds-badge` |
| **Tag** | Inline tag | `text`, `href?` | `ds-tag` |
| **Chip** | Pill chip | `text`, `href?` | `ds-chip` |
| **Divider** | HR separator | `decorative?` | `ds-divider` |
| **Overlay** | Dark/gradient overlay | `variant?` | `ds-overlay-dark`, `ds-gradient-overlay` |
| **Card** | Base card shell | `variant?`, `href?`, `hover?` | `ds-card`, `ds-card--*` |
| **Link** | Styled anchor | `href`, `external?`, `underline?` | `ds-link` |

```astro
<Button variant="primary" href="/contact-us/">Contact Us</Button>
<Image src="/images/photo.webp" alt="Description" aspect="landscape" rounded="lg" />
```

---

## 4C — Form Components (UI only)

| Component | Purpose | Notes |
|-----------|---------|-------|
| **FormField** | Label + hint + error wrapper | Used by Input/Textarea/Select |
| **Input** | Text/email/tel input | `ds-input`, ARIA describedby |
| **Textarea** | Multiline input | `ds-textarea` |
| **Select** | Dropdown | `ds-select`, options via props |
| **Checkbox** | Single checkbox | `ds-checkbox` |
| **Radio** | Radio option | `ds-radio`, `groupName` |
| **ContactForm** | Full inquiry form | Maps `FormDefinition` fields; `preventDefault` UI feedback |
| **NewsletterForm** | Footer signup | Email field + submit; no backend |

**Backend:** Form `action` URLs reserved for Phase 13 (Resend API). Honeypot field supported on ContactForm.

---

## 4D — Content Components

| Component | Purpose | Interaction |
|-----------|---------|-------------|
| RichText | HTML from props | Static |
| TextBlock | Heading + paragraphs | Static |
| IntroText | Intro + optional CTA | Static |
| IntroTextImage | Split text/image | Static |
| CounterStats | Animated stats | IntersectionObserver count-up |
| CertificationBadges | Logo row | Static |
| BrandCarousel | Partner logos | Optional autoplay scroll |
| TimelineVertical | Milestone list | Static |
| TimelineHorizontal | Horizontal scroll timeline | Keyboard scrollable |
| VideoBlock | YouTube/embed | Lazy iframe |
| VideoCTA | Full-width video CTA | Background embed |
| TextMarquee | Scrolling text | CSS animation; static list for SR |
| TextBanner | Headline strip | Static |

---

## 4E — Business Components

| Component | Purpose | Reuses |
|-----------|---------|--------|
| IconGrid | Icon + label grid | Icon, Card |
| IconBoxGrid | Icon box + description | Icon, Image, Card |
| FeatureCards | Feature cards | Card, Button |
| ValueCards | Values with border accent | Card |
| ProductCards | Product category cards | Card, Image, Tag |
| CategoryCardGrid | Hub image cards | Card, Overlay |
| ProductCategoryGrid | Product sub-items | ProductCards (no duplication) |
| IndustryCards | 6-col industry grid | Card, Icon/Image |
| ServiceCardGrid | Service hub cards | Card, Image |
| BenefitsList | Bulleted benefits | Icon |
| WhyChooseUs | Differentiators + image | BenefitsList, Split |
| BlogCards | Trends/insights row | Card, Image |
| AnchorNav | In-page jump links | ds-anchor-nav |

---

## Type Definitions

All prop interfaces live in `src/types/components/`:

- `layout.ts` — BaseLayout, Header, Footer, SEO, etc.
- `ui.ts` — Button, Icon, Image, Card, etc.
- `forms.ts` — FormField, ContactForm, etc.
- `content.ts` — RichText, CounterStats, Timeline, etc.
- `business.ts` — IconGrid, ProductCards, etc.

Re-exported from `@types/components` and `@types/index`.

---

## Testing Results

| Check | Result |
|-------|--------|
| `npm run build` | ✅ 15 routes (14 placeholders + design-system) |
| `npm run typecheck` | ✅ Strict TypeScript |
| Inline CSS in components | ✅ Removed (moved to `components.css`) |
| Hardcoded business content | ✅ None — props only |
| Page assembly | ✅ Not performed |
| Duplicated markup | ✅ ProductCategoryGrid delegates to ProductCards |

---

## Phase 5 Readiness

Components are ready to be composed into the 14 page routes using JSON content from `src/content/pages/` and global config from `src/data/`.

**Do not proceed to Phase 5 until this phase is approved.**

---

## Regenerate Word Report

```bash
npm run docs:phase4
```

Output: `docs/Phase-4-Component-Library.docx`
