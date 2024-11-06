import { ButtonHTMLAttributes } from 'react'
import './Button.css'
import cn from 'classnames'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

  export const Button = ({children, className, ...props}: Props) => {

  return (
    <div>
        <button className={cn('button accent', className)} {...props}>{children}</button>
    </div>
  )
}