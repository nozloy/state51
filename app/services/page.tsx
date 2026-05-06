import Image from 'next/image'
import Link from 'next/link'
import { Scissors, ShieldCheck } from 'lucide-react'
import {
	BOOKING_URL,
	SERVICE_CARDS,
	SERVICE_CATEGORIES,
} from '@/modules/home/content'
import { BrandTopBar } from '@/modules/home/ui/brand-top-bar'

export default function ServicesPage() {
	return (
		<div className='brand51-main pb-24'>
			<BrandTopBar />

			<section className='brand51-panel px-4 py-5'>
				<div className='flex items-center justify-between gap-3'>
					<h1 className='font-accent text-[40px] uppercase leading-none text-[#ead8b7]'>
						Услуги
					</h1>
					<Link
						href={BOOKING_URL}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex h-10 items-center gap-2 rounded-md border border-[#ba4a3f] bg-[#8f2a22] px-3 font-accent text-lg uppercase text-[#f4ead6] transition hover:bg-[#a03127] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b13a31]'
					>
						Запись
					</Link>
				</div>

				<p className='pt-2 text-sm text-[#e8dcc7]/80'>
					Подберем формат визита под задачу: стрижка, борода, бритьё и
					дополнительный уход.
				</p>
			</section>

			<div className='space-y-2'>
				{SERVICE_CARDS.map(service => (
					<article
						key={service.id}
						className='brand51-panel overflow-hidden border-[#2f2924]'
					>
						<div className='relative aspect-[16/9]'>
							<Image
								src={service.image}
								alt={service.title}
								fill
								className='object-cover object-center'
								sizes='(max-width: 430px) 100vw, 430px'
							/>
							<div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_22%,rgba(0,0,0,0.8)_100%)]' />
						</div>
						<div className='space-y-2 p-4'>
							<div className='flex items-center justify-between gap-2'>
								<h2 className='font-accent text-[26px] leading-[0.95] text-[#f4e8d1] min-[390px]:text-[30px]'>
									{service.title}
								</h2>
								<p className='shrink-0 text-base font-semibold text-[#c84b3f]'>
									от {service.priceFrom.toLocaleString('ru-RU')} ₽
								</p>
							</div>
							<p className='text-sm leading-relaxed text-[#e8dcc7]/84'>
								{service.description}
							</p>
						</div>
					</article>
				))}
			</div>

			<section className='brand51-panel px-4 py-4'>
				<div className='mb-3 inline-flex items-center gap-2 text-[#d3bc92]'>
					<ShieldCheck className='size-4' />
					<p className='font-accent text-lg uppercase'>Полный прайс</p>
				</div>
				<div className='space-y-4'>
					{SERVICE_CATEGORIES.map(category => (
						<div key={category.id} className='space-y-2'>
							<h3 className='font-accent text-3xl uppercase leading-none text-[#e8d6b2]'>
								{category.title}
							</h3>
							<ul className='space-y-2'>
								{category.items.map(item => (
									<li
										key={item.id}
										className='rounded-md border border-white/10 bg-black/15 px-3 py-3'
									>
										<div className='flex flex-wrap items-center justify-between gap-2'>
											<p className='text-[15px] font-semibold leading-tight text-[#f4ead6] min-[390px]:text-base'>
												{item.title}
											</p>
											<div className='inline-flex items-center gap-2'>
												<span className='rounded border border-[#655445] bg-black/20 px-2 py-0.5 text-xs text-[#d1c29f]'>
													{item.duration}
												</span>
												<span className='text-sm font-medium text-[#cc4f41]'>
													{item.price}
												</span>
											</div>
										</div>
										<p className='pt-1 text-sm text-[#d8ccb7]/85'>
											{item.description}
										</p>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<Link
					href={BOOKING_URL}
					target='_blank'
					rel='noopener noreferrer'
					className='mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-[#bd4e41] bg-[#902b23] font-accent text-2xl uppercase text-[#f4ead6] transition hover:bg-[#a03128] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b13a31]'
				>
					<Scissors className='size-5' />
					Выбрать услугу
				</Link>
			</section>
		</div>
	)
}
