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
				'pt-10 text-sm text-muted-foreground/50 flex flex-col items-center justify-center',
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
