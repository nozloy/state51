import React from 'react'
import { motion } from 'framer-motion'

import Faqelements from '../components/faqelements'

const Faq = () => {
	return (
		<motion.div
			key='faq'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			// exit={{ opacity: 0 }}
			// transition={{ duration: 1 }}
		>
			<div className='px-5 pt-10'>
				<div className='antialiased	text-xl text-center text-white '>
					{/* Часто задаваемые вопросы */}
				</div>
				<Faqelements />
			</div>
		</motion.div>
	)
}

export default Faq
