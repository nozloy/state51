import { NextRequest, NextResponse } from 'next/server'

const YC_PARTNER_TOKEN = process.env.YC_PARTNER_TOKEN!
const YC_COMPANY_ID = process.env.YC_COMPANY_ID!

export async function POST(req: NextRequest) {
	try {
		const body = await req.json()

		if (!body.name || !body.phone) {
			return NextResponse.json(
				{ error: 'Имя и телефон обязательны' },
				{ status: 400 },
			)
		}

		const res = await fetch(
			`https://api.yclients.com/api/v1/clients/${YC_COMPANY_ID}`,
			{
				method: 'POST',
				headers: {
					Accept: 'application/vnd.yclients.v2+json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${YC_PARTNER_TOKEN}, User ${process.env.YC_USER_TOKEN}`,
				},
				body: JSON.stringify(body),
			},
		)

		const data = await res.json()

		if (res.status === 422) {
			return NextResponse.json(
				{ error: data?.errors?.[0]?.message || 'Пользователь существует' },
				{ status: 422 },
			)
		}
		if (!res.ok) {
			return NextResponse.json(
				{ error: data?.message || 'Ошибка при добавлении клиента' },
				{ status: res.status },
			)
		}
		return NextResponse.json(data, { status: 201 })
	} catch (error) {
		console.error(error)
		return NextResponse.json(
			{ error: 'Внутренняя ошибка сервера' },
			{ status: 500 },
		)
	}
}
