import React from 'react'
import { cn } from '@/lib/utils'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface Props {
	className?: string
}

export const BonusInfo: React.FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				'bg-card flex flex-col items-start justify-start gap-2 border border-border p-4 rounded-xl shadow-md w-full ',
				className,
			)}
		>
			<h2 className='text-lg font-semibold'>Как воспользоваться бонусами</h2>
			<ol className='list-decimal pl-5'>
				<li>Получите бонусы по форме выше.</li>
				<li>
					<div className='flex flex-row gap-1'>
						Запишитесь на услугу через{' '}
						<Link
							href='https://n796028.yclients.com/company/746811/personal/select-services?o='
							target='_blank'
							rel='noopener noreferrer'
							className='text-foreground underline flex flex-row items-center gap-1'
						>
							<p>yclients</p>
							<ExternalLink size={14} />
						</Link>
					</div>
				</li>
				<li>
					При оплате услуги сообщите мастеру о желании использовать бонусы.
				</li>
				<li>
					Бонусы будут списаны с вашего счета и вы получите скидку на услугу.
				</li>
			</ol>
			<p className='text-sm text-gray-600'>
				*Бонусы действуют только на первую услугу и не суммируются с другими
				акциями.
			</p>
		</div>
	)
}
