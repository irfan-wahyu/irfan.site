# irfan.site

Portfolio of Irfan Wahyu — Systemic Thinker. Visual Maker.

**Live:** https://irfan-wahyu.github.io/irfan.site

---

## Setup (sekali saja)

```bash
npm install
npm run dev        # localhost:4321
```

---

## Deploy ke GitHub Pages

Push ke branch `main` → GitHub Actions otomatis build dan deploy.

Aktifkan Pages di: **Settings → Pages → Source: GitHub Actions**

---

## Nambah Project Baru

Buat file baru di `src/content/projects/nama-project.md`:

```markdown
---
title: "Judul Project"
subtitle: "Satu kalimat deskripsi."
year: 2025
duration: "2 Minggu"
status: "Completed"
medium: "Motion Graphics"
tools: ["After Effects", "Illustrator"]
tags: ["Motion", "Illustration"]
featured: true
order: 3
---

## Heading Artikel

Isi artikel di sini...
```

Push → otomatis live di `/irfan.site/works/nama-project`.

---

## Struktur

```
src/
├── components/       Nav, Footer, Cursor, BaseHead
├── layouts/          Layout.astro (wrapper semua halaman)
├── pages/
│   ├── index.astro   landing page
│   └── works/
│       ├── index.astro     semua works
│       └── [slug].astro    detail project (auto-generate)
├── content/
│   └── projects/*.md       ISI SINI tiap project baru
└── styles/           CSS per halaman
```
