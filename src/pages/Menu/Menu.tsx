import axios from 'axios'
import { Headling } from '../../components/Headling/Headling'
import Searching from '../../components/Searching/Searching'
import style from './Menu.module.css'
import { PREFIX } from '../../helpers/API'
import { useEffect, useState } from 'react'
import { Product } from '../../interfaces/product.interfaces'
import { MenuList } from './MenuList/MenuList'
import MyLoader from '../../components/MyLoader/MyLoader'
function Menu() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  async function getMenu() {
    try {
      const { data } = await axios.get<Product[]>(`${PREFIX}/products`)
      setProducts(data)
      setIsLoading(false)
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
        {isLoading ? (
          <MyLoader amountOfElem={8} />
        ) : (
          <MenuList products={products} />
        )}
      </div>
    </>
  )
}
export default Menu
