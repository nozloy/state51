import React from 'react'
import { motion } from 'framer-motion'
import {
	FaCalendarCheck,
	FaTelegram,
	FaMap,
	FaPhoneAlt,
	FaQuestion,
} from 'react-icons/fa'
import { GiDiploma } from 'react-icons/gi'
// import { Icon32LogoVkColor } from '@vkontakte/icons'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Link } from 'react-router-dom/dist'

const Menu = () => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.1,
			},
		},
		exit: {
			opacity: 0,
			x: -500,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.1,
			},
		},
	}
	const item = {
		hidden: { opacity: 0, y: 100 },
		show: { opacity: 1, y: 0 },
	}
	return (
		<motion.ol
			key='menu'
			variants={container}
			initial='hidden'
			animate='show'
			exit='exit'
		>
			<div className='mt-5 mb-8'>
				{/* <a
					className='links'
					href='https://vk.com/ava_maria_ufa'
					rel='noreferrer'
					target='_blank'
				>
					<button className='buttons'>
						<Icon32LogoVkColor className='icon' />
						Группа Вконтакте
						<FaGifts className='icon ml-2 text-red-600 animate-bounce' />
					</button>
				</a> */}
				{/* <a
					className='links'
					href='https://vk.com/sony_xiaomi_irk'
					rel='noreferrer'
					target='_blank'
				>
					<button className='buttons'>Instagram*</button>
				</a> */}
				<motion.li variants={item}>
					<Link to={`/faq`} className='links'>
						<button className='buttons'>
							<FaQuestion className='icon text-blue-gray-700' />
							Частые вопросы
						</button>
					</Link>
				</motion.li>
				<motion.li variants={item}>
					<Link to={`/cert`} className='links'>
						<button className='buttons'>
							<GiDiploma className='icon text-blue-gray-700' />
							Дипломы и сертификаты
						</button>
					</Link>
				</motion.li>
				<motion.li variants={item}>
					<a
						className='links'
						href='https://n870576.yclients.com/'
						rel='noreferrer'
						target='_blank'
					>
						<button className='buttons'>
							<FaCalendarCheck className='icon text-blue-gray-700' />
							Записаться
						</button>
					</a>
				</motion.li>
				<motion.li variants={item}>
					<a
						className='links'
						href='https://t.me/+79375200051'
						rel='noreferrer'
						target='_blank'
					>
						<button className='buttons'>
							<FaTelegram className='icon text-blue-gray-700' />
							Telegram
						</button>
					</a>
				</motion.li>
				<motion.li variants={item}>
					<a
						className='links'
						href='https://wa.me/79375200051'
						rel='noreferrer'
						target='_blank'
					>
						<button className='buttons'>
							<IoLogoWhatsapp className='icon text-blue-gray-700' />
							Whats'Up
						</button>
					</a>
				</motion.li>
				<motion.li variants={item}>
					<a
						className='links'
						href='https://yandex.ru/maps/-/CDUz4XOu'
						rel='noreferrer'
						target='_blank'
					>
						<button className='buttons'>
							<FaMap className='icon text-blue-gray-700' />
							Яндекс Карты
						</button>
					</a>
				</motion.li>
				<motion.li variants={item}>
					<a
						className='links'
						href='tel:+79375200051'
						rel='noreferrer'
						target='_blank'
					>
						<button className='buttons'>
							<FaPhoneAlt className='icon text-blue-gray-900' />
							Позвонить
						</button>
					</a>
				</motion.li>
			</div>
			{/* <div className='mx-auto text-center px-5 font-light text-blue-gray-900'>
				ООО «Вега» 664011, г.Иркутск, ул.Карла Маркса, д.39 ИНН 3808114364 ОГРН
				1043801065978
			</div> */}
			{/* <div className='mx-auto text-center'>
				* принадлежит компании Meta, признанной в России экстремистской
				организацией
			</div> */}
		</motion.ol>
	)
}

export default Menu
