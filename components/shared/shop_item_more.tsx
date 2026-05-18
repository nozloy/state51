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
		<div>
			<Sheet modal={false}>
				<SheetTrigger asChild>
					<Item
						variant='muted'
						className={cn(
							'w-40 h-64 flex items-center justify-center p-4',
							className,
						)}
					>
						<Image
							width={150}
							height={150}
							src={'/shop_items/' + item.image}
							alt={item.name}
							className='max-h-full max-w-full object-contain rounded-lg'
						/>
						<p className='text-sm text-center line-clamp-2'>{item.name}</p>
					</Item>
				</SheetTrigger>
				<SheetContent className='w-full'>
					<SheetHeader>
						<SheetTitle className='text-2xl'>{item.name}</SheetTitle>
						<SheetDescription className='flex items-center gap-2'>
							<Badge variant={'destructive'}>{item.volume} мл</Badge>
							<Badge>{item.price} ₽</Badge>
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
						<div className='grid gap-3'>
							{item.description}
							{item.contents && (
								<p className='text-muted-foreground font-semibold'>Состав:</p>
							)}

							<p className='font-light'>{item.contents}</p>
						</div>
					</div>
					<SheetFooter className='h-12 pt-0 '>
						<SheetClose asChild>
							<Button variant='default'>Закрыть</Button>
						</SheetClose>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</div>
	)
}
