import React from 'react'
import { cn } from '@/lib/utils'
import { Badge } from '../ui/badge'
import { Coins, Handshake } from 'lucide-react'

interface Props {
	className?: string
	card?: LoyaltyCard
}

export const UserStats: React.FC<Props> = ({ className, card }) => {
	return (
		<div
			className={cn(
				'flex flex-row gap-4 items-center justify-between',
				className,
			)}
		>
			<Badge variant='default'>
				<Handshake size={22} />
				{card?.visits_count
					? `Посещений ${card.visits_count}`
					: 'Нет посещений'}
			</Badge>
			<Badge variant='default'>
				<Coins size={22} />
				{card?.balance
					? `Бонусы за друзей: ${card.balance}₽`
					: 'Нет карты лояльности'}
			</Badge>
		</div>
	)
}
