---
title: "feat: ATI Consulting landing page (like-for-like Vite + React build)"
date: 2026-06-18
type: feat
status: ready
depth: standard
---

# feat: ATI Consulting Landing Page — Like-for-Like Vite + React Build

## Summary

Reproduce the Google Stitch–exported static landing page (`stitch_output/code.html`) as a real, bundler-based **Vite + React + TypeScript + Tailwind CSS v3** project. The rendered output must match `stitch_output/screen.png` pixel-for-pixel on desktop. The current build delivers a single page (hero, intro copy, about, footer) but is scaffolded so it can grow into a multi-page consulting-agency website later.

The source `code.html` uses the Tailwind Play CDN with an inline `tailwind.config` object and inline `<style>` rules. This plan replaces that runtime setup with a proper toolchain: the inline config is ported verbatim into `tailwind.config.ts`, the two `<style>` rules move to global CSS, fonts are self-hosted via `@fontsource`, and the two PNG assets are served locally.

---

## Problem Frame

We have a finished visual design exported from Stitch as static files. We need a maintainable codebase that renders identically but is no longer dependent on a CDN-loaded Tailwind runtime (explicitly not for production) and is structured to extend later.

**Source-of-truth precedence** (matters because `code.html` and `DESIGN.md` disagree on some tokens):
1. `stitch_output/screen.png` — the visual target (what the page must look like).
2. `stitch_output/code.html` — the markup and the exact theme tokens that produced `screen.png`. **Authoritative for the build**, because the screenshot was rendered from it.
3. `stitch_output/DESIGN.md` — brand/style narrative and token reference. Used for intent and naming, but where it conflicts with `code.html`, `code.html` wins (see Key Technical Decisions).

---

## Requirements

- **R1.** The page renders visually identical to `screen.png` on desktop (≥1200px): hero (logo + headline), intro copy block, about section (bio + headshot), footer.
- **R2.** All theme tokens from the `code.html` inline `tailwind.config` (colors, `borderRadius`, `spacing`, `fontFamily`, `fontSize`) are available as Tailwind utilities and produce the same computed styles.
- **R3.** The two custom CSS rules (`.ambient-shadow`, `.s-curve-bg`) behave identically.
- **R4.** Typography uses Libre Caslon Text (headings) and Work Sans (body/UI), loaded via the build (not a raw Google Fonts `<link>`).
- **R5.** The two image assets (`ATI_Logo_Asset.png`, `Angela_T_Ingram-Headshot.png`) are served from the project, not the CDN-era relative paths.
- **R6.** No Tailwind Play CDN, no runtime `tailwind.config` script, no production-console warnings.
- **R7.** Page `<title>` and basic metadata match the source (`ATI Consulting | Organizational Culture`).
- **R8.** Project structure (components, assets, config) supports adding pages/sections later without rework.
- **R9.** Responsive behavior matches the source's responsive classes (the `md:` breakpoint transitions present in `code.html`).

**Success criteria:** `npm run dev` (and `npm run build` + `npm run preview`) renders the page; a side-by-side against `screen.png` shows no meaningful visual difference on desktop; no CDN dependencies remain.

---

## Key Technical Decisions

