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
  const [filter, setFilter] = useState<string | undefined>()

  const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }
  async function getMenu(name?: string) {
    try {
      const { data } = await axios.get<IProduct[]>(`${PREFIX}/products`, {
        params: {
          name,
        },
      })
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
    getMenu(filter)
  }, [filter])
  return (
    <>
      <div className={style['head']}>
        <Headling>Menu</Headling>
        <div className={style['search-wrapper']}>
          <Searching
            onChange={onChangeFilter}
            placeholder="Enter a dish or composition"
          />
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
