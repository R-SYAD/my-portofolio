import type { CertificateItem } from './types'

export default function CertificateCard({ item, onOpen }: { item: CertificateItem; onOpen: (file: string, title: string) => void }) {
  const isPdf = item.file.toLowerCase().endsWith('.pdf')
  const safeSrc = encodeURI(item.file)
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-sm transition hover:shadow-md dark:border-gray-800/70 dark:bg-gray-900">
      <div className="relative aspect-[16/9] overflow-hidden">
        {isPdf ? (
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              src={safeSrc}
              title={item.title}
              className="pointer-events-none h-[140%] w-[140%] origin-top-left scale-[0.8]"
            />
          </div>
        ) : (
          <img src={item.thumbnail} alt={item.title} className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]" />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 transition group-hover:opacity-80" />
      </div>
      <div className="flex flex-col gap-3 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{item.title}</h3>
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">{item.date}</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">{item.issuer}</p>
        <div className="flex flex-wrap gap-1.5">
          {item.tags?.map((t) => (
            <span key={t} className="inline-flex items-center rounded-md border border-blue-200/70 bg-blue-50/60 px-2 py-0.5 text-xs font-medium text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/30 dark:text-blue-300">{t}</span>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
          <button
            className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-3 py-2 font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 sm:col-start-2"
            onClick={() => onOpen(item.file, item.title)}
          >
            Lihat Sertifikat
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </article>
  )
}
