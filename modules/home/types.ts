export type HeroStatIcon = 'map-pin' | 'clock-3' | 'scissors'

export interface HeroStat {
	id: string
	value: string
	label: string
	icon: HeroStatIcon
}

export interface ServiceCard {
	id: string
	title: string
	priceFrom: number
	image: string
	description: string
}

export interface ServiceDetailItem {
	id: string
	categoryId: string
	title: string
	price: string
	duration: string
	description: string
}

export interface ServiceCategory {
	id: string
	title: string
	items: ServiceDetailItem[]
}

export type ContactIcon =
	| 'phone'
	| 'send'
	| 'message-circle'
	| 'messages-square'
	| 'navigation'

export interface ContactChannel {
	id: string
	title: string
	description: string
	href: string
	icon: ContactIcon
}
