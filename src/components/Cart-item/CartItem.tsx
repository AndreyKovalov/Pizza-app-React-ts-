import style from './CartItem.module.css'
import { CartItemProps } from './CartItem.props'
function CartItem({ ...props }: CartItemProps) {
  return (
    <div className={style['cart-item']}>
      <div className={style['cart-item__content']}>
        <img src={props.image} className={style['cart-item__img']}></img>
        <div className={style['cart-item__info']}>
          <h2 className={style['cart-item__title']}>{props.name}</h2>
          <span className={style['cart-item__price']}>{props.price}</span>
        </div>
      </div>
      <div className={style['cart-item__btns']}>
        <img src="./cart-item/circle-minus.svg" alt="decrease" />
        <span className={style['cart-item__count']}>{props.count}</span>
        <img src="./cart-item/circle-plus.svg" alt="increase" />
        <div className={style['cart-item__delete']}></div>
      </div>
    </div>
  )
}
export default CartItem
