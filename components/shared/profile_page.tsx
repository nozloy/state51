'use client'
import React, { useEffect } from 'react'
import { Suspense, useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import { UserCard } from './user_card'

export const ProfilePage: React.FC = () => {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [loading, setLoading] = useState(false)
	const [dataloading, setDataloading] = useState(false)
	const [status, setStatus] = useState('Начисляем бонусы...')
	const [message, setMessage] = useState<string | null>(null)
	const [termsAccepted, setTermsAccepted] = useState(true)
	const [referral, setReferral] = useState<string>('')
	const [user, setUser] = useState<User | null>(null)

	useEffect(() => {
		setLoading(true)
		const storedUser = localStorage.getItem('yclients_user')
		if (storedUser) {
			setUser(JSON.parse(storedUser))
		}
		const params = new URLSearchParams(window.location.search)
		const ref = params.get('referral')
		if (ref) {
			setReferral(ref)
		}
		setLoading(false)
	}, [])
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setDataloading(true)
		setMessage(null)

		if (!termsAccepted) {
			setMessage('Для получения бонусов требуется принять условияй соглашения.')
			setDataloading(false)
			return
		}
		const customFields: Record<string, string> = {}
		if (referral) {
			customFields.ref = referral
			customFields.bonus = 'false'
		}
		console.log('Custom fields to send:', customFields)
		try {
			const res = await fetch('/api/yclients/clients/add', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name,
					phone,
					custom_fields: customFields,
				}),
			})
			const data = await res.json()

			if (!res.ok) throw new Error(data.error || 'Ошибка начисления бонусов')
			if (referral) {
				// await Promise.all([addBonus(referral), addBonus(phone)])
				await addBonus(phone)
			}
			setMessage('Бонусы начислены!')
			setName('')
			setPhone('')
		} catch (err: unknown) {
			if (err instanceof Error) {
				setMessage(err.message)
			} else {
				setMessage('Неизвестная ошибка')
			}
		} finally {
			setDataloading(false)
		}
	}
	const addBonus = async (phone: string) => {
		setDataloading(true)
		setMessage(null)
		setStatus('Начисляем бонусы...')
		try {
			console.log('referral', referral)
			// Получаем ID карты лояльности по телефону
			const cardRes = await fetch(
				`/api/yclients/loyality/cards?phone=${encodeURIComponent(phone)}`,
			)
			const cardData = await cardRes.json()
			if (!cardRes.ok)
				throw new Error(cardData.error || 'Ошибка получения карты')

			const cardId = cardData.id
			if (!cardId) throw new Error('Карта лояльности не найдена')

			// Начисляем бонусы на карту
			const bonusRes = await fetch('/api/yclients/loyality/add', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					card_id: cardId,
					amount: 600,
					title: 'Бонус за регистрацию по реферальной ссылке',
				}),
			})
			const bonusData = await bonusRes.json()
			if (!bonusRes.ok)
				throw new Error(bonusData.error || 'Ошибка начисления бонусов')

			setMessage('Бонусы успешно начислены!')
		} catch (err: unknown) {
			if (err instanceof Error) {
				setMessage(err.message)
			} else {
				setMessage('Неизвестная ошибка')
			}
		} finally {
			setDataloading(false)
		}
	}
	return (
		<Suspense>
			<div className=''>
				{loading && <div>Загрузка...</div>}
				{user && !loading && <UserCard user={user} />}
				{!user && !loading && (
					<div className='max-w-md p-6 border rounded-xl shadow-md bg-card'>
						<h1 className='text-2xl font-bold mb-4'>Получить бонус</h1>

						<p className='mb-4 text-sm text-gray-600'>
							{referral && (
								<div className='flex flex-row items-center justify-start'>
									<p>По приглашению от: </p>
									<b>{referral}</b>
									<br />
								</div>
							)}
							Зачислим Вам скидку 600₽ на первый визит.
						</p>

						<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
							<input
								type='text'
								placeholder='Имя'
								value={name}
								onChange={e => setName(e.target.value)}
								className='border p-2 rounded'
								required
							/>
							<input
								type='tel'
								pattern='[0-9]{11}'
								placeholder='Телефон'
								value={phone}
								onChange={e => {
									let digits = e.target.value.replace(/\D/g, '')
									// Если начинается с 8 или 7, заменяем на 7, иначе добавляем 7 впереди
									if (digits.startsWith('8')) {
										digits = '7' + digits.slice(1)
									} else if (!digits.startsWith('7')) {
										digits = '7' + digits
									}
									digits = digits.slice(0, 11) // ограничиваем до 11 цифр
									setPhone(digits)
								}}
								className='border p-2 rounded'
								required
								inputMode='tel'
							/>
							<div className='flex items-start gap-3'>
								<Checkbox
									id='terms-2'
									checked={termsAccepted}
									onCheckedChange={v => setTermsAccepted(!!v)}
									required
								/>
								<div className='grid gap-2'>
									{/* <Label htmlFor='terms-2'>Соглашение</Label> */}
									<p className='text-foreground text-sm -translate-y-1'>
										Я предоставляю свое согласие на обработку персональных
										данных, а также подтверждаю ознакомление и согласие с
										<Link
											href='/privacy'
											className='underline ml-1'
											target='_blank'
										>
											Политикой конфиденциальности.
										</Link>
									</p>
								</div>
							</div>
							<button
								type='submit'
								disabled={dataloading}
								className='bg-black text-white py-2 rounded hover:bg-gray-800 disabled:opacity-50'
							>
								{dataloading ? status : 'Получить бонусы'}
							</button>
							{/* <div className='flex flex-row gap-2 items-center justify-center'>
								<p className='text-center text-muted-foreground'>
									Есть аккаунт?
								</p>
								<Link
									href='/profile'
									className='underline cursor-pointer text-muted-foreground'
								>
									Войти
								</Link>
							</div> */}
						</form>

						{message && (
							<p className='mt-4 text-center text-sm text-red-600'>{message}</p>
						)}
					</div>
				)}
			</div>
		</Suspense>
	)
}
