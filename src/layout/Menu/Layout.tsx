import { NavLink, Outlet } from 'react-router-dom'
import style from './Layout.module.css'
import Button from '../../components/Button/Button'
import cn from 'classnames'
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
          <NavLink
            className={({ isActive }) =>
              cn(style['menu__link'], {
                [style.active]: isActive,
              })
            }
            to={'/'}
          >
            <img src="/sidebar/menu/menu-icon.svg" alt="menu-icon" />
            Menu
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(style['menu__link'], {
                [style.active]: isActive,
              })
            }
            to={'/cart'}
          >
            <img
              className={style['menu__img']}
              src="/sidebar/menu/cart-icon.svg"
              alt="cart-icon"
            />
            Cart
          </NavLink>
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
