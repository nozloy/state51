import type { PosterTopFrame } from './types'

// Coordinates and colours are sampled from the existing printed side borders.
const squareFrame = { left: 13, right: 1242, thickness: 17 }

export const promotionTopFrames = {
	sons: {
		...squareFrame, thickness: 16, color: '#e6030e', paperColor: '#f9dcac',
	},
	friends: {
		...squareFrame, color: '#e52421', paperColor: '#f9e4c1',
	},
	'father-son': {
		...squareFrame, color: '#e62926', paperColor: '#fae8ca',
	},
	'grandfather-grandson': {
		...squareFrame, color: '#e92c25', paperColor: '#f8e6cd',
	},
	'other-barbershop': {
		left: 15, right: 926, thickness: 14,
		color: '#fa2223', paperColor: '#fbf0d8',
	},
} satisfies Record<string, PosterTopFrame>
