import { useEffect, useMemo } from 'react'

export default function CertificateModal({ file, title, onClose }: { file: string; title: string; onClose: () => void }) {
  useEffect(() => {
    const prev = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => { document.documentElement.style.overflow = prev; window.removeEventListener('keydown', onKey) }
  }, [onClose])

  const isPdf = useMemo(() => file.toLowerCase().endsWith('.pdf'), [file])
  // Encode URI to handle spaces and special chars so server doesn't fall back to index.html
  const safeSrc = useMemo(() => encodeURI(file), [file])

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/70 backdrop-blur-sm">
      <div className="relative mx-4 max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-black/40 p-2 shadow-2xl ring-1 ring-white/10" role="dialog" aria-modal="true">
        {isPdf ? (
          <iframe src={safeSrc} title={title} className="h-[86vh] w-full" />
        ) : (
          <img src={safeSrc} alt={title} className="mx-auto block max-h-[86vh] w-auto max-w-full object-contain" />
        )}
        <button
          aria-label="Close"
          className="absolute right-3 top-3 rounded-full bg-white/10 p-2 text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
