'use client'

import Link from 'next/link'
import {
	Cookie,
	FileText,
	PanelRightOpen,
	ShieldCheck,
	ShoppingBag,
	UserRound,
} from 'lucide-react'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SecondaryMenuProps {
	className?: string
}

const secondaryLinks = [
	{
		href: '/profile',
		label: 'Профиль',
		icon: UserRound,
	},
	{
		href: '/shop',
		label: 'Витрина',
		icon: ShoppingBag,
	},
	{
		href: '/privacy',
		label: 'Политика ПДн',
		icon: ShieldCheck,
	},
	{
		href: '/personal-data-consent',
		label: 'Согласие ПДн',
		icon: FileText,
	},
	{
		href: '/cookies',
		label: 'Cookies',
		icon: Cookie,
	},
]

export function SecondaryMenu({ className }: SecondaryMenuProps) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant='ghost'
					size='icon'
					className={cn(
						'text-[#f4ead6] hover:bg-white/10 hover:text-white',
						className,
					)}
					aria-label='Открыть дополнительное меню'
				>
					<PanelRightOpen className='size-5' />
				</Button>
			</SheetTrigger>

			<SheetContent
				side='right'
				className='border-l border-white/10 bg-[#11100f] text-[#f4ead6]'
			>
				<SheetHeader>
					<SheetTitle className='text-left font-accent text-xl uppercase tracking-wide text-[#f4ead6]'>
						Еще
					</SheetTitle>
				</SheetHeader>

				<nav className='px-4 pb-6'>
					<ul className='flex flex-col gap-2'>
						{secondaryLinks.map(link => {
							const Icon = link.icon
							return (
								<li key={link.href}>
									<SheetClose asChild>
										<Link
											href={link.href}
											className='flex items-center gap-3 rounded-md border border-white/10 bg-black/20 px-3 py-3 text-sm font-medium text-[#f4ead6] transition hover:bg-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b13a31]'
										>
											<Icon className='size-4 text-[#cc4a3d]' />
											<span>{link.label}</span>
										</Link>
									</SheetClose>
								</li>
							)
						})}
					</ul>
				</nav>
			</SheetContent>
		</Sheet>
	)
}
