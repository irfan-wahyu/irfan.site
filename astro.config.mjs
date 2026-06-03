import { defineConfig } from "astro/config";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react";

const isDev = process.env.NODE_ENV !== "production";

export default defineConfig({
  site: "https://irfan-wahyu.github.io",
  base: isDev ? "/" : "/irfan.site/",
  output: "static",
  adapter: undefined,
  integrations: [react(), keystatic()],
});
