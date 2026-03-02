// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://nahuev00.github.io',
  base: 'portfolio',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["nonapportionable-nonvirtuously-lyndsay.ngrok-free.dev"],
    },
  },
});
