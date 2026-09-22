import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export function InviteFriendBanner({ className }: { className?: string }) {
	return (
		<Card className={className}>
			<CardHeader><CardTitle><h2 className='font-oswald text-3xl'>Пригласи друга</h2></CardTitle></CardHeader>
			<CardContent className='flex items-center justify-between gap-4'>
				<p className='text-sm leading-relaxed text-muted-foreground'>Получи реальный кэш за его первую стрижку. Наша реферальная программа.</p>
				<Image src='/friend.png' alt='Два друга в барбершопе' width={96} height={96} sizes='96px' className='size-24 shrink-0 rounded-lg object-cover' />
			</CardContent>
			<CardFooter className='flex-wrap justify-between gap-3'>
				<Badge>600 ₽ за каждого</Badge>
				<Button asChild variant='outline'><Link href='/invite-friend-info'>Узнать как <ArrowUpRight data-icon='inline-end' /></Link></Button>
			</CardFooter>
		</Card>
	)
}
