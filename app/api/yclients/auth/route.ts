import { NextResponse } from 'next/server'

const YC_PARTNER_TOKEN = process.env.YC_PARTNER_TOKEN! // возьми из .env

export async function POST(req: Request) {
	try {
		const { login, password } = await req.json()

		const res = await fetch('https://api.yclients.com/api/v1/auth', {
			method: 'POST',
			headers: {
				Accept: 'application/vnd.yclients.v2+json',
				Authorization: `Bearer ${YC_PARTNER_TOKEN}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ login, password }),
		})

		const data = await res.json()

		if (!res.ok || !data.success) {
			return NextResponse.json({ error: data }, { status: res.status })
		}

		return NextResponse.json({
			user_token: data.data.user_token,
			user: data.data,
		})
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : 'Unknown error'
		return NextResponse.json({ error: message }, { status: 500 })
	}
}
