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
				' flex items-center justify-center pt-6  overflow-hidden',
				className,
			)}
		>
			<Image
				src='/logo.svg'
				alt='logo'
				width={300}
				height={300}
				priority
				style={{
					objectFit: 'contain',
					transform: 'scale(2)',
					transformOrigin: 'center',
				}}
				className='drop-shadow-md  '
			/>
		</div>
	)
}
