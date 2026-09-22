export interface PosterAsset {
	src: string
	width: number
	height: number
	alt: string
}

export interface ServiceOffer {
	id: string
	title: string
	priceRub: number
	description: string
	poster?: PosterAsset
}

export interface PromotionOffer {
	id: string
	title: string
	discountPercent: number
	conditions: readonly string[]
	poster: PosterAsset
}

export interface PriceRow {
	id: string
	title: string
	price: string
	regularPrice?: string
}

export interface OfferCardContent {
	id: string
	title: string
	label: string
	description: string
	poster: PosterAsset
	prices?: readonly PriceRow[]
}
