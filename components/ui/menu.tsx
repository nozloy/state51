import React from 'react'
import { cn } from '@/lib/utils'
import { House, ShoppingBag, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Contacts } from './contacts'
import Link from 'next/link'

interface Props {
	className?: string
}

export const Menu: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('sticky bottom-4 max-w-md w-full p-2 z-40', className)}>
			<div className='backdrop-blur-md flex flex-row items-center justify-between p-4 bg-background/50 *:bg-background border-t border-border rounded-2xl shadow-lg *:shadow-sm'>
				<Link className='rounded-full bg-none' href='/'>
					<Button
						variant='default'
						className='active:scale-95 hover:cursor-pointer rounded-full size-14 bg-background text-foreground hover:bg-background/50 active:bg-background/50 focus-visible:bg-background/50'
					>
						<House className='size-8' />
					</Button>
				</Link>
				<Link className='rounded-full bg-none' href='/profile'>
					<Button
						variant='default'
						className='active:scale-95 hover:cursor-pointer rounded-full size-14 bg-background text-foreground hover:bg-background/50 active:bg-background/50 focus-visible:bg-background/50'
					>
						<User className='size-8' />
					</Button>
				</Link>
				<Link className='rounded-full bg-none' href='/shop'>
					<Button
						variant='default'
						className='active:scale-95 hover:cursor-pointer rounded-full size-14 bg-background text-foreground hover:bg-background/50 active:bg-background/50 focus-visible:bg-background/50'
					>
						<ShoppingBag className='size-8' />
					</Button>
				</Link>
				<Contacts />
			</div>
		</div>
	)
}
