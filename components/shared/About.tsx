import React from 'react'
import { cn } from '@/lib/utils'
import { CircleArrowRight } from 'lucide-react'

interface Props {
	className?: string
}

export const About: React.FC<Props> = ({ className }) => {
	return (
		<details
			className={cn(
				'group w-full rounded-xl border border-border bg-card/65',
				className,
			)}
		>
			<summary className='flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring [&::-webkit-details-marker]:hidden'>
				<p>Мы восстанавливаем культуру</p>

				<CircleArrowRight
					size={20}
					className='shrink-0 transition-transform group-open:rotate-90 motion-reduce:transition-none'
					aria-hidden='true'
				/>
			</summary>

			<div
				className='flex max-w-2xl flex-col gap-4 px-5 pb-5 text-base leading-relaxed'
			>
				<p className='text-lg font-semibold'>
					Ты не зритель.
					<br />
					Ты — участник.
				</p>

				<p>
					Ты садишься в кресло — и{' '}
					<span className='italic font-medium'>история продолжается.</span>
				</p>

				<p>
					<span className='font-semibold'>Рядом — кресло 1912 года.</span>
					<br />
					<span className='font-semibold'>
						В руке мастера — бритва, как в Чикаго 50-х.
					</span>
					<br />
					Пар поднимается от полотенца. Машинка поёт.
				</p>

				<p>
					И весь этот ритуал — не ради красоты,
					<br />а{' '}
					<span className='font-medium'>
						ради продолжения традиций прошлого
					</span>
					<br />в <span className='font-medium'>ремесле настоящего.</span>
				</p>

				<p className='font-semibold'>Это сцена.</p>
				<p>
					Каждое кресло — <span className='font-semibold'>герой.</span>
					<br />
					Каждая стрижка — <span className='font-semibold'>под тебя.</span>
					<br />
					Каждый мужчина — часть{' '}
					<span className='italic'>живого спектакля,</span>
					<br />
					где <span className='italic'>вместо слов — стиль,</span>
					<br />
					где <span className='italic'>вместо аплодисментов — уважение.</span>
				</p>

				<p className='pt-4 font-semibold'>
					Ты не покупаешь услугу.
					<br />
					Ты входишь в культуру.
				</p>
			</div>
		</details>
	)
}
