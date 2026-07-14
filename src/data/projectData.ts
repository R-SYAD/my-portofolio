import type { ProjectItem } from "../pages/Projects/Component/types"

// Simple SVG placeholders as data URLs for covers (light/dark friendly)
const cardSvg = (title: string, color: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630' viewBox='0 0 1200 630'>
      <defs>
        <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
          <stop offset='0%' stop-color='${color}' stop-opacity='0.9'/>
          <stop offset='100%' stop-color='${color}' stop-opacity='0.5'/>
        </linearGradient>
      </defs>
      <rect width='100%' height='100%' fill='url(#g)'/>
      <g fill='white' fill-opacity='0.14'>
        <circle cx='160' cy='120' r='80'/>
        <circle cx='240' cy='220' r='90'/>
        <circle cx='320' cy='140' r='60'/>
      </g>
      <text x='60' y='330' font-family='Inter, system-ui, -apple-system' font-size='72' font-weight='700' letter-spacing='1' fill='#ffffff' fill-opacity='0.9'>${title}</text>
    </svg>`
  )}`

export const projects: ProjectItem[] = [
  {
    id: 'p-icofr',
    title: 'Aplikasi Web ICOFR (Internal Control Over Financial Reporting) PT Semen Padang',
    description:
      'Aplikasi web ICOFR (Internal Control Over Financial Reporting) adalah sebuah sistem informasi enterprise yang dirancang untuk mengelola, memantau, dan mengevaluasi keandalan pelaporan keuangan perusahaan. Sistem ini memiliki arsitektur Role-Based Access Control (RBAC) yang kompleks dengan tingkat otorisasi berjenjang, meliputi Admin, Pelaksana, Verifikator, Reviewer, Supervisor, hingga General Manager (GM). Aplikasi ini dibangun dengan struktur yang mengakomodasi alur kerja digital untuk modul-modul krusial seperti Control Self Assessment (CSA), pengujian Test of One, Validasi BPM, hingga pembuatan Laporan Akhir ICOFR secara otomatis menggunakan tumpukan teknologi modern seperti React/Next.js, Node.js, dan database PostgreSQL.',
    year: 2025,
    cover: cardSvg('Aplikasi Web ICOFR', '#2563eb'),
    detail: '/projects/p-icofr',
    repo: '#',
    tech: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Express', 'PostgreSQL', 'Node.js', 'Zustand', 'Vite'],
    highlights: [
      'Mendukung arsitektur Role-Based Access Control (RBAC) dengan tingkat otorisasi berjenjang',
      'Memfasilitasi alur kerja digital untuk Control Self Assessment (CSA) dan pengujian Test of One',
      'Pembuatan Laporan Akhir ICOFR secara otomatis terintegrasi ke dalam sistem'
    ],
    gallery: {
      folder: 'Aplikasi Web ICOFR',
      files: ['1.png', '2.png', '3.png', '4.png']
    }
  },
  {
    id: 'p-sman-2-tebo',
    title: 'Website Profil SMAN 2 Tebo',
    description: 'Pengembangan antarmuka (front-end) website resmi SMAN 2 Tebo yang interaktif dan responsif. Sistem ini dirancang untuk menyajikan informasi dinamis seperti profil sekolah, berita, agenda, dan galeri secara cepat dengan optimasi SEO dan performa tinggi.',
    year: 2025,
    cover: cardSvg('Website SMAN 2 Tebo', '#10b981'), // Warna hijau emerald
    detail: '/projects/p-sman-2-tebo',
    repo: '#',
    tech: ['React', 'TypeScript', 'Tailwind', 'REST API'], // Pastikan 'REST API' ditambahkan ke type Tech jika belum ada
    highlights: [
      'Penerapan antarmuka mobile-first dan arsitektur komponen yang terstruktur',
      'Optimasi waktu muat halaman (load time) menggunakan lazy loading dan memoization',
      'Integrasi REST API dengan sistem backend untuk pembaruan konten secara real-time'
    ],
    gallery: {
      folder: 'Website SMAN 2 Tebo',
      files: ['1.png', '2.png', '3.png']
    }
  },
  {
id: 'p-unand-karir',
    title: 'Web Tracer Study UPT Unand Karir',
    description: 'Pengembangan portal web dan visualisasi data untuk menampilkan hasil pelacakan jejak alumni (Tracer Study) Universitas Andalas. Proyek ini memfasilitasi penyajian insight analitik yang dapat ditindaklanjuti dari dataset alumni berskala besar melalui antarmuka grafik interaktif.',
    year: 2024,
    cover: cardSvg('Web Unand Karir', '#f59e0b'),
    detail: '/projects/p-unand-karir',
    repo: '#',
    tech: ['React', 'Tailwind', 'Node.js', 'Express', 'Next.js', 'PostgreSQL',],
    highlights: [
      'Pembuatan antarmuka web interaktif untuk visualisasi metrik kunci alumni secara dinamis',
      'Proses data cleaning dan validasi untuk memastikan akurasi informasi pada sistem',
      'Penerapan standarisasi dokumentasi data dan desain UI yang ramah pengguna'
    ],
    gallery: {
      folder: 'Web Unand Karir',
      files: ['1.png', '2.png', '3.png', '4.png', '5.png']
    }
  },
  {
    id: 'p-e-monev-bapenda',
    title: 'E‑Monev Bapenda',
    description:
      'Sistem Monitoring & Evaluasi untuk Badan Pendapatan Daerah (Bapenda) dengan fokus pada pelaporan, dashboard, dan manajemen kegiatan.',
    year: 2025,
    cover: cardSvg('E‑Monev Bapenda', '#2563eb'),
    detail: '/projects/p-e-monev-bapenda',
    repo: '#',
    tech: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Android','Flutter', 'Dart', 'Node.js', 'Express', 'PostgreSQL'],
    highlights: [
      'Dashboard ringkas dengan grafik',
      'Ekspor laporan dan filter dinamika',
      'Akses berbasis peran (role-based)'
    ],
    gallery: {
      folder: 'E-Monev Bapenda',
      files: ['1.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png',]
    }
  },
  {
    id: 'p-sipanka-kopsyah',
    title: 'Sipanka KopSyah',
    description: 'Sistem Informasi Pemantauan Perkembangan Koperasi Syariah Provinsi Sumatera Barat. Website ini diperuntukkan untuk mengawasi jalannya proses konversi koperasi dari koperasi konvensional menjadi koperasi syariah di Sumatera Barat.',
    year: 2023,
    cover: cardSvg('Sipanka KopSyah', '#16a34a'),
    detail: '/projects/p-sipanka-kopsyah',
    repo: '#',
    tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    highlights: [
      'Proyek dibuat atas permintaan dinas koperasi dan umkm sumatera barat kepada diskominfo sumatera barat',
      'Web ini memiliki 4 user yaitu admin provinsi, kabupaten, koperasi dan dewan pengawas syariah',
      'Dilengkapi dengan alur proses konversi dan unggah dokumen berita acara'
    ],
    gallery: {
      folder: 'Sipanka KopSyah',
      files: ['1.png', '2.png', '3.png', '4.png']
    }
  },
  // {
  //   id: 'p-kumpulin',
  //   title: 'Kumpulin',
  //   description: 'Kumpulin merupakan project web yang memungkinkan setiap user membuat task atau tugas yang dapat dilihat oleh user lainnya.',
  //   year: 2023,
  //   cover: cardSvg('Kumpulin', '#475569'),
  //   detail: '/projects/p-kumpulin',
  //   repo: '#',
  //   tech: ['React', 'Express', 'Node.js'],
  //   highlights: [
  //     'Memungkinkan setiap user membuat task atau tugas yang dapat dilihat oleh user lainnya',
  //     'User lain dapat melakukan submission dilengkapi dengan fitur upload file',
  //     'Web ini dibagun dengan express js sebagai backendnya dan react js sebagai frontendnya'
  //   ],
  //   gallery: {
  //     folder: 'Kumpulin',
  //     files: ['1.png', '2.png', '3.png', '4.png']
  //   }
  // },
  {
    id: 'p-metro-software',
    title: 'Metro Indonesian Software',
    description: 'Pembuatan kembali web profile dari PT Metro Indonesia Software dengan tampilan yang lebih baru dan juga menambahkan halaman admin untuk memperbarui konten yang ada pada web profilenya.',
    year: 2023,
    cover: cardSvg('Metro Indonesian Software', '#8b5cf6'),
    detail: '/projects/p-metro-software',
    repo: '#',
    tech: ['PHP', 'Laravel'],
    highlights: [
      'Membuat tampilan backoffice atau halaman khusus admin yang berfungsi untuk mengelola konten di web tersebut',
      'Penyusunan struktur halaman portofolio, artikel, galeri, tim, dan profil mitra',
      'Web ini dibangun dengan Bahasa pemograman PHP dan Laravel sebagai frameworknya'
    ],
    gallery: {
      folder: 'Metro Indonesian Software',
      files: ['1.png', '2.png', '3.png', '4.png']
    }
  },
  {
    id: 'p-gafito',
    title: 'GAFITO',
    description: 'GAFITO merupakan aplikasi yang dapat digunakan untuk manajemen parkir di kampus. Aplikasi ini dapat digukanan sebagai pengganti kartu parkir yang saat ini masih digunakan di kampus Universitas Andalas.',
    year: 2024,
    cover: cardSvg('GAFITO', '#3b82f6'),
    detail: '/projects/p-gafito',
    repo: '#',
    tech: ['Kotlin', 'Jetpack Compose', 'QR Code', 'Android', 'Firebase'],
    highlights: [
      'Aplikasi ini memiliki fitur utama yaitu parkir menggukanan scan QR code yang dimiliki oleh setiap mahasiswa',
      'Terdapat GAFITO User yaitu aplikasi yang nantinya digunakan oleh mahasiswa, tenaga pendidik ataupun dosen',
      'Terdapat GAFITO Satpam yang nantinya digukan oleh satpam untuk memindai qr dari pengguna GAFITO User'
    ],
    gallery: {
      folder: 'GAFITO',
      files: ['1.png', '2.png', '3.png', '4.png']
    }
  },
  {
    id: 'p-boolea',
    title: 'Boolea',
    description: 'Boolea adalah website peminjaman buku, inventaris, dan permintaan jasa asisten pada laboratory of enterprise application Universitas Andalas.',
    year: 2023,
    cover: cardSvg('Boolea', '#eab308'),
    detail: '/projects/p-boolea',
    repo: '#',
    tech: ['JavaScript', 'React', 'Vite'],
    highlights: [
      'Menyediakan layanan peminjaman buku, inventaris, dan permintaan jasa asisten',
      'Dibangun untuk memenuhi tugas pada mata kuliah Perancangan Berbasis Kerangka Kerja dan juga atas permintaan kepala laboratory',
      'Website ini dibangun dngan menggunakan Bahasa javascript dan framework react js +vite'
    ],
    gallery: {
      folder: 'Boolea',
      files: ['1.png', '2.png', '3.png', '4.png']
    }
  },
  {
    id: 'p-absensi-face-rec',
    title: 'Absensi Assistant Laboratory of Business Intelligence',
    description: 'Web absensi ini dibangun menggunakan bahasa python dan menggunakan face recognition sebagai metode absensinya.',
    year: 2023,
    cover: cardSvg('Absensi Face Recognition', '#ef4444'),
    detail: '/projects/p-absensi-face-rec',
    repo: '#',
    tech: ['Python', 'Streamlit', 'Face Recognition'],
    highlights: [
      'Metode absensi menggunakan pengenalan wajah untuk verifikasi kehadiran asisten',
      'Absensi ini menggunakan framework streamlit dalam pembangunannya',
      'Absensi akan dilakukan dengan mendeteksi wajah dan data yang tersimpan akan disimpan pada riwayat'
    ],
    gallery: {
      folder: 'Absensi Assistant Laboratory of Business Intelligence',
      files: ['1.png', '2.png', '3.png', '4.png']
    }
  }
];