- **KTD1 — Framework: Vite + React + TypeScript.** Chosen per user direction (the brief left "Next.js or Vite" open; Vite selected). Vite gives a fast dev server and a lean static SPA build, which is sufficient for a single marketing page. Growth into a multi-page site is a deferred concern handled by adding a client router and SEO tooling later (see Risks and Scope Boundaries). Alternative (Next.js) recorded below.
- **KTD2 — Tailwind CSS v3, config ported verbatim.** The source hands us a complete v3-style `tailwind.config` JS object. Porting it directly into `tailwind.config.ts` is the lowest-risk path to like-for-like fidelity (zero token-translation errors). Tailwind v4's CSS-first `@theme` is the modern alternative but would require manually re-expressing every token and risks subtle drift; not worth it for a faithful reproduction.
- **KTD3 — `code.html` tokens win over `DESIGN.md` on conflict.** Notably `primary`: `code.html` uses `#001836` (near-black navy seen in the screenshot headline) while `DESIGN.md` prose cites `#042D59` (which `code.html` assigns to `primary-container`). Since `screen.png` was rendered from `code.html`, the build uses the `code.html` values. The `bg-[#f5ece0]` arbitrary value on the About section (the `DESIGN.md` "card" tier) is preserved as-is.
- **KTD4 — Fonts self-hosted via `@fontsource`.** Use `@fontsource/libre-caslon-text` (weights 400/700, normal + italic to match the source font link) and `@fontsource/work-sans` (400/600/700), imported in the entry CSS/TS. This removes the render-blocking Google Fonts `<link>` (R4/R6) without a framework-specific font API. The Tailwind `fontFamily` config references the resulting family names with sensible fallbacks.
- **KTD5 — Images served from `public/` via plain `<img>`.** Asset filenames are preserved (`ATI_Logo_Asset.png`, `Angela_T_Ingram-Headshot.png`) and referenced by root-absolute paths (`/ATI_Logo_Asset.png`). Vite has no built-in image optimizer; the source used plain `<img>` and so do we, matching the markup exactly. (The ~2.3MB headshot is a candidate for a later optimization pass — see Risks.)
- **KTD6 — Drop Material Symbols font.** `code.html` loads it but no icon is used anywhere in the markup or screenshot. Omitted to avoid an unused render-blocking resource.
- **KTD7 — Component decomposition.** The single page is split into `Hero`, `Intro`, `About`, `Footer` components under `src/components/` so sections are independently editable as the site grows, while the markup stays a 1:1 translation of the source. `App.tsx` composes them.

### Alternative Approaches Considered

- **Next.js (App Router).** Stronger growth path (file-based routing, built-in metadata/SEO, `next/font`, `next/image`). Not chosen — user selected Vite. If the site later needs SSR/SEO at scale, migration is the fallback.
- **Plain static / no framework** (just move the HTML into a build). Rejected: doesn't satisfy the "Next.js or Vite" brief and gives no component/growth structure.

---

## Output Structure

