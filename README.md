# Pallavi Soldey — Portfolio (Next.js + Tailwind)

A recreation of the portfolio site, rebuilt with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/layout.tsx` — root layout, fonts (Space Grotesk / IBM Plex Sans / JetBrains Mono), metadata
- `app/page.tsx` — assembles all sections
- `components/` — Nav, Hero, About, Skills, Experience, Projects, Contact, Footer, plus
  `StatCounter` and `SkillBar` (animated on scroll via `IntersectionObserver`)
- `lib/data.ts` — all site copy and content in one place — edit this to update text without
  touching components
- `app/globals.css` — base styles, reduced-motion handling, focus rings

## Things to customize

- `lib/data.ts` → `profile.resumeUrl` — currently a placeholder `#`, point it at your hosted
  resume PDF
- `lib/data.ts` → `stats` — years of experience / projects / tech / satisfaction numbers are
  placeholders (3+, 15+, 18+, 98%) since the source site animates these client-side with no
  static values in the markup — set them to whatever's accurate
- Hero's terminal-style code panel is a decorative signature element, not literal content —
  tweak freely
- Swap the mint (`#5EEAD4`) / amber (`#F5B759`) accents in `tailwind.config.ts` if you want a
  different palette

## Build

```bash
npm run build
npm start
```

Note: `next/font/google` fetches font files at build time, so the machine running `npm run build`
needs outbound internet access to `fonts.googleapis.com`.
