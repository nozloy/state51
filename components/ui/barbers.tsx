'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Badge } from './badge'
import { Button } from './button'

interface Props {
	className?: string
}

export const Barbers: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('min-h-[200px] w-full z-10 pt-6', className)}>
			<div className='flex flex-row gap-4 p-4 items-start justify-start w-full min-h-[100px] border border-border bg-background/30 backdrop-blur-sm rounded-[30px] shadow-lg'>
				<Image
					src='/artem_ava.jpg'
					alt='logo'
					width={100}
					height={100}
					priority
					className='drop-shadow-lg rounded-full object-top object-cover w-[120px] h-[120px] -translate-y-8'
				/>
				<div className='flex flex-col gap-2 items-left justify-left'>
					<p className='text-2xl font-bold text-foreground select-none'>
						Артем
					</p>
					<div className='flex flex-row gap-2 items-center justify-center *:select-none'>
						<Badge variant={'destructive'}>Старший барбер</Badge>
						<Badge className='bg-blue-950 '>Владелец</Badge>
					</div>
					<Button
						onClick={() =>
							open(
								'https://n796028.yclients.com/company/746811/personal/select-services?o=',
								'_blank',
							)
						}
						variant='default'
						className='rounded-xl mt-2 select-none cursor-pointer'
					>
						Записаться
					</Button>
				</div>
			</div>
		</div>
	)
}
