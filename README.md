# Portofolio Pribadi - Muhammad Irsyadul Fikri

Website portofolio pribadi berbasis React, TypeScript, dan Vite untuk menampilkan profil, pengalaman kerja, sertifikasi, proyek, dan informasi kontak. Aplikasi ini dibuat sebagai personal portfolio yang responsif, mudah dijelajahi, dan menonjolkan karya-karya yang pernah dikerjakan.

## Gambaran Umum

Portofolio ini berisi beberapa halaman utama:

- Beranda dengan ringkasan profil dan highlight proyek
- Halaman daftar proyek dengan pencarian dan filter teknologi
- Halaman detail proyek lengkap dengan galeri gambar
- Halaman pengalaman kerja
- Halaman sertifikasi
- Halaman kontak

Aplikasi juga mendukung tema terang dan gelap, serta menggunakan navigasi berbasis routing agar setiap bagian portofolio mudah diakses.

## Fitur Utama

- Desain responsif untuk desktop dan mobile
- Navigasi halaman menggunakan React Router
- Mode terang dan gelap
- Daftar proyek dengan pencarian dan filter teknologi
- Kartu proyek dengan preview gambar dari galeri proyek
- Halaman detail proyek dengan gambar, deskripsi, dan highlight
- Halaman sertifikasi dengan tampilan kartu dan modal preview
- Halaman kontak untuk memudahkan orang menghubungi pemilik portofolio
- Tab browser dengan favicon dan judul halaman yang sudah disesuaikan

## Teknologi yang Digunakan

- React 19
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- ESLint
- PostCSS dan Autoprefixer

## Halaman yang Tersedia

- `/` - Beranda
- `/projects` - Daftar semua proyek
- `/projects/:id` - Detail proyek tertentu
- `/experience` - Pengalaman kerja
- `/certifications` - Sertifikasi
- `/contact` - Kontak

## Struktur Project Inti

```text
src/
  components/
    layout/
      Header.tsx
      Footer.tsx
    ui/
      ThemeToogle.tsx
  data/
    certificationData.ts
    contactData.ts
    organizationdata.ts
    projectData.ts
    skillsData.ts
    workExperienceData.ts
  pages/
    Home/
    Projects/
    Experience/
    Certifications/
    Contact/
```

## Instalasi

1. Clone repository ini.
2. Masuk ke folder project.
3. Install dependensi.
4. Jalankan aplikasi dalam mode development.

```bash
npm install
npm run dev
```

## Script yang Tersedia

```bash
npm run dev
```

Menjalankan aplikasi di mode development.

```bash
npm run build
```

Membuat build production.

```bash
npm run lint
```

Menjalankan pemeriksaan ESLint.

```bash
npm run preview
```

Menjalankan preview hasil build production.

## Data Proyek dan Gambar

Beberapa proyek menampilkan gambar preview dari folder galeri yang tersimpan di `public/images/Project/`. Detail proyek menggunakan gambar galeri yang sesuai dengan data di `src/data/projectData.ts`.

## Catatan Pengembangan

- Template bawaan Vite sudah diganti dengan identitas portofolio pribadi.
- Halaman proyek menggunakan preview gambar asli dari galeri bila tersedia.
- Kartu proyek dibuat konsisten agar tampilan daftar lebih rapi.

## Lisensi

Silakan gunakan kembali untuk kebutuhan portofolio pribadi Anda.
