import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom'
import Menu from './pages/Menu/Menu.tsx'
import Cart from './pages/Cart/Cart.tsx'
import Layout from './layout/Menu/Layout.tsx'
import NotFound from './pages/NotFound/NotFound.tsx'
import { Product } from './pages/Product/Product.tsx'
import axios from 'axios'
import { PREFIX } from './helpers/API.ts'
import LayoutAuth from './layout/Menu/Auth/LayoutAuth.tsx'
import Login from './pages/Login/Login.tsx'
import Register from './pages/Register/Register.tsx'
import RequireAuth from './helpers/RequireAuth.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: '/Cart',
        element: <Cart />,
      },
      {
        path: '/',
        element: <Menu />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: '/product/:id',
        element: <Product />,
        errorElement: <>error</>,
        loader: async ({ params }) => {
          return defer({
            data: axios
              .get(`${PREFIX}/products/${params.id}`)
              .then((data) => data)
              .catch((e) => e),
          })
          //  const { data } = await axios.get(`${PREFIX}/products/${params.id}`)
          //  return data
        },
      },
    ],
  },
  {
    path: '/auth',
    element: <LayoutAuth />,
    children: [
      {
        path: '/auth/login',
        element: <Login />,
      },
      {
        path: '/auth/register',
        element: <Register />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
