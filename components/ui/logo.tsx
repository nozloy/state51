import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface Props {
	className?: string
}

export const Logo: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('shrink-0', className)}>
			<Image
				src='/logo.png'
				alt='Логотип барбершопа «Штат 51»'
				width={1523}
				height={1033}
				preload
				className='block h-auto w-full'
			/>
		</div>
	)
}
