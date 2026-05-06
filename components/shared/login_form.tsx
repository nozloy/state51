import React, { useState } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Checkbox } from '@/components/ui/checkbox'
import { LEGAL_DOC_VERSION } from '@/modules/legal/content'
import { ConsentLegalCopy } from '@/modules/legal/ui/consent-legal-copy'

interface Props {
	className?: string
}

export const LoginForm: React.FC<Props> = ({ className }) => {
	const [message, setMessage] = useState<string | null>(null)
	const [require2fa, setRequire2fa] = useState(false)
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [twofa, setTwofa] = useState('')
	const [termsAccepted, setTermsAccepted] = useState(false)
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setMessage(null)

		if (!termsAccepted) {
			setMessage(
				'Для входа необходимо подтвердить согласие на обработку персональных данных.',
			)
			return
		}

		try {
			const res = await fetch('/api/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					login,
					password,
					twofa: require2fa ? { code: twofa } : undefined,
					consent: {
						accepted: termsAccepted,
						version: LEGAL_DOC_VERSION,
						source: '/profile',
					},
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
			className={cn(
				'brand51-panel w-full border-[#2e2822] bg-[#0f0e0d]/92 p-5',
				className,
			)}
		>
			<div className='mb-5 flex items-center justify-center gap-2'>
				<h2 className='font-accent text-4xl uppercase leading-none text-[#f0e2c7]'>
					Вход через YCLIENTS
				</h2>
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
					className='h-11 rounded-md border border-white/15 bg-black/25 px-3 text-base text-[#f4ead6] placeholder:text-[#cfc4b0]/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b13a31]'
					required
					inputMode='tel'
				/>
				<input
					type='password'
					placeholder='Пароль'
					value={password}
					onChange={e => setPassword(e.target.value)}
					className='h-11 rounded-md border border-white/15 bg-black/25 px-3 text-base text-[#f4ead6] placeholder:text-[#cfc4b0]/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b13a31]'
					required
				/>

				{require2fa && (
					<input
						type='text'
						placeholder='Код 2FA'
						value={twofa}
						onChange={e => setTwofa(e.target.value)}
						className='h-11 rounded-md border border-white/15 bg-black/25 px-3 text-base text-[#f4ead6] placeholder:text-[#cfc4b0]/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b13a31]'
						required
					/>
				)}

				<div className='flex items-start gap-3'>
					<Checkbox
						id='login-consent'
						checked={termsAccepted}
						onCheckedChange={value => setTermsAccepted(Boolean(value))}
						required
					/>
					<ConsentLegalCopy className='-translate-y-1 text-[#d8ccb7]/90' />
				</div>

				<Button
					type='submit'
					disabled={!termsAccepted}
					className='h-11 cursor-pointer rounded-md border border-[#c35042] bg-[#8f2c23] font-accent text-xl uppercase text-[#f4ead6] hover:bg-[#a73429]'
				>
					{require2fa ? 'Подтвердить код' : 'Войти'}
				</Button>
			</form>

			<div className='mt-4 flex items-center justify-center gap-2 text-sm text-[#d8ccb7]/88'>
				<p className='text-center'>Нет аккаунта YClients?</p>
				<Link
					href='https://www.yclients.com/onboarding/first'
					className='cursor-pointer underline decoration-[#7e5d42] underline-offset-2 hover:text-[#f3e8d3]'
				>
					Зарегистрироваться
				</Link>
			</div>

			{message && (
				<p className='mt-4 text-center text-sm text-[#cfb689]'>{message}</p>
			)}
		</div>
	)
}
