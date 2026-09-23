import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Send } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PaperPoster } from './paper-poster'
import styles from './telegram.module.css'

interface Props {
	className?: string
}

export function Telegram({ className }: Props) {
	return (
		<PaperPoster id='telegram' aria-labelledby='telegram-title' className={className}>
			<div className={styles.layout}>
				<div className={styles.copy}>
					<div className={styles.headline}>
						<h2 id='telegram-title' className={styles.title}>
							Наш <span>Telegram-канал</span>
						</h2>
						<Send className={styles.plane} strokeWidth={1.5} aria-hidden='true' />
					</div>
					<p className={styles.description}>
						Акции, новости, работы и живой вайб барбершопа — всё в одном месте.
					</p>
				</div>
				<Badge variant='stamp' className={styles.topics}>
					Новости / Акции / Контент
				</Badge>
				<div className={styles.artwork}>
					<Image
						src='/brand51/generated/telegram-illustration.webp'
						alt='Газетчик у барбершопа держит газету «Штат 51 — новости».'
						width={1254}
						height={1254}
						sizes='(min-width: 1152px) 280px, (min-width: 768px) 25vw, (min-width: 480px) 420px, calc(100vw - 48px)'
						className={styles.illustration}
					/>
				</div>
				<Button asChild variant='poster-primary' size='poster' className={styles.action}>
					<Link href='https://t.me/barbershop_state51' target='_blank' rel='noopener noreferrer'>
						Наш Telegram-канал
						<ExternalLink data-icon='inline-end' aria-hidden='true' />
						<span className='sr-only'> (откроется в новой вкладке)</span>
					</Link>
				</Button>
			</div>
		</PaperPoster>
	)
}
