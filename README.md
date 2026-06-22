# irfan.site

Portfolio pribadi **Irfan Wahyu** — *Systemic Thinker. Visual Maker.*

> **Live:** https://irfan-wahyu.github.io/irfan.site

---

## Tentang

Ruang dokumentasi digital untuk mencatat proses perkembangan, hasil proyek, dan eksperimen mandiri — mulai dari visual media, sistem digital, desain web, hingga pertimbangan filosofis di balik teknologi dan pendidikan.

### Fitur

- **Landing page** — hero particle canvas, skill cards dengan modal, works grid, philosophy slider, FAQ accordion
- **Portfolio** — archive halaman works dengan filter tag, infinite scroll (3 per klik), detail proyek dengan lightbox
- **Admin panel** (`/admin/`) — kelola project via GitHub API (tanpa backend, tanpa CMS eksternal)
- **Custom cursor**, grain texture, corner marks, dark theme dengan aksen gold (#c9a96e)

---

## Stack

| Lapisan | Teknologi |
|---------|-----------|
| Framework | [Astro](https://astro.build) v6 — static site generation |
| Bahasa | TypeScript, JavaScript, CSS murni (vanilla) |
| Ikon | [Lucide](https://lucide.dev) via `@lucide/astro` |
| Font | Alegreya (heading), Inter (body), DM Mono (mono), Alegreya SC (label) |
| Admin Panel | HTML/JS murni, GitHub REST API, Personal Access Token |
| Deploy | GitHub Actions → GitHub Pages |

---

## Setup Lokal

```bash
npm install
npm run dev        # → http://localhost:4321
npm run build      # → static di ./dist
npm run preview    # preview build
```

---

## Struktur Direktori

```
src/
├── components/       Nav, Footer, Cursor, BaseHead
├── layouts/          Layout.astro — wrapper global (head, cursor, footer)
├── pages/
│   ├── index.astro   landing page utama
│   └── works/
│       ├── index.astro     archive semua project
│       └── [slug].astro    halaman detail per project
├── content/
│   └── projects/*.md — frontmatter + markdown, dimuat via Astro Content Collections
├── data/
│   └── skills.ts     data skill cards
├── styles/           CSS (sumber) — diduplikasi ke public/styles/
public/
├── admin/
│   └── index.html    custom admin panel (self-contained, GitHub API)
└── styles/           CSS (runtime) — dimuat oleh halaman
```

---

## Admin Panel

Buka `https://irfan-wahyu.github.io/irfan.site/admin/` (atau `/admin/` di lokal).

### Cara Pakai

1. Generate **GitHub Personal Access Token** (Settings → Developer settings → Tokens → Generate new token → centang `repo`)
2. Masukkan token di halaman login admin
3. Token tersimpan di `sessionStorage` — hilang saat tab ditutup (harus login ulang)
4. List, edit, create, delete project langsung lewat form

### Keamanan

| Aspek | Status |
|-------|--------|
| Token tersimpan | `sessionStorage` (hilang saat tab ditutup) |
| Slug path traversal | Dicegah — `slugify()` diterapkan sebelum save |
| XSS | `escHtml()` dipakai di semua field yang di-render ke HTML |
| CSP | Content-Security-Policy aktif (inline script/style diizinkan) |
| API call | HTTPS + Authorization header (bukan URL params) |

---

## Deploy

Push ke `main` → GitHub Actions (`deploy.yml`) otomatis build & deploy ke GitHub Pages.

> Aktifkan Pages di repo: **Settings → Pages → Source: GitHub Actions**

---

## Menambah/Mengubah Project

### Lewat Admin Panel (rekomendasi)

Buka `/admin/` → **+ New Project** → isi form → Save. Otomatis commit ke repo.

### Manual (file `.md`)

Buat file di `src/content/projects/nama-project.md` dengan frontmatter:

```yaml
---
title: "Judul Project"
subtitle: "Satu kalimat deskripsi"
year: 2026
duration: "3 Month"
status: "Completed"
medium: "Website"
tools: ["Photoshop", "Framer"]
tags: ["Website", "UI"]
featured: true
order: 4
---
```

Isi body markdown bebas. Push → otomatis live di `/irfan.site/works/nama-project`.
