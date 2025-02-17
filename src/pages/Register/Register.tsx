import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { Headling } from '../../components/Headling/Headling'
import { Input } from '../../components/Input/Input'
import { FormEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { register, userActions } from '../../store/user.slice'


export type RegisterForm = {
    email: {
        value: string
    },
    password: {
        value: string
    },
    name: {
      value: string
  },
}

export const Register = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const {jwt, registerErrorMessage }= useSelector((s: RootState) => s.user)

    useEffect(() => {
        if(jwt) {
            navigate('/')
        }
    }, [jwt, navigate])

    const submit = async (e: FormEvent) => {
        dispatch(userActions.cleanRegisterError())
        e.preventDefault()
        const target = e.target as typeof e.target & RegisterForm;
        const {email, password, name } = target
        dispatch(register({email: email.value, password: password.value, name: name.value})) 
        
    }

  return (
    <div className='login'>
        <Headling>Регистрация</Headling>
        {registerErrorMessage && <div className='error'>{registerErrorMessage}</div>}
        <form className='form' onSubmit={ submit }>
            <div className='field'>
                <label htmlFor="email">Ваш email</label>
                <Input isValid id='email' name='email' placeholder='Введите email'/>
            </div>
            <div className='field'>
                <label htmlFor="password">Ваш пароль</label>
                <Input isValid id='password' type='password' name='password' placeholder='Введите пароль'/>
            </div>
            <div className='field'>
                <label htmlFor="name">Ваше имя</label>
                <Input isValid id='name' name='name' placeholder='Введите имя'/>
            </div>
            <Button appearence='big'>Зарегистрироваться</Button>
        </form>
        <div className='links'>
            <div>Есть аккаунт?</div>
            <Link className='links-register' to='/auth/login'>Войти</Link>
        </div>
    </div>
  )
}
