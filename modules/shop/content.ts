import type { ShopSection } from './types'

export const shopCategories: Omit<ShopSection, 'products'>[] = [
	{
		id: 'styling',
		title: 'Укладка',
		description: 'Текстура, объём и та самая форма.',
	},
	{
		id: 'beard',
		title: 'Борода',
		description: 'Мягкость и уход до последнего волоска.',
	},
	{
		id: 'cleansing',
		title: 'Очищение',
		description: 'Хороший день начинается с простых вещей.',
	},
]

export const shopAvailabilityNotice = 'Наличие и цены уточняйте у барбера.'
