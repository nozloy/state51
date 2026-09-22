import React from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

interface Props {
	className?: string
}

export const Telegram: React.FC<Props> = ({ className }) => {
	return (
		<Link href='https://t.me/barbershop_state51' target='_blank' rel='noopener noreferrer'>
			<div
				className={cn(
					'relative isolate flex h-40 w-full items-center justify-center overflow-hidden rounded-xl border border-border p-4 font-oswald shadow-sm',
					className,
				)}
			>
				<Image
					className='no-touch-menu -z-10 object-cover object-center absolute top-0 left-0 w-full brightness-110 contrast-105 h-full'
					src='/telegram.jpg'
					alt='telegram'
					width={1000}
					height={1000}
					sizes='(min-width: 1152px) 540px, (min-width: 768px) 46vw, calc(100vw - 32px)'
					draggable={false}
				/>

				<div className=' absolute top-1 right-1'>
					<p className='flex flex-row gap-1 items-center p-2 text-sm text-foreground  bg-card/50 rounded-lg backdrop-blur-[10px]'>
							Наш Telegram-канал <ExternalLink size={16} />
					</p>
				</div>
			</div>
		</Link>
	)
}
