import Image from 'next/image'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
	SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle,
} from '@/components/ui/sheet'
import { shopAvailabilityNotice } from '../content'
import type { ShopProduct } from '../types'
import styles from './product-details.module.css'

export function ProductDetails({ item }: { item: ShopProduct }) {
	return (
		<SheetContent variant='product'>
			<SheetHeader>
				<p className={styles.eyebrow}>Витрина «Штат 51»</p>
				<SheetTitle>{item.shortName}</SheetTitle>
				<SheetDescription>{item.name}</SheetDescription>
			</SheetHeader>
			<ScrollArea type='auto' className={styles.scrollArea}>
				<div className={styles.body}>
					<div className={styles.overview}>
						<Image
							src={`/shop_items/${item.image}`}
							alt={item.name}
							width={384}
							height={512}
							sizes='(min-width: 544px) 218px, 40vw'
							className={styles.photo}
						/>
						<div className={styles.facts}>
							<dl>
								<dt>Объём</dt>
								<dd>{item.volume} мл</dd>
								<dt>Цена</dt>
								<dd className={styles.price}>{item.priceLabel}</dd>
							</dl>
							<p>{item.summary}</p>
						</div>
					</div>
					<section className={styles.copy}>
						<h3>О средстве</h3>
						<p>{item.description}</p>
					</section>
					{item.usage && (
						<section className={styles.copy}>
							<h3>Как использовать</h3>
							<p>{item.usage}</p>
						</section>
					)}
					{item.contents && (
						<details className={styles.ingredients}>
							<summary>Состав <ChevronDown aria-hidden='true' /></summary>
							<p>{item.contents}</p>
						</details>
					)}
				</div>
			</ScrollArea>
			<SheetFooter>
				<p className={styles.availability}>{shopAvailabilityNotice}</p>
				<SheetClose asChild>
					<Button variant='poster' size='poster'>
						<ArrowLeft data-icon='inline-start' aria-hidden='true' />
						Вернуться к витрине
					</Button>
				</SheetClose>
			</SheetFooter>
		</SheetContent>
	)
}
