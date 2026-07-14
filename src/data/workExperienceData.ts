import type { ExperienceItem } from "../pages/Experience/Component/types";

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-semen-padang-2026',
    org: 'PT Semen Padang',
    role: 'Programmer',
    location: 'Padang, Sumatera Barat',
    period: 'Okt 2025 – Apr 2026',
    internship: true,
    bullets: [
      'Unit/Divisi: Governance, Risk & Compliance (GRC) — Membangun sistem web verifikasi CSA menggunakan PERN stack (PostgreSQL, Express.js, React TypeScript, Node.js).',
      'Mengoptimalkan performa melalui indexed queries, API batching, memoization, dan pengurangan payload data.',
      'Mengimplementasikan antarmuka pengguna (UI) responsif (mobile-first) dan kompatibilitas lintas-browser untuk memastikan pengalaman yang konsisten di berbagai perangkat.',
      'Merancang ruang kerja Verifikator (Periode → Siklus → Kontrol → Laporan) dengan penanda status yang jelas dan progressive disclosure.',
      'Menyediakan tabel laporan dengan fitur filter/pencarian/pengurutan yang dilengkapi paginasi dari sisi server (server-side pagination) dan aksi cepat untuk tinjauan bervolume tinggi.',
      'Mengimplementasikan tampilan detail laporan: pratinjau/unduh lampiran, jejak audit (riwayat status), dan komentar peninjau secara inline.',
      'Menerapkan alur persetujuan/penolakan (Approve/Reject) dengan catatan wajib dan transisi status yang dijaga secara ketat (Draft → Submitted → Verified/Returned).',
      'Mengamankan akses menggunakan RBAC + JWT serta pembatasan berbasis cakupan (perusahaan/lokasi) melalui middleware backend.'
    ],
    tags: ['PERN', 'React', 'TypeScript', 'Node.js', 'PostgreSQL']
  },
  {
    id: 'exp-freelance-2025',
    org: 'Freelance',
    role: 'Front-End Developer',
    location: 'Padang, Sumatera Barat',
    period: 'Aug 2025',
    bullets: [
      'Mengembangkan front-end situs Web SMAN 2 Tebo (React + TypeScript) dengan arsitektur komponen yang terstruktur.',
      'Membangun halaman dinamis (profil sekolah, berita/agenda, galeri, kontak) dengan routing rapi dan state terukur.',
      'Menerapkan UI mobile-first dan kompatibilitas lintas-browser untuk pengalaman konsisten.',
      'Integrasi REST API untuk konten dinamis serta form dengan validasi sisi klien.',
      'Optimasi kinerja (code-splitting, lazy loading, memoization) untuk waktu muat cepat.',
      'Penerapan aksesibilitas (semantic HTML/ARIA) dan SEO dasar (heading/meta).',
      'Membuat komponen UI reusable dengan dokumentasi ringkas.',
      'Menyusun alur build & deploy berbasis Git dan hosting statis untuk operasional admin sekolah.',
    ],
    tags: ['React', 'TypeScript', 'Tailwind', 'REST API']
  },
  {
    id: 'exp-metro-2024',
    org: 'PT. Metro Indonesian Software',
    role: 'Front-End Developer',
    location: 'Padang, Sumatera Barat',
    period: 'Mar 2024 – Apr 2024',
    internship: true,
    bullets: [
      'Pengembang front-end utama untuk redesain panel admin berbasis Laravel, fokus pada usability & konsistensi.',
      'Membangun Blade layout dan komponen reusable (form, tabel, modal, notifikasi) untuk percepat pengembangan.',
      'Implementasi responsif, validasi input, pencarian/filter/pagination pada tabel.',
      'Menata tipografi, spacing, dan state UI serta aksesibilitas (semantik HTML, fokus keyboard).',
      'Kolaborasi dengan backend: kontrak data, error handling, keamanan form (CSRF), dan panduan gaya.',
    ],
    tags: ['Laravel', 'Blade', 'UI Components', 'Admin Panel']
  },
  {
    id: 'exp-kominfo-2024',
    org: 'Dinas Komunikasi dan Informatika Provinsi Sumatera Barat',
    role: 'Full Stack Developer',
    location: 'Padang, Sumatera Barat',
    period: 'Jan 2024 – Feb 2024',
    internship: true,
    bullets: [
      'Kontributor utama membangun aplikasi web (Dinas Koperasi & UMKM) untuk proses konversi koperasi.',
      'Terlibat penuh siklus pengembangan, kecuali perancangan UI/UX.',
      'Full-stack PHP (Laravel): model/migrasi, controller/routes REST, validasi, middleware auth/otorisasi, Blade template.',
      'Membangun modul inti (manajemen data, pemantauan status konversi, pelaporan) dengan antarmuka responsif.',
      'Kolaborasi dengan pembimbing instansi untuk memastikan kesesuaian requirement & format data.',
    ],
    tags: ['Laravel', 'MySQL', 'REST', 'Auth']
  },
  {
    id: 'exp-unand-2023-2025',
    org: 'UPT Unand Karir',
    role: 'Data Analyst & Data Visualization',
    location: 'Padang, Sumatera Barat',
    period: 'Jul 2023 – Aug 2025',
    internship: true,
    bullets: [
      'Menilai kelayakan instrumen tracer study; koordinasi perbaikan sebelum distribusi.',
      'Data cleaning & validation untuk dataset siap analisis.',
      'Analisis deskriptif/eksploratif; menyusun insight yang dapat ditindaklanjuti.',
      'Menyusun laporan tracer & visualisasi data (grafik/dashboard) dengan metrik kunci.',
      'Standarisasi dokumentasi data (data dictionary, penamaan).',
      'Kolaborasi lintas unit untuk meningkatkan respons dan kualitas data.',
    ],
    tags: ['Data Cleaning', 'Visualization', 'Reporting']
  },
  {
    id: 'exp-unand-surveyor-2022',
    org: 'UPT Unand Karir',
    role: 'Surveyor',
    location: 'Padang, Sumatera Barat',
    period: 'Nov 2022 – Dec 2022',
    internship: true,
    bullets: [
      'Mengumpulkan data tracer alumni 2018–2020 sesuai SOP; administrasi kuesioner & pencatatan respons.',
      'Verifikasi responden dan validasi isian sebelum integrasi.',
      'Follow-up terarah untuk meningkatkan tingkat respons; pengelolaan status harian.',
      'Ringkasan temuan awal dan umpan balik lapangan untuk penyempurnaan instrumen.',
      'Mendukung penyusunan laporan dengan tabulasi dasar dan visual ringkas.',
    ],
    tags: ['Survey', 'Data Quality']
  },
];