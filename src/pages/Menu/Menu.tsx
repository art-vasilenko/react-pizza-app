import { ChangeEvent, useEffect, useState } from 'react'
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
  const [filter, setFilter] = useState<string>()

  useEffect(() => {
    getMenu(filter)
  }, [filter])



  const getMenu =  async (name?: string) => {
    try {
      setIsLoading(true)
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve()
        }, 500)
      })

      const {data} = await axios.get<Products[]>(`${PREFIX}/products`, {
        params: {
          name
        }
      })
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

  const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  } 

 
  return (
    <>
      <div className='head'>
        <Headling>Меню</Headling>
        <Search isValid placeholder='Введите блюдо или состав' onChange={updateFilter}/>
      </div>
      <div>
        {error && <>{error}</>}
        {!isLoading && products.length > 0 && <MenuList products={products}/>}
        {isLoading && <>Идет загрузка...</>}
        {!isLoading && products.length === 0 && <p>Ошибка загрузки</p>}
      </div>
    </>
  )
}

export default Menu;