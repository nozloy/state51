import { Item, ItemContent, ItemMedia, ItemTitle } from '@/components/ui/item'
import { ShopItemMore } from '@/components/shared/shop_item_more'
import { shop_items, ShopItem } from '@/constants/shop_items'
import { CircleAlert } from 'lucide-react'
import { BrandTopBar } from '@/modules/home/ui/brand-top-bar'

export default function Shop() {
	return (
		<div className='brand51-main pb-24'>
			<BrandTopBar />
			<div className='flex flex-col gap-4 px-4 py-2'>
				<h1 className='font-accent text-5xl uppercase leading-none text-[#ead8b7]'>
					<p>Витрина</p>
				</h1>
				<div className='flex w-full flex-col gap-3 [--radius:1rem]'>
					<Item
						variant='muted'
						className='rounded-md border border-white/10 bg-black/24'
					>
						<ItemMedia>
							<CircleAlert className='text-[#cfb689]' />
						</ItemMedia>
						<ItemContent>
							<ItemTitle className='line-clamp-2 text-base text-[#e8dcc7]'>
								Наличие и цены уточняйте у барбера
							</ItemTitle>
						</ItemContent>
					</Item>
				</div>
				<div className='grid grid-cols-2 gap-3'>
					{shop_items.map((item: ShopItem, i: number) => (
						<ShopItemMore key={i} item={item} />
					))}
				</div>
			</div>
		</div>
	)
}
