import axios from 'axios'
import { Headling } from '../../components/Headling/Headling'
import ProductCard from '../../components/productCard/ProductCard'
import Searching from '../../components/searching/Searching'
import style from './Menu.module.css'
import { PREFIX } from '../../helpers/API'
import { useEffect, useState } from 'react'
import { Product } from '../../interfaces/product.interfaces'
function Menu() {
  const [products, setProducts] = useState<Product[]>([])
  async function getMenu() {
    try {
      const { data } = await axios.get<Product[]>(`${PREFIX}/products`)
      setProducts(data)
    } catch (error) {
      console.error(error)
      return
    }
  }

  useEffect(() => {
    getMenu()
  }, [])
  return (
    <>
      <div className={style['head']}>
        <Headling>Menu</Headling>
        <div className={style['search-wrapper']}>
          <Searching placeholder="Enter a dish or composition" />
          <img
            className={style['search-icon']}
            src="/content-menu/search-icon.svg"
            alt="search-icon"
          />
        </div>
      </div>
      <div className={style['card-wrapper']}>
        {products.map((p) => {
          return (
            <ProductCard
              key={p.id}
              id={p.id}
              title={p.name}
              price={p.price}
              image={p.image}
              rating={p.rating}
              description={p.ingredients.join(', ')}
            />
          )
        })}
      </div>
    </>
  )
}
export default Menu
