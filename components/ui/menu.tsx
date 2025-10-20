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
			<div className='backdrop-blur-md flex flex-row items-center justify-between p-4 bg-background/0 border-t border-border rounded-2xl shadow-lg'>
				<Link href='/'>
					<Button
						variant='ghost'
						className='active:scale-95 hover:cursor-pointer size-14 flex flex-col bg-background/0 hover:bg-background/0  text-foreground'
					>
						<House className='size-8' />
						<p>Главная</p>
					</Button>
				</Link>
				<Link href='/profile'>
					<Button
						variant='ghost'
						className='active:scale-95 hover:cursor-pointer size-14 flex flex-col bg-background/0 hover:bg-background/0  text-foreground'
					>
						<User className='size-8' />
						<p>Профиль</p>
					</Button>
				</Link>
				<Link href='/shop'>
					<Button
						variant='ghost'
						className='active:scale-95 hover:cursor-pointer  size-14  flex flex-col bg-background/0 hover:bg-background/0  text-foreground'
					>
						<ShoppingBag className='size-8' />
						<p>Витрина</p>
					</Button>
				</Link>
				<Contacts />
			</div>
		</div>
	)
}
