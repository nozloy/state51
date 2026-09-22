'use client'

import Script from 'next/script'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
	COOKIE_CONSENT_STORAGE_KEY,
	COOKIE_CONSENT_VERSION,
	COOKIE_SETTINGS_EVENT,
} from '@/modules/legal/content'
import type { CookieConsentState, CookieConsentStored } from '@/modules/legal/types'

function parseStoredConsent(raw: string | null): CookieConsentStored | null {
	if (!raw) return null

	try {
		const parsed = JSON.parse(raw) as Partial<CookieConsentStored>
		if (
			(parsed.state === 'accepted' || parsed.state === 'necessary') &&
			parsed.version === COOKIE_CONSENT_VERSION &&
			typeof parsed.updatedAt === 'string'
		) {
			return parsed as CookieConsentStored
		}
	} catch (error) {
		console.error('Cookie consent parse error:', error)
	}

	return null
}

export function CookieConsentManager() {
	const [consentState, setConsentState] = useState<CookieConsentState | null>(null)
	const [isBannerVisible, setBannerVisible] = useState(false)

	const metricaId = process.env.NEXT_PUBLIC_YANDEX_METRICA_ID?.trim()
	const shouldLoadMetrica = consentState === 'accepted' && Boolean(metricaId)

	useEffect(() => {
		const stored = parseStoredConsent(
			window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY),
		)

		if (stored) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setConsentState(stored.state)
		} else {
			setBannerVisible(true)
		}

		const openSettings = () => setBannerVisible(true)
		window.addEventListener(COOKIE_SETTINGS_EVENT, openSettings)

		return () => {
			window.removeEventListener(COOKIE_SETTINGS_EVENT, openSettings)
		}
	}, [])

	const saveConsent = (state: CookieConsentState) => {
		const payload: CookieConsentStored = {
			state,
			version: COOKIE_CONSENT_VERSION,
			updatedAt: new Date().toISOString(),
		}

		window.localStorage.setItem(
			COOKIE_CONSENT_STORAGE_KEY,
			JSON.stringify(payload),
		)
		setConsentState(state)
		setBannerVisible(false)
	}

	return (
		<>
			{shouldLoadMetrica && metricaId && (
				<Script id='state51-yandex-metrica' strategy='afterInteractive'>
					{`
						(function(m,e,t,r,i,k,a){
							m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
							m[i].l=1*new Date();
							for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) return; }
							k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);
						})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
						ym(${metricaId}, "init", {
							clickmap: true,
							trackLinks: true,
							accurateTrackBounce: true,
							webvisor: true
						});
					`}
				</Script>
			)}

			{isBannerVisible && (
				<section
					role='dialog'
					aria-live='polite'
					aria-label='Настройки cookies'
					className={cn(
						'fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] left-1/2 z-40 w-[calc(100%-1rem)] max-w-[414px] -translate-x-1/2 rounded-xl border border-border bg-card p-4 text-foreground shadow-lg',
					)}
				>
					<p className='text-sm leading-relaxed text-muted-foreground'>
						Мы используем cookies и Яндекс.Метрику для анализа посещаемости и
						улучшения сервиса. Подробнее в{' '}
						<Link
							href='/cookies'
							target='_blank'
							rel='noopener noreferrer'
							className='underline underline-offset-2'
						>
							политике cookies
						</Link>
						.
					</p>

					<div className='mt-3 grid grid-cols-1 gap-2 min-[390px]:grid-cols-2'>
						<Button
							type='button'
							variant='outline'
							onClick={() => saveConsent('necessary')}
							className='h-10'
						>
							Только необходимые
						</Button>
						<Button
							type='button'
							onClick={() => saveConsent('accepted')}
							className='h-10'
						>
							Принять
						</Button>
					</div>
				</section>
			)}
		</>
	)
}
