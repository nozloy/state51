export type ConsentVersion = '2026-05-06'

export interface ConsentPayload {
	accepted: boolean
	version: string
	source: string
}

export type CookieConsentState = 'accepted' | 'necessary'

export interface CookieConsentStored {
	state: CookieConsentState
	version: ConsentVersion
	updatedAt: string
}

export interface LegalDocLink {
	href: '/privacy' | '/personal-data-consent' | '/cookies'
	label: string
	shortLabel: string
}
