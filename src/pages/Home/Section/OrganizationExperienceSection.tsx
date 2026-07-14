import { organizationExperiences as orgs } from '../../../data/organizationdata'

export default function OrganizationExperienceSection() {
	return (
		<section className="scroll-mt-28 py-16">
			<h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Pengalaman Organisasi</h2>
			<div className="mt-6 grid gap-6 sm:grid-cols-2">
				{orgs.slice(0, 2).map((o) => (
					<div key={o.id} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm ring-1 ring-inset ring-blue-50 transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-gray-900/60 dark:ring-blue-900/10">
						<div className="flex items-baseline justify-between">
							<h3 className="text-base font-semibold text-gray-900 dark:text-white">{o.role}</h3>
							<span className="text-xs text-gray-500 dark:text-gray-400">{o.period}</span>
						</div>
						<p className="text-sm text-blue-700 dark:text-blue-300">{o.org}</p>
						{o.bullets?.length ? (
						  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-300">
							{o.bullets.slice(0,2).map((b) => (<li key={b}>{b}</li>))}
						  </ul>
						) : null}
					</div>
				))}
			</div>
			<div className="mt-6 text-center">
				<a href="/experience#org" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
					Lihat semua pengalaman organisasi
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7"/></svg>
				</a>
			</div>
		</section>
	)
}

