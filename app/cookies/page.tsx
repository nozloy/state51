import type { Metadata } from 'next'
import Link from 'next/link'
import {
	COOKIE_CONSENT_VERSION,
	LEGAL_DOC_VERSION,
	LEGAL_OPERATOR,
} from '@/modules/legal/content'
import { CookieSettingsTrigger } from '@/modules/legal/ui/cookie-settings-trigger'
import { LegalPageShell } from '@/modules/legal/ui/legal-page-shell'

export const metadata: Metadata = {
	title: 'Политика cookies и веб-аналитики | Штат 51',
	description:
		'Использование cookies и Яндекс.Метрики на сайте барбершопа Штат 51.',
}

export default function CookiesPage() {
	return (
		<LegalPageShell
			title='Cookies'
			description='На этой странице описано, какие cookies используются на сайте и как управлять согласием на веб-аналитику.'
		>
			<div className='space-y-4'>
				<section className='space-y-2'>
					<h2 className='font-accent text-2xl uppercase leading-none text-[#f1e4c9]'>
						1. Что такое cookies
					</h2>
					<p>
						Cookies — это небольшие текстовые файлы, которые сохраняются в
						браузере и помогают сайту корректно работать, а также анализировать
						посещаемость.
					</p>
				</section>

				<section className='space-y-2'>
					<h2 className='font-accent text-2xl uppercase leading-none text-[#f1e4c9]'>
						2. Какие cookies мы используем
					</h2>
					<ul className='list-disc space-y-1 pl-5'>
						<li>необходимые cookies для базовой работы интерфейса;</li>
						<li>
							аналитические cookies и события Яндекс.Метрики (только после
							явного согласия).
						</li>
					</ul>
				</section>

				<section className='space-y-2'>
					<h2 className='font-accent text-2xl uppercase leading-none text-[#f1e4c9]'>
						3. Яндекс.Метрика
					</h2>
					<p>
						При выборе режима «Принять» может загружаться Яндекс.Метрика для
						анализа посещаемости и улучшения пользовательского опыта. При
						режиме «Только необходимые» аналитика не активируется.
					</p>
				</section>

				<section className='space-y-2'>
					<h2 className='font-accent text-2xl uppercase leading-none text-[#f1e4c9]'>
						4. Управление согласием
					</h2>
					<p>
						Вы можете изменить выбор по cookies в любой момент. Чтобы
						переоткрыть настройки, нажмите кнопку ниже.
					</p>
					<CookieSettingsTrigger className='inline-flex h-10 items-center justify-center rounded-md border border-[#665646] bg-black/25 px-4 text-sm font-medium text-[#f1e4c9] transition hover:border-[#c3aa80] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b13a31]' />
				</section>

				<section className='space-y-2'>
					<h2 className='font-accent text-2xl uppercase leading-none text-[#f1e4c9]'>
						5. Дополнительная информация
					</h2>
					<p>
						Общий порядок обработки персональных данных указан в{' '}
						<Link
							href='/privacy'
							target='_blank'
							rel='noopener noreferrer'
							className='underline decoration-[#7b5f45] underline-offset-2'
						>
							Политике обработки персональных данных
						</Link>
						.
					</p>
					<p>
						Контакт для запросов: {LEGAL_OPERATOR.email}. Версия политики
						cookies: {COOKIE_CONSENT_VERSION}. Версия пакета юридических
						документов: {LEGAL_DOC_VERSION}.
					</p>
				</section>
			</div>
		</LegalPageShell>
	)
}
