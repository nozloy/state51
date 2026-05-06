import Image from 'next/image'
import Link from 'next/link'
import { WalletCards } from 'lucide-react'
import { FRIEND_STEPS, INVITE_COPY } from '@/modules/home/content'
import { BrandTopBar } from '@/modules/home/ui/brand-top-bar'

export default function FriendsPage() {
	return (
		<div className='brand51-main pb-24'>
			<BrandTopBar />

			<section className='brand51-panel relative overflow-hidden border-[#2f2924]'>
				<Image
					src='/brand51/generated/invite-banner.webp'
					alt='Программа приглашений'
					fill
					className='object-cover object-center'
					sizes='(max-width: 430px) 100vw, 430px'
				/>
				<div className='absolute inset-0 bg-black/70' />

				<div className='relative z-10 px-4 py-5 flex flex-col gap-2'>
					<h1 className='font-accent text-[45px] uppercase leading-[0.86] text-[#f1e4c9]'>
						{INVITE_COPY.title}
					</h1>
					<p className='font-accent text-[34px] uppercase leading-[0.9] text-[#c24237]'>
						получите по 600 ₽
					</p>
					<p className='max-w-[280px] pt-1 text-sm text-[#f3e7d0]/88'>
						{INVITE_COPY.description}
					</p>
				</div>
			</section>

			<section className='brand51-panel border-[#2f2924] px-4 py-4'>
				<h2 className='font-accent text-[30px] uppercase leading-none text-[#e8d6b2]'>
					Как это работает
				</h2>
				<ol className='pt-3 space-y-3'>
					{FRIEND_STEPS.map((step, index) => (
						<li key={step} className='flex gap-3 text-sm text-[#e8dcc7]/86'>
							<span className='mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-[#7f3b31] bg-[#2a1715] font-semibold text-[#d9c8a8]'>
								{index + 1}
							</span>
							<span>{step}</span>
						</li>
					))}
				</ol>
			</section>

			<section className='brand51-panel border-[#2f2924] px-4 py-4'>
				<div className='rounded-md border border-white/10 bg-black/22 p-3 text-sm text-[#e8dcc7]/86'>
					<p className='inline-flex items-center gap-2 font-semibold text-[#f3e8d2]'>
						<WalletCards className='size-4 text-[#cc4f40]' />
						Условия начисления
					</p>
					<p className='pt-2'>
						Бонус начисляется после первого визита приглашенного друга. Скидка
						не суммируется с другими акциями.
					</p>
				</div>

				<div className='mt-3 rounded-md border border-[#584738] bg-black/22 p-3 text-sm text-[#dccfb8]/84'>
					Чтобы поделиться личной ссылкой, откройте профиль: там доступна кнопка
					отправки приглашения в один тап.
				</div>

				<div className='mt-3 grid gap-2 sm:grid-cols-2'>
					<Link
						href='/profile'
						className='inline-flex h-11 items-center justify-center gap-2 rounded-md border border-[#c35042] bg-[#8f2c23] font-accent text-xl uppercase text-[#f4ead6] transition hover:bg-[#a83429] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b13a31]'
					>
						Открыть профиль
					</Link>
					<Link
						href='/register'
						className='inline-flex h-11 items-center justify-center rounded-md border border-[#665646] bg-black/25 font-accent text-xl uppercase text-[#f1e4c9] transition hover:border-[#c3aa80] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b13a31]'
					>
						Регистрация
					</Link>
				</div>
			</section>
		</div>
	)
}