```
ati-consulting-website/
├── public/
│   ├── ATI_Logo_Asset.png
│   └── Angela_T_Ingram-Headshot.png
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Intro.tsx
│   │   ├── About.tsx
│   │   └── Footer.tsx
│   ├── App.tsx              # composes the sections
│   ├── main.tsx             # React entry; imports index.css + fonts
│   └── index.css            # Tailwind directives + .ambient-shadow + .s-curve-bg
├── index.html               # <title>/meta, root div, font/body base
├── tailwind.config.ts       # ported verbatim from code.html inline config
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

*(Directional — the implementer may adjust if a cleaner layout emerges. Per-unit `Files` are authoritative.)*

---

## Implementation Units

### U1. Scaffold the Vite + React project

**Goal:** Stand up a working Vite + React + TypeScript project at the repo root with Tailwind v3 wired, and a git repo initialized.

**Requirements:** R6, R8

**Dependencies:** none

**Files:**
- `package.json`, `tsconfig.json`, `tsconfig.node.json`, `vite.config.ts` (created by scaffold)
- `index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css` (scaffold defaults, replaced in later units)
- `postcss.config.js`, `tailwind.config.ts` (Tailwind init)
- `.gitignore`, `README.md`

**Approach:**
- Scaffold with the Vite `react-ts` template. Install and initialize Tailwind v3 + PostCSS + Autoprefixer (`tailwind.config.ts` + `postcss.config.js`); add the `@tailwind` directives to `src/index.css`. Pin Tailwind to v3 explicitly (KTD2).
- Remove the boilerplate Vite demo styles/markup so they don't interfere with later units.
- Initialize a git repository (project is currently not a git repo) and commit the scaffold so subsequent work is diffable.
- Verify `npm run dev` serves a page before proceeding.

**Patterns to follow:** standard Vite `react-ts` + Tailwind setup.

**Test scenarios:** Test expectation: none — scaffolding only. Verification is the dev server rendering and a clean `npm run build`.

**Verification:** `npm run dev` serves a page with no console errors; `npm run build` succeeds.

---

### U2. Port the Tailwind theme and global styles

**Goal:** Reproduce the exact design tokens and custom CSS from `code.html` so all utility classes used in the markup resolve identically.

**Requirements:** R2, R3, R9

**Dependencies:** U1

**Files:**
- `tailwind.config.ts`
- `src/index.css`

**Approach:**
- Port the entire `theme.extend` object from the `code.html` `<script id="tailwind-config">` into `tailwind.config.ts`: `colors` (all ~50 tokens), `borderRadius` (`DEFAULT`/`lg`/`xl`/`full`), `spacing` (`gutter`, `container-max`, `section-padding-desktop`, `section-padding-mobile`, `unit`), `fontFamily` (`display`, `headline-lg`, `headline-lg-mobile`, `headline-md`, `body-lg`, `body-md`, `label-sm`), and `fontSize` (same keys, with their `lineHeight`/`letterSpacing`/`fontWeight` metadata). Keep token names identical so the source class names work unchanged.
- Wire `fontFamily` entries to the `@fontsource` family names from U3 (Caslon-based families → `"Libre Caslon Text", serif`; Work-Sans-based families → `"Work Sans", sans-serif`).
- Set `content` globs to `./index.html` and `./src/**/*.{ts,tsx}`.
- In `src/index.css`: keep the three `@tailwind` directives, then port the two rules verbatim — `.ambient-shadow { box-shadow: 0 10px 30px -10px rgba(4,45,89,0.15); }` and `.s-curve-bg { background: radial-gradient(...) , radial-gradient(...); }`.
- Confirm `darkMode: "class"` is set (matches source; harmless, no dark variant used).

**Patterns to follow:** the inline config in `stitch_output/code.html` (lines 11–98) and `<style>` block (lines 99–105) are the literal source.

**Test scenarios:**
- A probe element using `bg-surface-container-low`, `text-primary`, `font-display`, `text-display`, `rounded-lg`, `px-gutter`, and `.ambient-shadow` compiles to the expected computed values (navy `#001836` text, gradient/shadow present). Verified visually in U5.
- Test expectation: none beyond visual/computed-style verification — this unit is configuration.

**Verification:** Utility classes from the source markup (e.g. `bg-surface-container-low`, `text-headline-lg`, `max-w-container-max`, `py-section-padding-desktop`) produce styles matching `code.html`.

---

### U3. Self-host fonts and add local image assets

**Goal:** Self-host the two typefaces via `@fontsource` and bring the image assets into the project.

**Requirements:** R4, R5, R6

