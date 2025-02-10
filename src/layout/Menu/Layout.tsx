import {    NavLink, Outlet, useNavigate } from 'react-router-dom'
import './Layout.css'
import { Button } from '../../components/Button/Button'
import  cn  from 'classnames'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { userActions } from '../../store/user.slice'

export const Layout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const logout = () => {
    dispatch(userActions.logout())
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
            <img src="./menu.svg" alt="" />
            Меню
          </NavLink>
          <NavLink className="link" to="/cart">
            <img src="./shopping.svg" alt="" />
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