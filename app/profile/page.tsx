'use client'

import { useEffect, useState } from 'react'
import { LoaderCircle } from 'lucide-react'
import { UserCard } from '@/components/shared/user_card'
import { LoginForm } from '@/components/shared/login_form'
import { InviteFriendBlock } from '@/components/shared/invite_friend_block'
import { UserStats } from '@/components/shared/user_stats'

export default function LoginPage() {
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(true)
	const [card, setCard] = useState<LoyaltyCard>()
	// Инициализация пользователя из localStorage при загрузке страницы
	useEffect(() => {
		async function fetchData() {
			setLoading(true)
			const storedUser = localStorage.getItem('yclients_user')
			let parsedUser = null
			if (storedUser) {
				parsedUser = JSON.parse(storedUser)
				setUser(parsedUser)
			}
			// Fetch cards only if user exists
			if (parsedUser) {
				const cardinfo = await fetch(
					'/api/yclients/loyality/cards?full=true&phone=' + parsedUser.phone,
				)
				const card = await cardinfo.json()
				if (card && !card.error) {
					setCard(card)
				}
			}
			setLoading(false)
		}
		fetchData()
	}, [])

	return (
		<div className='flex flex-col gap-4 items-center justify-start max-w-md mx-auto mt-2 p-2 min-h-svh'>
			{loading && (
				<div className='flex items-center justify-center w-full h-full animate-spin'>
					<LoaderCircle />
				</div>
			)}
			{!user && !loading && <LoginForm />}
			{user && !loading && <UserCard user={user} />}
			{card && !loading && <UserStats card={card} />}
			{user && !loading && <InviteFriendBlock user={user} />}
		</div>
	)
}
