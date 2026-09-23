import { promotions } from './promotions'
import { services } from './services'
import type { OfferCardContent, PriceRow } from './types'

const rubleFormatter = new Intl.NumberFormat('ru-RU', {
	style: 'currency', currency: 'RUB', maximumFractionDigits: 0,
})

export function formatRubles(priceRub: number): string {
	return rubleFormatter.format(priceRub)
}

export function calculateDiscountedPrice(priceRub: number, percent: number): number {
	return Math.round(priceRub * (100 - percent) / 100)
}

export function getServiceCards(): OfferCardContent[] {
	return services.flatMap(service => service.poster ? [{
		id: service.id,
		title: service.title,
		label: formatRubles(service.priceRub),
		description: service.description,
		poster: service.poster,
	}] : [])
}

function getDiscountedPriceList(percent: number): PriceRow[] {
	return services.map(service => ({
		id: service.id,
		title: service.title,
		price: formatRubles(calculateDiscountedPrice(service.priceRub, percent)),
		regularPrice: formatRubles(service.priceRub),
	}))
}

export function getPromotionCards(): OfferCardContent[] {
	return promotions.map(promotion => ({
		id: promotion.id,
		title: promotion.title,
		label: `−${promotion.discountPercent}%`,
		description: promotion.conditions.join(' '),
		poster: promotion.poster,
		prices: promotion.id === 'first-visit'
			? getDiscountedPriceList(promotion.discountPercent) : undefined,
	}))
}
