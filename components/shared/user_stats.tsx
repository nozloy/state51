import React from 'react'
import { cn } from '@/lib/utils'
import { Coins, Handshake } from 'lucide-react'

interface Props {
	className?: string
	card?: LoyaltyCard
}

export const UserStats: React.FC<Props> = ({ className, card }) => {
	return (
		<div
			className={cn(
				'grid w-full grid-cols-2 gap-2',
				className,
			)}
		>
			<div className='brand51-panel border-[#2f2923] bg-[#0f0e0d]/92 px-3 py-3'>
				<p className='inline-flex items-center gap-2 text-xs uppercase tracking-wide text-[#c3ac80]'>
					<Handshake className='size-4 text-[#cc4f41]' />
					Посещения
				</p>
				<p className='pt-1 text-2xl font-semibold leading-none text-[#f4ead6]'>
					{card?.visits_count ?? 0}
				</p>
			</div>

			<div className='brand51-panel border-[#2f2923] bg-[#0f0e0d]/92 px-3 py-3'>
				<p className='inline-flex items-center gap-2 text-xs uppercase tracking-wide text-[#c3ac80]'>
					<Coins className='size-4 text-[#cc4f41]' />
					Баланс
				</p>
				<p className='pt-1 text-2xl font-semibold leading-none text-[#f4ead6]'>
					{card?.balance ?? 0} ₽
				</p>
			</div>
		</div>
	)
}
