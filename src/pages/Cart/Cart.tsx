import { Headling } from '../../components/Headling/Headling'
import style from './Cart.module.css'
import CartItem from '../../components/CartItem/CartItem'
import axios from 'axios'
import { PREFIX } from '../../helpers/API'
import { IProduct } from '../../interfaces/product.interfaces'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

function Cart() {
  const items = useSelector((state: RootState) => state.cart.items)
  const [cartItems, setCartItems] = useState<IProduct[]>([])
  const getCartItem = async (id: number) => {
    const { data } = await axios.get<IProduct>(`${PREFIX}/products/${id}`)
    return data
  }

  const getAllCartItems = async () => {
    const data = await Promise.all(items.map((item) => getCartItem(item.id)))
    return setCartItems(data)
  }

  useEffect(() => {
    getAllCartItems()
  }, [items])

  return (
    <>
      <Headling className={style['cart-title']}>Cart</Headling>
      {items.map((i) => {
        const product = cartItems.find((p) => p.id === i.id)
        if (!product) {
          return
        }
        return <CartItem count={i.count} key={i.id} {...product} />
      })}
    </>
  )
}
export default Cart
