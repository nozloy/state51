import type { PriceRow } from '../types'

interface PriceListProps {
	rows: readonly PriceRow[]
	label: string
}

export function PriceList({ rows, label }: PriceListProps) {
	return (
		<dl aria-label={label} className='grid gap-0 divide-y divide-border'>
			{rows.map(row => (
				<div key={row.id} className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3'>
					<dt className='min-w-0 flex-1 text-sm leading-relaxed'>{row.title}</dt>
					<dd className='flex shrink-0 flex-wrap items-baseline justify-end gap-2'>
						{row.regularPrice && <span className='text-xs text-muted-foreground'><span className='sr-only'>Обычная цена: </span><s>{row.regularPrice}</s></span>}
						<span className='font-oswald text-xl tabular-nums'><span className='sr-only'>Цена: </span>{row.price}</span>
					</dd>
				</div>
			))}
		</dl>
	)
}
