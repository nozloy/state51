import type {
	ContactChannel,
	HeroStat,
	ServiceCategory,
	ServiceCard,
	ServiceDetailItem,
} from './types'

export const BOOKING_URL =
	'https://n796028.yclients.com/company/746811/personal/select-services?o='

export const BRAND_CONTACTS = {
	phoneDisplay: '+7 (937) 520-00-51',
	phoneLink: 'tel:+79375200051',
	addressPrimary: 'Царево',
	addressSecondary: 'ул. Габдуллы Тукая, 14',
	hoursPrimary: 'Ежедневно',
	hoursSecondary: 'По записи',
}

export const SOCIAL_LINKS = {
	telegramChannel: 'https://t.me/barbershop_state51',
	telegramDirect: 'https://t.me/+79375200051',
	vk: 'https://vk.com/barbershopstate51',
	whatsapp: 'https://wa.me/79375200051',
}

export const HERO_STAT_ITEMS: HeroStat[] = [
	{
		id: 'location',
		value: BRAND_CONTACTS.addressPrimary,
		label: BRAND_CONTACTS.addressSecondary,
		icon: 'map-pin',
	},
	{
		id: 'schedule',
		value: BRAND_CONTACTS.hoursPrimary,
		label: BRAND_CONTACTS.hoursSecondary,
		icon: 'clock-3',
	},
	{
		id: 'focus',
		value: 'Мужские стрижки',
		label: 'И бритьё',
		icon: 'scissors',
	},
]

export const OWNER_COPY = {
	eyebrow: 'Владелец и главный барбер',
	name: 'Артем',
	description:
		'Более 15 лет в индустрии. Для меня барберинг — это не просто стрижка, а стиль жизни. Добро пожаловать в Штат 51.',
	signature: 'Артем',
}

export const INVITE_COPY = {
	title: 'Пригласи друга',
	subtitle: 'Получите по 600 ₽ после его первого визита',
	description: 'Делись ссылкой, приглашай друзей и получай реальный кэшбэк.',
}

export const SERVICE_CARDS: ServiceCard[] = [
	{
		id: 'haircut',
		title: 'Мужская стрижка',
		priceFrom: 1800,
		image: '/brand51/generated/service-haircut.webp',
		description:
			'Персонализация формы, горячий компресс, окантовка лезвием и укладка.',
	},
	{
		id: 'haircut-comfort',
		title: 'Стрижка «Комфорт»',
		priceFrom: 2000,
		image: '/brand51/generated/service-comfort-cut.webp',
		description:
			'Полный комплекс мужской стрижки + удаление воском одной зоны лица.',
	},
	{
		id: 'beard-shape',
		title: 'Оформление бороды',
		priceFrom: 1400,
		image: '/brand51/generated/service-beard-shape.webp',
		description:
			'Моделирование формы, горячий компресс, бритьё контуров и уход за кожей.',
	},
	{
		id: 'traditional-shave',
		title: 'Традиционное бритьё',
		priceFrom: 1400,
		image: '/brand51/generated/service-shave.webp',
		description:
			'Классическое бритьё лица или головы с горячими и холодными компрессами.',
	},
	{
		id: 'haircut-business',
		title: 'Стрижка «Бизнес»',
		priceFrom: 3200,
		image: '/brand51/generated/service-hair-beard.webp',
		description:
			'Стрижка «Комфорт» + профессиональный уход за кожей лица на косметике EGIA.',
	},
	{
		id: 'kid-cut',
		title: 'Детская стрижка до 14 лет',
		priceFrom: 1400,
		image: '/brand51/generated/service-kid-cut.webp',
		description:
			'Аккуратная персонализация стрижки для юного гостя с укладкой и лосьоном.',
	},
	{
		id: 'wax-zone',
		title: 'Эпиляция воском 1 зона',
		priceFrom: 300,
		image: '/brand51/generated/service-wax.webp',
		description:
			'Удаление волос в зоне носа, межбровья или ушей в рамках дополнительной услуги.',
	},
]

