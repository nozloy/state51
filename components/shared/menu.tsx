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
		<div className={cn('sticky bottom-0 max-w-md w-full p-2 z-40', className)}>
			<div className='backdrop-blur-lg flex flex-row items-center justify-between p-2 px-4 bg-background/0 border-t border-border rounded-2xl shadow-lg '>
				<Link href='/'>
					<Button
						variant='ghost'
						className='*:text-[12px] active:scale-95 hover:cursor-pointer size-14 bg-background/0 hover:bg-background/0 font-bold text-foreground flex flex-col gap-1'
					>
						<House className='size-8' />
						<p>Главная</p>
					</Button>
				</Link>
				<Link href='/profile'>
					<Button
						variant='ghost'
						className='*:text-[12px] font-bold active:scale-95 hover:cursor-pointer size-14 flex flex-col bg-background/0 hover:bg-background/0 text-foreground gap-1'
					>
						<User className='size-8' />
						<p>Профиль</p>
					</Button>
				</Link>
				<Link href='/shop'>
					<Button
						variant='ghost'
						className='*:text-[12px] font-bold active:scale-95 hover:cursor-pointer  size-14  flex flex-col bg-background/0 hover:bg-background/0 text-foreground gap-1'
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
