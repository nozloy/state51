import {
	getAdditionalServices,
	getPromotionCards,
	getServiceCards,
} from './service'
import { OfferGrid } from './ui/offer-grid'
import { PriceList } from './ui/price-list'
import { SectionHeading } from './ui/section-heading'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ServicesSection() {
	return (
		<section
			id='services'
			aria-labelledby='services-title'
			className='flex scroll-mt-6 flex-col gap-8'
		>
			<SectionHeading id='services-title' number='01' title='Услуги и цены' />
			<OfferGrid offers={getServiceCards()} />
			<Card>
				<CardHeader>
					<CardTitle>
						<h3 className='font-oswald text-2xl'>Дополнить визит</h3>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<PriceList
						rows={getAdditionalServices()}
						label='Дополнительные услуги'
					/>
				</CardContent>
			</Card>
		</section>
	)
}

export function PromotionsSection() {
	return (
		<section
			id='promotions'
			aria-labelledby='promotions-title'
			className='flex scroll-mt-6 flex-col gap-8'
		>
			<SectionHeading id='promotions-title' number='02' title='Акции' />
			<OfferGrid offers={getPromotionCards()} />
		</section>
	)
}
