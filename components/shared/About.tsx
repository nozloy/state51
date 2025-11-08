'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import { CircleArrowRight } from 'lucide-react'

interface Props {
	className?: string
}

export const About: React.FC<Props> = ({ className }) => {
	const [showAbout, setShowAbout] = React.useState(false)
	const hundleShowAbout = () => {
		setShowAbout(!showAbout)
	}
	return (
		<div
			onClick={() => hundleShowAbout()}
			className={cn(
				' flex flex-col items-start justify-center bg-background/50 backdrop-blur-sm rounded-[30px] w-full z-10 border border-border select-none cursor-pointer',
				className,
			)}
		>
			<div className='w-full flex flex-row gap-2 items-center justify-between text-lg font-bold p-4'>
				<p>Мы восстанавливаем культуру</p>

				<CircleArrowRight
					size={20}
					className={cn(
						'transition-all duration-700 ease-in-out',
						showAbout ? 'rotate-90 scale-150' : '',
					)}
				/>
			</div>

			<div
				className={cn(
					'max-w-md mx-auto px-2 text-base leading-snug text-neutral-800 space-y-4 transition-all duration-700 ease-in-out overflow-hidden',
					showAbout
						? 'max-h-[1000px] opacity-100 my-4'
						: 'max-h-0 opacity-0 mt-0',
				)}
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

				<p className='pt-4 border-t border-neutral-300 font-semibold'>
					Ты не покупаешь услугу.
					<br />
					Ты входишь в культуру.
				</p>
			</div>
		</div>
	)
}
