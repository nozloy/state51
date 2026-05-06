import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { INVITE_COPY } from '@/modules/home/content'

export function HomeInvite() {
	return (
		<section className='brand51-panel relative overflow-hidden'>
			<Image
				src='/brand51/generated/invite-banner.webp'
				alt='Пригласи друга'
				fill
				className='object-cover object-center'
				sizes='(max-width: 430px) 100vw, 430px'
			/>
			<div className='absolute inset-0 bg-black/58' />

			<div className='relative z-10 flex items-center justify-between gap-3 px-4 py-5'>
				<div className='space-y-1'>
					<p className='font-accent text-[34px] uppercase leading-[0.9] text-[#f1e4c9]'>
						{INVITE_COPY.title}
					</p>
					<p className='font-accent text-[29px] uppercase leading-[0.9] text-[#bb3a33]'>
						600 ₽
					</p>
					<p className='max-w-[210px] text-sm leading-tight text-[#f5ebd7]/90'>
						{INVITE_COPY.subtitle}
					</p>
				</div>

				<Link
					href='/friends'
					className='inline-flex items-center gap-2 rounded-md border border-[#64584a] bg-black/25 px-3 py-2 text-sm text-[#f4ead6] transition hover:border-[#c2aa83] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b13a31]'
				>
					Узнать
					<ArrowRight className='size-4 text-[#c84a3f]' />
				</Link>
			</div>
		</section>
	)
}
