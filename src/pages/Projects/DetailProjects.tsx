import { Link, useParams } from 'react-router-dom'
import { projects } from '../../data/projectData'
import { useState } from 'react'
import Lightbox from './Component/Lightbox'

export default function DetailProjects() {
		const { id } = useParams<{ id: string }>()
		const [lightboxAt, setLightboxAt] = useState<number | null>(null)
	const proj = projects.find((p) => p.id === id)

	if (!proj) {
		return (
			<section className="py-10">
				<h1 className="text-2xl font-semibold">Proyek tidak ditemukan</h1>
				<p className="mt-2 text-gray-600 dark:text-gray-300">ID: {id}</p>
				<div className="mt-6">
					<Link to="/projects" className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-500">Kembali ke daftar</Link>
				</div>
			</section>
		)
	}

		const images: string[] = (proj.gallery?.files || []).map((f) => {
			const folder = encodeURIComponent(proj.gallery!.folder)
			const file = encodeURIComponent(f)
			return `/images/Project/${folder}/${file}`
		})

	return (
		<section className="py-8 sm:py-10">
			<header className="mb-6 sm:mb-8">
				<div className="flex flex-wrap items-center justify-between gap-3">
					<div>
						<h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{proj.title}</h1>
						<p className="mt-2 max-w-3xl text-gray-600 dark:text-gray-300">{proj.description}</p>
					</div>
					<span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">{proj.year}</span>
				</div>
			</header>

					{images.length > 0 && (
						<div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
							{images.map((src, i) => (
								<figure
									key={src}
									className="group relative overflow-hidden rounded-xl border border-gray-200/70 bg-white dark:border-gray-800/70 dark:bg-gray-900"
								>
									<img
										src={src}
										alt={`${proj.title} screenshot ${i + 1}`}
										className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
										loading={i === 0 ? 'eager' : 'lazy'}
									/>
									<button
										className="absolute inset-0 grid place-items-center bg-black/0 text-white opacity-0 transition group-hover:bg-black/30 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
										onClick={() => setLightboxAt(i)}
										aria-label={`Perbesar gambar ${i + 1}`}
									>
										<span className="inline-flex items-center gap-2 rounded-md bg-white/20 px-3 py-1.5 text-sm font-semibold backdrop-blur-sm">
											Perbesar
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.3-4.3m0 0A7.5 7.5 0 1 0 5 5a7.5 7.5 0 0 0 11.7 11.7Z"/></svg>
										</span>
									</button>
								</figure>
							))}
						</div>
					)}

			<div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr,320px]">
				<article className="prose max-w-none dark:prose-invert">
					<h2>Deskripsi</h2>
					<p>{proj.description}</p>
					{proj.highlights?.length ? (
						<ul>
							{proj.highlights.map((h) => (
								<li key={h}>{h}</li>
							))}
						</ul>
					) : null}
				</article>

				<aside className="rounded-xl border border-gray-200/70 bg-white p-4 dark:border-gray-800/70 dark:bg-gray-900">
					<h3 className="text-sm font-semibold tracking-wide text-gray-700 dark:text-gray-300">Teknologi</h3>
					<div className="mt-3 flex flex-wrap gap-1.5">
						{proj.tech.map((t) => (
							<span key={t} className="inline-flex items-center rounded-md border border-blue-200/70 bg-blue-50/60 px-2 py-0.5 text-xs font-medium text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/30 dark:text-blue-300">{t}</span>
						))}
					</div>

					<div className="mt-5 grid grid-cols-1 gap-2 text-sm">
						{proj.detail && (
							<a href={proj.detail} className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-3 py-2 font-semibold text-white transition hover:bg-blue-500">
								Kunjungi Project
							</a>
						)}
						{proj.repo && (
							<a href={proj.repo} className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 px-3 py-2 font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">
								Source Code
							</a>
						)}
						<Link to="/projects" className="inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 font-semibold text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">
							← Kembali ke daftar
						</Link>
					</div>
				</aside>
			</div>

			{/* Lightbox overlay */}
			{lightboxAt !== null && (
				<Lightbox images={images} index={lightboxAt} onClose={() => setLightboxAt(null)} />
			)}
		</section>
	)
}
