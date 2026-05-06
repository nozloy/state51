import Link from 'next/link'
import { cn } from '@/lib/utils'
import { LEGAL_DOC_LINKS } from '@/modules/legal/content'

interface LegalDocLinksProps {
	className?: string
	linkClassName?: string
	openInNewTab?: boolean
	useShortLabels?: boolean
}

export function LegalDocLinks({
	className,
	linkClassName,
	openInNewTab = true,
	useShortLabels = false,
}: LegalDocLinksProps) {
	return (
		<div className={cn('flex flex-wrap gap-x-3 gap-y-1.5', className)}>
			{LEGAL_DOC_LINKS.map(doc => (
				<Link
					key={doc.href}
					href={doc.href}
					target={openInNewTab ? '_blank' : undefined}
					rel={openInNewTab ? 'noopener noreferrer' : undefined}
					className={cn(
						'underline decoration-[#735844] underline-offset-2 transition hover:text-[#f1e4c9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b13a31]',
						linkClassName,
					)}
				>
					{useShortLabels ? doc.shortLabel : doc.label}
				</Link>
			))}
		</div>
	)
}
