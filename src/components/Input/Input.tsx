import { InputProps } from './Input.props'
import styles from './Input.module.css'
import cn from 'classnames'
function Input({ isValid = true, className, ...props }: InputProps) {
  return <input className={cn(styles['input'], className)} {...props} />
}
export default Input
