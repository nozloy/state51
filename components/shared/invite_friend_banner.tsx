import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PaperPoster } from './paper-poster'
import styles from './invite_friend_banner.module.css'

export function InviteFriendBanner({ className }: { className?: string }) {
	return (
		<PaperPoster
			id='invite-friend'
			aria-labelledby='invite-friend-title'
			className={className}
		>
			<div className={styles.layout}>
				<div className={styles.copy}>
					<div className={styles.headline}>
						<h2 id='invite-friend-title' className={styles.title}>
							Пригласи <span>друга</span>
						</h2>
						<p className={styles.signature} aria-hidden='true'>
							Good Hair
							<br />
							Good People
						</p>
					</div>
					<p className={styles.description}>
						Получи реальный кэш за его первую стрижку. Наша реферальная
						программа.
					</p>
				</div>
				<Badge className={styles.reward}>
					<span className={styles.amount}>600 ₽</span>
					<span className={styles.rewardLabel}>За каждого</span>
				</Badge>
				<div className={styles.artwork}>
					<Image
						src='/brand51/generated/invite-friend-illustration.webp'
						alt='Барбер и довольный клиент. Стрижки собирают хороших людей.'
						width={1254}
						height={1254}
						sizes='(min-width: 1152px) 280px, (min-width: 768px) 25vw, (min-width: 480px) 420px, calc(100vw - 48px)'
						className={styles.illustration}
					/>
				</div>
				<Button
					asChild
					variant='poster'
					size='poster'
					className={styles.action}
				>
					<Link href='/invite-friend-info'>
						Узнать как <ArrowRight data-icon='inline-end' aria-hidden='true' />
					</Link>
				</Button>
			</div>
		</PaperPoster>
	)
}
