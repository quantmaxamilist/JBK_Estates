// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.jbkestates.co.uk',
  server: {
    port: 4323,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
