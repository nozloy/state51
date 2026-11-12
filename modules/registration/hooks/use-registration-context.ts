'use client'

import { useSyncExternalStore } from 'react'

function subscribe(onChange: () => void) {
	window.addEventListener('storage', onChange)
	window.addEventListener('popstate', onChange)
	return () => {
		window.removeEventListener('storage', onChange)
		window.removeEventListener('popstate', onChange)
	}
}

function getSnapshot() {
	let storedUser: string | null = null
	try {
		storedUser = window.localStorage.getItem('yclients_user')
	} catch {
		// Browsers can disable storage; registration still works without it.
	}
	return JSON.stringify({ storedUser, search: window.location.search })
}

function getServerSnapshot() {
	return null
}

function parseStoredUser(raw: string | null): User | null {
	if (!raw) return null
	try {
		const user = JSON.parse(raw) as User | null
		return user && typeof user.id === 'string' && typeof user.phone === 'string'
			? user
			: null
	} catch {
		return null
	}
}

export function useRegistrationContext() {
	const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
	if (snapshot === null) return { user: null, referral: '', loading: true }

	const { storedUser, search } = JSON.parse(snapshot) as {
		storedUser: string | null
		search: string
	}
	return {
		user: parseStoredUser(storedUser),
		referral: new URLSearchParams(search).get('referral') ?? '',
		loading: false,
	}
}
