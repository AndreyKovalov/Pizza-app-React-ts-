import { SearchingProps } from './Searching.props'
import styles from './Searching.module.css'
import cn from 'classnames'
function Searching({ className, ...props }: SearchingProps) {
  return (
    <input
      type="text"
      className={cn(styles['input-search'], className)}
      {...props}
    />
  )
}
export default Searching
