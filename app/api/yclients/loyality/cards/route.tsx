import { NextRequest, NextResponse } from 'next/server'

const YC_PARTNER_TOKEN = process.env.YC_PARTNER_TOKEN!
const YC_COMPANY_ID = process.env.YC_COMPANY_ID!
const YC_USER_TOKEN = process.env.YC_USER_TOKEN!
const YC_GROUP_ID = process.env.YC_GROUP_ID || '0'

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url)
		const phone = searchParams.get('phone')
		const full = searchParams.get('full')
		const groupId = YC_GROUP_ID

		if (!phone) {
			return NextResponse.json(
				{ error: 'Параметр phone обязателен' },
				{ status: 400 },
			)
		}

		const url = `https://api.yclients.com/api/v1/loyalty/cards/${phone}/${
			groupId || 0
		}/${YC_COMPANY_ID}`

		const res = await fetch(url, {
			headers: {
				Accept: 'application/vnd.yclients.v2+json',
				Authorization: `Bearer ${YC_PARTNER_TOKEN}, User ${YC_USER_TOKEN}`,
			},
		})

		const data = await res.json()
		if (!res.ok) {
			return NextResponse.json(
				{ error: data?.message || 'Ошибка при получении карт лояльности' },
				{ status: res.status },
			)
		}
		if (full === 'true') {
			return NextResponse.json(data.data[0])
		} else return NextResponse.json({ id: data.data[0].id })
	} catch (error: unknown) {
		console.error(error)
		return NextResponse.json(
			{ error: 'Внутренняя ошибка сервера' },
			{ status: 500 },
		)
	}
}
