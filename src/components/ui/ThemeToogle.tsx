import { useEffect, useState } from 'react'

// A small theme switcher that toggles the `dark` class on <html> and persists to localStorage
export default function ThemeToogle() {
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		const root = document.documentElement
		const dark = root.classList.contains('dark') || root.getAttribute('data-theme') === 'dark' || root.getAttribute('data-mode') === 'dark'
		setIsDark(dark)
		// keep browser UI in sync and set data attributes
		root.classList.toggle('dark', dark)
		root.setAttribute('data-theme', dark ? 'dark' : 'light')
		root.setAttribute('data-mode', dark ? 'dark' : 'light')
		root.style.colorScheme = dark ? 'dark' : 'light'
	}, [])

	function toggleTheme() {
		const root = document.documentElement
		const next = !root.classList.contains('dark')
		root.classList.toggle('dark', next)
		root.setAttribute('data-theme', next ? 'dark' : 'light')
		root.setAttribute('data-mode', next ? 'dark' : 'light')
		root.style.colorScheme = next ? 'dark' : 'light'
		setIsDark(next)
		try {
			localStorage.setItem('theme', next ? 'dark' : 'light')
		} catch {}
	}

	return (
		<button
			type="button"
			onClick={toggleTheme}
			aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
			aria-pressed={isDark}
			className="inline-flex items-center gap-2 rounded-md border border-transparent px-2.5 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
		>
			{isDark ? (
				// Sun icon
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414" />
					<circle cx="12" cy="12" r="4" />
				</svg>
			) : (
				// Moon icon
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
					<path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
				</svg>
			)}
			<span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
		</button>
	)
}

