'use client'

import { useEffect, useId, useRef, useState, useSyncExternalStore } from 'react'

// Keep this in sync with the md layout and the poster's desktop CSS.
const desktopQuery = '(min-width: 48rem)'

function subscribeToDesktop(onChange: () => void) {
	const query = window.matchMedia(desktopQuery)
	query.addEventListener('change', onChange)
	return () => query.removeEventListener('change', onChange)
}

const getDesktopSnapshot = () => window.matchMedia(desktopQuery).matches
const getServerSnapshot = () => false

export function useStoryPoster() {
	const contentId = useId()
	const contentRef = useRef<HTMLDivElement>(null)
	const isDesktop = useSyncExternalStore(
		subscribeToDesktop,
		getDesktopSnapshot,
		getServerSnapshot,
	)
	const [isMobileOpen, setIsMobileOpen] = useState(false)
	const [contentHeight, setContentHeight] = useState(0)
	const isOpen = isDesktop || isMobileOpen

	useEffect(() => {
		const content = contentRef.current
		if (!content) return

		const observer = new ResizeObserver(() => {
			setContentHeight(Math.ceil(content.getBoundingClientRect().height))
		})
		observer.observe(content)
		return () => observer.disconnect()
	}, [])

	function toggle() {
		if (!isDesktop) setIsMobileOpen(open => !open)
	}

	return { contentId, contentRef, contentHeight, isDesktop, isOpen, toggle }
}
