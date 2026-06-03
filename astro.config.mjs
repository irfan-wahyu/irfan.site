import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

// Kita deteksi apakah kita sedang nge-build atau lagi ngoding biasa
const isBuild = process.env.NODE_ENV === "production";

export default defineConfig({
  output: "static",
  base: "/irfan.site/",
  integrations: [
    react(),
    // Keystatic HANYA dijalankan kalau BUKAN lagi proses build
    !isBuild && keystatic(),
  ].filter(Boolean), // Membersihkan array agar tidak ada nilai 'false'
});
