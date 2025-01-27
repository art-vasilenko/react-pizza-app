import { useEffect, useState } from 'react'
import { Headling } from '../../components/Headling/Headling'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { Search } from '../../components/Search/Search'
import { PREFIX } from '../../helpers/API'
import { Product } from '../../interfaces/product.interface'
import './Menu.css'
import axios from 'axios'

export const Menu = () => {
  const [products, setProducts] = useState<Product[]>([])

  const getMenu =  async () => {
    try {
      const {data} = await axios.get<Product[]>(`${PREFIX}/products`)
      setProducts(data) 
    } catch(e) {
        console.error(e)
         return
    }

    // try {
    //   const res = await fetch(`${PREFIX}/products`)

    //   if(!res.ok) {
    //     return
    //   }
  
    //   const data =  await res.json() as Product[];
    //   setProducts(data) 

    // } catch(e) {
    //   console.error(e)
    //   return
    // }
  
  }

  useEffect(() => {
    getMenu()
  }, [])

  return (
    <>
      <div className='head'>
        <Headling>Меню</Headling>
        <Search isValid placeholder='Введите блюдо или состав'/>
      </div>
      <div>
        {products.map(p => (
          <ProductCard
          key={p.id}
          id={p.id}
          title={p.name}
          description={p.ingredients.join(', ')}
          rate={p.rating}
          price={p.price}
          image={p.image}
        />
        ))}
      </div>
    </>
  )
}