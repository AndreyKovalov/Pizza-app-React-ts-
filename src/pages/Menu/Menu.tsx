import { Headling } from '../../components/Headling/Headling'
import ProductCard from '../../components/productCard/ProductCard'
import Searching from '../../components/searching/Searching'
import style from './Menu.module.css'
function Menu() {
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
        <ProductCard
          id={1}
          title={'Наслаждение'}
          description="Салями, руккола, помидоры, оливки"
          rating={4.5}
          price={300}
          image={'./productCard/card-img.png'}
        ></ProductCard>
        <ProductCard
          id={1}
          title={'Наслаждение'}
          description="Салями, руккола, помидоры, оливки"
          rating={4.5}
          price={300}
          image={'./productCard/card-img.png'}
        ></ProductCard>
      </div>
    </>
  )
}
export default Menu
