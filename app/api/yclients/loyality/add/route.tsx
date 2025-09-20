import { NextRequest, NextResponse } from 'next/server'

const YC_PARTNER_TOKEN = process.env.YC_PARTNER_TOKEN!
const YC_USER_TOKEN = process.env.YC_USER_TOKEN!
const YC_CHAIN_ID = process.env.YC_GROUP_ID!

export async function POST(req: NextRequest) {
	try {
		const body = await req.json()
		const { card_id, amount, title } = body

		if (!card_id || !amount) {
			return NextResponse.json(
				{ error: 'card_id и amount обязательны' },
				{ status: 400 },
			)
		}

		const url = `https://api.yclients.com/api/v1/chain/${YC_CHAIN_ID}/loyalty/cards/${card_id}/manual_transaction`

		const res = await fetch(url, {
			method: 'POST',
			headers: {
				Accept: 'application/vnd.yclients.v2+json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${YC_PARTNER_TOKEN}, User ${YC_USER_TOKEN}`,
			},
			body: JSON.stringify({
				amount,
				title: title || 'Начисление бонусов',
			}),
		})

		const data = await res.json()

		if (!res.ok) {
			return NextResponse.json(
				{ error: data?.message || 'Ошибка при начислении бонусов' },
				{ status: res.status },
			)
		}

		return NextResponse.json(data)
	} catch (error: unknown) {
		console.error(error)
		const message =
			typeof error === 'object' && error !== null && 'message' in error
				? (error as { message?: string }).message
				: 'Внутренняя ошибка сервера'
		return NextResponse.json(
			{ error: message || 'Внутренняя ошибка сервера' },
			{ status: 500 },
		)
	}
}
