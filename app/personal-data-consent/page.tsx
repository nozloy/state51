import type { Metadata } from 'next'
import { LEGAL_DOC_VERSION, LEGAL_OPERATOR } from '@/modules/legal/content'
import { LegalPageShell } from '@/modules/legal/ui/legal-page-shell'

export const metadata: Metadata = {
	title: 'Согласие на обработку персональных данных | Штат 51',
	description:
		'Согласие на обработку персональных данных для форм сайта барбершопа Штат 51.',
}

export default function PersonalDataConsentPage() {
	return (
		<LegalPageShell
			title='Согласие ПДн'
			description='Документ применяется к заявкам через формы сайта, включая регистрацию, авторизацию и бонусные операции.'
		>
			<div className='space-y-4'>
				<section className='space-y-2'>
					<h2 className='font-accent text-2xl uppercase leading-none text-[#f1e4c9]'>
						1. Оператор данных
					</h2>
					<p>
						{LEGAL_OPERATOR.name}, ИНН {LEGAL_OPERATOR.inn}, контакты:{' '}
						{LEGAL_OPERATOR.phone}, {LEGAL_OPERATOR.email}.
					</p>
				</section>

				<section className='space-y-2'>
					<h2 className='font-accent text-2xl uppercase leading-none text-[#f1e4c9]'>
						2. На что дается согласие
					</h2>
					<p>
						Субъект персональных данных дает согласие на сбор, запись,
						систематизацию, хранение, уточнение, использование, передачу (в
						том числе в YClients), обезличивание, блокирование и удаление
						персональных данных в целях, указанных в Политике обработки
						персональных данных.
					</p>
				</section>

				<section className='space-y-2'>
					<h2 className='font-accent text-2xl uppercase leading-none text-[#f1e4c9]'>
						3. Состав персональных данных
					</h2>
					<ul className='list-disc space-y-1 pl-5'>
						<li>имя, телефон, e-mail, логин в YClients;</li>
						<li>данные заявки и история взаимодействия;</li>
						<li>технические данные согласия (версия, источник, дата/время).</li>
					</ul>
				</section>

				<section className='space-y-2'>
					<h2 className='font-accent text-2xl uppercase leading-none text-[#f1e4c9]'>
						4. Срок действия согласия
					</h2>
					<p>
						Согласие действует до достижения целей обработки или до момента его
						отзыва субъектом персональных данных.
					</p>
				</section>

				<section className='space-y-2'>
					<h2 className='font-accent text-2xl uppercase leading-none text-[#f1e4c9]'>
						5. Отзыв согласия
					</h2>
					<p>
						Согласие может быть отозвано в любой момент путем направления
						запроса на e-mail{' '}
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
						6. Версия документа
					</h2>
					<p>Версия согласия: {LEGAL_DOC_VERSION}.</p>
					<p>Дата публикации: 6 мая 2026 года.</p>
				</section>
			</div>
		</LegalPageShell>
	)
}
