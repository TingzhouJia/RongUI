import React, { useState } from 'react'
import PaginationItem from './item'
import { DoubleRightOutlined, EllipsisOutlined, DoubleLeftOutlined } from '@ant-design/icons'
import { usePaginationContext } from './context'
interface Props {
    isBefore?: boolean
    onClick?: (e: React.MouseEvent) => void
  }

const PaginationEllipse:React.FC<Props>=({onClick,isBefore})=>{
    const [showMore, setShowMore] = useState(false)
    const {disabled}=usePaginationContext()
    return (
        <PaginationItem  disabled={disabled} onClick={e => onClick && onClick(e)}
        onMouseEnter={() => setShowMore(true)}
        onMouseLeave={() => setShowMore(false)}>
            {
                !showMore?<EllipsisOutlined id="more-icon"/>:isBefore?<DoubleLeftOutlined id="left-jump"/>:<DoubleRightOutlined id="right-jump" />
            }
        </PaginationItem>
    )
}
export default PaginationEllipse