**Dependencies:** U1 (font family names consumed by U2's `fontFamily` wiring)

**Files:**
- `src/main.tsx` (or `src/index.css`) — font imports
- `package.json` — `@fontsource/*` deps
- `public/ATI_Logo_Asset.png`
- `public/Angela_T_Ingram-Headshot.png`

**Approach:**
- Add `@fontsource/libre-caslon-text` and `@fontsource/work-sans`. Import the required faces to match the source link's weights/styles: Libre Caslon Text 400 + 700 + 400-italic; Work Sans 400 + 600 + 700. Import them once at the entry (`main.tsx`) or top of `index.css`.
- Copy `stitch_output/ATI_Logo_Asset.png` and `stitch_output/Angela_T_Ingram-Headshot.png` into `public/` (filenames preserved per KTD5). Leave the originals in `stitch_output/` untouched as reference.
- Do **not** load Material Symbols (KTD6).

**Patterns to follow:** `@fontsource` per-weight import pattern; the source font link at `code.html` line 8 defines the required weights/styles.

**Test scenarios:**
- Rendered headings use Libre Caslon Text; body copy uses Work Sans (verified visually in U5).
- Both images load (200, not 404) from `/ATI_Logo_Asset.png` and `/Angela_T_Ingram-Headshot.png`.
- Test expectation: none automated — verified via render + network in U5.

**Verification:** Fonts apply with no Google Fonts `<link>` in the document head; both images resolve.

---

### U4. Build the page and section components

**Goal:** Translate the `code.html` markup into React components, preserving every class and the exact copy.

**Requirements:** R1, R9

**Dependencies:** U2, U3

**Files:**
- `src/App.tsx`
- `index.html` (body/root base classes)
- `src/components/Hero.tsx`
- `src/components/Intro.tsx`
- `src/components/About.tsx`
- `src/components/Footer.tsx`

**Approach:**
- Apply the source `<body>` base classes — `bg-background text-on-background font-body-md antialiased selection:bg-secondary-container selection:text-on-secondary-container` (code.html line 107) — on the `<body>` in `index.html` (or the root wrapper in `App.tsx`).
- `Hero` (code.html 110–116): centered logo `<img src="/ATI_Logo_Asset.png" class="h-24 md:h-32 w-auto …">` + `<h1 className="font-display text-headline-lg md:text-headline-lg text-primary whitespace-nowrap">` headline; section wrapper with `s-curve-bg` and the padding/`max-w-container-max` classes.
- `Intro` (code.html 117–121): `bg-surface-container-low` section, three `<p>` paragraphs with the exact copy and the `font-body-lg`/`text-primary`/`text-on-surface-variant` classes.
- `About` (code.html 122–137): `bg-[#f5ece0]` section, 12-col grid with the `md:order` swap; headshot `<img>` with the organic radius classes (`rounded-tl-[120px] rounded-br-[120px] rounded-tr-[40px] rounded-bl-[40px]`), `border-4` with inline `borderColor: 'rgb(61,90,122)'`, `ambient-shadow`, and the blurred `secondary-container/20` glow div; heading `Angela T. Ingram, MBA`, the secondary-colored subtitle span, and three bio paragraphs verbatim.
- `Footer` (code.html 139–145): `bg-surface-dim` centered logo + `© 2026 ATI Consulting, LLC. All Rights Reserved.` Note: drop the stray non-class tokens `flat no shadows` present in the source `class` attribute (they are not Tailwind classes and render nothing).
- Preserve the `whitespace-nowrap` on the hero headline to match the screenshot (see Open Questions for the mobile-overflow caveat).
- Keep all literal text exactly as in the source, including the em dashes and the smart apostrophe in "Women's Ministry".
- Translate HTML attributes to JSX (`class`→`className`, inline `style` string → style object).

**Patterns to follow:** `stitch_output/code.html` is a line-by-line reference; `stitch_output/screen.png` is the visual check.

**Test scenarios:**
- Each section renders its expected headings/copy (e.g. About renders the "Angela T. Ingram, MBA" `<h2>` and the three bio paragraphs).
- The About grid applies the order swap at `md:` (image right of bio on desktop, matching the screenshot).
- Hero, Intro, About, Footer appear in that document order.
- Test expectation: lightweight render assertions (e.g. React Testing Library presence checks) are optional given the static nature; primary verification is the visual diff in U5.

**Verification:** Page structure and copy match `code.html`; section ordering and the desktop About layout match `screen.png`.

---

### U5. Metadata, polish, and visual verification

**Goal:** Set page metadata in `index.html`, confirm no CDN/runtime artifacts remain, and verify against the screenshot.

**Requirements:** R1, R6, R7

**Dependencies:** U4

**Files:**
- `index.html` (`<title>`, `<meta>`, `lang`, favicon)
- `README.md`

**Approach:**
- Set `<html lang="en">`, `<title>ATI Consulting | Organizational Culture</title>`, the viewport meta, and a basic `description` meta (reasonable default drawn from the intro copy) in `index.html` (matches code.html lines 3, 6). Replace the default Vite favicon with the ATI logo (or a derived favicon).
- Confirm no Tailwind CDN `<script>`, no inline `tailwind.config` script, no Google Fonts `<link>` remain (all replaced by the toolchain).
- Run `npm run build` + `npm run preview` and resolve any type/lint errors.
- Visually diff the running page against `stitch_output/screen.png` at desktop width; capture a screenshot and compare hero spacing, headline color/weight, intro column width/centering, About grid + headshot radius/border, and footer.
- Update `README.md` with run/build instructions and a note on the asset/source provenance.

**Patterns to follow:** static `index.html` head for a Vite SPA.

**Test scenarios:**
- `<title>` equals the source title.
- Document head contains no `cdn.tailwindcss.com` script and no `fonts.googleapis.com` stylesheet link.
- Desktop render matches `screen.png` with no meaningful differences (manual visual check).
- Test expectation: none automated beyond the head-content and title checks; the core acceptance is the visual diff.

**Verification:** `npm run build` is clean; `preview` parity with `screen.png` on desktop; no CDN dependencies in the output.

---

## Scope Boundaries

**In scope:** the single landing page reproduced like-for-like; full theme/token port; self-hosted fonts; local assets; growth-ready component structure; basic metadata.

**Deferred to Follow-Up Work:**
- A real, functional top navigation bar (the source has only a `<!-- TopNavBar -->` comment, no nav markup, and none appears in the screenshot).
- Additional pages/routes — for Vite this means adding a client router (e.g. React Router) and a shared layout/nav as the site grows.
- SEO/meta beyond the static `index.html` head (per-route titles/OG tags) once multiple pages exist — a Vite SPA needs explicit tooling here (e.g. react-helmet or a prerender/SSG step), unlike a framework with built-in metadata.
- Image optimization for the large headshot (~2.3MB) — compress/resize or adopt `vite-imagetools` later.
- The `DESIGN.md` components not present on this page (buttons, cards, inputs, "Insight Quote" callout, decorative logo swoosh watermark).
- Accessibility/perf hardening pass (Lighthouse, contrast audit).

**Out of scope (not part of this product's current identity):** CMS/content management, analytics, forms/booking flow, internationalization, dark mode (the `darkMode: "class"` token is ported but no dark variant is built).

---

## Open Questions

- **OQ1 (defer to implementation, low risk).** The hero `<h1>` carries `whitespace-nowrap` at 32px. On narrow viewports this can overflow horizontally — the source has the same behavior and the screenshot is desktop. Plan preserves it for fidelity; if mobile overflow is undesirable, dropping `whitespace-nowrap` (or allowing wrap below `md`) is a one-line follow-up. Decide during the U5 mobile check.
- **OQ2 (resolved → KTD2).** Tailwind v3 vs v4 — resolved to v3 for verbatim config reuse.
- **OQ3 (resolved → KTD1).** Framework — resolved to **Vite + React** per user selection.

---

## Risks & Dependencies

- **Risk — token drift while porting (R2).** Mitigation: copy the `theme.extend` object verbatim rather than retyping; spot-check computed colors in U5.
- **Risk — font weight/style mismatch.** The source links Caslon italic + weights 400/700 and Work Sans 400/600/700; the `@fontsource` imports must cover the same set or headings/weights will look subtly off. Mitigation: import the exact weights/styles (KTD4) and verify in U5.
- **Risk — SEO/metadata ceiling of an SPA.** A Vite SPA serves a thin `index.html`; once the site grows beyond one page, per-route SEO needs added tooling (noted in Scope Boundaries). Not a concern for the single landing page but worth flagging given the "grow into a website" goal.
- **Risk — unoptimized headshot weight.** ~2.3MB PNG with no framework image optimizer. Mitigation: acceptable for like-for-like now; optimization deferred.
- **Dependency:** Node/npm toolchain available locally; network access for the Vite scaffold and `@fontsource`/dependency installs.

---

## Sources & Research

- `stitch_output/code.html` — markup + inline Tailwind config + custom `<style>` (authoritative for tokens/markup).
- `stitch_output/screen.png` — visual acceptance target.
- `stitch_output/DESIGN.md` — brand/style intent and token reference (secondary to `code.html` on conflict).
- `stitch_output/ATI_Logo_Asset.png`, `stitch_output/Angela_T_Ingram-Headshot.png` — image assets.

No external/codebase research was run: greenfield repo, well-bounded reproduction task, low risk, standard Vite + React + Tailwind setup.
