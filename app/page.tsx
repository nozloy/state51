import { About } from '@/components/ui/About'
import { Barbers } from '@/components/ui/barbers'
import { Footer } from '@/components/ui/footer'
import { Logo } from '@/components/ui/logo'
import { Telegram } from '@/components/shared/telegram'

// import Image from 'next/image'

export default function Home() {
	return (
		<div className='relative  text-foreground flex flex-col gap-4'>
			<div className='flex flex-col gap-4 p-4'>
				<Logo />
				<About />
				<Barbers />
				<Telegram />
				<Footer />
			</div>
		</div>
	)
}
