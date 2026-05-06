import { cn } from '@/lib/utils'
import { LegalDocLinks } from '@/modules/legal/ui/legal-doc-links'

interface ConsentLegalCopyProps {
	className?: string
}

export function ConsentLegalCopy({ className }: ConsentLegalCopyProps) {
	return (
		<div className={cn('text-sm text-[#e8dcc7]/86', className)}>
			<p>
				Я даю согласие на обработку персональных данных и подтверждаю
				ознакомление с документами:
			</p>
			<LegalDocLinks className='pt-1.5' linkClassName='text-[#e7d7b8]' />
		</div>
	)
}
