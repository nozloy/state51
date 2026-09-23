import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BOOKING_URL } from '@/modules/booking/content'

interface BookingLinkProps {
	className?: string
	accessibleLabel?: string
	id?: string
}

export function BookingLink({
	className,
	accessibleLabel,
	id = '',
}: BookingLinkProps) {
	return (
		<Button asChild size='lg' className={className}>
			<a
				href={`${BOOKING_URL}${id ?? ''}`}
				target='_blank'
				rel='noopener noreferrer'
				aria-label={accessibleLabel}
			>
				Записаться <ArrowUpRight data-icon='inline-end' />
			</a>
		</Button>
	)
}
