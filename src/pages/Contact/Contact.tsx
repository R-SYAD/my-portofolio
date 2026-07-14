import { contacts } from '../../data/contactData'
import ContactCard from './Component/ContactCard'

const icons = {
  email: (props: React.ComponentPropsWithoutRef<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm0 0 9 6 9-6"/></svg>
  ),
  linkedin: (props: React.ComponentPropsWithoutRef<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14Zm-9.75 7.5H7.25v7.25h2V10.5Zm9.5 3.25c0-2.83-1.5-4.15-3.5-4.15-1.3 0-2.25.7-2.6 1.36v-1.2H10.4c.03.78 0 8.24 0 8.24h2.25v-4.6c0-.25.02-.5.1-.68.22-.5.74-1.02 1.6-1.02 1.13 0 1.6.77 1.6 1.9v4.4h2.25v-5.25ZM8.5 7.25A1.25 1.25 0 1 0 8.5 9.75 1.25 1.25 0 0 0 8.5 7.25Z"/></svg>
  ),
  github: (props: React.ComponentPropsWithoutRef<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path fillRule="evenodd" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.19-3.37-1.19-.45-1.14-1.11-1.45-1.11-1.45-.9-.62.07-.6.07-.6 1 .07 1.53 1.05 1.53 1.05.89 1.52 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.62 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.51.32 1.9-1.29 2.74-1.02 2.74-1.02.55 1.36.21 2.37.11 2.62.64.7 1.03 1.59 1.03 2.68 0 3.85-2.33 4.69-4.56 4.94.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .26.19.57.69.47A10 10 0 0 0 12 2Z" clipRule="evenodd"/></svg>
  ),
  instagram: (props: React.ComponentPropsWithoutRef<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.7A4.3 4.3 0 1 0 16.3 12 4.31 4.31 0 0 0 12 7.7Zm6.2-.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1Z"/></svg>
  ),
} as const

export default function Contact() {
  return (
    <section className="py-8 sm:py-10">
      <header className="mb-6 sm:mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Kontak</h1>
        <p className="mt-3 max-w-2xl text-base text-gray-600 dark:text-gray-300">
          Terbuka untuk peluang kolaborasi, freelance, atau diskusi. Silakan hubungi saya melalui kanal berikut.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {contacts.map((c) => (
          <ContactCard key={c.id} label={c.label} value={c.value} href={c.href} icon={icons[c.id as keyof typeof icons]} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 rounded-xl border border-blue-200/60 bg-blue-50/60 p-4 text-blue-800 ring-1 ring-inset ring-blue-200/60 dark:border-blue-900/40 dark:bg-blue-950/30 dark:text-blue-200 dark:ring-blue-900/40 sm:p-5">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <p className="font-semibold">Punya proyek atau pertanyaan?</p>
            <p className="text-sm opacity-90">Kirim email langsung—saya akan membalas secepatnya.</p>
          </div>
          <a
            href="mailto:rsyadfikri@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
          >
            Email Saya
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
