import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://bulwarkblack.com",
  output: "static",
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
});
