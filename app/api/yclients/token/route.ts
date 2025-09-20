import { NextResponse } from 'next/server'

const YC_PARTNER_TOKEN = process.env.YC_PARTNER_TOKEN!
const YC_COMPANY_ID = process.env.YC_COMPANY_ID!

// In-memory storage
let adminToken: { value: string; expiresAt: number } | null = null

// Функция для получения нового токена
async function fetchUserToken(login: string, password: string) {
	const res = await fetch('https://api.yclients.com/api/v1/auth', {
		method: 'POST',
		headers: {
			Accept: 'application/vnd.yclients.v2+json',
			Authorization: `Bearer ${YC_PARTNER_TOKEN}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ login, password, company_id: YC_COMPANY_ID }),
	})

	const data = await res.json()

	if (!res.ok || !data.success) {
		throw new Error(JSON.stringify(data))
	}

	// Сохраняем токен в памяти на 1 час
	adminToken = {
		value: data.data.user_token,
		expiresAt: Date.now() + 60 * 60 * 1000, // 1 час
	}

	return adminToken.value
}

// API route
export async function GET(req: Request) {
	try {
		// Получаем логин и пароль администратора из query (или можно из env)
		const { searchParams } = new URL(req.url)
		const login = searchParams.get('login') || process.env.YC_ADMIN_LOGIN!
		const password =
			searchParams.get('password') || process.env.YC_ADMIN_PASSWORD!

		// Если токен уже есть и не истёк — возвращаем его
		if (adminToken && adminToken.expiresAt > Date.now()) {
			return NextResponse.json({ user_token: adminToken.value })
		}

		// Иначе получаем новый
		const token = await fetchUserToken(login, password)
		return NextResponse.json({ user_token: token })
	} catch (error: unknown) {
		let message = 'Unknown error'
		if (error instanceof Error) {
			message = error.message
		}
		return NextResponse.json({ error: message }, { status: 500 })
	}
}
