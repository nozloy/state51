import { Logo } from '@/components/ui/logo'
import { HomeStory } from './home-story'

export function HomeIntro() {
	return (
		<header className='flex flex-col gap-6'>
			<div className='flex items-center justify-between gap-4 border-y border-foreground/30 py-3 font-oswald text-xs uppercase tracking-[0.18em] sm:text-sm'>
				<p>Царёво Village · Тукая, 14</p>
				<p className='shrink-0'>Est. 2022</p>
			</div>
			<div className='grid grid-cols-2 items-center gap-x-4 gap-y-6 py-4 md:gap-x-12 md:py-8'>
				{/* <div className='flex min-w-0 flex-col gap-4'>
					<p className='font-oswald text-xs uppercase tracking-[0.3em] text-primary sm:text-sm'>
						Barbershop
					</p>
					<h1 className='font-oswald text-[clamp(2.5rem,12vw,6rem)] leading-none font-bold tracking-tight whitespace-nowrap'>
						ШТАТ <span className='text-primary'>51</span>
					</h1>
				</div> */}
				<Logo className='hidden w-full md:col-start-1 md:row-start-1 md:block' />
				<div className='col-span-2 md:col-span-1 md:col-start-2 md:row-start-1'>
					<HomeStory />
				</div>
			</div>
		</header>
	)
}
