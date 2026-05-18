import React from 'react'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Props {
	className?: string
	user: User
}

export const InviteFriendBlock: React.FC<Props> = ({ className, user }) => {
	const inviteLink = 'https://barberstate51.ru/register?referral=' + user.phone
	return (
		<div
			className={cn(
				'flex flex-col gap-4 items-center justify-start',
				className,
			)}
		>
			<div className='flex flex-col gap-2 items-start justify-between border border-border p-6 rounded-xl shadow w-full bg-card'>
				<div className='flex flex-row gap-2 items-start justify-between w-full'>
					<div className='flex flex-col gap-1 items-start text-lg font-sans'>
						<p>Пригласи друга</p>
						<p>и получите скидку</p>
						<p>на услуги стрижки</p>
						<div className='inline-flex items-center gap-2'>
							<Badge
								variant='outline'
								className='text-lg bg-destructive text-card'
							>
								600 ₽
							</Badge>
							<p>каждому*</p>
						</div>
					</div>
					<Image
						src='/friend.png'
						alt='invite_friend'
						width={120}
						height={120}
						priority
						className='drop-shadow-2xl rounded-3xl object-top object-cover w-[120px] h-[120px] mt-1'
					/>
				</div>
				<div className='relative w-full'>
					<Button
						variant='default'
						onClick={() => {
							if (navigator.share) {
								navigator.share({
									title: 'Приглашение в Barber State 51',
									text: 'Получи скидку на первую стрижку по ссылке:',
									url: inviteLink,
								})
							} else {
								alert('Поделиться можно только на поддерживаемых устройствах.')
							}
						}}
						className='cursor-pointer'
					>
						Отправить ссылку другу
					</Button>
				</div>
			</div>
			<div className='text-xs text-muted-foreground italic p-4 pt-0'>
				*Скидка и выплата для пригласившего действуют после первой стрижки
				приглашенного друга.
				<br />
				Скидка не суммируется с другими акциями и предложениями.
				<br />
				Чем больше друзей друзей пригласишь - тем больше денег получишь!
			</div>
		</div>
	)
}
