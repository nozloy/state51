import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Share2 } from 'lucide-react'

interface Props {
	className?: string
	user: User
}

export const InviteFriendBlock: React.FC<Props> = ({ className, user }) => {
	const inviteLink = 'https://barberstate51.ru/register?referral=' + user.phone
	return (
		<div
			className={cn(
				'flex w-full flex-col gap-3 items-center justify-start',
				className,
			)}
		>
			<div className='brand51-panel relative w-full overflow-hidden'>
				<Image
					src='/brand51/generated/invite-banner.webp'
					alt='Пригласи друга'
					fill
					className='object-cover'
					sizes='(max-width: 430px) 100vw, 430px'
				/>
				<div className='absolute inset-0 bg-black/68' />

				<div className='relative z-10 space-y-3 p-4'>
					<div className='space-y-1'>
						<p className='font-accent text-[38px] uppercase leading-[0.86] text-[#f1e4c9]'>
							Пригласи друга
						</p>
						<p className='font-accent text-[30px] uppercase leading-[0.9] text-[#c24237]'>
							600 ₽ каждому
						</p>
						<p className='max-w-[290px] text-sm text-[#e9dcc7]/85'>
							Друг получает скидку на первый визит, а вам начисляется бонус
							после его первой стрижки.
						</p>
					</div>

					<Button
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
						className='h-11 w-full cursor-pointer rounded-md border border-[#c35042] bg-[#8f2c23] font-accent text-xl uppercase text-[#f4ead6] hover:bg-[#a73429]'
					>
						<Share2 className='size-5' />
						Отправить ссылку другу
					</Button>
				</div>
			</div>

			<div className='brand51-panel w-full border-[#2f2923] bg-black/20 px-3 py-3 text-xs text-[#cdbd9d]/86'>
				*Скидка и выплата для пригласившего действуют после первой стрижки
				приглашенного друга.
				<br />
				Скидка не суммируется с другими акциями и предложениями.
				<br />
				Чем больше друзей пригласите — тем выше итоговый бонус.
			</div>
		</div>
	)
}
