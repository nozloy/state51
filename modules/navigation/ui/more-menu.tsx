import Link from 'next/link'
import { ArrowUpRight, ChevronRight, MapPin, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
	Sheet, SheetClose, SheetContent, SheetDescription,
	SheetHeader, SheetTitle, SheetTrigger,
} from '@/components/ui/sheet'
import { LegalDocLinks } from '@/modules/legal/ui/legal-doc-links'
import { additionalNavigation, contactNavigation } from '../content'
import navigationStyles from './bottom-navigation.module.css'
import styles from './more-menu.module.css'

export function MoreMenu({ active }: { active: boolean }) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<button type='button'
					className={cn(navigationStyles.item, navigationStyles.more)}
					data-active={active} aria-label='Ещё: профиль, витрина и контакты'>
					<Menu aria-hidden='true' strokeWidth={1.8} />
					<span>Ещё</span>
				</button>
			</SheetTrigger>
			<SheetContent side='bottom' className={styles.sheet}>
				<SheetHeader className={styles.header}>
					<SheetTitle className='font-oswald text-3xl uppercase'>Штат 51</SheetTitle>
					<SheetDescription>Ваш барбершоп. Всё под рукой.</SheetDescription>
				</SheetHeader>
				<nav aria-label='Дополнительное меню' className={styles.links}>
					{additionalNavigation.map(({ href, label, description, icon: Icon }) => (
						<SheetClose asChild key={href}>
							<Link href={href} className={styles.link}>
								<Icon aria-hidden='true' />
								<span><strong>{label}</strong><small>{description}</small></span>
								<ChevronRight aria-hidden='true' className={styles.arrow} />
							</Link>
						</SheetClose>
					))}
				</nav>
				<div className={styles.contacts}>
					<h3 className={styles.sectionTitle}>На связи</h3>
					<div className={styles.contactGrid}>
						{contactNavigation.map(({ href, label, description, icon: Icon, external }) => (
							<a key={href} href={href} className={styles.link}
								target={external ? '_blank' : undefined}
								rel={external ? 'noopener noreferrer' : undefined}>
								<Icon aria-hidden='true' />
								<span><strong>{label}</strong><small>{description}</small></span>
								<ArrowUpRight aria-hidden='true' className={styles.arrow} />
							</a>
						))}
					</div>
				</div>
				<p className={styles.address}><MapPin aria-hidden='true' /> Царёво Village · Тукая, 14</p>
				<LegalDocLinks className={styles.legal} />
			</SheetContent>
		</Sheet>
	)
}
