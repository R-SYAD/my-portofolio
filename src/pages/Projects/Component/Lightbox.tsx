import { useEffect, useMemo, useState } from 'react'

interface LightboxProps {
  images: string[]
  index: number
  onClose: () => void
}

export default function Lightbox({ images, index, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(index)
  const [mounted, setMounted] = useState(false)

  // Preload neighbor images for smoother navigation
  useEffect(() => {
    const preload = (src: string) => {
      const img = new Image()
      img.src = src
    }
    const left = (current - 1 + images.length) % images.length
    const right = (current + 1) % images.length
    images[left] && preload(images[left])
    images[right] && preload(images[right])
  }, [current, images])

  // Enter animation
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  // Keyboard controls
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setCurrent((c) => (c + 1) % images.length)
      if (e.key === 'ArrowLeft') setCurrent((c) => (c - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [images.length, onClose])

  // Scroll lock
  useEffect(() => {
    const prev = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = prev
    }
  }, [])

  const src = useMemo(() => images[current], [images, current])

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* container to stop propagation so image click doesn't close unless outside */}
      <div
        className={`relative mx-4 max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-xl border border-white/10 bg-black/40 p-2 shadow-2xl ring-1 ring-white/10 transition-transform duration-200 ${mounted ? 'scale-100' : 'scale-95'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt="preview"
          className="mx-auto block max-h-[86vh] w-auto max-w-full select-none object-contain"
          draggable={false}
        />

        {/* Close button */}
        <button
          aria-label="Close"
          className="absolute right-3 top-3 rounded-full bg-white/10 p-2 text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Prev/Next */}
        {images.length > 1 && (
          <>
            <button
              aria-label="Prev"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="m15 19-7-7 7-7"/></svg>
            </button>
            <button
              aria-label="Next"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              onClick={() => setCurrent((c) => (c + 1) % images.length)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7"/></svg>
            </button>
          </>
        )}

        {/* Indicator */}
        {images.length > 1 && (
          <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-2 py-1 text-xs font-medium text-white">
            {current + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  )
}
