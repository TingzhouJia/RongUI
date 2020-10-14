import React from 'react'
import PaginationItem from './item'
import { usePaginationContext } from './context'

export type PaginationNextProps = React.ButtonHTMLAttributes<any>

const PaginationNext: React.FC<React.PropsWithChildren<PaginationNextProps>> = ({
  children,
  ...props
}) => {
  const { update, isLast,disabled } = usePaginationContext()
  return (
    <PaginationItem onClick={() => update && update('next')} disabled={isLast||disabled} {...props}>
      {children}
    </PaginationItem>
  )
}

export default  PaginationNext