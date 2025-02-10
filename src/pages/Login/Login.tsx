import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { Headling } from '../../components/Headling/Headling'
import { Input } from '../../components/Input/Input'
import './Login.css'
import { FormEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { login, userActions } from '../../store/user.slice'


export type LoginForm = {
    email: {
        value: string
    },
    password: {
        value: string
    },
}

export const Login = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const {jwt, loginErrorMessage }= useSelector((s: RootState) => s.user)

    useEffect(() => {
        if(jwt) {
            navigate('/')
        }
    }, [jwt, navigate])

    const submit = async (e: FormEvent) => {
        dispatch(userActions.cleanLoginError())
        e.preventDefault()
        const target = e.target as typeof e.target & LoginForm;
        const {email, password } = target
        await sendLogin(email.value, password.value)
        
    }

    const sendLogin = async (email: string, password: string) => {
        dispatch(login({email, password}))  
    }

  return (
    <div className='login'>
        <Headling>Вход</Headling>
        {loginErrorMessage && <div className='error'>{loginErrorMessage}</div>}
        <form className='form' onSubmit={ submit }>
            <div className='field'>
                <label htmlFor="email">Ваш email</label>
                <Input isValid id='email' name='email' placeholder='Введите email'/>
            </div>
            <div className='field'>
                <label htmlFor="password">Ваш пароль</label>
                <Input isValid id='password' type='password' name='password' placeholder='Введите пароль'/>
            </div>
            <Button appearence='big'>Вход</Button>
        </form>
        <div className='links'>
            <div>Нет аккаунта?</div>
            <Link className='links-register' to='/auth/register'>Зарегистрироваться</Link>
        </div>
    </div>
  )
}
