import type { PromotionOffer } from './types'
import { promotionTopFrames } from './poster-frames'

export const promotions: readonly PromotionOffer[] = [
	{
		id: 'first-visit',
		title: 'Первый визит',
		discountPercent: 20,
		conditions: ['На любую услугу из нашего прайса.', 'Только для новых клиентов.'],
		poster: {
			src: '/brand51/client/first-visit.webp', width: 1254, height: 1254,
			alt: 'Первый визит: скидка 20 процентов на любую услугу для новых клиентов',
		},
	},
	{
		id: 'return-28-days',
		title: 'Хорошие привычки возвращаются',
		discountPercent: 20,
		conditions: ['На все услуги, если возвращаетесь в течение 28 дней.', 'Участвует весь прайс.'],
		poster: {
			src: '/brand51/client/return-28-days.webp', width: 1254, height: 1254,
			alt: 'Скидка 20 процентов на все услуги при возвращении в течение 28 дней',
		},
	},
	{
		id: 'sons',
		title: 'Сын + сын',
		discountPercent: 20,
		conditions: ['До 14 лет.', 'При совместном визите.'],
		poster: {
			src: '/brand51/client/sons.webp', width: 1254, height: 1254,
			topFrame: promotionTopFrames.sons,
			alt: 'Сын плюс сын: скидка 20 процентов, до 14 лет, при совместном визите',
		},
	},
	{
		id: 'friends',
		title: 'Друг + друг',
		discountPercent: 20,
		conditions: ['При совместном визите.'],
		poster: {
			src: '/brand51/client/friends.webp', width: 1254, height: 1254,
			topFrame: promotionTopFrames.friends,
			alt: 'Друг плюс друг: скидка 20 процентов при совместном визите',
		},
	},
	{
		id: 'father-son',
		title: 'Отец + сын',
		discountPercent: 20,
		conditions: ['Сыну до 14 лет.', 'При совместном визите.'],
		poster: {
			src: '/brand51/client/father-son.webp', width: 1254, height: 1254,
			topFrame: promotionTopFrames['father-son'],
			alt: 'Отец плюс сын: скидка 20 процентов при совместном визите, сыну до 14 лет',
		},
	},
	{
		id: 'grandfather-grandson',
		title: 'Дед + внук',
		discountPercent: 20,
		conditions: ['При совместном визите.'],
		poster: {
			src: '/brand51/client/grandfather-grandson.webp', width: 1254, height: 1254,
			topFrame: promotionTopFrames['grandfather-grandson'],
			alt: 'Дед плюс внук: скидка 20 процентов при совместном визите',
		},
	},
	{
		id: 'other-barbershop',
		title: 'Из другого барбершопа — в «Штат 51»',
		discountPercent: 50,
		conditions: ['Покажите подтверждение оплаты стрижки в другом барбершопе за последние 30 дней и получите скидку в «Штате 51».'],
		poster: {
			src: '/brand51/client/other-barbershop.webp', width: 941, height: 1672,
			topFrame: promotionTopFrames['other-barbershop'],
			alt: 'Скидка 50 процентов по подтверждению оплаты стрижки в другом барбершопе за последние 30 дней',
		},
	},
]