export const SERVICE_DETAILS: ServiceDetailItem[] = [
	{
		id: 'haircut',
		categoryId: 'haircuts',
		title: 'Мужская стрижка',
		price: '1 800 ₽',
		duration: '50 мин',
		description:
			'Тщательная персонализация стрижки, горячий компресс, подбривание шеи/висков и укладка.',
	},
	{
		id: 'haircut-comfort',
		categoryId: 'haircuts',
		title: 'Мужская стрижка «Комфорт»',
		price: '2 000 ₽',
		duration: '1 ч',
		description:
			'Полный комплекс мужской стрижки + удаление воском одной зоны в области лица.',
	},
	{
		id: 'kid-cut',
		categoryId: 'haircuts',
		title: 'Детская стрижка до 14 лет',
		price: '1 400 ₽',
		duration: '30 мин',
		description:
			'Персонализация стрижки для детей и подростков, укладка и лосьон по завершению.',
	},
	{
		id: 'haircut-business',
		categoryId: 'haircuts',
		title: 'Мужская стрижка «Бизнес»',
		price: '3 200 ₽',
		duration: '1 ч 30 мин',
		description:
			'Включает стрижку «Комфорт», удаление воском одной зоны и профессиональный уход за кожей лица.',
	},
	{
		id: 'beard-shape',
		categoryId: 'beard-and-shave',
		title: 'Оформление бороды',
		price: '1 400 ₽',
		duration: '40 мин',
		description:
			'Моделирование формы усов/бороды, горячий компресс, бритьё контуров и уход за кожей.',
	},
	{
		id: 'traditional-shave',
		categoryId: 'beard-and-shave',
		title: 'Традиционное бритьё',
		price: '1 400 ₽',
		duration: '40 мин',
		description:
			'Классическое бритьё лица или головы с подготовкой кожи и косметикой после процедуры.',
	},
	{
		id: 'wax-zone',
		categoryId: 'additional-services',
		title: 'Эпиляция воском 1 зона',
		price: '300 ₽',
		duration: '5 мин',
		description:
			'Удаление неэстетичных волос в зоне носа, межбровья, ушей или другой точечной зоне лица.',
	},
]

export const SERVICE_CATEGORIES: ServiceCategory[] = [
	{
		id: 'haircuts',
		title: 'Стрижки',
		items: SERVICE_DETAILS.filter(item => item.categoryId === 'haircuts'),
	},
	{
		id: 'beard-and-shave',
		title: 'Борода и бритьё',
		items: SERVICE_DETAILS.filter(
			item => item.categoryId === 'beard-and-shave',
		),
	},
	{
		id: 'additional-services',
		title: 'Дополнительные услуги',
		items: SERVICE_DETAILS.filter(
			item => item.categoryId === 'additional-services',
		),
	},
]

export const FRIEND_STEPS = [
	'Откройте страницу “Друзья” и нажмите “Поделиться ссылкой”.',
	'Отправьте ссылку другу любым удобным способом.',
	'Друг регистрируется и приходит на первый визит.',
	'После первого визита друга вы получаете 600 ₽ на баланс.',
]

export const CONTACT_CHANNELS: ContactChannel[] = [
	{
		id: 'phone',
		title: 'Позвонить',
		description: BRAND_CONTACTS.phoneDisplay,
		href: BRAND_CONTACTS.phoneLink,
		icon: 'phone',
	},
	{
		id: 'telegram',
		title: 'Telegram',
		description: '@barbershop_state51',
		href: SOCIAL_LINKS.telegramDirect,
		icon: 'send',
	},
	{
		id: 'vk',
		title: 'VK',
		description: 'Группа барбершопа',
		href: SOCIAL_LINKS.vk,
		icon: 'messages-square',
	},
	{
		id: 'whatsapp',
		title: 'WhatsApp',
		description: 'Быстрая связь',
		href: SOCIAL_LINKS.whatsapp,
		icon: 'message-circle',
	},
	{
		id: 'map',
		title: 'Адрес',
		description: `${BRAND_CONTACTS.addressPrimary}, ${BRAND_CONTACTS.addressSecondary}`,
		href: `https://yandex.ru/maps/?text=${encodeURIComponent(
			`${BRAND_CONTACTS.addressPrimary}, ${BRAND_CONTACTS.addressSecondary}`,
		)}`,
		icon: 'navigation',
	},
]
