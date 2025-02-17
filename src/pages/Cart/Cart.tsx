import { useSelector } from 'react-redux'
import { Headling } from '../../components/Headling/Headling'
import { RootState } from '../../store/store'
import { useEffect, useState } from 'react'
import { Products } from '../../interfaces/product.interface'
import axios from 'axios'
import { PREFIX } from '../../helpers/API'
import { CartItem } from '../../components/CartItem/CartItem'

export const Cart = () => {
  const [cartProducts, setCartProducts] = useState<Products[]>([])
  const items = useSelector((s: RootState) => s.cart.items)

  const getItem = async (id: number) => {
    const {data} = await axios.get<Products>(`${PREFIX}/products/${id}`)
    return data
  }
 
  const loadAllItems =  async () => {
    const res = await Promise.all(items.map(i => getItem(i.id)))
    setCartProducts(res)
  }

  useEffect(() => {
    loadAllItems()
  }, [items])

  return (
    <>
      <Headling>Корзина</Headling>
      {items.map(i => {
        const product = cartProducts.find(p => p.id === i.id)
        if(!product) {
          return
        }
        return <CartItem count={i.count} {...product}/>
      })}
    </>
  )
}
