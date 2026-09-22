import { House, ShoppingBag, User } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Contacts } from './contacts'

const links = [
	{ href: '/', label: 'Главная', icon: House },
	{ href: '/profile', label: 'Профиль', icon: User },
	{ href: '/shop', label: 'Витрина', icon: ShoppingBag },
]

export function Menu({ className }: { className?: string }) {
	return (
		<nav aria-label='Главное меню' className={cn('sticky bottom-0 z-30 mx-auto w-full max-w-md p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]', className)}>
			<div className='flex items-center justify-between gap-1 rounded-xl border border-border bg-card/95 px-3 py-2 shadow-lg backdrop-blur-sm'>
				{links.map(({ href, label, icon: Icon }) => (
					<Button key={href} asChild variant='ghost' size='navigation'>
						<Link href={href}><Icon data-icon='inline-start' /><span>{label}</span></Link>
					</Button>
				))}
				<Contacts />
			</div>
		</nav>
	)
}
