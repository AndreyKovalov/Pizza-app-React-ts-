import { Headling } from '../../components/Headling/Headling'
import style from './Menu.module.css'
function Menu() {
  return (
    <div className={style['Menu']}>
      <div className={style['head']}>
        <Headling>Menu</Headling>
      </div>
    </div>
  )
}
export default Menu
