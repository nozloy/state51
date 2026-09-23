import type { ShopItem } from '@/constants/shop_items'

export type ShopCategory = ShopItem['category']

export interface ShopProduct extends ShopItem {
	priceLabel: string
	usage?: string
}

export interface ShopSection {
	id: ShopCategory
	title: string
	description: string
	products: ShopProduct[]
}
