// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

import react from "@astrojs/react";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PROD
    ? "https://ai-powered-astro-template.pages.dev/"
    : "http://localhost:4321",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: import.meta.env.PROD
        ? { "react-dom/server": "react-dom/server.edge" }
        : {},
    },
  },

  integrations: [react(), icon(), mdx(), sitemap()],
  adapter: cloudflare({ imageService: "compile" }),
});
