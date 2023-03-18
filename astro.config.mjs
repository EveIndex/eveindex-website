import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [image(), prefetch(), tailwind(), sitemap()]
});