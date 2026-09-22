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
} from '../ui/drawer'
import { Button } from '../ui/button'
import { MessageSquare } from 'lucide-react'
import { LegalDocLinks } from '@/modules/legal/ui/legal-doc-links'

interface Props {
	className?: string
}

export const Contacts: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('rounded-full', className)}>
			<Drawer modal={false}>
				<DrawerTrigger asChild>
					<Button
						variant='ghost'
						size='navigation'
					>
						<MessageSquare data-icon='inline-start' />
						<p>Контакты</p>
					</Button>
				</DrawerTrigger>
				<DrawerContent>
					<div className='mx-auto  max-w-sm'>
						<DrawerHeader>
							<DrawerTitle className='text-2xl font-mono'>Контакты</DrawerTitle>
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
							<p>Используя один из методов связи, вы подтверждаете ознакомление с:</p>
							<LegalDocLinks className='justify-center pt-1.5' />
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
