import { useState } from 'react'
import ThemeToogle from "../ui/ThemeToogle"

const NAV_ITEMS = [
	{ href: '/', label: 'Home' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/certifications', label: 'Certification' },
	{ href: '/experience', label: 'Experience' },
	{ href: '/contact', label: 'Contact' },
]

export default function Header() {
	const [open, setOpen] = useState(false)

	return (
		<header className="sticky top-0 z-40 border-b border-gray-200/80 dark:border-gray-800/80 bg-white dark:bg-gray-950">
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<div className="flex h-16 items-center justify-between">
					<a href="/" className="flex items-center gap-2 font-semibold tracking-tight text-gray-900 dark:text-white">
						<span className="inline-block h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-500" />
						<span>Muhammad Irsyadul<span className="text-blue-600 dark:text-blue-400"> Fikri</span></span>
					</a>

					{/* Desktop nav */}
					<nav className="hidden items-center gap-6 md:flex">
						{NAV_ITEMS.map((n) => (
							<a
								key={n.href}
								href={n.href}
								className="text-sm font-medium text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
							>
								{n.label}
							</a>
						))}
						<ThemeToogle />
					</nav>

					{/* Mobile controls */}
					<div className="flex items-center gap-2 md:hidden">
						<ThemeToogle />
						<button
							type="button"
							aria-label="Toggle menu"
							aria-expanded={open}
							onClick={() => setOpen((v) => !v)}
							className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
						>
							{/* hamburger */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								className="h-6 w-6"
							>
								{open ? (
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
								) : (
									<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{open && (
				<div className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 md:hidden">
					<div className="mx-auto max-w-6xl px-4 py-3">
						<div className="flex flex-col">
							{NAV_ITEMS.map((n) => (
								<a
									key={n.href}
									href={n.href}
									className="py-2 text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
									onClick={() => setOpen(false)}
								>
									{n.label}
								</a>
							))}
						</div>
					</div>
				</div>
			)}
		</header>
	)
}

