import React from 'react'
import { cn } from '@/lib/utils'
import { LegalDocLinks } from '@/modules/legal/ui/legal-doc-links'
interface Props {
	className?: string
}

export const Footer: React.FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				'flex flex-col items-center justify-center gap-1 text-center text-xs leading-relaxed text-muted-foreground',
				className,
			)}
		>
			<p>STATE51 - Барбершоп.</p>
			<p>ИП Мухамедшина Флора Джавдатовна</p>
			<p>ИНН 165908482856</p>
			<LegalDocLinks className='justify-center pt-1' useShortLabels />
		</div>
	)
}
