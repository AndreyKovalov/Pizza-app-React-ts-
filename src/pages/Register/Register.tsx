import style from './Register.module.css'
import { Headling } from '../../components/Headling/Headling'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { FormEvent, useEffect } from 'react'
import { RegisterForm } from './RegisterForm.interfaces'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { register, userActions } from '../../store/user.slice'

function Register() {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { jwt, errMassage } = useSelector((state: RootState) => state.user)
  async function onSubmitHandle(e: FormEvent) {
    e.preventDefault()
    dispatch(userActions.resetErrMassage())
    const target = e.target as typeof e.target & RegisterForm
    const { email, password, name } = target
    await dispatch(
      register({
        email: email.value,
        password: password.value,
        name: name.value,
      })
    )
  }

  useEffect(() => {
    if (jwt) {
      navigate('/')
    }
  }, [jwt, navigate])

  return (
    <div className={style['register']}>
      <Headling className={style['title-login']}>Register</Headling>
      <form className={style['form']} onSubmit={onSubmitHandle}>
        {errMassage && <>{errMassage}</>}
        <div className={style['input-wrap']}>
          <label htmlFor="email">Your Email</label>
          <Input
            type="email"
            id="email"
            name="email"
            isValid
            className="input-register"
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
            className="input-register"
            placeholder="Password"
          />
        </div>
        <div className={style['input-wrap']}>
          <label htmlFor="username">Your name</label>
          <Input
            type="text"
            id="username"
            isValid
            name="username"
            className="input-register"
            placeholder="Name"
          />
        </div>
        <Button className={style['btn-register']} appearence="big">
          Register
        </Button>
      </form>
      <div className={style['footer']}>
        <div className={style['text']}> Have account ?</div>
        <Link className={style['link']} to={'/auth/login'}>
          Login in
        </Link>
      </div>
    </div>
  )
}
export default Register
