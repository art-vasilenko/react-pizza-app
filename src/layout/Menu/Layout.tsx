import {    NavLink, Outlet, useNavigate } from 'react-router-dom'
import './Layout.css'
import { Button } from '../../components/Button/Button'
import  cn  from 'classnames'

export const Layout = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('jwt')
    navigate('/auth/login')
  }  
  return (
    <div className="layout">
      <div className="sidebar">
        <div className="user">
          <img className="user-ava" src="man-icon.png"  alt="photo" />
          <div className="name">Артём Василенко</div>
          <div className="email">varayv@list.ru</div>
        </div>
        <div className="menu">
          <NavLink to="/" className={({ isActive }) => cn('link', {'active': isActive})}>
            <img src="./public/menu.svg" alt="" />
            Меню
          </NavLink>
          <NavLink className="link" to="/cart">
            <img src="./public/shopping.svg" alt="" />
            Корзина
          </NavLink>
        </div>
          <Button className="exit" onClick={logout}>
              <img src="exit.svg" alt="" />
              Выйти
          </Button>
      </div>
      <div className='content'>
        <Outlet/>
      </div>
    </div>

  )
}