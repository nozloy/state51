import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'
import styles from './paper-poster.module.css'

export function PaperPoster({ className, ...props }: ComponentProps<'section'>) {
	return <section className={cn(styles.surface, className)} {...props} />
}
