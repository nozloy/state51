import type { Metadata } from 'next'
import Link from 'next/link'
import { LEGAL_DOC_VERSION, LEGAL_OPERATOR } from '@/modules/legal/content'
import { LegalPageShell } from '@/modules/legal/ui/legal-page-shell'

export const metadata: Metadata = {
	title: 'Политика обработки персональных данных | Штат 51',
	description:
		'Политика обработки персональных данных барбершопа Штат 51: цели, категории данных, права субъектов и контакты оператора.',
}

export default function PrivacyPage() {
	return (
		<LegalPageShell
			title='Политика ПДн'
			description='Документ определяет порядок обработки персональных данных на сайте и при взаимодействии с барбершопом Штат 51.'
		>
			<div className='space-y-4'>
				<section className='space-y-2'>
					<h2 className='font-accent text-2xl uppercase leading-none text-[#f1e4c9]'>
						1. Оператор
					</h2>
					<p>
						Оператор персональных данных: {LEGAL_OPERATOR.name}, ИНН{' '}
						{LEGAL_OPERATOR.inn}.
					</p>
					<p>Контакты для обращений: {LEGAL_OPERATOR.phone}, {LEGAL_OPERATOR.email}.</p>
					<p>Адрес осуществления деятельности: {LEGAL_OPERATOR.address}.</p>
				</section>

				<section className='space-y-2'>
					<h2 className='font-accent text-2xl uppercase leading-none text-[#f1e4c9]'>
						2. Цели и правовые основания обработки
					</h2>
					<ul className='list-disc space-y-1 pl-5'>
						<li>онлайн-запись и организация визита в барбершоп;</li>
						<li>идентификация клиента в сервисе YClients;</li>
						<li>начисление бонусов и работа реферальной программы;</li>
						<li>обратная связь по запросам клиента;</li>
						<li>аналитика посещаемости сайта и улучшение сервиса.</li>
					</ul>
					<p>
						Правовые основания: согласие субъекта персональных данных, а также
						применимые требования законодательства РФ.
					</p>
				</section>

				<section className='space-y-2'>
					<h2 className='font-accent text-2xl uppercase leading-none text-[#f1e4c9]'>
						3. Категории персональных данных
					</h2>
					<ul className='list-disc space-y-1 pl-5'>
						<li>имя, телефон, e-mail, логин в YClients;</li>
						<li>данные, переданные в заявках/переписке;</li>
						<li>технические данные cookies и веб-аналитики;</li>
						<li>
							публично размещаемые данные сотрудников и владельца (фото, имя,
							профессиональная роль) в рамках витрины услуг.
						</li>
					</ul>
				</section>

				<section className='space-y-2'>
					<h2 className='font-accent text-2xl uppercase leading-none text-[#f1e4c9]'>
						4. Категории субъектов данных
					</h2>
					<ul className='list-disc space-y-1 pl-5'>
						<li>посетители сайта;</li>
						<li>клиенты барбершопа;</li>
						<li>лица, оставившие заявку через формы сайта;</li>
						<li>пользователи программы «Пригласи друга».</li>
					</ul>
				</section>

				<section className='space-y-2'>
					<h2 className='font-accent text-2xl uppercase leading-none text-[#f1e4c9]'>
						5. Передача данных третьим лицам
					</h2>
					<p>
						Для записи, клиентской идентификации и бонусных операций используется
						сервис YClients. При взаимодействии с формами сайта данные могут
						передаваться в YClients в объеме, необходимом для оказания услуги.
					</p>
					<p>
						Сайт также использует Яндекс.Метрику при наличии отдельного согласия
						на аналитику cookies.
					</p>
				</section>

				<section className='space-y-2'>
					<h2 className='font-accent text-2xl uppercase leading-none text-[#f1e4c9]'>
						6. Сроки обработки и хранение
					</h2>
					<p>
						Персональные данные обрабатываются в течение срока, необходимого для
						достижения целей обработки, либо до отзыва согласия субъектом, если
						иное не требуется законодательством РФ.
					</p>
				</section>

				<section className='space-y-2'>
					<h2 className='font-accent text-2xl uppercase leading-none text-[#f1e4c9]'>
						7. Права субъекта персональных данных
					</h2>
					<p>Субъект вправе:</p>
					<ul className='list-disc space-y-1 pl-5'>
						<li>запросить сведения об обработке его персональных данных;</li>
						<li>потребовать уточнения, блокирования или удаления данных;</li>
						<li>отозвать ранее данное согласие на обработку данных.</li>
					</ul>
					<p>
						Запрос можно направить по адресу{' '}
						<a
							href={`mailto:${LEGAL_OPERATOR.email}`}
							className='underline decoration-[#7b5f45] underline-offset-2'
						>
							{LEGAL_OPERATOR.email}
						</a>
						.
					</p>
				</section>

				<section className='space-y-2'>
					<h2 className='font-accent text-2xl uppercase leading-none text-[#f1e4c9]'>
						8. Cookies и аналитика
					</h2>
					<p>
						Порядок использования cookies и Яндекс.Метрики описан в документе{' '}
						<Link
							href='/cookies'
							target='_blank'
							rel='noopener noreferrer'
							className='underline decoration-[#7b5f45] underline-offset-2'
						>
							«Политика cookies и веб-аналитики»
						</Link>
						.
					</p>
				</section>

				<section className='space-y-2'>
					<h2 className='font-accent text-2xl uppercase leading-none text-[#f1e4c9]'>
						9. Актуальность документа
					</h2>
					<p>Версия политики: {LEGAL_DOC_VERSION}.</p>
					<p>Дата публикации: 6 мая 2026 года.</p>
				</section>
			</div>
		</LegalPageShell>
	)
}
