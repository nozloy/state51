import Image from 'next/image'
import { OWNER_COPY } from '@/modules/home/content'

export function HomeOwner() {
	return (
		<section className='brand51-panel relative overflow-hidden border-[#2a241f] bg-[#0e0d0c]'>
			<div className='pointer-events-none absolute inset-0'>
				<Image
					src='/brand51/generated/texture-wide.webp'
					alt=''
					fill
					aria-hidden
					className='object-cover opacity-25'
					sizes='(max-width: 430px) 100vw, 430px'
				/>
			</div>

			<div className='relative z-10 grid grid-cols-[1.05fr_1fr] gap-3 p-3'>
				<div className='relative min-h-[248px] overflow-hidden rounded-md border border-white/10'>
					<Image
						src='/brand51/generated/owner-artem.webp'
						alt='Артем, владелец барбершопа Штат 51'
						fill
						className='object-cover object-center'
						sizes='45vw'
					/>
				</div>

				<div className='flex flex-col justify-between gap-3 py-1'>
					<div className='space-y-2'>
						<p className='text-xs uppercase tracking-[0.14em] text-[#cfb689]'>
							{OWNER_COPY.eyebrow}
						</p>
						<h2 className='font-accent text-5xl uppercase leading-none text-[#f1e4c9]'>
							{OWNER_COPY.name}
						</h2>
						<p className='text-sm leading-relaxed text-[#e8dcc7]/88'>
							{OWNER_COPY.description}
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
