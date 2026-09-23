import { BadgePercent, House, MessageCircle, Phone, Scissors, Send, User } from 'lucide-react'

export type HomeNavigationId = 'home' | 'services' | 'promotions'
export type NavigationId = HomeNavigationId | 'more'

export const homeNavigation = [
	{ id: 'home', href: '/', label: 'Главная', icon: House },
	{ id: 'services', href: '/#services', label: 'Услуги', icon: Scissors },
	{ id: 'promotions', href: '/#promotions', label: 'Акции', icon: BadgePercent },
] as const

export const additionalNavigation = [
	{ href: '/profile', label: 'Личный кабинет', description: 'Бонусы и приглашения', icon: User },
] as const

export const contactNavigation = [
	{ href: 'tel:+79375200051', label: '+7 937 520-00-51', description: 'Позвонить в барбершоп', icon: Phone, external: false },
	{ href: 'https://t.me/+79375200051', label: 'Telegram', description: 'Написать нам', icon: Send, external: true },
	{ href: 'https://vk.com/barbershopstate51', label: 'ВКонтакте', description: 'Новости барбершопа', icon: MessageCircle, external: true },
	{ href: 'https://wa.me/79375200051', label: 'WhatsApp', description: 'Связаться с нами', icon: MessageCircle, external: true },
] as const
