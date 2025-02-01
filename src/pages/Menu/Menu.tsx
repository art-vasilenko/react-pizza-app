import { useEffect, useState } from 'react'
import { Headling } from '../../components/Headling/Headling'
import { Search } from '../../components/Search/Search'
import { PREFIX } from '../../helpers/API'
import { Products } from '../../interfaces/product.interface'
import './Menu.css'
import axios, { AxiosError } from 'axios'
import { MenuList } from './MenuList/MenuList'

export const Menu = () => {
  const [products, setProducts] = useState<Products[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | undefined>()

  const getMenu =  async () => {
    try {
      setIsLoading(true)
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve()
        }, 500)
      })

      const {data} = await axios.get<Products[]>(`${PREFIX}/products`)
      setProducts(data)
      setIsLoading(false) 
    } catch(e) {
        console.error(e)
        if(e instanceof AxiosError) {
          setError(e.message)
        }
        
        setIsLoading(false)
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
        {error && <>{error}</>}
        {!isLoading && <MenuList products={products}/>}
        {isLoading && <>Идет загрузка...</>}
      </div>
    </>
  )
}

export default Menu;