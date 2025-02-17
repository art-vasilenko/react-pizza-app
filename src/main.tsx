import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,  RouterProvider} from 'react-router-dom'
import { Cart } from './pages/Cart/Cart.tsx'
import { Layout } from './layout/Menu/Layout.tsx'
import { Product } from './pages/Product/Product.tsx'
import axios from 'axios'
import { PREFIX } from './helpers/API.ts'
import { AuthLayout } from './layout/Auth/AuthLayout.tsx'
import { Login } from './pages/Login/Login.tsx'
import { Register } from './pages/Register/Register.tsx'
import { RequreAuth } from './helpers/RequreAuth.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { Success } from './pages/Success/Success.tsx'

const Menu = lazy(() => import('./pages/Menu/Menu'))


const router = createBrowserRouter([
  {
    path: '/',
    element: <RequreAuth><Layout/></RequreAuth>,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<>загрузка...</>}><Menu /></Suspense>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/success',
        element: <Success/>
      },
      {
        path: '/product/:id',
        element: <Product/>,
        errorElement: <>Ошибка</>,
        loader: async ({params}) => {
          const {data} = await axios.get(`${PREFIX}/products/${params.id}`)
          return data
        }
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/> 
    </Provider>
  </StrictMode>
)
