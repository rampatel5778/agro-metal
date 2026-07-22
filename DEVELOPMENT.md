# Development Standards — Phase 2

> `/docs` is the single source of truth for all implementation.

## Tooling

| Tool | Config |
|------|--------|
| Astro 7+ | `astro.config.mjs` |
| Tailwind CSS v4 | `@tailwindcss/vite` + `src/styles/variables.css` |
| TypeScript | `tsconfig.json` — strict |
| ESLint | `eslint.config.js` |
| Prettier | `.prettierrc` |
| Netlify | `netlify.toml` |

## Scripts

```bash
npm run dev       # Development server
npm run build     # Static production build
npm run preview   # Preview dist/
npm run lint      # ESLint
npm run format    # Prettier write
npm run typecheck # tsc --noEmit
```

## Import Aliases

| Alias | Path |
|-------|------|
| `@components/*` | `src/components/*` |
| `@layouts/*` | `src/layouts/*` |
| `@content/*` | `src/content/*` |
| `@data/*` | `src/data/*` |
| `@types/*` | `src/types/*` |
| `@utils/*` | `src/utils/*` |
| `@lib/*` | `src/lib/*` |
| `@styles/*` | `src/styles/*` |

## Naming Conventions

### Folders
- **kebab-case** — `about-us/`, `ferrous-metals/`
- Plural for categories — `components/`, `sections/`, `types/`

### Files
- **PascalCase** for Astro components — `Header.astro`, `VideoCTA.astro`
- **camelCase** for TS modules — `navigation.ts`, `route.ts`
- **kebab-case** for JSON content — `about-us.json`
- **kebab-case** for schemas — `page.schema.ts`

### Components
- One component per file
- Prefix section components with purpose — `HeroVideo.astro`, not `Hero.astro` if ambiguous
- UI primitives in `components/ui/`
- Layout in `components/layout/`
- Page sections in `components/sections/`
- Forms in `components/forms/`

### TypeScript
- Interfaces for object shapes — `NavigationItem`, `PageContent`
- Types for unions — `PageId`, `SectionType`
- Zod schemas suffix `.schema.ts`
- Export types from `src/types/index.ts`

## Commit Conventions

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add HeroVideo section component
fix: correct ferrous metals canonical URL
docs: update component-mapping for VideoCTA
chore: configure Tailwind v4 theme tokens
refactor: extract CounterStats island
perf: lazy-load YouTube footer embed
a11y: add skip link to BaseLayout
```

Scope optional: `feat(components): add Header.astro`

## Phase Gates

| Phase | Gate |
|-------|------|
| 2 | Foundation — **current** |
| 3 | Design system Tailwind components |
| 4 | Reusable Astro components |
| 5+ | Page assembly |

Do not skip phases. Do not build pages before Phase 5.

## Approved Stack Decisions

- **Hosting:** Netlify
- **Forms (future):** Resend via Astro API routes
- **Newsletter:** UI only until ESP decided
- **Styling:** Tailwind from scratch — no SCSS migration
- **Template:** Design reference only — extract patterns into Astro components
