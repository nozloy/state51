'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import {
	Dialog, DialogContent, DialogDescription, DialogFooter,
	DialogHeader, DialogTitle, DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { BookingLink } from '@/modules/booking/ui/booking-link'
import { PriceList } from './price-list'
import type { OfferCardContent } from '../types'

export function PosterDialog({ offer }: { offer: OfferCardContent }) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<button type='button' className='poster-trigger' aria-label={`Увеличить афишу: ${offer.title}`}>
					<Image
						src={offer.poster.src} alt={offer.poster.alt}
						width={offer.poster.width} height={offer.poster.height}
						sizes='(min-width: 1152px) 357px, (min-width: 1024px) 31vw, (min-width: 768px) 46vw, calc(100vw - 32px)'
						className='h-auto w-full' loading='lazy'
					/>
				</button>
			</DialogTrigger>
			<DialogContent className='max-h-[90dvh] overflow-y-auto p-4 pt-12 sm:max-w-3xl sm:p-6 sm:pt-12'>
				<DialogHeader className='sr-only'>
					<DialogTitle>{offer.title} · {offer.label}</DialogTitle>
					<DialogDescription>{offer.description}</DialogDescription>
				</DialogHeader>
				<Image
					src={offer.poster.src} alt={offer.poster.alt}
					width={offer.poster.width} height={offer.poster.height}
					sizes='(min-width: 768px) 720px, calc(100vw - 64px)'
					className='h-auto w-full' loading='eager'
				/>
				{offer.prices && (
					<section aria-label='Прайс на первый визит' className='sr-only'>
						<h3>Цены на первый визит</h3>
						<PriceList rows={offer.prices} label='Цены со скидкой 20 процентов' />
					</section>
				)}
				<DialogFooter>
					<Button asChild variant='outline' size='lg'>
						<a href={offer.poster.src} target='_blank' rel='noopener noreferrer'>
							Открыть отдельно <ArrowUpRight data-icon='inline-end' />
						</a>
					</Button>
					<BookingLink accessibleLabel={`Записаться: ${offer.title}`} />
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
