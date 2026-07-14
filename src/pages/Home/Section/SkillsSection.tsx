import { skillGroups } from '../../../data/skillsData'

export default function SkillsSection() {
	return (
		<section id="skills" className="scroll-mt-28 py-16">
			<h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Keahlian</h2>

			<div className="mt-6 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
				{skillGroups.map((group) => (
					<div key={group.title} className="relative overflow-hidden rounded-2xl border border-gray-200/70 bg-gradient-to-b from-white to-gray-50 p-6 shadow-sm dark:border-gray-800/60 dark:from-gray-900/70 dark:to-gray-900/50">
						<h3 className="text-base font-semibold text-gray-900 dark:text-white">
							{group.title}
							<span className="mt-2 block h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-500/40 to-blue-400/40" />
						</h3>
						<ul role="list" className="mt-6 grid gap-3 sm:gap-4 [grid-template-columns:repeat(auto-fit,minmax(160px,1fr))]">
							{group.items.map((it) => (
								<li key={it.name} role="listitem" className="group">
									<div
										className="inline-flex w-full items-center justify-center rounded-full border border-gray-200/70 bg-white/80 px-4 py-2.5 text-center text-sm font-medium leading-6 text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 dark:border-gray-700/60 dark:bg-gray-800/80 dark:text-gray-100 min-h-[44px] break-words"
										style={it.color ? { backgroundImage: `radial-gradient(80% 80% at 20% 10%, ${it.color}22 0%, transparent 70%)` } : undefined}
										title={it.name}
									>
										{it.name}
									</div>
								</li>
							))}
						</ul>
						<span className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />
						<span className="pointer-events-none absolute -bottom-8 -left-6 h-28 w-28 rounded-full bg-blue-400/10 blur-2xl" />
					</div>
				))}
			</div>
			<div className="mt-6 text-center">
				<a href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
					Lihat proyek untuk contoh penerapan
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7"/></svg>
				</a>
			</div>
		</section>
	)
}

