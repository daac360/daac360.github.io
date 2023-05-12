import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://daac360.github.io',
  base: '/',
  integrations: [react(), tailwind()]
});