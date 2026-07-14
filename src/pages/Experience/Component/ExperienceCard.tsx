import type { ExperienceItem } from './types'

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-blue-200/70 bg-blue-50/60 px-2 py-0.5 text-xs font-medium text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/30 dark:text-blue-300">
      {label}
    </span>
  )
}

export default function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-gray-200/70 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-gray-800/70 dark:bg-gray-900 sm:p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {item.org} <span className="text-gray-500">|</span> <span className="text-blue-600 dark:text-blue-400">{item.role}</span>
          </h3>
          {item.internship && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800 ring-1 ring-inset ring-amber-300 dark:bg-amber-900/30 dark:text-amber-200 dark:ring-amber-800/80">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5"><path d="M11.7 2.3a1 1 0 0 1 1.6 0l2.1 2.9a1 1 0 0 0 .6.4l3.5.7a1 1 0 0 1 .5 1.7l-2.5 2.6a1 1 0 0 0-.3.8l.3 3.5a1 1 0 0 1-1.4 1l-3.2-1.4a1 1 0 0 0-.9 0l-3.2 1.4a1 1 0 0 1-1.4-1l.3-3.5a1 1 0 0 0-.3-.8L3.5 8a1 1 0 0 1 .5-1.7l3.5-.7a1 1 0 0 0 .6-.4l2.1-2.9Z"/></svg>
              Magang
            </span>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <span>{item.location}</span>
          <span className="hidden text-gray-400 sm:inline">•</span>
          <span>{item.period}</span>
        </div>
      </div>

      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700 dark:text-gray-300">
        {item.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      {item.tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      ) : null}

      {/* accent underline */}
      <div className="pointer-events-none absolute -bottom-2 left-1/2 h-1 w-2/3 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/20 via-blue-400/20 to-blue-600/20 blur" />
    </article>
  )
}
