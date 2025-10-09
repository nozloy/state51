'use client'

import { useEffect, useState } from 'react'
import { LoaderCircle } from 'lucide-react'
import { UserCard } from '@/components/shared/user_card'
import { LoginForm } from '@/components/shared/login_form'
import { InviteFriendBlock } from '@/components/shared/invite_friend_block'

export default function LoginPage() {
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(true)

	// Инициализация пользователя из localStorage при загрузке страницы
	useEffect(() => {
		setLoading(true)
		const storedUser = localStorage.getItem('yclients_user')
		if (storedUser) {
			setUser(JSON.parse(storedUser))
		}
		setLoading(false)
	}, [])

	return (
		<div className='flex flex-col gap-4 items-center justify-start max-w-md mx-auto mt-10 p-2 min-h-svh'>
			{loading && (
				<div className='flex items-center justify-center w-full h-full animate-spin'>
					<LoaderCircle />
				</div>
			)}
			{!user && !loading && <LoginForm />}
			{user && !loading && <UserCard user={user} />}
			{user && !loading && <InviteFriendBlock user={user} />}
		</div>
	)
}
