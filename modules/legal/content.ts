import type { ConsentVersion, LegalDocLink } from '@/modules/legal/types'

export const LEGAL_DOC_VERSION: ConsentVersion = '2026-05-06'
export const COOKIE_CONSENT_VERSION: ConsentVersion = '2026-05-06'

export const COOKIE_CONSENT_STORAGE_KEY = `state51_cookie_consent_v${COOKIE_CONSENT_VERSION}`
export const COOKIE_SETTINGS_EVENT = 'state51:open-cookie-settings'

export const LEGAL_DOC_LINKS: LegalDocLink[] = [
	{
		href: '/privacy',
		label: 'Политика обработки персональных данных',
		shortLabel: 'Политика ПДн',
	},
	{
		href: '/personal-data-consent',
		label: 'Согласие на обработку персональных данных',
		shortLabel: 'Согласие ПДн',
	},
	{
		href: '/cookies',
		label: 'Политика cookies и веб-аналитики',
		shortLabel: 'Cookies',
	},
]

export const LEGAL_OPERATOR = {
	name: 'ИП Мухамедшина Флора Джавдатовна',
	inn: '165908482856',
	address: 'Республика Татарстан, Новое Шигалеево, Царево Village',
	email: 'info@barberstate51.ru',
	phone: '+7 (937) 520-00-51',
}
