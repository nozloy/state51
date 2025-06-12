import { About } from '@/components/ui/About'
import { Barbers } from '@/components/ui/barbers'
import { Footer } from '@/components/ui/footer'
import { Logo } from '@/components/ui/logo'
import { Menu } from '@/components/ui/menu'
import { Museum } from '@/components/ui/museum'

// import Image from 'next/image'

export default function Home() {
	return (
		<div className='relative max-w-md min-h-dvh mx-auto bg-background text-foreground flex flex-col gap-4'>
			<div className='flex flex-col gap-4 p-4'>
				<Logo />
				<About />
				<Barbers />
				<Museum />
				<Footer />
			</div>
			<Menu />
		</div>
	)
}
