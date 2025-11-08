import { Item, ItemContent, ItemMedia, ItemTitle } from '@/components/ui/item'
import { ShopItemMore } from '@/components/shared/shop_item_more'
import { shop_items, ShopItem } from '@/constants/shop_items'
import { CircleAlert } from 'lucide-react'

export default function Shop() {
	return (
		<div className='relative  text-foreground flex flex-col mt-2 p-2 gap-4 min-h-dvh'>
			<div className='flex flex-col gap-4 p-4'>
				<h1 className='text-2xl font-bold inline-flex items-end gap-2 font-mono'>
					<p>Витрина</p>
				</h1>
				<div className='flex w-full flex-col gap-4 [--radius:1rem]'>
					<Item variant='muted'>
						<ItemMedia>
							<CircleAlert />
						</ItemMedia>
						<ItemContent>
							<ItemTitle className='line-clamp-2 text-sm'>
								Наличие и цены уточняйте у барбера
							</ItemTitle>
						</ItemContent>
					</Item>
				</div>
				<div className='flex flex-wrap gap-5 justify-between'>
					{shop_items.map((item: ShopItem, i: number) => (
						<ShopItemMore key={i} item={item} />
					))}
				</div>
			</div>
		</div>
	)
}
