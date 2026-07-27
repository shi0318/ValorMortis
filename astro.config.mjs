import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Final domain (plan首选 valormortis.wiki，注册后可替换)
const SITE = 'https://valormortis.wiki';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Prefer lastmod over low-signal changefreq/priority defaults.
      serialize(item) {
        return {
          ...item,
          lastmod: new Date().toISOString(),
        };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
