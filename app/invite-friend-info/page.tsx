import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
export default function InviteFriendInfo() {
	return (
		<div className='relative text-foreground flex flex-col gap-4 min-h-dvh max-w-md mx-auto mt-2 p-2'>
			<Card>
				<CardHeader>
					<CardTitle className='text-xl inline-flex gap-2 items-center'>
						Пригласи друга — получи 600₽!
					</CardTitle>
					<CardDescription>
						Несколько простых шагов чтобы заработать:
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ol className='list-decimal list-inside flex flex-col gap-2'>
						<li>
							Войди в свой <strong>профиль</strong> на нашем сайте под своими
							данными YClients.
						</li>
						<li>
							Найди кнопку <strong>«Отправить ссылку другу»</strong> и поделись
							ею любым удобным способом.
						</li>
						<li>
							Твой друг перейдёт по ссылке, подтвердит данные и получит скидку
							на первую стрижку.
						</li>
						<li>
							После его первого визита ты получишь{' '}
							<strong>600₽ на свой счёт</strong> — можешь использовать их как
							скидку или вывести реальные деньги*
						</li>
					</ol>
				</CardContent>
				<CardFooter>
					<p>Делись ссылкой — приглашай друзей и зарабатывай вместе с нами!</p>
				</CardFooter>
			</Card>
			<div className='text-xs text-muted-foreground italic p-4 pt-0'>
				*Скидка и выплата для пригласившего действуют после первой стрижки
				приглашенного друга.
				<br />
				Скидка не суммируется с другими акциями и предложениями.
			</div>
		</div>
	)
}
