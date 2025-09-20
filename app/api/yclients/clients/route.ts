import { NextResponse } from 'next/server'

const YC_PARTNER_TOKEN = process.env.YC_PARTNER_TOKEN!
const YC_COMPANY_ID = process.env.YC_COMPANY_ID!

// Подключаем in-memory токен
import { GET as getToken } from '../token/route'

export async function GET() {
	try {
		// Получаем действующий токен администратора
		const tokenRes = await getToken(
			new Request('https://nozloy.ru/api/yclients/token '),
		) // можно игнорировать URL
		const { user_token } = await tokenRes.json()
		console.log('user_token', user_token)
		// Делаем запрос к API YCLIENTS
		const res = await fetch(
			`https://api.yclients.com/api/v1/company/${YC_COMPANY_ID}/clients/search`,
			{
				method: 'POST',
				headers: {
					Accept: 'application/vnd.yclients.v2+json',
					Authorization: `Bearer ${YC_PARTNER_TOKEN}, User ${user_token}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					page: 1,
					page_size: 200, // сколько клиентов вывести
					fields: ['id', 'name', 'phone'],
				}),
			},
		)

		const data = await res.json()
		console.log('clients data', data)
		return NextResponse.json(data)
	} catch (error: unknown) {
		let message = 'Unknown error'
		if (error instanceof Error) {
			message = error.message
		}
		return NextResponse.json({ error: message }, { status: 500 })
	}
}
