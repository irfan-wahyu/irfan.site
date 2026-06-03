import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

export default defineConfig({
  output: "static",
  base: "/irfan.site/", // Pastikan nama ini sama persis dengan nama repositori GitHub kamu
  integrations: [react(), keystatic()],
});
