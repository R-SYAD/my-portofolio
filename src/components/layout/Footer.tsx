export default function Footer() {
	const year = new Date().getFullYear()
	return (
		<footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<div className="flex flex-col items-center gap-4 py-10 sm:flex-row sm:justify-between">
					<p className="text-sm text-gray-600 dark:text-gray-400">© {year} Fikri. All rights reserved.</p>
					<div className="flex items-center gap-4">
						<a className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" href="https://github.com/" target="_blank" rel="noreferrer">
							<span className="sr-only">GitHub</span>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
								<path d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.24 3.41 9.68 8.15 11.25.6.11.82-.27.82-.59 0-.29-.01-1.06-.02-2.09-3.32.74-4.02-1.61-4.02-1.61-.55-1.42-1.35-1.8-1.35-1.8-1.1-.77.08-.75.08-.75 1.22.09 1.86 1.28 1.86 1.28 1.08 1.9 2.83 1.35 3.52 1.03.11-.79.42-1.35.76-1.66-2.65-.31-5.44-1.37-5.44-6.08 0-1.34.46-2.43 1.22-3.29-.12-.3-.53-1.55.12-3.23 0 0 1-.33 3.3 1.25a11.3 11.3 0 0 1 3.01-.41c1.02 0 2.05.14 3.01.41 2.3-1.58 3.3-1.25 3.3-1.25.65 1.68.24 2.93.12 3.23.76.86 1.22 1.95 1.22 3.29 0 4.73-2.79 5.77-5.45 6.08.43.37.81 1.1.81 2.22 0 1.6-.02 2.88-.02 3.28 0 .32.21.7.83.58A11.5 11.5 0 0 0 23.5 12.3 11.5 11.5 0 0 0 12 .5Z" />
							</svg>
						</a>
						<a className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" href="https://linkedin.com/" target="_blank" rel="noreferrer">
							<span className="sr-only">LinkedIn</span>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
								<path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4zM8.5 8h3.8v2.05h.05c.53-1.01 1.83-2.07 3.77-2.07 4.03 0 4.77 2.65 4.77 6.09V23h-4v-6.67c0-1.59-.03-3.64-2.22-3.64-2.22 0-2.56 1.73-2.56 3.52V23h-4z" />
							</svg>
						</a>
						<a className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" href="mailto:you@example.com">
							<span className="sr-only">Email</span>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
								<path d="M20 4H4a2 2 0 0 0-2 2v.35l10 6.25L22 6.35V6a2 2 0 0 0-2-2Zm2 4.25-9.44 5.9a2 2 0 0 1-2.12 0L1 8.25V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.25Z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

