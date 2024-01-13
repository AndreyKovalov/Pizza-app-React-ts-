import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Menu from './pages/Menu/Menu.tsx'
import Cart from './pages/Cart/Cart.tsx'
import Layout from './layout/Menu/Layout.tsx'
import NotFound from './pages/notFound/NotFound.tsx'
import { Product } from './pages/Product/Product.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
