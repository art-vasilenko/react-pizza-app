import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { Headling } from '../../components/Headling/Headling'
import { Input } from '../../components/Input/Input'
import './Login.css'
import { FormEvent, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { PREFIX } from '../../helpers/API'
import { LoginResponse } from '../../interfaces/auth.interface'

export type LoginForm = {
    email: {
        value: string
    },
    password: {
        value: string
    },
}

export const Login = () => {
    const [error, setError] = useState<string | null>()
    const navigate = useNavigate()

    const submit = async (e: FormEvent) => {
        setError(null)
        e.preventDefault()
        const target = e.target as typeof e.target & LoginForm;
        const {email, password } = target
        await sendLogin(email.value, password.value)
        
    }

    const sendLogin = async (email: string, password: string) => {
        try {
            const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
                email,
                password
            })
            console.log(data)
            localStorage.setItem('jwt', data.access_token)
            navigate('/')
        } catch(e) {
            if(e instanceof AxiosError) {
                console.error(e)
                setError(e.response?.data.message)
            }
           
        }
        
    }

  return (
    <div className='login'>
        <Headling>Вход</Headling>
        {error && <div className='error'>{error}</div>}
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
