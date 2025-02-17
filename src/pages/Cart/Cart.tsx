import { useDispatch, useSelector } from 'react-redux'
import { Headling } from '../../components/Headling/Headling'
import { AppDispatch, RootState } from '../../store/store'
import { useEffect, useState } from 'react'
import { Products } from '../../interfaces/product.interface'
import axios from 'axios'
import { PREFIX } from '../../helpers/API'
import { CartItem } from '../../components/CartItem/CartItem'
import './Cart.css'
import { Button } from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { cartActions } from '../../store/cart.slice'

const DELIVERY_PRICE = 169

export const Cart = () => {
  const [cartProducts, setCartProducts] = useState<Products[]>([])
  const items = useSelector((s: RootState) => s.cart.items)
  const jwt = useSelector((s: RootState) => s.user.jwt)
  const navigate = useNavigate()
  const dispath = useDispatch<AppDispatch>()
  
  const totalPrice = items
    .map(i => {
    const product = cartProducts.find(p => p.id === i.id)
    if(!product) {
      return 0
    }
    return i.count * product.price
  })
    .reduce((acc, i) => acc += i, 0)
  

  const getItem = async (id: number) => {
    const {data} = await axios.get<Products>(`${PREFIX}/products/${id}`)
    return data
  }
 
  const loadAllItems =  async () => {
    const res = await Promise.all(items.map(i => getItem(i.id)))
    setCartProducts(res)
  }

  const check = async () => {
    await axios.post(`${PREFIX}/order`, {
        products: items
    }, {
        headers: {
          Authorization: `Bearer ${jwt}`
      }
    })
    dispath(cartActions.clean())
    navigate('/success')
  }

  useEffect(() => {
    loadAllItems()
  }, [items])

  return (
    <>
      <Headling className='headling'>Корзина</Headling>
      {items.map(i => {
        const product = cartProducts.find(p => p.id === i.id)
        if(!product) {
          return
        }
        return <CartItem key={product.id} count={i.count} {...product}/>
      })}

      <div className='line'>
        <div>Итог</div>
        <div> {totalPrice}&nbsp;р</div>
      </div>
      <hr className='hr' />
      <div className='line'>
        <div>Доставка</div>
        <div>{DELIVERY_PRICE}&nbsp;р</div>
      </div>
      <hr className='hr'/>
      <div className='line'>
        <div>Итог </div>
        <div>{totalPrice + DELIVERY_PRICE}&nbsp;р</div>
      </div>
      <div className='check'>
        <Button appearence='big' onClick={check}>Оформить</Button>
      </div>
      
    </>
  )
}
