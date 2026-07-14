import { experiences as work } from '../../../data/workExperienceData'

export default function WorkExperienceSection() {
	return (
		<section id="experience" className="scroll-mt-28 py-16">
			<h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Pengalaman Kerja</h2>
			<ol className="relative mt-8 space-y-6 border-s border-blue-100 ps-5 dark:border-blue-900/30">
				{work.slice(0, 2).map((exp) => (
					<li key={exp.id} className="relative rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900/60">
						{/* timeline node */}
						<span className="absolute -start-2.5 top-6 block h-2.5 w-2.5 rounded-full border-2 border-white bg-blue-600 ring-2 ring-blue-100 dark:border-gray-900 dark:bg-blue-500 dark:ring-blue-900/30" />
						<div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
							<div>
								<h3 className="text-base font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
								<p className="text-sm text-blue-700 dark:text-blue-300">{exp.org}</p>
							</div>
							<p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
						</div>
						<ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-300">
							{exp.bullets.slice(0,2).map((b, i) => (
								<li key={i}>{b}</li>
							))}
						</ul>
					</li>
				))}
			</ol>
			<div className="mt-6 text-center">
				<a href="/experience" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
					Lihat semua pengalaman
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7"/></svg>
				</a>
			</div>
		</section>
	)
}

