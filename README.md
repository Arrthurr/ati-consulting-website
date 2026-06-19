# ATI Consulting Website

A Vite + React + TypeScript landing page for ATI Consulting, reproduced from the Google Stitch export in `stitch_output/`.

## Getting started

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (typically `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Source assets

The visual design and copy originate from:

- `stitch_output/code.html` — markup and Tailwind theme tokens
- `stitch_output/screen.png` — desktop visual acceptance reference
- `stitch_output/DESIGN.md` — brand/style notes (secondary to `code.html` on conflict)
- `stitch_output/ATI_Logo_Asset.png` and `stitch_output/Angela_T_Ingram-Headshot.png` — copied to `public/`

## Stack

- Vite + React + TypeScript
- Tailwind CSS v3 (theme ported from the Stitch inline config)
- `@fontsource/libre-caslon-text` and `@fontsource/work-sans` (self-hosted fonts)
