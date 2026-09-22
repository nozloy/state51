import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface Props {
	className?: string
}

export const Logo: React.FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				'flex items-center justify-center overflow-hidden',
				className,
			)}
		>
			<Image
				src='/logo.svg'
				alt='Логотип барбершопа «Штат 51»'
				width={300}
				height={300}
				preload
				style={{
					objectFit: 'contain',
					transform: 'scale(2)',
					transformOrigin: 'center',
				}}
				className='size-full'
			/>
		</div>
	)
}
