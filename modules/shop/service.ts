import { shop_items, type ShopItem } from '@/constants/shop_items'
import { shopCategories } from './content'
import type { ShopProduct, ShopSection } from './types'

const rubleFormatter = new Intl.NumberFormat('ru-RU', {
	style: 'currency',
	currency: 'RUB',
	maximumFractionDigits: 0,
})

export function prepareShopProduct(item: ShopItem): ShopProduct {
	const usageMarker = 'Способ применения:'
	const usageStart = item.description.indexOf(usageMarker)

	return {
		...item,
		priceLabel: rubleFormatter.format(item.price),
		description:
			usageStart < 0
				? item.description
				: item.description.slice(0, usageStart).trim(),
		usage:
			usageStart < 0
				? undefined
				: item.description.slice(usageStart + usageMarker.length).trim(),
	}
}

export function getShopSections(): ShopSection[] {
	return shopCategories.map(category => ({
		...category,
		products: shop_items
			.filter(item => item.category === category.id)
			.map(prepareShopProduct),
	}))
}
