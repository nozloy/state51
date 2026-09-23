import { Scissors } from 'lucide-react'
import { PaperPoster } from '@/components/shared/paper-poster'
import { shopAvailabilityNotice } from '../content'
import type { ShopSection } from '../types'
import { ProductCard } from './product-card'
import styles from './shop-catalog.module.css'

export function ShopCatalog({ sections }: { sections: ShopSection[] }) {
	return (
		<main className={styles.page}>
			<PaperPoster aria-labelledby='shop-title' className={styles.hero}>
				<div className={styles.masthead}>
					<p>Барбершоп «Штат 51»</p>
					<p>Уход с характером</p>
				</div>
				<header className={styles.introduction}>
					<div>
						<h1 id='shop-title' className={styles.title}>
							Витрина
						</h1>
						{/* <p className={styles.signature}>Твой стиль. Каждый день.</p> */}
					</div>
					<div className={styles.introCopy}>
						<p>
							Средства для укладки, волос и бороды — чтобы сохранить ощущение
							барбершопа у себя дома.
						</p>
						<p className={styles.availability}>{shopAvailabilityNotice}</p>
					</div>
				</header>
			</PaperPoster>

			<div className={styles.catalog}>
				{sections.map((section, index) => (
					<section
						key={section.id}
						id={section.id}
						aria-labelledby={`${section.id}-title`}
						className={styles.section}
					>
						<header className={styles.sectionHeader}>
							<span className={styles.sectionNumber} aria-hidden='true'>
								0{index + 1}
							</span>
							<div>
								<h2 id={`${section.id}-title`}>{section.title}</h2>
								<p>{section.description}</p>
							</div>
						</header>
						<ul className={styles.products} role='list'>
							{section.products.map(item => (
								<li key={item.id}>
									<ProductCard item={item} />
								</li>
							))}
						</ul>
					</section>
				))}
			</div>

			<footer className={styles.footer}>
				<Scissors aria-hidden='true' />
				<div>
					<p className={styles.footerTitle}>Подберём под твою стрижку.</p>
					<p>Нужна помощь с выбором? Спроси своего барбера во время визита.</p>
				</div>
			</footer>
		</main>
	)
}
