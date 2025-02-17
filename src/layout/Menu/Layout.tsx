import {    NavLink, Outlet, useNavigate } from 'react-router-dom'
import './Layout.css'
import { Button } from '../../components/Button/Button'
import  cn  from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { getProfile, userActions } from '../../store/user.slice'
import { useEffect } from 'react'

export const Layout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const profile = useSelector((s: RootState) => s.user.profile)
  const items = useSelector((s: RootState) => s.cart.items)

  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])

  const logout = () => {
    dispatch(userActions.logout())
    navigate('/auth/login')
  }  
  return (
    <div className="layout">
      <div className="sidebar">
        <div className="user">
          <img className="user-ava" src="man-icon.png"  alt="photo" />
          <div className="name">{profile?.name}</div>
          <div className="email">{profile?.email}</div>
        </div>
        <div className="menu">
          <NavLink to="/" className={({ isActive }) => cn('link', {'active': isActive})}>
            <img src="./menu.svg" alt="" />
            Меню
          </NavLink>
          <NavLink className={({ isActive }) => cn('link', {'active': isActive})} to="/cart">
            <img src="./shopping.svg" alt="" />
            Корзина <span className='cart-count'>{items.reduce((acc, item) => acc += item.count, 0)}</span>
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