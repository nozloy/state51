import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PaperPoster } from '@/components/shared/paper-poster'
import { Button } from '@/components/ui/button'
import { referralSteps } from '../content'
import styles from './referral-guide.module.css'

export function ReferralGuide() {
	return (
		<main className={styles.page}>
			<nav aria-label='Навигация по странице' className={styles.navigation}>
				<Button asChild variant='ghost' size='sm'>
					<Link href='/'>
						<ArrowLeft data-icon='inline-start' aria-hidden='true' />
						На главную
					</Link>
				</Button>
			</nav>
			<PaperPoster
				aria-labelledby='referral-title'
				className={styles.poster}
			>
				<header>
					<div className={styles.masthead}>
						<p>Барбершоп «Штат 51»</p>
						<p>Для своих</p>
					</div>
					<div className={styles.hero}>
						<div className={styles.introduction}>
							<p className={styles.eyebrow}>Хорошая компания — вдвойне приятно</p>
							<h1 id='referral-title' className={styles.title}>
								Пригласи друга <span>Получи 600 ₽</span>
							</h1>
							<p className={styles.description}>
								Другу — скидка на первую стрижку.
								<br />
								Тебе — награда за приглашение.
							</p>
						</div>
						<Image
							src='/brand51/generated/invite-friend-illustration.webp'
							alt=''
							width={1254}
							height={1254}
							sizes='(min-width: 768px) 320px, 220px'
							className={styles.illustration}
						/>
					</div>
				</header>

				<section aria-labelledby='referral-steps-title'>
					<div className={styles.stepsHeading}>
						<h2 id='referral-steps-title'>Как это работает</h2>
						<span>4 простых шага</span>
					</div>
					<ol className={styles.steps} role='list'>
						{referralSteps.map((step, index) => (
							<li key={step.id} className={styles.step}>
								<span className={styles.number} aria-hidden='true'>
									0{index + 1}
								</span>
								<div className={styles.stepCopy}>
									<h3>{step.title}</h3>
									<p>{step.description}</p>
								</div>
							</li>
						))}
					</ol>
				</section>

				<footer className={styles.footer}>
					<div className={styles.invitation}>
						<p className={styles.signature}>
							Приглашай друзей.
							<br />
							Зарабатывай вместе с нами!
						</p>
						<Button
							asChild
							variant='poster-primary'
							size='poster'
							className={styles.action}
						>
							<Link href='/profile'>
								Перейти в профиль
								<ArrowRight data-icon='inline-end' aria-hidden='true' />
							</Link>
						</Button>
					</div>
					<p className={styles.terms}>
						*Скидка и выплата для пригласившего действуют после первой стрижки
						приглашённого друга. Скидка не суммируется с другими акциями и
						предложениями.
					</p>
				</footer>
			</PaperPoster>
		</main>
	)
}
