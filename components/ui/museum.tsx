import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
	className?: string
}

export const Museum: React.FC<Props> = ({ className }) => {
	return (
		<Link href='https://t.me/barbershop_state51' target='_blank'>
			<div
				className={cn(
					'flex flex-col items-start justify-center bg-amber-100/50 backdrop-blur-sm rounded-[30px] w-full z-10 border border-border select-none cursor-pointer mt-8 shadow-md',
					className,
				)}
			>
				<div className='relative h-[270px] w-full flex flex-col gap-2 items-end justify-end text-lg font-bold p-6'>
					<Image
						src='/chair3.png'
						alt='logo'
						width={300}
						height={300}
						priority
						className='absolute -top-10'
					/>
					<Image
						src='/telegram.png'
						alt='logo'
						width={100}
						height={100}
						priority
						className='absolute left-2 bottom-2 opacity-45'
					/>
					<p className='font-accent text-xl font-semibold text-right underline'>
						Не просто барбершоп, а частичка
					</p>
					<p className='font-accent text-right font-bold text-3xl underline'>
						Чикаго
					</p>
				</div>
			</div>
		</Link>
	)
}
