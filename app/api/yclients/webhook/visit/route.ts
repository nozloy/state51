// /app/api/yclients/webhook/visit/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	const data = await req.json()
	console.log('Webhook visit received:', data)
	
	if (!data?.visit) return NextResponse.json({ skip: true })
	if (data.visit.type !== 'visit.updated' && data.visit.type !== 'visit.closed')
		return NextResponse.json({ skip: true })
	if (data.visit.payment_status !== 'paid')
		return NextResponse.json({ skip: true })

	const clientId = data.visit.client_id
	if (!clientId) return NextResponse.json({ skip: true })

	console.log(
		`Сработал вебхук: visit_id=${data.visit.id}, client_id=${data.visit.client_id}`,
	)

	// получаем клиента
	const clientRes = await fetch(
		`https://api.yclients.com/api/v1/clients/{company_id}/${clientId}`,
		{
			headers: { Authorization: 'Bearer {TOKEN}' },
		},
	)

	const client = await clientRes.json()
	if (!clientRes.ok)
		return NextResponse.json({ error: client.message }, { status: 400 })

	// нет реферала → пропускаем
	const referrer = client.custom_fields?.ref
	if (!referrer) return NextResponse.json({ skip: true })

	// уже начисляли → пропускаем
	if (client.custom_fields?.bonus === true)
		return NextResponse.json({ skip: true })

	// проверка: это первый оплаченный визит?
	const visitsRes = await fetch(
		`https://api.yclients.com/api/v1/clients/{company_id}/${clientId}/visits`,
		{
			headers: { Authorization: 'Bearer {TOKEN}' },
		},
	)

	const visits = await visitsRes.json()
	if (!visitsRes.ok)
		return NextResponse.json({ error: visits.message }, { status: 400 })

	const paidVisits = visits.data.filter((v: any) => v.payment_status === 'paid')

	if (paidVisits.length !== 1) return NextResponse.json({ skip: true })

	// найдём карту реферала
	const cardRes = await fetch(
		`https://api.yclients.com/api/v1/loyalty/cards?phone=${referrer}`,
		{
			headers: { Authorization: 'Bearer {TOKEN}' },
		},
	)

	const cardData = await cardRes.json()
	if (!cardRes.ok)
		return NextResponse.json({ error: cardData.message }, { status: 400 })

	// начисляем бонус рефералу
	await fetch(`https://api.yclients.com/api/v1/loyalty/add`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer {TOKEN}',
		},
		body: JSON.stringify({
			card_id: cardData.id,
			amount: 600,
			title: 'Бонус за приведённого клиента',
		}),
	})

	// обновляем флаг
	await fetch(
		`https://api.yclients.com/api/v1/clients/{company_id}/${clientId}`,
		{
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer {TOKEN}',
			},
			body: JSON.stringify({
				custom_fields: {
					ref: referrer,
					bonus: true,
				},
			}),
		},
	)

	return NextResponse.json({ ok: true })
}
