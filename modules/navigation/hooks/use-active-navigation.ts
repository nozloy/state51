'use client'

import { useSyncExternalStore } from 'react'
import { usePathname } from 'next/navigation'
import type { HomeNavigationId, NavigationId } from '../content'

function getVisibleSection(): HomeNavigationId {
	const activationLine = Math.min(window.innerHeight * 0.25, 160)
	for (const id of ['promotions', 'services'] as const) {
		const section = document.getElementById(id)
		if (section && section.getBoundingClientRect().top <= activationLine) return id
	}
	return 'home'
}

function subscribeToSection(onChange: () => void) {
	let frame: number | undefined
	const scheduleUpdate = () => {
		if (frame !== undefined) return
		frame = window.requestAnimationFrame(() => {
			frame = undefined
			onChange()
		})
	}

	window.addEventListener('scroll', scheduleUpdate, { passive: true })
	window.addEventListener('resize', scheduleUpdate)
	window.addEventListener('hashchange', scheduleUpdate)
	scheduleUpdate()

	return () => {
		window.removeEventListener('scroll', scheduleUpdate)
		window.removeEventListener('resize', scheduleUpdate)
		window.removeEventListener('hashchange', scheduleUpdate)
		if (frame !== undefined) window.cancelAnimationFrame(frame)
	}
}

const getServerSection = (): HomeNavigationId => 'home'

export function useActiveNavigation(): NavigationId {
	const pathname = usePathname()
	const section = useSyncExternalStore(subscribeToSection, getVisibleSection, getServerSection)
	return pathname === '/' ? section : 'more'
}
