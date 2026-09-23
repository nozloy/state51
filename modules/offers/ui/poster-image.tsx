import Image from 'next/image'
import type { PosterAsset, PosterTopFrame } from '../types'

function TopFrame({ frame, width }: { frame: PosterTopFrame; width: number }) {
	const margin = 8
	const height = margin + frame.thickness
	const halfStroke = frame.thickness / 2
	const left = frame.left + halfStroke
	const right = frame.right - halfStroke
	const top = margin + halfStroke
	// Bridge only the blank ends of the existing side borders, outside the artwork.
	const join = height + 12

	return (
		<svg
			aria-hidden='true'
			focusable='false'
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			className='pointer-events-none relative block h-auto w-full overflow-visible'
			data-poster-top-frame
		>
			<rect width={width} height={height} fill={frame.paperColor} />
			<path
				d={`M ${left} ${join} V ${top} H ${right} V ${join}`}
				fill='none'
				stroke={frame.color}
				strokeWidth={frame.thickness}
			/>
		</svg>
	)
}

export function PosterImage({ poster }: { poster: PosterAsset }) {
	return (
		<>
			{poster.topFrame && <TopFrame frame={poster.topFrame} width={poster.width} />}
			<Image
				src={poster.src}
				alt={poster.alt}
				width={poster.width}
				height={poster.height}
				sizes='(min-width: 1152px) 357px, (min-width: 1024px) 31vw, (min-width: 768px) 46vw, calc(100vw - 32px)'
				className='block h-auto w-full rounded-none'
				loading='lazy'
			/>
		</>
	)
}
