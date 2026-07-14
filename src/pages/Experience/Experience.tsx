import ExperienceCard from './Component/ExperienceCard'
import { experiences } from '../../data/workExperienceData'
import { organizationExperiences } from '../../data/organizationdata'

export default function Experience() {
	return (
		<section className="py-8 sm:py-10">
			{/* Decorative gradient blob */}
			<div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-blue-500/5 to-transparent blur-2xl" />

			<header className="mb-6 sm:mb-8">
				<h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Pengalaman</h1>
				<p className="mt-3 max-w-2xl text-base text-gray-600 dark:text-gray-300">
					Ringkasan pengalaman profesional dan organisasi—fokus pada dampak, kolaborasi, dan kualitas deliverable.
				</p>
			</header>

			{/* Work Experience */}
			<section aria-labelledby="work-exp-title" className="mb-10 sm:mb-12">
				<div className="mb-4 flex items-center gap-2">
					<h2 id="work-exp-title" className="text-xl font-semibold tracking-tight sm:text-2xl">Pengalaman Kerja</h2>
					<span className="h-1 w-16 rounded-full bg-blue-600/30 dark:bg-blue-400/30" />
				</div>

				<div className="relative pl-6 sm:pl-8">
					{/* left decorative spine only */}
					<div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-blue-500/20 via-gray-300/40 to-transparent dark:via-gray-700/40" />

					<div className="space-y-5">
						{experiences.map((exp, idx) => (
							<div key={exp.id} className="relative animate-[fadeInUp_420ms_ease-out_forwards] opacity-0 [animation-delay:calc(var(--i,0)*70ms)]" style={{ ['--i' as any]: idx }}>
								<ExperienceCard item={exp} />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Organization Experience */}
			<section aria-labelledby="org-exp-title" id="org">
				<div className="mb-4 flex items-center gap-2">
					<h2 id="org-exp-title" className="text-xl font-semibold tracking-tight sm:text-2xl">Pengalaman Organisasi</h2>
					<span className="h-1 w-16 rounded-full bg-blue-600/30 dark:bg-blue-400/30" />
				</div>

				<div className="grid grid-cols-1 gap-4 sm:gap-5">
					{organizationExperiences.map((exp, idx) => (
						<div key={exp.id} style={{ ['--i' as any]: idx }} className="animate-[fadeInUp_420ms_ease-out_forwards] opacity-0 [animation-delay:calc(var(--i,0)*70ms)]">
							<ExperienceCard item={exp} />
						</div>
					))}
				</div>
			</section>

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
