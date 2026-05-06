import React from 'react'
import { cn } from '@/lib/utils'
import { ShopItem } from '@/constants/shop_items'
import Image from 'next/image'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Item } from '@/components/ui/item'
import { Badge } from '@/components/ui/badge'

interface Props {
	className?: string
	item: ShopItem
}

export const ShopItemMore: React.FC<Props> = ({ className, item }) => {
	return (
		<div className='h-full'>
			<Sheet modal={false}>
				<SheetTrigger asChild>
					<Item
						variant='muted'
						className={cn(
							'h-full min-h-[258px] w-full flex-col items-center justify-start gap-3 rounded-md border border-white/10 bg-black/28 p-3',
							className,
						)}
					>
						<Image
							width={136}
							height={136}
							src={'/shop_items/' + item.image}
							alt={item.name}
							className='h-[136px] w-[136px] object-cover rounded-lg'
						/>
						<p className='line-clamp-3 text-center text-sm leading-tight text-[#e8dcc7]'>
							{item.name}
						</p>
					</Item>
				</SheetTrigger>
				<SheetContent className='w-full border-l border-white/10 bg-[#0f0e0d] text-[#f4ead6]'>
					<SheetHeader>
						<SheetTitle className='font-accent text-4xl uppercase leading-none text-[#f0e2c7]'>
							{item.name}
						</SheetTitle>
						<SheetDescription className='flex items-center gap-2'>
							<Badge
								variant={'outline'}
								className='border-[#655445] bg-black/20 text-[#cfb689]'
							>
								{item.volume} мл
							</Badge>
							<Badge className='border border-[#c35042] bg-[#8f2c23] text-[#f4ead6]'>
								{item.price} ₽
							</Badge>
						</SheetDescription>
					</SheetHeader>
					<div className='grid flex-1 auto-rows-min gap-6 px-4 overflow-y-auto py-2'>
						<div className='grid gap-3'>
							<Image
								width={350}
								height={350}
								src={'/shop_items/' + item.image}
								alt={item.name}
								className='max-h-full max-w-full object-contain rounded-lg'
							/>
						</div>
						<div className='grid gap-3 text-sm leading-relaxed text-[#d7ccb8]/86'>
							<p>{item.description}</p>
							{item.contents && (
								<p className='font-semibold text-[#f3e8d2]'>Состав:</p>
							)}

							<p className='font-light text-[#c7b99d]/84'>{item.contents}</p>
						</div>
					</div>
					<SheetFooter className='h-12 pt-0 '>
						<SheetClose asChild>
							<Button className='border border-[#c35042] bg-[#8f2c23] font-accent text-lg uppercase text-[#f4ead6] hover:bg-[#a73429]'>
								Закрыть
							</Button>
						</SheetClose>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</div>
	)
}
