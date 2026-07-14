import { memo } from 'react'
import { Link } from 'react-router-dom'
import type { ProjectItem } from './types'

interface Props {
  item: ProjectItem
}

function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-blue-200/70 bg-blue-50/60 px-2 py-0.5 text-xs font-medium text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/30 dark:text-blue-300">
      {label}
    </span>
  )
}

function getPreviewSrc(item: ProjectItem): string {
  const folder = item.gallery?.folder
  const firstFile = item.gallery?.files?.[0]

  if (folder && firstFile) {
    return `/images/Project/${encodeURIComponent(folder)}/${encodeURIComponent(firstFile)}`
  }

  return item.cover
}

function getProjectHref(item: ProjectItem): string | undefined {
  return item.detail && item.detail.startsWith('/projects') ? item.detail : item.detail || item.repo
}

function ProjectCardBase({ item }: Props) {
  const href = getProjectHref(item)

  const cardInner = (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-sm transition hover:shadow-md dark:border-gray-800/70 dark:bg-gray-900">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={getPreviewSrc(item)}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
        />
        {/* gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 transition group-hover:opacity-80" />
        {/* subtle shimmer */}
        <div className="pointer-events-none absolute -inset-y-16 -left-1/2 w-1/3 -skew-x-12 bg-white/20 blur-2xl transition duration-700 group-hover:translate-x-[220%]" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {item.title}
          </h3>
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
            {item.year}
          </span>
        </div>
        <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {item.tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>

        <div className="mt-auto pt-2 text-sm">
          <span className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-3 py-2 font-semibold text-white transition group-hover:bg-blue-500">
            Lihat Detail
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </span>
        </div>
      </div>
    </article>
  )

  if (href && href.startsWith('/projects')) {
    return (
      <Link to={href} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950">
        {cardInner}
      </Link>
    )
  }

  return (
    <a
      href={href}
      target={href && !href.startsWith('/projects') ? '_blank' : undefined}
      rel={href && !href.startsWith('/projects') ? 'noreferrer noopener' : undefined}
      className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950"
    >
      {cardInner}
    </a>
  )
}

export const ProjectCard = memo(ProjectCardBase)
