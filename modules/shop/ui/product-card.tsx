'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from '@/components/ui/card'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import type { ShopProduct } from '../types'
import { ProductDetails } from './product-details'
import styles from './product-card.module.css'

export function ProductCard({ item, className }: { item: ShopProduct; className?: string }) {
	return (
		<Sheet>
			<Card variant='product' className={className}>
				<CardContent>
					<Image
						src={`/shop_items/${item.image}`}
						alt={item.name}
						width={384}
						height={512}
						sizes='(min-width: 1152px) 328px, (min-width: 768px) 30vw, 44vw'
						className={styles.photo}
					/>
				</CardContent>
				<CardHeader>
					<p className={styles.edition}>
						<span>Штат 51</span><span>{item.volume} мл</span>
					</p>
					<CardTitle><h3>{item.shortName}</h3></CardTitle>
					<CardDescription>{item.summary}</CardDescription>
				</CardHeader>
				<CardFooter>
					<p className={styles.price}>{item.priceLabel}</p>
					<SheetTrigger asChild>
						<Button
							variant='ghost'
							size='icon'
							className={styles.trigger}
							aria-label={`Подробнее: ${item.name}, ${item.volume} мл`}
						>
							<ArrowUpRight data-icon='inline-end' aria-hidden='true' />
						</Button>
					</SheetTrigger>
				</CardFooter>
			</Card>
			<ProductDetails item={item} />
		</Sheet>
	)
}
