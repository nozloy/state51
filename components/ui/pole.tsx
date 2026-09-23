import { cn } from '@/lib/utils'
import styles from './pole.module.css'

interface Props {
	className?: string
}

export function Pole({ className }: Props) {
	return (
		<span className={cn(styles.pole, className)} aria-hidden='true' data-barber-pole>
			<span className={styles.finial} />
			<span className={cn(styles.cap, styles.topCap)} />
			<span className={styles.glass}>
				<span className={styles.stripes} data-pole-stripes />
			</span>
			<span className={cn(styles.collar, styles.topCollar)} />
			<span className={cn(styles.collar, styles.bottomCollar)} />
			<span className={cn(styles.cap, styles.bottomCap)} />
			<span className={styles.foot} />
		</span>
	)
}
