import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { Headling } from '../../components/Headling/Headling'
import Input from '../../components/Input/Input'
import style from './Login.module.css'
import { FormEvent, useEffect } from 'react'
import { LoginForm } from './LoginForm.interfaces'
import { useDispatch, useSelector } from 'react-redux'
import { login, userActions } from '../../store/user.slice'
import { AppDispatch, RootState } from '../../store/store'

function Login() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { jwt, errMassage } = useSelector((state: RootState) => state.user)

  useEffect(() => {
    if (jwt) {
      navigate('/')
    }
  }, [jwt, navigate])

  async function submit(e: FormEvent) {
    e.preventDefault()
    dispatch(userActions.resetErrMassage())
    const target = e.target as typeof e.target & LoginForm
    const { email, password } = target
    await dispatch(login({ email: email.value, password: password.value }))
  }

  return (
    <div className={style['login']}>
      <Headling className={style['title-login']}>Login</Headling>
      <form className={style['form']} onSubmit={submit}>
        {errMassage && <>{errMassage}</>}
        <div className={style['input-wrap']}>
          <label htmlFor="email">Your Email</label>
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
        <Button className={style['btn-login']} appearence="big">
          Login
        </Button>
      </form>
      <div className={style['footer']}>
        <div className={style['text']}>Don't have an account yet?</div>
        <Link className={style['link']} to={'/auth/register'}>
          Register Now
        </Link>
      </div>
    </div>
  )
}
export default Login
