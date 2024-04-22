import axios, { AxiosError } from 'axios'
import { Headling } from '../../components/Headling/Headling'
import Searching from '../../components/Searching/Searching'
import style from './Menu.module.css'
import { PREFIX } from '../../helpers/API'
import { useEffect, useState } from 'react'
import { IProduct } from '../../interfaces/product.interfaces'
import { MenuList } from './MenuList/MenuList'
import MyLoader from '../../components/MyLoader/MyLoader'
function Menu() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | undefined>()
  async function getMenu() {
    try {
      const { data } = await axios.get<IProduct[]>(`${PREFIX}/products`)
      setProducts(data)
      setIsLoading(false)
    } catch (e) {
      console.error(error)
      if (e instanceof AxiosError) {
        setError(e.message)
      }
      setIsLoading(false)
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
        {error && <>{error}</>}
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
