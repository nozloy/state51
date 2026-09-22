'use client'

import { useEffect, useState } from 'react'

interface Client {
	id: number
	name: string
}

export default function ClientsPage() {
	const [clients, setClients] = useState<Client[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		async function fetchClients() {
			try {
				const res = await fetch('/api/yclients/clients')
				const data = await res.json()
				if (data.success) {
					setClients(data.data)
				} else {
					setError('Ошибка при получении клиентов')
				}
			} catch (err: unknown) {
				if (err instanceof Error) {
					setError(err.message)
				} else {
					setError('Неизвестная ошибка')
				}
			} finally {
				setLoading(false)
			}
		}
		fetchClients()
	}, [])

	if (loading) return <div className='mx-auto w-full max-w-md'>Загрузка...</div>
	if (error) return <div className='mx-auto w-full max-w-md'>Ошибка: {error}</div>

	return (
		<div className='mx-auto w-full max-w-md'>
			<h1>Список клиентов YCLIENTS</h1>
			<ul>
				{clients.map(c => (
					<li key={c.id}>
						{c.name} (ID: {c.id})
					</li>
				))}
			</ul>
		</div>
	)
}
