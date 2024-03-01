import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { Headling } from '../../components/Headling/Headling'
import Input from '../../components/Input/Input'
import style from './Login.module.css'
import { FormEvent, useState } from 'react'
import { LoginForm } from './LoginForm.interfaces'
import axios, { AxiosError } from 'axios'
import { PREFIX } from '../../helpers/API'
import { useDispatch } from 'react-redux'
import { userActions } from '../../store/user.slice'
import { AppDispatch } from '../../store/store'

function Login() {
  const [err, setErr] = useState<string | undefined>()
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  async function onSubmitHandle(e: FormEvent) {
    e.preventDefault()
    const target = e.target as typeof e.target & LoginForm
    const { email, password } = target
    await sendLogin(email.value, password.value)
  }

  async function sendLogin(email: string, password: string) {
    try {
      const { data } = await axios.post(`${PREFIX}/auth/login`, {
        email,
        password,
      })
      dispatch(userActions.addJwt(data.access_token))
      navigate('/')
    } catch (error) {
      if (error instanceof AxiosError) {
        setErr(error.response?.data.message)
      }
    }
  }

  return (
    <div className={style['login']}>
      <Headling className={style['title-login']}>Login</Headling>
      <form className={style['form']} onSubmit={onSubmitHandle}>
        {err && <>{err}</>}
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
