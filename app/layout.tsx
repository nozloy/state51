import type { Metadata } from 'next'
import { Roboto, Oswald } from 'next/font/google'
import './globals.css'
import { Menu } from '@/components/ui/menu'

const roboto = Roboto({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '700'],
	variable: '--font-roboto-mono',
})

const oswald = Oswald({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '700'],
	variable: '--font-Oswald',
})

export const metadata: Metadata = {
	title:
		'Барбершоп Штат 51 — восстановление мужской культуры | Новое Шигалеево, Царево Village',
	description:
		'Барбершоп Штат 51 — не просто стрижки, а возвращение уважения к себе и культуре. Настоящие кресла начала прошлого века, честная атмосфера, личный подход. Запишись на стрижку — стань собой.',
	keywords: [
		'барбершоп',
		'Штат 51',
		'Царево Village',
		'Новое Шигалеево',
		'стрижка',
		'бритьё',
		'барбер',
		'барбершоп Казань',
		'настоящий барбершоп',
		'Артем барбер',
		'мужская культура',
	],
	icons: {
		icon: '/3angle.png',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/3angle.png' />
			</head>
			<body
				className={`${roboto.variable} ${oswald.variable} antialiased font-sans max-w-md min-h-dvh mx-auto bg-background`}
			>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Barbershop',
							name: 'Штат 51',
							image: 'https://barberstate51.ru.ru/logo.svg',
							url: 'https://barberstate51.ru.ru',
							telephone: '+7 (937) 520-00-51',
							slogan: 'Мы восстанавливаем культуру',
							address: {
								'@type': 'PostalAddress',
								streetAddress: 'ул. Габдуллы Тукая, 14',
								addressLocality: 'Новое Шигалеево',
								addressRegion: 'Республика Татарстан',
								postalCode: '422788',
								addressCountry: 'RU',
							},
							founder: {
								'@type': 'Person',
								name: 'Артем',
							},
							description:
								'Барбершоп «Штат 51» — лучшие мужские стрижки, оформление бороды и бритье в Царево Village (Новое Шигалеево), Республика Татарстан.Уникальная атмосфера, философия, кресла начала XX века.',
							logo: 'https://barberstate51.ru/3angle.png',
							sameAs: ['https://t.me/barbershop_state51'],
						}),
					}}
				/>
				{children}
				<Menu />
			</body>
		</html>
	)
}
