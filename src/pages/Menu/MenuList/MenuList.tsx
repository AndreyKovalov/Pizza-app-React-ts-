import ProductCard from '../../../components/ProductCard/ProductCard'
import { MenuListProps } from './MenuList.props'
export function MenuList({ products }: MenuListProps) {
  return products.map((p) => {
    return (
      <ProductCard
        key={p.id}
        id={p.id}
        title={p.name}
        price={p.price}
        image={p.image}
        rating={p.rating}
        description={p.ingredients.join(', ')}
      />
    )
  })
}
