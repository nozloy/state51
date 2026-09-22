import Image from 'next/image'
import { cn } from '@/lib/utils'
import { BookingLink } from '@/modules/booking/ui/booking-link'

export function Barbers({ className }: { className?: string }) {
	return (
		<section aria-label='Ваш барбер' className={cn('flex flex-wrap items-center gap-4 rounded-xl border border-border bg-card/80 p-5 sm:gap-6', className)}>
			<Image src='/artem_ava.jpg' alt='Артем — барбер и владелец «Штата 51»' width={96} height={96} sizes='96px' className='size-24 rounded-lg object-cover object-top' />
			<div className='flex min-w-0 flex-1 flex-col gap-1'>
				<h2 className='font-oswald text-3xl'>Артем</h2>
				<p className='text-sm text-muted-foreground'>Барбер · Владелец</p>
			</div>
			<BookingLink className='w-full sm:w-auto' accessibleLabel='Записаться к Артему' />
		</section>
	)
}
