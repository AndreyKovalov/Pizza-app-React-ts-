import { Outlet } from 'react-router-dom'
import style from './LayoutAuth.module.css'
function LayoutAuth() {
  return (
    <div className={style['layout']}>
      <div className={style['logo']}>
        <img className={style['logo-img']} src="/auth/logo.jpeg" alt="logo" />
      </div>
      <div className={style['content']}>
        <Outlet />
      </div>
    </div>
  )
}
export default LayoutAuth
