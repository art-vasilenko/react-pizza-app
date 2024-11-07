import { forwardRef, InputHTMLAttributes } from 'react'
import './Input.css'
import cn from 'classnames'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    isValid: boolean;

}

export const Input = forwardRef<HTMLInputElement, Props>(function Input({ className, isValid = true, ...props }, ref) {
  return (
    <input {...props} ref={ref} className={cn('input', className, {
        invalid: !isValid
    })}/>
  )
})