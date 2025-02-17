import { ProductCard } from '../../../components/ProductCard/ProductCard'
import { MenuListProps } from './MenuList.props'
import './MenuList.css'

export const MenuList = ({products}: MenuListProps) => {
  return <div className='wrapper'>
      {products.map(p => (
              <ProductCard
              key={p.id}
              id={p.id}
              name={p.name}
              description={p.ingredients.join(', ')}
              rate={p.rating}
              price={p.price}
              image={p.image}
            />
            ))}
  </div>
  
}
