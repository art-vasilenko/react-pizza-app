import { ButtonHTMLAttributes } from 'react'
import './Button.css'
import cn from 'classnames'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    appearence?: 'big' | 'small';
}

  export const Button = ({children, className, appearence = 'small', ...props}: Props) => {

  return (
    <div>
        <button className={cn('button accent', className, 
        {'small': appearence === 'small','big': appearence === 'big' })}{...props}>
            {children}
        </button>
    </div>
  )
}