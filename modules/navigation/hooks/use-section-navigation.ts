'use client'

import { usePathname } from 'next/navigation'
import type { HomeNavigationId } from '../content'

export function useSectionNavigation(sectionId: HomeNavigationId, href: string) {
	const pathname = usePathname()

	return function navigateToSection(event: { preventDefault: () => void }) {
		if (pathname !== '/') return

		const section = sectionId === 'home' ? null : document.getElementById(sectionId)
		if (sectionId !== 'home' && !section) return

		event.preventDefault()

		const currentUrl = window.location.pathname + window.location.search + window.location.hash
		if (currentUrl !== href) window.history.pushState(null, '', href)

		const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
			? 'instant'
			: 'smooth'

		if (section) {
			section.scrollIntoView({ behavior, block: 'start' })
		} else {
			window.scrollTo({ top: 0, behavior })
		}
	}
}
