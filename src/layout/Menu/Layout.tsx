import { Link, Outlet } from 'react-router-dom'
import style from './Layout.module.css'
import Button from '../../components/button/Button'
function Layout() {
  return (
    <div className={style['layout']}>
      <div className={style['sidebar']}>
        <div className={style['user']}>
          <img
            src="/sidebar/avatar/elon_musk_royal_society.jpg"
            className={style['user__avatar']}
            alt="avatar"
          />
          <div className={style['user__name']}>Jon Sina</div>
          <div className={style['user__mail']}>jonsina@g.com</div>
        </div>
        <div className={style['menu']}>
          <Link className={style['menu__link']} to={'/'}>
            <img src="/sidebar/menu/menu-icon.svg" alt="menu-icon" />
            Menu
          </Link>
          <Link className={style['menu__link']} to={'/cart'}>
            <img
              className={style['menu__img']}
              src="/sidebar/menu/cart-icon.svg"
              alt="cart-icon"
            />
            Cart
          </Link>
        </div>
        <Button className={style['logout-btn']}>
          <img
            src="\sidebar\button\button-logout.svg "
            alt="button-loguot-icon"
          />
          Logout
        </Button>
      </div>
      <div className={style['content']}>
        <Outlet />
      </div>
    </div>
  )
}
export default Layout
