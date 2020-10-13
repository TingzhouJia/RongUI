import React from 'react'
import PaginationItem from './item'
import { usePaginationContext } from './context'

export type PaginationNextProps = React.ButtonHTMLAttributes<any>

const PaginationNext: React.FC<React.PropsWithChildren<PaginationNextProps>> = ({
  children,
  ...props
}) => {
  const { update, isLast } = usePaginationContext()
  return (
    <PaginationItem onClick={() => update && update('next')} disabled={isLast} {...props}>
      {children}
    </PaginationItem>
  )
}

export default  PaginationNext