import { ReactNode } from 'react'

import s from './Button.module.scss'

interface ButtonProps {
  children: ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return <button className={s.button}>{children}</button>
}
