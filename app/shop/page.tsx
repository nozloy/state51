import { Item, ItemContent, ItemMedia, ItemTitle } from '@/components/ui/item'
import { Skeleton } from '@/components/ui/skeleton'
import { Spinner } from '@/components/ui/spinner'

export default function Shop() {
	return (
		<div className='relative  text-foreground flex flex-col mt-2 p-2 gap-4 min-h-dvh'>
			<div className='flex flex-col gap-4 p-4'>
				<h1 className='text-2xl font-bold inline-flex items-end gap-2'>
					<p>Витрина</p>
				</h1>
				<div className='flex w-full flex-col gap-4 [--radius:1rem]'>
					<Item variant='muted'>
						<ItemMedia>
							<Spinner />
						</ItemMedia>
						<ItemContent>
							<ItemTitle className='line-clamp-1'>В разработке...</ItemTitle>
						</ItemContent>
						<ItemContent className='flex-none justify-end'>
							<span className='text-sm tabular-nums'>90%</span>
						</ItemContent>
					</Item>
				</div>
				<div className='flex flex-wrap gap-5'>
					{Array(9)
						.fill(0)
						.map((_, i) => (
							<Skeleton className='grow size-22' key={i} />
						))}
				</div>
			</div>
		</div>
	)
}
