import type { ReactNode } from 'react'
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
		<div className='relative text-foreground flex flex-col gap-4 min-h-dvh max-w-md mx-auto mt-2 p-2 pb-24'>
			<section className='rounded-xl border border-border bg-card px-4 py-5 shadow-md'>
				<h1 className='text-2xl font-bold'>{title}</h1>
				<p className='pt-2 text-sm leading-relaxed text-muted-foreground'>
					{description}
				</p>
				<LegalDocLinks className='pt-3' linkClassName='text-sm text-foreground' />
			</section>

			<section className='rounded-xl border border-border bg-card px-4 py-4 text-sm leading-relaxed text-foreground shadow-md'>
				{children}
			</section>
		</div>
	)
}
