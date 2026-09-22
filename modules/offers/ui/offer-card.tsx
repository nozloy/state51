import Image from 'next/image'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { BOOKING_URL } from '@/modules/booking/content'
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
				<a
					href={BOOKING_URL + offer.id}
					target='_blank'
					rel='noopener noreferrer'
					aria-label={`Записаться: ${offer.title}`}
					className='block w-full cursor-pointer focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-ring'
				>
					<Image
						src={offer.poster.src}
						alt={offer.poster.alt}
						width={offer.poster.width}
						height={offer.poster.height}
						sizes='(min-width: 1152px) 357px, (min-width: 1024px) 31vw, (min-width: 768px) 46vw, calc(100vw - 32px)'
						className='h-auto w-full'
						loading='lazy'
					/>
				</a>
			</CardContent>
		</Card>
	)
}
