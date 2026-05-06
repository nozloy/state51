import Link from 'next/link'
import { PhoneCall } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SecondaryMenu } from '@/components/shared/secondary-menu'
import { BRAND_CONTACTS } from '@/modules/home/content'

interface BrandTopBarProps {
	className?: string
	overlay?: boolean
}

export function BrandTopBar({ className, overlay = false }: BrandTopBarProps) {
	return (
		<header
			className={cn(
				'flex items-center justify-between gap-3 px-4 py-3',
				overlay
					? 'border-b border-white/10 bg-black/70 backdrop-blur-sm'
					: 'rounded-md border border-white/10 bg-[#11100f]/95',
				className,
			)}
		>
			<Link
				href='/'
				aria-label='Перейти на главную'
				className='inline-flex flex-col leading-none'
			>
				<p className='font-accent text-[34px] uppercase tracking-tight text-[#f0e0c4]'>
					Штат <span className='text-[#c9483d]'>51</span>
				</p>
				<p className='pt-0.5 font-accent text-[14px] uppercase tracking-[0.16em] text-[#c9483d]'>
					Barbershop
				</p>
			</Link>

			<div className='flex items-center gap-1'>
				<Link
					href={BRAND_CONTACTS.phoneLink}
					aria-label={`Позвонить: ${BRAND_CONTACTS.phoneDisplay}`}
					className='inline-flex size-9 items-center justify-center rounded-md text-[#f4ead6] transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b13a31]'
				>
					<PhoneCall className='size-5' />
				</Link>
				<SecondaryMenu />
			</div>
		</header>
	)
}
