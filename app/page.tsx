import { HomeFooter } from '@/modules/home/ui/home-footer'
import { HomeHero } from '@/modules/home/ui/home-hero'
import { HomeInvite } from '@/modules/home/ui/home-invite'
import { HomeOwner } from '@/modules/home/ui/home-owner'
import { HomeServicesPreview } from '@/modules/home/ui/home-services-preview'

export default function Home() {
	return (
		<div className='brand51-main pb-24'>
			<HomeHero />
			<HomeOwner />
			<HomeInvite />
			<HomeServicesPreview />
			<HomeFooter />
		</div>
	)
}
