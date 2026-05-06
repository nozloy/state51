import type { ComponentType } from 'react'
import Link from 'next/link'
import {
	MapPin,
	MessageCircle,
	MessagesSquare,
	Navigation,
	PhoneCall,
	Send,
} from 'lucide-react'
import { BRAND_CONTACTS, CONTACT_CHANNELS } from '@/modules/home/content'
import type { ContactIcon } from '@/modules/home/types'
import { BrandTopBar } from '@/modules/home/ui/brand-top-bar'

const iconMap: Record<ContactIcon, ComponentType<{ className?: string }>> = {
	phone: PhoneCall,
	send: Send,
	'message-circle': MessageCircle,
	'messages-square': MessagesSquare,
	navigation: Navigation,
}

export default function ContactsPage() {
	return (
		<div className='brand51-main pb-24'>
			<BrandTopBar />

			<section className='brand51-panel px-4 py-5'>
				<h1 className='font-accent text-[44px] uppercase leading-none text-[#ead8b7]'>
					Контакты
				</h1>
				<div className='pt-3 flex items-start gap-2 text-sm text-[#e8dcc7]/86'>
					<MapPin className='mt-0.5 size-4 shrink-0 text-[#ceb88b]' />
					<div>
						<p className='font-semibold text-[#f4ead6]'>
							{BRAND_CONTACTS.addressPrimary}
						</p>
						<p>{BRAND_CONTACTS.addressSecondary}</p>
						<p className='pt-1'>{BRAND_CONTACTS.hoursSecondary}</p>
					</div>
				</div>
			</section>

			<section className='space-y-2'>
				{CONTACT_CHANNELS.map(channel => {
					const Icon = iconMap[channel.icon]
					const external = channel.href.startsWith('http')
					return (
						<Link
							key={channel.id}
							href={channel.href}
							target={external ? '_blank' : undefined}
							rel={external ? 'noopener noreferrer' : undefined}
							className='brand51-panel flex items-center justify-between gap-3 px-4 py-4 transition hover:border-[#c2aa7e]'
						>
							<div className='flex items-center gap-3'>
								<span className='inline-flex size-9 items-center justify-center rounded-md border border-white/10 bg-black/25'>
									<Icon className='size-4 text-[#c9473d]' />
								</span>
								<div>
									<p className='text-sm font-semibold text-[#f4ead6]'>
										{channel.title}
									</p>
									<p className='text-sm text-[#d9ccb5]/84'>{channel.description}</p>
								</div>
							</div>
							<span className='text-xs uppercase tracking-wide text-[#c3aa7f]'>
								Открыть
							</span>
						</Link>
					)
				})}
			</section>
		</div>
	)
}
