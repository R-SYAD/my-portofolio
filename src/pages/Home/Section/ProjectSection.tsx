import { projects as allProjects } from '../../../data/projectData'

// Resolve a safe preview image for a project: prefer first gallery image when available for known folders
const getPreviewSrc = (p: (typeof allProjects)[number]): string | undefined => {
	const folder = p.gallery?.folder
	const first = p.gallery?.files?.[0]
	if (folder && first) {
		return `/images/Project/${encodeURIComponent(folder)}/${first}`
	}
	return p.cover
}

export default function ProjectSection() {
	return (
		<section id="projects" className="scroll-mt-28 py-16">
			<div className="flex items-baseline justify-between">
				<div>
					<h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Proyek Pilihan</h2>
					<p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Beberapa karya yang saya banggakan.</p>
				</div>
				<a href="/projects" className="text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">Lihat semua</a>
			</div>

			<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{allProjects.slice(0, 3).map((p) => (
					<a
						key={p.id}
						href={p.detail}
						className="group relative flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-gray-900/60"
					>
						<div className="aspect-video overflow-hidden rounded-lg bg-gray-100 ring-1 ring-blue-200/40 dark:bg-gray-800">
							{(() => {
								const src = getPreviewSrc(p)
								return src ? (
									<img src={src} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
								) : (
									<div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.2),transparent_45%)]" />
								)
							})()}
						</div>
						<div className="mt-4 flex-1">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
							<p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{p.description}</p>
						</div>
						<div className="mt-3 flex flex-wrap gap-2">
							{p.tech?.slice(0, 3).map((t) => (
								<span key={t} className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-300">
									{t}
								</span>
							))}
						</div>
						<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-transparent transition group-hover:ring-blue-500/30" />
					</a>
				))}
			</div>
		</section>
	)
}

