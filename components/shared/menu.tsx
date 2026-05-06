'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CalendarDays, Home, MapPin, Scissors, UsersRound } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
	{
		href: '/',
		label: 'Главная',
		icon: Home,
	},
	{
		href: '/services',
		label: 'Услуги',
		icon: Scissors,
	},
	{
		href: '/booking',
		label: 'Запись',
		icon: CalendarDays,
	},
	{
		href: '/friends',
		label: 'Друзья',
		icon: UsersRound,
	},
	{
		href: '/contacts',
		label: 'Контакты',
		icon: MapPin,
	},
]

export function Menu() {
	const pathname = usePathname()

	return (
		<nav className='fixed bottom-0 left-1/2 z-50 w-full max-w-[430px] -translate-x-1/2 border-t border-white/10 bg-[#0b0a09]/95 px-2 pb-[max(0.35rem,env(safe-area-inset-bottom))] pt-1 backdrop-blur-md'>
			<ul className='grid grid-cols-5 gap-1'>
				{navItems.map(item => {
					const Icon = item.icon
					const isActive = pathname === item.href
					return (
						<li key={item.href}>
							<Link
								href={item.href}
								className={cn(
									'flex h-[62px] flex-col items-center justify-center gap-1 rounded-md border border-transparent text-[11px] font-medium transition',
									isActive
										? 'border-[#8a342c] bg-[#241211] text-[#c7493d]'
										: 'text-[#d9ccb4]/84 hover:border-white/10 hover:bg-white/5 hover:text-[#f5ead6]',
								)}
								aria-current={isActive ? 'page' : undefined}
							>
								<Icon className='size-5' />
								<span className='leading-none'>{item.label}</span>
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
