import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'

export function HomeIntro() {
	return (
		<header className='flex flex-col gap-6'>
			<div className='flex items-center justify-between gap-4 border-y border-foreground/30 py-3 font-oswald text-xs uppercase tracking-[0.18em] sm:text-sm'>
				<p>Царёво Village · Тукая, 14</p>
				<p className='shrink-0'>Est. 2022</p>
			</div>
			<div className='flex items-center justify-between gap-4 py-4 md:gap-12 md:py-8'>
				<div className='flex min-w-0 flex-col gap-4'>
					<p className='font-oswald text-xs uppercase tracking-[0.3em] text-primary sm:text-sm'>Barbershop</p>
					<h1 className='font-oswald text-5xl leading-none font-bold tracking-tight min-[390px]:text-6xl sm:text-8xl'>ШТАТ <span className='text-primary'>51</span></h1>
					<p className='max-w-md text-sm leading-relaxed text-muted-foreground sm:text-lg'>Мужские стрижки, бритьё и уход.<br />Продолжаем традиции. Создаём ваш стиль.</p>
				</div>
				<Logo className='size-24 shrink-0 min-[390px]:size-28 sm:size-48 lg:size-56' />
			</div>
			<nav aria-label='Разделы главной' className='flex flex-wrap gap-3'>
				<Button asChild size='lg'><a href='#services'>Услуги и цены <ArrowDown data-icon='inline-end' /></a></Button>
				<Button asChild size='lg' variant='outline'><a href='#promotions'>Акции <ArrowDown data-icon='inline-end' /></a></Button>
			</nav>
		</header>
	)
}
