import { ReactNode } from 'react'

export interface HeadlingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
}
