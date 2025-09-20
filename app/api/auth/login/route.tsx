import { NextRequest, NextResponse } from 'next/server'

const YC_PARTNER_TOKEN = process.env.YC_PARTNER_TOKEN!

export async function POST(req: NextRequest) {
	try {
		const body = await req.json()
		const { login, password, twofa } = body

		if (!login || !password) {
			return NextResponse.json(
				{ success: false, error: 'Логин и пароль обязательны' },
				{ status: 400 },
			)
		}

		type Payload = {
			login: string
			password: string
			'2fa'?: { code: string }
		}
		const payload: Payload = { login, password }
		if (twofa?.code) payload['2fa'] = { code: twofa.code }

		const res = await fetch('https://api.yclients.com/api/v1/auth', {
			method: 'POST',
			headers: {
				Accept: 'application/vnd.yclients.v2+json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${YC_PARTNER_TOKEN}`,
			},
			body: JSON.stringify(payload),
		})

		const data = await res.json()

		// Сценарий: требуется 2FA
		if (res.status === 200 && data?.data?.uuid) {
			return NextResponse.json(
				{ success: false, require2fa: true, uuid: data.data.uuid },
				{ status: 200 },
			)
		}

		// Сценарий: успешная авторизация
		if (res.status === 201 && data.data?.user_token) {
			return NextResponse.json({ success: true, data }, { status: 201 })
		}

		// Ошибка
		return NextResponse.json(
			{ success: false, error: 'Ошибка авторизации', details: data },
			{ status: res.status },
		)
	} catch (error: unknown) {
		let message = 'Внутренняя ошибка сервера'
		if (error instanceof Error) message = error.message
		return NextResponse.json(
			{ success: false, error: message },
			{ status: 500 },
		)
	}
}
