import { About } from '@/components/shared/About'
import { Barbers } from '@/components/shared/barbers'
import { Footer } from '@/components/shared/footer'
import { Telegram } from '@/components/shared/telegram'
import { InviteFriendBanner } from '@/components/shared/invite_friend_banner'
import { HomeIntro } from '@/modules/home/ui/home-intro'
import { PromotionsSection, ServicesSection } from '@/modules/offers/sections'

export default function Home() {
	return (
		<main className='mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 pt-6 pb-12 md:gap-20 md:px-6'>
			<div className='flex flex-col gap-6'>
				<HomeIntro />
				{/* <About />
				<Barbers /> */}
			</div>
			<ServicesSection />
			<PromotionsSection />
			<div className='grid gap-6 border-t border-foreground/25 pt-8 md:grid-cols-2 md:items-start'>
				<InviteFriendBanner />
				<Telegram />
			</div>
			<Footer />
		</main>
	)
}
