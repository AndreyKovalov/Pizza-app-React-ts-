import { Link } from 'react-router-dom'
import { ProductCardProps } from './ProductCard.props'
import style from './ProductCard.module.css'
function ProductCard({ ...props }: ProductCardProps) {
  return (
    <Link to="/">
      <div className={style['card']}>
        <div className={style['header']}>
          <img
            className={style['card-img']}
            src={props.image}
            alt="card-image"
          />
          <div className={style['price-btn-wrap']}>
            <div className={style['price']}>
              <span className={style['price__value']}>{props.price}</span>
              <span className={style['price__currency']}>UA</span>
            </div>
            <button className={style['cart-btn']}>
              <img
                className={style['cart-btn-img']}
                src="./productCard/cart-icon.svg"
                alt="cart-btn"
              />
            </button>
          </div>
          <div className={style['rating']}>
            <span className={style['rating__value']}>{props.rating}</span>
            <img src="./productCard/rating.svg" alt="rating" />
          </div>
        </div>
        <div className={style['footer']}>
          <h2 className={style['title']}>{props.title}</h2>
          <p className={style['description']}>{props.description}</p>
        </div>
      </div>
    </Link>
  )
}
export default ProductCard
