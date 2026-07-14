import React from 'react'

export default function ContactCard({ label, value, href, icon }: { label: string; value: string; href: string; icon?: (props: React.ComponentPropsWithoutRef<'svg'>) => React.ReactElement }) {
  const Icon = icon
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
      className="group flex items-center justify-between gap-4 rounded-xl border border-gray-200/70 bg-white p-4 shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 dark:border-gray-800/70 dark:bg-gray-900 sm:p-5"
    >
      <div className="flex items-center gap-3">
        {Icon ? (
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200/70 dark:bg-blue-950/40 dark:text-blue-300 dark:ring-blue-900/40">
            <Icon className="h-5 w-5" />
          </span>
        ) : null}
        <div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</div>
          <div className="font-semibold text-gray-900 group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300">{value}</div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-gray-400 transition group-hover:translate-x-0.5 group-hover:text-blue-500"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7"/></svg>
    </a>
  )
}
