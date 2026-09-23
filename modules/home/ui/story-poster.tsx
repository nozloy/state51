'use client'

import type { CSSProperties, ReactNode } from 'react'
import { useStoryPoster } from '../hooks/use-story-poster'
import styles from './story-poster.module.css'

interface StoryPosterProps {
	headline: string
	intro: string
	logo: ReactNode
	children: ReactNode
}

export function StoryPoster({ headline, intro, logo, children }: StoryPosterProps) {
	const { contentId, contentRef, contentHeight, isDesktop, isOpen, toggle } =
		useStoryPoster()
	const Control = isDesktop ? 'div' : 'button'
	const controlProps = isDesktop
		? {}
		: {
				type: 'button' as const,
				'aria-expanded': isOpen,
				'aria-controls': contentId,
				onClick: toggle,
			}

	return (
		<section
			aria-label='История Штата 51'
			className={styles.poster}
			data-open={isOpen}
			style={{ '--story-height': `${contentHeight}px` } as CSSProperties}
		>
			<div className={styles.sheet}>
				<div className={styles.mobileLogo}>{logo}</div>
				<Control {...controlProps} className={styles.trigger}>
					<span className={styles.headline}>{headline}</span>
					<span className={styles.intro}>{intro}</span>
				</Control>
				<div
					id={contentId}
					className={styles.contentViewport}
					aria-hidden={!isOpen}
					inert={!isOpen}
				>
					<div ref={contentRef} className={styles.content}>
						{children}
					</div>
				</div>
			</div>
			<Control
				{...controlProps}
				className={styles.edge}
				aria-label={isDesktop ? undefined : 'История барбершопа «Штат 51»'}
				aria-hidden={isDesktop || undefined}
			>
				<span className={styles.roll} aria-hidden='true' />
			</Control>
		</section>
	)
}
