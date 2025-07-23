import React from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
	className?: string
}

export const Museum: React.FC<Props> = ({ className }) => {
	return (
		<Link href='https://t.me/barbershop_state51' target='_blank'>
			<div
				className={cn(
					'relative p-4 py-8 flex flex-col items-center justify-center bg-amber-100/30 rounded-[30px] w-full z-10 border border-border select-none cursor-pointer mt-8 shadow-md shadow-black/50 *:uppercase font-oswald overflow-hidden',
					className,
				)}
			>
				<Image
					className='no-touch-menu -z-10 object-cover object-center absolute top-0 left-0 w-full h-full brightness-110 contrast-115 scale-[1.01]'
					src='/paper.png'
					alt='paper'
					width={300}
					height={300}
					priority
					draggable={false}
				/>
				<p className='text-[56px]/15 font-bold font-stretch-extra-condensed'>
					за кулисами
				</p>
				<p className='text-[74px]/15 font-bold font-stretch-semi-condensed'>
					штата 51
				</p>
				<p className='pt-6 text-[28px]/8 font-bold font-stretch-semi-condensed'>
					без розовых соплей.
				</p>
				<p className=' text-[28px]/8 font-bold font-stretch-semi-condensed'>
					без притворства.
				</p>
				<p className='pt-6 text-[28px]/8 font-bold font-stretch-semi-condensed'>
					мужской взгляд —
				</p>
				<p className=' text-[28px]/8 font-bold font-stretch-semi-condensed'>
					на дело. на стиль.
				</p>

				<div className='pt-8'>
					<p className='text-4xl font-bold font-stretch-semi-condensed text-[#F6E9D4] py-2 px-4 w-full bg-[#9D3226] rounded-md'>
						подписывайся
					</p>
				</div>
			</div>
		</Link>
	)
}
