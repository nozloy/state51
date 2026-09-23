import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { BOOKING_URL } from '@/modules/booking/content'
import type { OfferCardContent } from '../types'
import { PosterImage } from './poster-image'

export function OfferCard({ offer }: { offer: OfferCardContent }) {
	return (
		<Card
			className='gap-0 overflow-hidden rounded-none border-0 bg-transparent py-0'
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
				<a
					href={BOOKING_URL + offer.id}
					target='_blank'
					rel='noopener noreferrer'
					aria-label={`Записаться: ${offer.title}`}
					className='block w-full cursor-pointer focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-ring'
				>
					<PosterImage poster={offer.poster} />
				</a>
			</CardContent>
		</Card>
	)
}
