import React, { useState } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface Props {
	className?: string
}

export const LoginForm: React.FC<Props> = ({ className }) => {
	const [message, setMessage] = useState<string | null>(null)
	const [require2fa, setRequire2fa] = useState(false)
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [twofa, setTwofa] = useState('')
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
				setMessage('Успешная авторизация!')
				setRequire2fa(false)
				setTwofa('')
				window.location.reload()
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
		<div
			className={cn('p-6 border rounded-xl shadow w-full bg-card ', className)}
		>
			<div className='flex flex-row gap-2 items-center justify-center mb-4'>
				<h1 className='text-2xl font-bold mb-4'>Вход через</h1>
				<Image
					src='/yclients.svg'
					alt='yclients'
					width={110}
					height={30}
					priority
					className='drop-shadow-2xl -translate-y-1'
				/>
			</div>
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
				<p className='text-center'>Нет аккаунта yclients?</p>
				<Link
					href='https://www.yclients.com/onboarding/first'
					className='underline cursor-pointer'
				>
					Зарегистрироваться
				</Link>
			</div>
			{message && <p className='mt-4 text-sm text-center'>{message}</p>}
		</div>
	)
}
