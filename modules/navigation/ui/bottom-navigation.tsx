'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Pole } from '@/components/ui/pole'
import { BOOKING_URL } from '@/modules/booking/content'
import { homeNavigation, type NavigationId } from '../content'
import { useActiveNavigation } from '../hooks/use-active-navigation'
import { useSectionNavigation } from '../hooks/use-section-navigation'
import { MoreMenu } from './more-menu'
import styles from './bottom-navigation.module.css'

function NavigationLink({ item, activeId }: {
	item: typeof homeNavigation[number]
	activeId: NavigationId
}) {
	const Icon = item.icon
	const active = activeId === item.id
	const onNavigate = useSectionNavigation(item.id, item.href)
	return (
		<Link href={item.href}
			onNavigate={onNavigate}
			className={cn(styles.item, item.id === 'home' && styles.home)}
			data-active={active}
			aria-current={active ? (item.id === 'home' ? 'page' : 'location') : undefined}>
			<Icon aria-hidden='true' strokeWidth={1.8} />
			<span>{item.label}</span>
		</Link>
	)
}

export function BottomNavigation({ className }: { className?: string }) {
	const activeId = useActiveNavigation()
	return (
		<nav aria-label='Главное меню' className={cn(styles.navigation, className)}>
			<div className={styles.panel}>
				<div className={styles.items}>
					{homeNavigation.slice(0, 2).map(item => (
						<NavigationLink key={item.id} item={item} activeId={activeId} />
					))}
					<a href={BOOKING_URL} target='_blank' rel='noopener noreferrer'
						className={styles.booking} aria-label='Записаться в барбершоп'
						title='Записаться в барбершоп'>
						<Pole />
					</a>
					<NavigationLink item={homeNavigation[2]} activeId={activeId} />
					<MoreMenu active={activeId === 'more'} />
				</div>
			</div>
		</nav>
	)
}
