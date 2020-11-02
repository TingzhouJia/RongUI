
import React from 'react'
import PaginationItem from './item'
import { usePaginationContext } from './context'


export type PaginationNextProps = React.ButtonHTMLAttributes<any> 

const PaginationPrevious: React.FC<React.PropsWithChildren<PaginationNextProps>> = ({
  children,
  ...props
}) => {
  const { update, isFirst ,disabled} = usePaginationContext()
  return (
    <PaginationItem id="pagination-prev" onClick={() => update && update('prev')} disabled={isFirst||disabled} {...props}>
      {children}
    </PaginationItem>
  )
}

export default PaginationPrevious