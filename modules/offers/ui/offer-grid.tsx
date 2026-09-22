import { OfferCard } from './offer-card'
import type { OfferCardContent } from '../types'

export function OfferGrid({ offers }: { offers: readonly OfferCardContent[] }) {
	return (
		<div className='grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3' data-offer-grid>
			{offers.map(offer => <OfferCard key={offer.id} offer={offer} />)}
		</div>
	)
}
