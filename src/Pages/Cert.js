import { motion } from 'framer-motion'
import React, { useState } from 'react'

function handleDownload(url, fileName) {
	const link = document.createElement('a')
	link.href = url
	link.download = fileName
	link.click()
}

function Cert() {
	const [isLoading, setIsLoading] = useState(true) // State to track loading status

	const handleDiplomaDownload = () => {
		handleDownload('Diplom.png', 'Diploma.png')
	}

	const handleCertificateDownload = () => {
		handleDownload('Svidetelstvo.png', 'Certificate.png')
	}

	const handleImageLoad = () => {
		setIsLoading(false) // Set loading status to false when images are loaded
	}

	return (
		<motion.div key='cert' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<div className='px-5 pt-10'>
				<div className='antialiased text-xl text-center text-blue-gray-900'>
					Дипломы и сертификаты
				</div>
				<div className='columns-1'>
					<img
						className='w-full mt-5 rounded-xl'
						src='Diplom.png'
						alt='Диплом'
						onClick={handleDiplomaDownload}
						onLoad={handleImageLoad} // Call handleImageLoad when the image is loaded
						style={{ display: isLoading ? 'none' : 'block' }} // Hide the image initially while loading
					/>
					<img
						className='w-full mt-5 rounded-xl'
						src='Svidetelstvo.png'
						alt='Свидетельство'
						onClick={handleCertificateDownload}
						onLoad={handleImageLoad} // Call handleImageLoad when the image is loaded
						style={{ display: isLoading ? 'none' : 'block' }} // Hide the image initially while loading
					/>
					{isLoading && (
						// Display loading indicators while images are loading
						<div>
							<div
								className='w-full mt-5 rounded-xl bg-gradient-to-r from-blue-gray-200 to-blue-gray-800 animate-pulse'
								style={{ height: '200px' }}
							></div>
							<div
								className='w-full mt-5 rounded-xl bg-gradient-to-r from-blue-gray-200 to-blue-gray-800 animate-pulse'
								style={{ height: '200px' }}
							></div>
						</div>
					)}
				</div>
			</div>
		</motion.div>
	)
}

export default Cert
