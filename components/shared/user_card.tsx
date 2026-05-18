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
				'relative flex flex-row gap-4 items-center justify-start border border-border p-4 rounded-xl shadow w-full bg-card',
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
				className='drop-shadow-2xl'
			/>
			<div className='flex flex-col gap-2 items-start text-lg'>
				<p>Приветствую, {user.name}</p>
				<div className='flex flex-col gap-2 items-center justify-start '>
					<Badge variant='secondary'>
						<BadgeCheckIcon size={22} />
						{user.phone}
					</Badge>
				</div>
			</div>
			<Button
				onClick={() => LogOut()}
				variant='ghost'
				className='absolute right-4 text-muted-foreground hover:cursor-pointer active:scale-95'
			>
				<LogOutIcon className='size-7' />
			</Button>
		</div>
	)
}
