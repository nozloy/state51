import { BonusInfo } from '@/components/shared/bonus_info'
import { ProfilePage } from '@/components/shared/profile_page'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Регистрация — Скидка 600₽ на первую стрижку | барбершоп Штат 51',
	description:
		'Зарегистрируйтесь и получите скидку 600₽ на первую стрижку в нашем барбершопе. Быстро, удобно, выгодно.',
	alternates: {
		canonical: 'https://barberstate51.ru/register',
	},
	openGraph: {
		title: 'Скидка 600₽ на первую стрижку в Штат 51 — регистрация',
		description:
			'Присоединяйтесь: получите скидку 600₽ на первую стрижку после регистрации.',
		url: 'https://barberstate51.ru/register',

		siteName: 'Штат 51 - барбершоп в Царево Village',
		images: [
			{
				url: 'https://barberstate51.ru/3angle.png',
				width: 1200,
				height: 630,
				alt: 'Скидка на первую стрижку',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Регистрация — скидка 600₽',
		description: 'Получите 600₽ на первую стрижку в барбершопе Штат 51',
		images: ['https://barberstate51.ru/3angle.png'],
	},
}

// Серверная страница
export default function Page() {
	return (
		<div className='min-h-svh mt-10 p-2 flex flex-col gap-4 items-center justify-start'>
			<ProfilePage />
			<BonusInfo />
		</div>
	)
}
