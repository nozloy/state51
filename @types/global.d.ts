interface User {
	id: string
	user_token: string
	name: string
	phone: string
	login: string
	email: string
	avatar: string
	is_approved: boolean
	is_email_confirmed: boolean
}
interface LoyaltyCard {
	balance: number
	id: number
	max_discount_amount: number
	max_discount_percent: number
	number: string
	paid_amount: number
	points: number
	programs: unknown[] // можно уточнить тип, если знаешь структуру программы
	salon_group: {
		id: number
		title: string
	}
	salon_group_id: number
	sold_amount: number
	type: {
		id: number
		title: string
		salon_group_id: number
		service_item_type: 'any_allowed' | string
		good_item_type: 'any_allowed' | string
	}
	type_id: number
	visits_count: number
}
