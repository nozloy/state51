'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { ExternalLink } from 'lucide-react'

interface Props {
	className?: string
}

export const Barbers: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('min-h-[200px] w-full z-10 pt-6', className)}>
			<div className='flex flex-row gap-4 p-4 items-center justify-start w-full min-h-[100px] border border-border bg-background/30 backdrop-blur-sm rounded-[30px] shadow-lg'>
				<Image
					src='/artem_ava.jpg'
					alt='logo'
					width={100}
					height={100}
					priority
					className='drop-shadow-lg rounded-3xl object-top object-cover w-[120px] h-[120px]'
				/>
				<div className='flex flex-col gap-1 items-start justify-center rounded-xl bg-slate-100 p-2 w-full '>
					<p className='text-2xl font-bold text-foreground select-none'>
						Артем
					</p>
					<div className='flex flex-row gap-1 items-start justify-center *:select-none *:text-muted-foreground text-sm'>
						<p>Барбер</p>
						<span>•</span>
						<p>Владелец</p>
					</div>
					<Button
						onClick={() =>
							open(
								'https://n796028.yclients.com/company/746811/personal/select-services?o=',
								'_blank',
							)
						}
						variant='outline'
						className='rounded-xl mt-2 select-none cursor-pointer text-base w-full'
					>
						Записаться
						<ExternalLink />
					</Button>
				</div>
			</div>
		</div>
	)
}
