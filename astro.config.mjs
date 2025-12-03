import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',      // generate a static site
  build: {
    outDir: 'dist',      // correct key for build output
  },
  integrations: [tailwind()],
});
