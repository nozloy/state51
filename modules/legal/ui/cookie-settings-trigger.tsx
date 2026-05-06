'use client'

import { COOKIE_SETTINGS_EVENT } from '@/modules/legal/content'

interface CookieSettingsTriggerProps {
	className?: string
}

export function CookieSettingsTrigger({ className }: CookieSettingsTriggerProps) {
	return (
		<button
			type='button'
			onClick={() => window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))}
			className={className}
		>
			Настроить cookies
		</button>
	)
}
