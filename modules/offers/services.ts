import type { ServiceOffer } from './types'

export const services: readonly ServiceOffer[] = [
	{
		id: 's12349281',
		title: 'Мужская стрижка',
		priceRub: 1800,
		description: 'Мужская стрижка в «Штате 51».',
		poster: {
			src: '/brand51/client/haircut-framed.webp',
			width: 1233,
			height: 1275,
			alt: 'Ретроафиша мужской стрижки',
		},
	},
	{
		id: 's18366430',
		title: 'Стрижка «Комфорт»',
		priceRub: 2000,
		description:
			'Мужская стрижка, удаление воском волос из носа и межбровья. Бесплатная корректировка стрижки в течение 14 дней.',
		poster: {
			src: '/brand51/client/comfort-framed.webp',
			width: 1224,
			height: 1285,
			alt: 'Ретроафиша мужской стрижки «Комфорт»',
		},
	},
	{
		id: 's18366466',
		title: 'Стрижка «Бизнес»',
		priceRub: 3200,
		description: 'Мужская стрижка и антивозрастной уход EGIA.',
		poster: {
			src: '/brand51/client/business-framed.webp',
			width: 1254,
			height: 1254,
			alt: 'Ретроафиша мужской стрижки «Бизнес» с уходом EGIA',
		},
	},
	{
		id: 's10644864',
		title: 'Детская стрижка',
		priceRub: 1400,
		description: 'Для детей до 14 лет.',
		poster: {
			src: '/brand51/client/kids.webp',
			width: 1254,
			height: 1254,
			alt: 'Ретроафиша детской стрижки до 14 лет',
		},
	},
	{
		id: 's10644898',
		title: 'Бритьё головы или лица',
		priceRub: 1400,
		description: 'Бритьё головы или лица — на ваш выбор.',
		poster: {
			src: '/brand51/client/shave-framed.webp',
			width: 1240,
			height: 1269,
			alt: 'Ретроафиша бритья головы или лица',
		},
	},
	{
		id: 's10672389',
		title: 'Эпиляция воском',
		priceRub: 300,
		description: 'Удаление волос из носа и межбровья.',
		poster: {
			src: '/brand51/client/wax-framed.webp',
			width: 1254,
			height: 1254,
			alt: 'Ретроафиша удаления волос воском',
		},
	},
	{
		id: 's10644202',
		title: 'Оформление бороды',
		priceRub: 1400,
		description: '',
	},
	{
		id: 'correction',
		title: 'Корректировка стрижки',
		priceRub: 800,
		description: '',
	},
	{ id: 'wash', title: 'Мытьё головы', priceRub: 300, description: '' },
]
