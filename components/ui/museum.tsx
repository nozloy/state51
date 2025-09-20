import React from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

interface Props {
	className?: string
}

export const Museum: React.FC<Props> = ({ className }) => {
	return (
		<Link href='https://t.me/barbershop_state51' target='_blank'>
			<div
				className={cn(
					'relative p-4 flex flex-col items-center justify-center rounded-xl w-full z-10 select-none cursor-pointer   font-oswald overflow-hidden h-[100px] border border-border shadow-lg ',
					className,
				)}
			>
				<Image
					className='no-touch-menu -z-10 object-cover object-center absolute top-0 left-0 w-full brightness-110 contrast-105 h-full'
					src='/telegram.jpg'
					alt='telegram'
					width={1000}
					height={1000}
					priority
					draggable={false}
				/>

				<div className=' absolute top-1 right-1'>
					<p className='flex flex-row gap-1 items-center p-2 text-sm text-foreground  bg-card/50 rounded-lg backdrop-blur-[10px]'>
						Наш телеграмм канал <ExternalLink size={16} />
					</p>
				</div>
			</div>
		</Link>
	)
}
