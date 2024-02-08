import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { Headling } from '../../components/Headling/Headling'
import Input from '../../components/Input/Input'
import style from './Login.module.css'
function Login() {
  return (
    <div className={style['login']}>
      <Headling className={style['title-login']}>Login</Headling>
      <form className={style['form']}>
        <div className={style['input-wrap']}>
          <label htmlFor="email">Your email</label>
          <Input
            type="email"
            id="email"
            name="email"
            isValid
            className="input-login"
            placeholder="Email"
          />
        </div>
        <div className={style['input-wrap']}>
          <label htmlFor="password">Your password</label>
          <Input
            type="password"
            id="password"
            isValid
            name="password"
            className="input-login"
            placeholder="Password"
          />
        </div>
      </form>
      <div className={style['footer']}>
        <Button className={style['btn-login']} appearence="big">
          Login
        </Button>
        <div className={style['text']}>Don't have an account yet?</div>
        <Link className={style['link']} to={'/auth/register'}>
          Register Now
        </Link>
      </div>
    </div>
  )
}
export default Login
