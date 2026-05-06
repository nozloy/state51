import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SERVICE_CARDS } from '@/modules/home/content'

export function HomeServicesPreview() {
	const previewServices = SERVICE_CARDS.slice(0, 3)

	return (
		<section className='space-y-3'>
			<div className='flex items-center justify-between'>
				<h2 className='font-accent text-[32px] uppercase leading-none text-[#e7d7b8]'>
					Услуги
				</h2>
				<Link
					href='/services'
					className='inline-flex items-center gap-1 font-accent text-lg uppercase tracking-wide text-[#bb3a33] transition hover:text-[#d45549] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b13a31]'
				>
					Смотреть все
					<ArrowUpRight className='size-4' />
				</Link>
			</div>

			<div className='grid grid-cols-3 gap-2'>
				{previewServices.map(service => (
					<Link
						key={service.id}
						href='/booking'
						className='group brand51-panel relative block overflow-hidden rounded-md'
					>
						<div className='relative aspect-[3/4]'>
							<Image
								src={service.image}
								alt={service.title}
								fill
								className='object-cover transition duration-500 group-hover:scale-[1.03]'
								sizes='33vw'
							/>
							<div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_28%,rgba(0,0,0,0.85)_100%)]' />
						</div>
						<div className='absolute inset-x-0 bottom-0 p-2'>
							<p className='font-accent text-[16px] leading-[0.95] text-[#f2e6cf] min-[390px]:text-[18px]'>
								{service.title}
							</p>
							<p className='pt-1 text-[13px] font-medium text-[#c94a3e]'>
								от {service.priceFrom.toLocaleString('ru-RU')} ₽
							</p>
						</div>
					</Link>
				))}
			</div>
		</section>
	)
}
