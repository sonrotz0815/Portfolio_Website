import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',      // important for SWA
  dist: 'dist',          // default build folder
  integrations: [tailwind()],
});
