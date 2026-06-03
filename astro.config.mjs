import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

export default defineConfig({
  output: "static",
  base: "/ruang-wahyu/",
  integrations: [react(), import.meta.env.DEV && keystatic()].filter(Boolean),
});
