'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from './drawer'
import { Button } from './button'
import { MessageSquare } from 'lucide-react'
import Link from 'next/link'

interface Props {
	className?: string
}

export const Contacts: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('rounded-full', className)}>
			<Drawer>
				<DrawerTrigger asChild>
					<Button
						variant='default'
						className='active:scale-95 hover:cursor-pointer rounded-full size-14 bg-background text-foreground hover:bg-background/50 active:bg-background/50 focus-visible:bg-background/50'
					>
						<MessageSquare className='size-8' />
					</Button>
				</DrawerTrigger>
				<DrawerContent>
					<div className='mx-auto  max-w-sm'>
						<DrawerHeader>
							<DrawerTitle>Контакты</DrawerTitle>
							<DrawerDescription>и социальные сети</DrawerDescription>
						</DrawerHeader>
						<div className='w-full flex flex-col items-center justify-center gap-2 p-4 *:w-full *:text-xl *:h-12'>
							<Button
								variant='secondary'
								onClick={() =>
									window.open('https://t.me/+79375200051', '_blank')
								}
							>
								Написать в Telegram
							</Button>
							<Button
								variant='outline'
								onClick={() =>
									window.open('https://vk.com/barbershopstate51', '_blank')
								}
							>
								Группа в VK
							</Button>
							{/* <Button variant='outline' className=' '>
								Instagram
							</Button> */}
							<Button
								variant='outline'
								onClick={() =>
									window.open('https://wa.me/79375200051', '_blank')
								}
							>
								WhatsApp
							</Button>
							<Button
								variant='destructive'
								onClick={() => window.open('tel:+79375200051', '_blank')}
							>
								Позвонить
							</Button>
						</div>
						<div className='mb-10 mx-4 p-2 rounded-xl border border-border border-dashed text-center text-sm text-foreground'>
							Используя один из методов связи Вы соглашаетесь с нашей
							<Link
								href='/privacy'
								target='_blank'
								className='text-red-600 underline pl-1 drop-shadow-sm'
							>
								политикой конфиденциальности
							</Link>
						</div>
						<DrawerFooter className='hidden md:block'>
							<DrawerClose asChild>
								<Button variant='outline' className='w-full'>
									Закрыть
								</Button>
							</DrawerClose>
						</DrawerFooter>
					</div>
				</DrawerContent>
			</Drawer>
		</div>
	)
}
