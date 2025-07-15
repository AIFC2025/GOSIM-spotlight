// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  site: "https://aifc2025.github.io/GOSIM-spotlight", 
  base: "/GOSIM-spotlight",   
});
