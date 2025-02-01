
import { Outlet } from 'react-router-dom'
import './AuthLayout.css'


export const AuthLayout = () => {
  return (
    <div className="layout-auth">
      <div className="logo-auth">
        <img className="logo-img" src="/logo.jpg" alt="Логотип" />
      </div>
      <div className='content-auth'>
        <Outlet/>
      </div>
    </div>

  )
}