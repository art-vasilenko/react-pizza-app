import { forwardRef, InputHTMLAttributes } from 'react'
import cn from 'classnames'
import './Search.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    isValid: boolean;

}

export const Search = forwardRef<HTMLInputElement, Props>(function Input({ className, isValid = true, ...props }, ref) {
    return (
        <div className='search-wrapper'>
            <input {...props} ref={ref} className={cn('input', className, {
                invalid: !isValid
            })}/>
            <img className='icon' src="icon-search.svg" alt="" />
        </div>
      
    )
  })
