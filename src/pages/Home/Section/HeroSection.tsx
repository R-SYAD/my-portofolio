import { useEffect, useMemo, useState } from "react"

export default function HeroSection() {
	// Track theme to swap image sources (light: full color, dark: profile-dasi)
	const [isDark, setIsDark] = useState<boolean>(() => {
		if (typeof document === "undefined") return false
		return document.documentElement.classList.contains("dark")
	})

	useEffect(() => {
		if (typeof document === "undefined") return
		const target = document.documentElement
		const observer = new MutationObserver(() => {
			setIsDark(target.classList.contains("dark"))
		})
		observer.observe(target, { attributes: true, attributeFilter: ["class"] })
		return () => observer.disconnect()
	}, [])

	const imgSrc = useMemo(
		() => (isDark ? "/images/profile-dasi.png" : "/images/profile-dasi-fullcolor.png"),
		[isDark]
	)

	return (
		<section id="home" className="relative scroll-mt-28 py-16 sm:py-24">
			{/* Background glow */}
			<div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-blue-100/70 via-blue-50/30 to-transparent dark:from-blue-950/40 dark:via-transparent" />
			{/* Decorative dots */}
			<div className="pointer-events-none absolute -left-10 top-24 -z-10 hidden h-40 w-40 rotate-6 bg-[radial-gradient(circle,rgba(59,130,246,0.15)_1px,transparent_1px)] [background-size:14px_14px] sm:block" />
			<div className="pointer-events-none absolute right-0 top-8 -z-10 hidden h-24 w-24 -rotate-6 bg-[radial-gradient(circle,rgba(59,130,246,0.15)_1px,transparent_1px)] [background-size:12px_12px] sm:block" />

			<div className="grid items-center gap-10 md:grid-cols-2">
				<div>
					<div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-300">
						Tersedia untuk peluang baru
					</div>
					<h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
						Halo, saya Fikri —
						<span className="block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent dark:from-blue-400 dark:to-blue-300">
							Web–Mobile Developer & Data Analyst
						</span>
					</h1>

					<p className="mt-4 max-w-xl text-base text-gray-600 dark:text-gray-300 sm:text-lg" style={{ textAlign: "justify" }}>
						Lulusan S1 Sistem Informasi dengan fokus pada web–mobile development dan data analytics. Berpengalaman membangun antarmuka modern dan solusi full‑stack (React/TypeScript, Laravel, Express, Flutter), mengelola pipeline data tracer study (cleaning, validasi, analisis deskriptif/eksploratif) hingga menyajikannya menjadi dashboard dan ringkasan eksekutif; terbiasa menyusun arsitektur sistem, merancang skema basis data, dan mengembangkan UI responsif menggunakan Power BI, Pentaho, MySQL, dan PostgreSQL.
					</p>

					<div className="mt-6 flex flex-wrap items-center gap-3">
						<a
							href="#projects"
							className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
						>
							Lihat Proyek
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
							</svg>
						</a>
						<a
							href="#contact"
							className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-800 dark:text-gray-200 dark:hover:bg-gray-800"
						>
							Hubungi Saya
						</a>
					</div>

					<div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
						<span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-300">React</span>
						<span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-300">TypeScript</span>
						<span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-300">Laravel</span>
						<span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-300">ExpressJS</span>
						<span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-300">Flutter</span>
						<span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-300">Power BI</span>
						<span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-300">MySQL</span>
						<span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-300">PostgreSQL</span>
					</div>
				</div>

						<div className="relative">
							{/* glowing accents */}
							<div className="pointer-events-none absolute -left-10 top-8 -z-10 h-24 w-24 rounded-full bg-blue-400/25 blur-2xl" />
							<div className="pointer-events-none absolute -right-8 bottom-6 -z-10 h-32 w-32 rounded-full bg-blue-500/25 blur-2xl" />

							{/* organic blob portrait */}
							<div className="mx-auto w-full max-w-sm">
								<div
									className="relative overflow-hidden [border-radius:40%_60%_70%_30%/60%_30%_70%_40%] ring-1 ring-blue-500/20 shadow-xl will-change-transform [animation:float_6s_ease-in-out_infinite] motion-reduce:[animation:none]"
								>
									{/* Fixed aspect to avoid showing bottom during motion */}
									<div className="aspect-[4/5]">
										<img
											src={imgSrc}
											alt="Foto profil Fikri"
											loading="eager"
											decoding="async"
											className="block h-full w-full object-cover transition-all duration-700 ease-out
											 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-900/0"
										/>
									</div>
									{/* soft inner ring */}
									<div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/40 dark:ring-white/10" />
								</div>
							</div>

							<div className="pointer-events-none absolute -inset-x-6 -inset-y-6 -z-10 rounded-[2rem] bg-gradient-to-r from-blue-500/10 to-blue-400/10 blur-2xl" />
							{/* Accent underline */}
							<div className="pointer-events-none absolute -bottom-3 left-1/2 h-2 w-2/3 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/20 via-blue-400/20 to-blue-600/20 blur" />
						</div>
			</div>
		</section>
	)
}

