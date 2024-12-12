import { HTMLAttributes, ReactNode } from 'react'
import './Headling.css'
import cn from 'classnames'

interface Props extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode
}

export const Headling = ({children, className, ...props}: Props) => {
  return (
    <h1 className={cn(className, 'h1')} {...props}>{children}</h1>
  )
}