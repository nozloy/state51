import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays } from 'lucide-react'
import { BrandTopBar } from '@/modules/home/ui/brand-top-bar'
import { BOOKING_URL } from '@/modules/home/content'
import { HomeInfoStrip } from '@/modules/home/ui/home-info-strip'

export function HomeHero() {
	return (
		<section className='space-y-2'>
			<div className='brand51-panel relative overflow-hidden'>
				<div className='absolute inset-0'>
					<Image
						src='/brand51/generated/hero-bg.webp'
						alt='Барбершоп Штат 51'
						fill
						priority
						className='object-cover object-center'
						sizes='(max-width: 430px) 100vw, 430px'
					/>
					<div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.76)_0%,rgba(0,0,0,0.35)_30%,rgba(0,0,0,0.88)_88%)]' />
				</div>

				<div className='relative z-10 flex min-h-[74svh] flex-col justify-between'>
					<BrandTopBar overlay />

						<div className='px-5 pb-6'>
							<div className='max-w-[320px] space-y-4'>
								<h1 className='font-accent text-[40px] uppercase leading-[0.92] text-[#e9d5af] min-[390px]:text-[48px]'>
								<span className='block'>Мужской стиль.</span>
								<span className='block text-[#bb3a33]'>Без компромиссов.</span>
							</h1>

							<p className='max-w-[260px] text-lg leading-tight text-[#f3e8d2]'>
								Барбершоп в Царево с характером.
							</p>

							<Link
								href={BOOKING_URL}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex h-12 items-center gap-2 rounded-md border border-[#d15b4b]/80 bg-[#8e2a23]/85 px-5 font-accent text-2xl uppercase tracking-wide text-[#f7e9d2] transition hover:bg-[#9f3027] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d15b4b]'
							>
								<span>Записаться</span>
								<CalendarDays className='size-5' />
							</Link>
						</div>
					</div>
				</div>
			</div>

			<HomeInfoStrip />
		</section>
	)
}
