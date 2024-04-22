import { Fragment, useState } from 'react'
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from '@material-tailwind/react'

export default function Faqelements() {
	const [open, setOpen] = useState(1)

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value)
	}

	return (
		<Fragment>
			<Accordion open={open === 1}>
				<AccordionHeader className='AccHeaders' onClick={() => handleOpen(1)}>
					Что такое электроэпиляция?
				</AccordionHeader>
				<AccordionBody className='AccDescription'>
					Электроэпиляция – это метод удаления волос с помощью электрического
					тока, который уничтожает волосяной фолликул.
				</AccordionBody>
			</Accordion>
			<Accordion open={open === 2}>
				<AccordionHeader className='AccHeaders' onClick={() => handleOpen(2)}>
					Процедура болезнена?
				</AccordionHeader>
				<AccordionBody className='AccDescription'>
					Каждый человек по-разному переносит болевые ощущения. Однако, при
					проведении электроэпиляции применяются специальные кремы, которые
					снижают болевые ощущения до минимума.
				</AccordionBody>
			</Accordion>
			<Accordion open={open === 3}>
				<AccordionHeader className='AccHeaders' onClick={() => handleOpen(3)}>
					Зоны для электроэпиляции?
				</AccordionHeader>
				<AccordionBody className='AccDescription'>
					С помощью электроэпиляции можно удалять волосы практически на любой
					части тела, включая лицо, ноги, руки, подмышки, бикини и др.
				</AccordionBody>
			</Accordion>
			<Accordion open={open === 4}>
				<AccordionHeader className='AccHeaders' onClick={() => handleOpen(4)}>
					Как подготовиться к процедуре?
				</AccordionHeader>
				<AccordionBody className='AccDescription'>
					<ul class='list-inside list-disc'>
						<li>Оставить волосы достаточной длины.</li>
						<li>Избегать загара перед процедурой.</li>
						<li>
							Избегать употребления кофе, алкоголя и других стимуляторов перед
							процедурой.
						</li>
						<li>Не делать процедуру во время менструации.</li>
						<li>Не делать процедуру во время беременности.</li>
						<li>
							Сообщить специалисту о проблемах здоровья и противопоказаниях.
							Некоторые заболевания, такие как диабет, аллергии или проблемы с
							сердечно-сосудистой системой, могут повлиять на процедуру
							электроэпиляции.
						</li>
					</ul>
				</AccordionBody>
			</Accordion>
			<Accordion open={open === 5}>
				<AccordionHeader className='AccHeaders' onClick={() => handleOpen(5)}>
					Подарочный сертификат?
				</AccordionHeader>
				<AccordionBody className='AccDescription'>
					Да, вы можете приобрести подарочный сертификат на любую процедуру в
					нашем салоне. Мы предлагаем сертификаты номиналом от 1000 рублей.
				</AccordionBody>
			</Accordion>

			<Accordion open={open === 6}>
				<AccordionHeader className='AccHeaders' onClick={() => handleOpen(6)}>
					Как записаться?
				</AccordionHeader>
				<AccordionBody className='AccDescription'>
					Вы можете записаться на процедуру, используя онлайн-форму записи на
					нашем сайте, позвонив по телефону или написав нам в Telegram или
					WhatsApp.
				</AccordionBody>
			</Accordion>
		</Fragment>
	)
}
