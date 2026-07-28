# Valor Mortis Demo Guide

Independent, source-tracked fan guide for **Valor Mortis** (One More Level — creators of Ghostrunner — published by Lyrical Games / One More Level). A first-person soulslike where you play a fallen soldier of Napoleon's Grande Armée in a Paris twisted by dark magic.

🔗 **Live site: https://valor-mortis.wiki**

Covers the hands-on Demo (Steam Demo App 4641840, released 2026-06-07) ahead of the full game (App 2828710). Every fact is sourced from the official Steam pages and the developer site.

## Tech stack

- [Astro 5](https://astro.build/) — static output (`output: 'static'`, `trailingSlash: 'always'`)
- [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite`
- `@astrojs/sitemap` — automatic sitemap generation

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the build locally |

## Content

Demo walkthrough, boss strategy, weapons & powers, and PC settings / known issues. Structured data lives in `src/data/`; guide articles are Markdown files under `src/content/guides/` where the file path becomes the URL.

## Disclaimer

Independent fan site. Not affiliated with or endorsed by One More Level or Lyrical Games. All trademarks belong to their respective owners.
