import { Headling } from '../../components/Headling/Headling'
import Searching from '../../components/searching/Searching'
import style from './Menu.module.css'
function Menu() {
  return (
    <div className={style['Menu']}>
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
    </div>
  )
}
export default Menu
