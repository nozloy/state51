import type { ConsentPayload } from '@/modules/legal/types'

type ConsentValidationResult =
	| { ok: true; consent: ConsentPayload }
	| { ok: false; error: string }

function isObject(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object' && value !== null
}

export function validateConsentPayload(value: unknown): ConsentValidationResult {
	if (!isObject(value)) {
		return {
			ok: false,
			error: 'Необходимо подтвердить согласие на обработку персональных данных',
		}
	}

	const accepted = value.accepted
	const version = value.version
	const source = value.source

	if (accepted !== true) {
		return {
			ok: false,
			error: 'Необходимо подтвердить согласие на обработку персональных данных',
		}
	}

	if (typeof version !== 'string' || version.trim().length === 0) {
		return { ok: false, error: 'Не указана версия согласия' }
	}

	if (typeof source !== 'string' || source.trim().length === 0) {
		return { ok: false, error: 'Не указан источник согласия' }
	}

	return {
		ok: true,
		consent: {
			accepted: true,
			version: version.trim(),
			source: source.trim(),
		},
	}
}

export function logConsentAudit(formId: string, consent: ConsentPayload): void {
	console.info(
		JSON.stringify({
			event: 'consent_audit',
			timestamp: new Date().toISOString(),
			formId,
			version: consent.version,
			source: consent.source,
			accepted: consent.accepted,
		}),
	)
}
