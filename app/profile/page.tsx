'use client'

import { useEffect, useState } from 'react'
import { LoaderCircle } from 'lucide-react'
import { UserCard } from '@/components/shared/user_card'
import { LoginForm } from '@/components/shared/login_form'
import { InviteFriendBlock } from '@/components/shared/invite_friend_block'
import { UserStats } from '@/components/shared/user_stats'
import { BrandTopBar } from '@/modules/home/ui/brand-top-bar'

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
		<div className='brand51-main pb-24'>
			<BrandTopBar />
			<section className='brand51-panel px-4 py-4'>
				<h1 className='font-accent text-[44px] uppercase leading-none text-[#ead8b7]'>
					Профиль
				</h1>
				<p className='pt-2 text-sm text-[#e8dcc7]/84'>
					Войдите в аккаунт YClients, чтобы смотреть бонусы и делиться ссылкой
					приглашения.
				</p>
			</section>

			{loading && (
				<div className='brand51-panel flex min-h-[240px] items-center justify-center text-[#cfb689]'>
					<LoaderCircle className='size-8 animate-spin' />
				</div>
			)}

			{!user && !loading && <LoginForm />}

			{user && !loading && (
				<>
					<UserCard user={user} />
					{card && <UserStats card={card} />}
					<InviteFriendBlock user={user} />
				</>
			)}
		</div>
	)
}
