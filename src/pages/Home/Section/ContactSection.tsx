import { contacts } from '../../../data/contactData'

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 py-16">
      <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 text-center dark:border-blue-900/40 dark:from-blue-950/40 dark:to-gray-900">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Tertarik Bekerja Sama?</h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600 dark:text-gray-300">
          Saya terbuka untuk kesempatan kolaborasi, freelance, atau full-time. Kirim pesan dan mari berdiskusi.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={contacts.find(c => c.id === 'email')?.href ?? '#'}
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
          >
            Email Saya
          </a>
          <a
            href={contacts.find(c => c.id === 'linkedin')?.href ?? '/contact'}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-800 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            LinkedIn
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-transparent px-4 py-2 text-sm font-semibold text-blue-700 transition hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
          >
            Semua kontak →
          </a>
        </div>
      </div>
    </section>
  )
}
