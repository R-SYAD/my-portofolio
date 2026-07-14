import type { CertificateItem } from "../pages/Certifications/Component/types"

// Helper to generate a simple thumbnail placeholder; replace with real images later
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

export const certificates: CertificateItem[] = [
  {
    id: 'cert-web-dev',
    title: 'Junior Web Programmer',
    issuer: 'BNSP',
    date: '2025',
    thumbnail: cardSvg('Web Dev', '#2563eb'),
    file: '/sertifikat/Junior Web Programmer.pdf',
    tags: ['Sertifikasi Kompetensi']
  },
    {
    id: 'cert-ict-project-mg',
    title: 'ICT Project Manager',
    issuer: 'BNSP',
    date: '2025',
    thumbnail: cardSvg('ICT Project Manager', '#2563eb'),
    file: '/sertifikat/ICT Project Manager.pdf',
    tags: ['Sertifikasi Kompetensi']
  },

]
