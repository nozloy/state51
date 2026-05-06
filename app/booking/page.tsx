import Link from 'next/link'
import { CalendarDays, CircleCheckBig, Clock3, MapPin } from 'lucide-react'
import { BOOKING_URL, BRAND_CONTACTS } from '@/modules/home/content'
import { BrandTopBar } from '@/modules/home/ui/brand-top-bar'

const bookingRules = [
	'Онлайн-запись доступна 24/7 через YClients.',
	'Если не нашли удобный слот, напишите нам в Telegram или WhatsApp.',
	'Если опаздываете, предупредите заранее — подберем корректный интервал.',
]

export default function BookingPage() {
	return (
		<div className='brand51-main pb-24'>
			<BrandTopBar />

			<section className='brand51-panel px-4 py-5'>
				<h1 className='font-accent text-[46px] uppercase leading-none text-[#ead8b7]'>
					Запись
				</h1>
				<p className='pt-2 text-sm leading-relaxed text-[#e8dcc7]/84'>
					Самый быстрый путь — открыть онлайн-календарь, выбрать услугу и
					удобное время.
				</p>

				<Link
					href={BOOKING_URL}
					target='_blank'
					rel='noopener noreferrer'
					className='mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-[#c35042] bg-[#8f2c23] font-accent text-2xl uppercase text-[#f4ead6] transition hover:bg-[#a83429] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b13a31]'
				>
					<CalendarDays className='size-5' />
					Открыть запись
				</Link>
			</section>

			<section className='brand51-panel space-y-3 px-4 py-4'>
				<div className='flex items-start gap-2'>
					<MapPin className='mt-0.5 size-4 shrink-0 text-[#c5ae82]' />
					<div>
						<p className='text-sm font-semibold text-[#f2e6cf]'>
							{BRAND_CONTACTS.addressPrimary}
						</p>
						<p className='text-sm text-[#d7cab2]/85'>
							{BRAND_CONTACTS.addressSecondary}
						</p>
					</div>
				</div>

				<div className='flex items-start gap-2'>
					<Clock3 className='mt-0.5 size-4 shrink-0 text-[#c5ae82]' />
					<div>
						<p className='text-sm font-semibold text-[#f2e6cf]'>
							{BRAND_CONTACTS.hoursPrimary}
						</p>
						<p className='text-sm text-[#d7cab2]/85'>
							{BRAND_CONTACTS.hoursSecondary}
						</p>
					</div>
				</div>
			</section>

			<section className='brand51-panel px-4 py-4'>
				<h2 className='font-accent text-[30px] uppercase leading-none text-[#e8d6b2]'>
					Перед визитом
				</h2>
				<ul className='pt-3 space-y-3'>
					{bookingRules.map(rule => (
						<li key={rule} className='flex gap-2 text-sm text-[#e8dcc7]/84'>
							<CircleCheckBig className='mt-0.5 size-4 shrink-0 text-[#c84a3f]' />
							<span>{rule}</span>
						</li>
					))}
				</ul>
			</section>
		</div>
	)
}
