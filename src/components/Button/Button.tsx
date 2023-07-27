import { ButtonHTMLAttributes, ReactNode } from 'react'

import s from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export const Button = ({ children, className }: ButtonProps) => {
  return <button className={`${s.button} ${className}`}>{children}</button>
}
