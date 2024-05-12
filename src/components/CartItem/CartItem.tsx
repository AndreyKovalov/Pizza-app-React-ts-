import { useDispatch } from 'react-redux'
import style from './CartItem.module.css'
import { CartItemProps } from './CartItem.props'
import { AppDispatch } from '../../store/store'
import { cartActions } from '../../store/cart.slice'
import { MouseEvent } from 'react'

function CartItem({ ...props }: CartItemProps) {
  const dispatch = useDispatch<AppDispatch>()
  const decrease = (e: MouseEvent) => {
    e.preventDefault()
    dispatch(cartActions.decreaseItemCount(props.id))
  }
  const increase = (e: MouseEvent) => {
    e.preventDefault()
    dispatch(cartActions.increaseItemCount(props.id))
  }
  const deleteItem = (e: MouseEvent) => {
    e.preventDefault()
    dispatch(cartActions.deleteCartItem(props.id))
  }
  return (
    <div className={style['cart-item']}>
      <div className={style['cart-item__content']}>
        <div className={style['cart-item__img']}>
          <img src={props.image} alt="cart-image"></img>
        </div>
        <div className={style['cart-item__info']}>
          <h2 className={style['cart-item__title']}>{props.name}</h2>
          <span className={style['cart-item__price']}>
            {props.price}&nbsp;UA
          </span>
        </div>
      </div>
      <div className={style['cart-item__btns']}>
        <button
          className={style['cart-item__btn-decrease']}
          onClick={decrease}
        />
        <span className={style['cart-item__count']}>{props.count}</span>
        <button
          className={style['cart-item__btn-increase']}
          onClick={increase}
        />
        <button
          className={style['cart-item__btn-delete']}
          onClick={deleteItem}
        ></button>
      </div>
    </div>
  )
}
export default CartItem
