'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { BadgeCheckIcon, LogOutIcon } from 'lucide-react'
import { Button } from '../ui/button'

interface Props {
	className?: string
	user: User
}

export const UserCard: React.FC<Props> = ({ className, user }) => {
	const LogOut = () => {
		localStorage.removeItem('yclients_user')
		window.location.href = '/profile' // Перенаправление на страницу профиля
	}
	return (
		<div
			className={cn(
				'brand51-panel relative flex w-full items-center gap-3 border-[#2f2923] bg-[#0f0e0d]/92 p-4',
				className,
			)}
		>
			<Image
				src={
					user.avatar?.endsWith('no-master.png')
						? '/3angle.png'
						: user.avatar || '/3angle.png'
				}
				alt='logo'
				width={80}
				height={80}
				priority
				className='size-16 rounded-md border border-white/10 object-cover shadow-md'
			/>

			<div className='flex min-w-0 flex-col items-start gap-2'>
				<p className='font-accent text-3xl uppercase leading-none text-[#f2e6ce]'>
					{user.name || 'Клиент'}
				</p>
				<div className='flex flex-col gap-1 text-sm text-[#d8ccb7]/88'>
					<p className='line-clamp-1'>Ваш профиль активен</p>
					<Badge
						variant='secondary'
						className='border border-[#665140] bg-black/20 text-[#e8dcc7]'
					>
						<BadgeCheckIcon size={16} className='text-[#cc4e40]' />
						{user.phone || 'Телефон не указан'}
					</Badge>
				</div>
			</div>

			<Button
				onClick={() => LogOut()}
				variant='ghost'
				className='absolute right-2 top-2 text-[#c9baa0] hover:cursor-pointer hover:bg-white/10 hover:text-[#f4ead6] active:scale-95'
			>
				<LogOutIcon className='size-5' />
			</Button>
		</div>
	)
}
