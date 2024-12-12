import { Headling } from '../../components/Headling/Headling'
import { Search } from '../../components/Search/Search'
import './Menu.css'

export const Menu = () => {
  return (
    <>
      <div className='head'>
        <Headling>Меню</Headling>
        <Search placeholder='Введите блюдо или состав'/>
      </div> 
    </>
  )
}