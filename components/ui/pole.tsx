import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface Props {
	className?: string
}

export const Pole: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('', className)}>
			<Image
				src='/pole.png'
				alt='logo'
				width={200}
				height={200}
				priority
				className='drop-shadow-2xl'
			/>
		</div>
	)
}
