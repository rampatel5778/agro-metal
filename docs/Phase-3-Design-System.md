# Phase 3 — Design System

> **Status:** Complete — awaiting approval for Phase 4  
> **Showcase:** `/design-system/` (noindex, internal only)

---

## Objective

Scalable enterprise Design System faithfully reproducing the Agriva HTML template using Tailwind CSS v4 and Astro best practices.

**Not built:** Header, Footer, Hero, page sections, business components, HTML migration.

---

## Deliverables

### 1. Tailwind Theme (`tailwind.config.ts` + `variables.css` @theme)

| Category | Tokens |
|----------|--------|
| Colors | Primary, secondary, accent, neutral, semantic (success/warning/error), surfaces, overlays, gradients |
| Typography | Instrument Sans + Inter, display through caption scale |
| Spacing | Section padding, gutter, stack, content/page/wide widths |
| Border radius | xs → full, button radius |
| Shadows | xs, sm, card, header, lift, focus |
| Opacity | disabled, muted, overlay |
| Transitions | fast/normal/slow/slower + bounce easing |
| Breakpoints | sm through 4xl (template-aligned) |
| Z-index | dropdown, sticky, overlay, modal, toast |
| Animation | fade, slide, scale, reveal, marquee keyframes |

### 2. CSS Variable System (`src/styles/variables.css`)

Complete `:root` aliases: primary, secondary, accent, neutral, background, surface, border, success, warning, error, typography, spacing, radius, shadow, animation, overlays, gradients, selection colors.

### 3. Typography (`src/styles/typography.css`)

Classes: `.ds-display`, `.ds-h1`–`.ds-h6`, `.ds-lead`, `.ds-body-lg`, `.ds-body`, `.ds-body-sm`, `.ds-caption`, `.ds-label`, `.ds-btn-text`, `.ds-quote`, `.ds-eyebrow`, `.ds-link`, `.ds-list`, `.ds-section-title`

### 4. Buttons (`src/styles/buttons.css`)

Classes: `.ds-btn` + variants (primary, secondary, accent, outline, ghost, text, link, icon, cta) + sizes (sm, md, lg) + states (disabled, loading, hover, focus, active). Primary uses Agriva clip-path circle reveal.

### 5. Forms (`src/styles/forms.css`)

Styling only: `.ds-input`, `.ds-textarea`, `.ds-select`, `.ds-checkbox`, `.ds-radio`, `.ds-field` + error/success states, focus, placeholder.

### 6. Cards (`src/styles/cards.css`)

Variants: feature, product, service, blog, value, stat, timeline, image, icon + base `.ds-card--lift` hover.

### 7. Layout (`src/styles/layout.css`)

`.ds-section`, `.ds-container` (narrow/wide/fluid), `.ds-stack`, `.ds-flex`, `.ds-grid` (2/3/4 col), `.ds-split`, `.ds-columns`

### 8. Animations (`src/styles/animations.css`)

`.ds-animate-fade-in`, fade-in-up, slide-in-left/right, scale-in, reveal, marquee, `.ds-hover-lift`, `.ds-hover-scale` + reduced motion overrides.

### 9. Utilities (`src/styles/utilities.css`)

Glass, dark overlay, gradient overlay, text gradient, divider, badge, tag, chip, status, highlight, swatches, spacing demos.

### 10. Images (`src/styles/images.css`)

Cover/contain, aspect ratios, rounded, zoom wrap, overlay, object position.

### 11. Accessibility (`src/styles/accessibility.css`)

Skip link, sr-only, focus ring, contrast panels, reduced-motion helpers.

### 12. UI Components (design system only)

| Component | Path |
|-----------|------|
| Icon | `src/components/ui/Icon.astro` |
| DsImage | `src/components/ui/DsImage.astro` |

### 13. Showcase Page

`src/pages/design-system/index.astro` — demonstrates all tokens (noindex).

### 14. Token Catalog

`src/lib/design-system/tokens.ts`

---

## File Structure

```
src/styles/
├── global.css          # Entry + @config tailwind
├── variables.css       # @theme + :root
├── typography.css
├── buttons.css
├── forms.css
├── cards.css
├── layout.css
├── images.css
├── accessibility.css
├── utilities.css
└── animations.css

src/components/ui/
├── Icon.astro
└── DsImage.astro

src/pages/design-system/
└── index.astro

tailwind.config.ts
```

---

## Usage Convention

All design system classes use **`ds-` prefix** to distinguish from Tailwind utilities and future business components.

Example:
```html
<button class="ds-btn ds-btn--md ds-btn--primary">Contact Us</button>
```

---

## Font Awesome

Loaded from `/assets/css/all.min.css` (template bundle). Icon wrapper supports solid/regular/light/brands, sizes, spin, rotate, aria labels.

---

## Next Phase

**Phase 4 — Reusable Components:** BaseLayout, Header, Footer, BreadcrumbHero, section components using `ds-*` primitives.

---

*docs/ remains source of truth. Phase 3 adds design tokens only.*
