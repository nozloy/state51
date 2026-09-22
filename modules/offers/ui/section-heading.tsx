interface SectionHeadingProps {
	id: string
	number: string
	title: string
}

export function SectionHeading({ id, number, title }: SectionHeadingProps) {
	return (
		<header className='flex flex-col gap-3 border-t border-foreground/25 pt-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8'>
			<div className='flex items-baseline gap-4'>
				<span className='font-oswald text-4xl text-primary' aria-hidden='true'>
					{number} /
				</span>
				<h2
					id={id}
					className='font-oswald text-4xl font-bold uppercase tracking-tight sm:text-5xl'
				>
					{title}
				</h2>
			</div>
		</header>
	)
}
