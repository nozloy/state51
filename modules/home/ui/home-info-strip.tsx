import type { ComponentType } from 'react'
import { Clock3, MapPin, Scissors } from 'lucide-react'
import { HERO_STAT_ITEMS } from '@/modules/home/content'
import type { HeroStatIcon } from '@/modules/home/types'

const iconMap: Record<HeroStatIcon, ComponentType<{ className?: string }>> = {
	'map-pin': MapPin,
	'clock-3': Clock3,
	scissors: Scissors,
}

export function HomeInfoStrip() {
	return (
		<section className='brand51-panel relative overflow-hidden px-3 py-4'>
			<div className='grid grid-cols-3 divide-x divide-white/10 text-[#f4ead6]'>
				{HERO_STAT_ITEMS.map(item => {
					const Icon = iconMap[item.icon]
					return (
						<div key={item.id} className='flex items-start gap-2 px-2'>
							<Icon className='mt-0.5 size-4 shrink-0 text-[#cfb689]' />
							<div>
								<p className='text-[14px] font-semibold leading-tight'>{item.value}</p>
								<p className='text-[12px] leading-tight text-[#dccdb0]/80'>{item.label}</p>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}
