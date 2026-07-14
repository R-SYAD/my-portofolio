import { useState } from 'react'
import { certificates } from '../../data/certificationData'
import CertificateCard from './Component/CertificateCard'
import CertificateModal from './Component/CertificateModal'

export default function Certification() {
	const [open, setOpen] = useState<{ file: string; title: string } | null>(null)

	return (
		<section className="py-8 sm:py-10">
			<header className="mb-6 sm:mb-8">
				<h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Sertifikasi</h1>
				<p className="mt-3 max-w-2xl text-base text-gray-600 dark:text-gray-300">
					Kumpulan sertifikat pelatihan dan kompetensi yang telah saya peroleh.
				</p>
			</header>

			<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{certificates.map((c) => (
					<CertificateCard key={c.id} item={c} onOpen={(file, title) => setOpen({ file, title })} />
				))}
			</div>

			{open && (
				<CertificateModal file={open.file} title={open.title} onClose={() => setOpen(null)} />
			)}
		</section>
	)
}
