import { getShopSections } from './service'
import { ShopCatalog } from './ui/shop-catalog'

export function ShopShowcase() {
	return <ShopCatalog sections={getShopSections()} />
}
