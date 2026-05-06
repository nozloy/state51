import type { ReactNode } from 'react'
import { BrandTopBar } from '@/modules/home/ui/brand-top-bar'
import { LegalDocLinks } from '@/modules/legal/ui/legal-doc-links'

interface LegalPageShellProps {
	title: string
	description: string
	children: ReactNode
}

export function LegalPageShell({
	title,
	description,
	children,
}: LegalPageShellProps) {
	return (
		<div className='brand51-main pb-24'>
			<BrandTopBar />

			<section className='brand51-panel px-4 py-5'>
				<h1 className='font-accent text-[38px] uppercase leading-[0.95] text-[#ead8b7] min-[390px]:text-[42px]'>
					{title}
				</h1>
				<p className='pt-2 text-sm leading-relaxed text-[#e8dcc7]/84'>
					{description}
				</p>
				<LegalDocLinks className='pt-3' linkClassName='text-sm text-[#e7d7b8]' />
			</section>

			<section className='brand51-panel px-4 py-4 text-sm leading-relaxed text-[#e8dcc7]/86'>
				{children}
			</section>
		</div>
	)
}
