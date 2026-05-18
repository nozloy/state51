'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import { Badge } from '../ui/badge'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface Props {
	className?: string
}

export const InviteFriendBanner: React.FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				'flex flex-col gap-4 items-center justify-start',
				className,
			)}
		>
			<div className='flex flex-col gap-2 items-start justify-between border border-border p-6 rounded-xl shadow w-full bg-card'>
				<div className='flex flex-col gap-2 items-start justify-between w-full'>
					<div className='flex flex-row justify-between items-center w-full'>
						<div className='flex flex-col gap-0 items-start text-lg font-sans pl-2'>
							<p>Пригласи друга</p>
							<p>и получи реальный кэш за его первую стрижку</p>
							<div className='inline-flex items-center gap-2'></div>
						</div>
						<Image
							src='/friend.png'
							alt='invite_friend'
							width={120}
							height={120}
							priority
							className='drop-shadow-2xl rounded-3xl object-top object-cover w-[120px] h-[120px] mt-1'
						/>
					</div>
					<div className='flex flex-row items-center justify-between w-full'>
						<div>
							<Badge
								variant='outline'
								className='text-base bg-destructive text-card rounded-xl py-1.5 px-4'
							>
								600 ₽ за каждого
							</Badge>
						</div>
						<Link href='/invite-friend-info/'>
							<Button
								variant='default'
								className='text-base cursor-pointer rounded-xl'
							>
								Узнать как <ExternalLink />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
