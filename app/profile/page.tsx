'use client'

import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { CopyIcon, LoaderCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { UserCard } from '@/components/shared/user_card'
import Link from 'next/link'

export default function LoginPage() {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [twofa, setTwofa] = useState('')
	const [require2fa, setRequire2fa] = useState(false)
	const [message, setMessage] = useState<string | null>(null)
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(true)
	const [inviteLink, setInviteLink] = useState('')
	// Инициализация пользователя из localStorage при загрузке страницы
	useEffect(() => {
		setLoading(true)
		const storedUser = localStorage.getItem('yclients_user')
		if (storedUser) {
			setUser(JSON.parse(storedUser))
		}
		setInviteLink(
			storedUser
				? 'https://barberstate51.ru/?referral=' + JSON.parse(storedUser).phone
				: '',
		)
		setLoading(false)
	}, [])

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setMessage(null)

		try {
			const res = await fetch('/api/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					login,
					password,
					twofa: require2fa ? { code: twofa } : undefined,
				}),
			})

			const data = await res.json()

			if (data.require2fa) {
				setRequire2fa(true) // показываем поле для кода
				setMessage('Введите код из приложения 2FA')
				return
			}
			if (data.success) {
				const userData = data.data.data

				const loggedUser: User = {
					id: String(userData.id || userData.user_id || userData['0'] || ''), // fallback
					user_token: userData.user_token || userData['0'] || '',
					name: userData.name || '',
					phone: userData.phone || '',
					login: userData.login || '',
					email: userData.email || '',
					avatar: userData.avatar || '',
					is_approved: userData.is_approved || false,
					is_email_confirmed: userData.is_email_confirmed || false,
				}

				localStorage.setItem('yclients_user', JSON.stringify(loggedUser))
				setUser(loggedUser)
				setInviteLink(
					'https://barberstate51.ru/?referral=' + (loggedUser.phone || ''),
				)
				setMessage('Успешная авторизация!')
				setRequire2fa(false)
				setTwofa('')
			} else {
				throw new Error(data.error || 'Ошибка авторизации')
			}
		} catch (err: unknown) {
			if (err instanceof Error) {
				setMessage(err.message)
			} else {
				setMessage('Неизвестная ошибка')
			}
		}
	}

	return (
		<div className='flex flex-col gap-4 items-center justify-start max-w-md mx-auto mt-10 p-2 min-h-svh'>
			{loading && (
				<div className='flex items-center justify-center w-full h-full animate-spin'>
					<LoaderCircle />
				</div>
			)}
			{!user && !loading && (
				<div className='p-6 border rounded-xl shadow w-full bg-card'>
					<h1 className='text-2xl font-bold mb-4'>Вход</h1>

					<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
						<input
							type='tel'
							placeholder='Телефон'
							value={login}
							onChange={e => {
								let digits = e.target.value.replace(/\D/g, '')
								if (digits.startsWith('8')) {
									digits = '7' + digits.slice(1)
								} else if (!digits.startsWith('7')) {
									digits = '7' + digits
								}
								digits = digits.slice(0, 11)
								setLogin(digits)
							}}
							className='border p-2 rounded'
							required
							inputMode='tel'
						/>
						<input
							type='password'
							placeholder='Пароль'
							value={password}
							onChange={e => setPassword(e.target.value)}
							className='border p-2 rounded'
							required
						/>

						{require2fa && (
							<input
								type='text'
								placeholder='Код 2FA'
								value={twofa}
								onChange={e => setTwofa(e.target.value)}
								className='border p-2 rounded'
								required
							/>
						)}

						<Button type='submit' className='cursor-pointer'>
							{require2fa ? 'Подтвердить код' : 'Войти'}
						</Button>
					</form>
					<div className='flex flex-row gap-2 items-center justify-center mt-4'>
						<p className='text-center'>Еще не с нами?</p>
						<Link href='/register' className='underline cursor-pointer'>
							Зарегистрироваться
						</Link>
					</div>
					{message && <p className='mt-4 text-sm text-center'>{message}</p>}
				</div>
			)}
			{user && !loading && <UserCard user={user} />}
			{user && !loading && (
				<>
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
							<Input
								type='text'
								value={inviteLink}
								readOnly
								className=' border p-2 rounded text-[12px] w-full select-all'
							/>
							<Button
								variant='ghost'
								onClick={() => {
									navigator.clipboard.writeText(inviteLink)
								}}
								className='absolute right-0 top-0 cursor-pointer'
							>
								<CopyIcon />
							</Button>
						</div>
					</div>
					<div className='text-xs text-muted-foreground italic p-4 pt-0'>
						*Скидка действует на первую стрижку приглашенного друга и на
						следующую вашу стрижку после его визита.
						<br />
						Скидка не суммируется с другими акциями и предложениями.
						<br />
						Чем больше друзей друзей пригласишь - тем больше скидок получишь!
					</div>
				</>
			)}
		</div>
	)
}
