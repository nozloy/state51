import type { Metadata } from 'next'
import { Roboto, Oswald } from 'next/font/google'
import './globals.css'
import { Menu } from '@/components/shared/menu'
import { CookieConsentManager } from '@/modules/legal/ui/cookie-consent-manager'

const roboto = Roboto({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '700'],
	variable: '--font-roboto',
})

const oswald = Oswald({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '700'],
	variable: '--font-oswald',
})

export const metadata: Metadata = {
	title:
		'Штат 51 — барбершоп в Царево',
	description:
		'Барбершоп Штат 51: мужские стрижки, бритьё и комплексный уход. Онлайн-запись, программа «Пригласи друга», контакты и актуальные услуги.',
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
		<html lang='ru' className='dark'>
			<head>
				<link rel='icon' href='/3angle.png' />
			</head>
			<body
				className={`${roboto.variable} ${oswald.variable} bg-[#060505] font-sans antialiased`}
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
				<div className='brand51-shell'>
					<div className='brand51-canvas'>
						{children}
						<Menu />
						<CookieConsentManager />
					</div>
				</div>
			</body>
		</html>
	)
}
