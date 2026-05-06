import { LegalDocLinks } from '@/modules/legal/ui/legal-doc-links'

export function HomeFooter() {
	return (
		<footer className='space-y-1 px-2 pb-2 pt-3 text-center text-xs text-[#cdbb9a]/65'>
			<p>STATE51 — Барбершоп.</p>
			<p>ИП Мухамедшина Флора Джавдатовна · ИНН 165908482856</p>
			<LegalDocLinks
				className='justify-center'
				linkClassName='text-[#cfbb97]'
				useShortLabels
			/>
		</footer>
	)
}
