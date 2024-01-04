import { HeadlingProps } from './Headling.props'
import style from './Headling.module.css'
import cn from 'classnames'

export function Headling({ children, className, ...props }: HeadlingProps) {
  return (
    <h1 className={cn(style['title'], className)} {...props}>
      {children}
    </h1>
  )
}
