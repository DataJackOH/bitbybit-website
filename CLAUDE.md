# CLAUDE.md — bit by bit website

## Commands

- `npm run dev` — Start dev server (Next.js)
- `npm run build` — Production build
- `npm run lint` — ESLint (flat config, v9)
- No test framework configured

## Architecture

Next.js 16 App Router marketing site for the "bit by bit" calisthenics iOS app.
Deployed on Vercel. Domain: bitbybit.fit

### Pages

- `/` — Homepage (hero, features, FAQ, CTA)
- `/features` — Detailed feature breakdown
- `/privacy`, `/terms`, `/support` — Legal/support pages

### Components (`src/components/`)

- `Navbar.tsx` — Client component, mobile hamburger menu
- `Footer.tsx` — Server component, site links
- `CTABanner.tsx` — Server component, App Store CTA
- `FeatureCard.tsx` — Server component, reusable card
- `FAQAccordion.tsx` — Client component, expandable Q&A

### Layout

`layout.tsx` wraps all pages with Navbar + Footer + Vercel Analytics.
Organization JSON-LD structured data is injected in the `<head>`.

## Styling

Tailwind CSS v4 with `@tailwindcss/postcss`. No tailwind.config — uses CSS-first configuration.

### Color tokens (defined in `globals.css`)

| Token             | Value     | Usage                  |
|-------------------|-----------|------------------------|
| `sage`            | `#80956D` | Primary brand green    |
| `sage-dark`       | `#6B7F59` | Hover/active states    |
| `coral`           | `#F8716B` | Accent/CTA             |
| `coral-dark`      | `#E5605A` | Hover/active states    |
| `offwhite`        | `#F9F7F4` | Page background        |
| `offwhite-warm`   | `#F7F4EF` | Section backgrounds    |
| `charcoal`        | `#333333` | Body text              |

Colors are registered via `@theme inline` in `globals.css` so they work as Tailwind utilities (e.g. `bg-sage`, `text-coral`).

### Fonts

- **Headings:** League Spartan (bold 700) — `font-heading`
- **Body:** Inter — `font-body`

Both loaded via `next/font/google` in `layout.tsx` with CSS variable injection.

## Conventions

- **Server components by default.** Only use `"use client"` when needed (event handlers, state, browser APIs).
- **Path alias:** `@/*` maps to `./src/*`
- **SEO:** Every page includes JSON-LD structured data via `dangerouslySetInnerHTML` script tags.
- **Metadata:** Uses Next.js `Metadata` export with template pattern (`%s | bit by bit`).
- **Icons:** `lucide-react` for all icons.
- **No dark mode.** Single light theme.

## Key Dependencies

- `next` 16.1.6, `react` 19.2.3
- `tailwindcss` v4 (CSS-first config, no JS config file)
- `lucide-react` — Icons
- `@vercel/analytics` — Analytics
