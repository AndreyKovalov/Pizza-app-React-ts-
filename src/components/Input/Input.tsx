import { InputProps } from './Input.props'
import styles from './Input.module.css'
import cn from 'classnames'
function Input({ isValid = true, className, ...props }: InputProps) {
  return <input type="text" className={cn(styles['input'])} {...props} />
}
export default Input
