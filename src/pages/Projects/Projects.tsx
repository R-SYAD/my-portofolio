import { useMemo, useState } from 'react'
import { projects as data} from '../../data/projectData'
import type { Tech } from './Component/types'
import { ProjectCard } from './Component/ProjectCard'

const ALL: Tech | 'All' = 'All'

export default function Projects() {
	const [query, setQuery] = useState('')
	const [filter, setFilter] = useState<typeof ALL | Tech>(ALL)

	const allTech = useMemo(() => {
		const s = new Set<Tech>()
		data.forEach((p) => p.tech.forEach((t) => s.add(t)))
		return [ALL, ...Array.from(s)] as const
	}, [])

	const list = useMemo(() => {
		let res = data
		if (filter !== ALL) {
			res = res.filter((p) => p.tech.includes(filter as Tech))
		}
		if (query.trim()) {
			const q = query.toLowerCase()
			res = res.filter(
				(p) =>
					p.title.toLowerCase().includes(q) ||
					p.description.toLowerCase().includes(q) ||
					p.tech.some((t) => t.toLowerCase().includes(q))
			)
		}
		return res
	}, [query, filter])

	return (
		<section className="py-8 sm:py-10">
			<header className="mb-6 sm:mb-8">
				<h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Semua Proyek</h1>
				<p className="mt-3 max-w-2xl text-base text-gray-600 dark:text-gray-300">
					Jelajahi proyek-proyek yang pernah saya kerjakan. Gunakan pencarian dan filter untuk menemukan topik yang kamu minati.
				</p>
			</header>

			{/* controls */}
			<div className="sticky top-16 z-10 -mx-4 border-y border-gray-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:border-gray-800/70 dark:bg-gray-950/60 sm:rounded-xl sm:border sm:px-4 md:top-[4.5rem]">
				<div className="mx-auto max-w-6xl px-4 py-3 sm:px-2">
					<div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
						{/* search */}
						<label className="relative block w-full sm:max-w-sm">
							<input
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								placeholder="Cari judul, deskripsi, atau teknologi..."
								className="w-full rounded-md border border-gray-300 bg-white/80 px-9 py-2 text-sm shadow-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-100"
							/>
							<svg className="pointer-events-none absolute left-2.5 top-2.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.3-4.3m0 0A7.5 7.5 0 1 0 5 5a7.5 7.5 0 0 0 11.7 11.7Z"/></svg>
						</label>

						{/* filter */}
						<div className="flex flex-wrap items-center gap-2">
							{allTech.map((t) => (
								<button
									key={t as string}
									onClick={() => setFilter(t)}
									className={
										'rounded-full px-3 py-1 text-sm font-medium transition ' +
										(filter === t
											? 'bg-blue-600 text-white shadow-sm'
											: 'border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800')
									}
								>
									{t}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* grid */}
			<div className="mt-6 grid gap-5 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
				{list.map((p) => (
					<div
						key={p.id}
						className="h-full animate-[fadeInUp_420ms_ease-out_forwards] opacity-0 [--stagger:calc(var(--i,0)*60ms)]"
						style={{ ['--i' as any]: list.indexOf(p) }}
					>
						<ProjectCard item={p} />
					</div>
				))}
			</div>

			{/* keyframes */}
			<style>{`
				@keyframes fadeInUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
				@media (prefers-reduced-motion: reduce) {
					.animate-[fadeInUp_420ms_ease-out_forwards] { animation: none !important; opacity: 1 !important; }
				}
			`}</style>
		</section>
	)
}

