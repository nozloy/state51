import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { BookingLink } from '@/modules/booking/ui/booking-link'
import { PosterDialog } from './poster-dialog'
import type { OfferCardContent } from '../types'

export function OfferCard({ offer }: { offer: OfferCardContent }) {
	return (
		<Card
			className='h-full gap-0 overflow-hidden py-0'
			data-offer-id={offer.id}
		>
			<CardHeader className='sr-only'>
				<CardTitle>
					<h3>
						{offer.title} · {offer.label}
					</h3>
				</CardTitle>
				<CardDescription>{offer.description}</CardDescription>
			</CardHeader>
			<CardContent className='p-0'>
				<PosterDialog offer={offer} />
			</CardContent>
			<CardFooter className='mt-auto p-3'>
				<BookingLink
					id={offer.id}
					accessibleLabel={`Записаться: ${offer.title}`}
					className='w-full'
				/>
			</CardFooter>
		</Card>
	)
}
