import React, { useState } from 'react'
import PaginationItem from './item'
import { DoubleRightOutlined, EllipsisOutlined, DoubleLeftOutlined } from '@ant-design/icons'
interface Props {
    isBefore?: boolean
    onClick?: (e: React.MouseEvent) => void
  }

const PaginationEllipse:React.FC<Props>=({onClick,isBefore})=>{
    const [showMore, setShowMore] = useState(false)
    return (
        <PaginationItem   onClick={e => onClick && onClick(e)}
        onMouseEnter={() => setShowMore(true)}
        onMouseLeave={() => setShowMore(false)}>>
            {
                showMore?<EllipsisOutlined />:isBefore?<DoubleLeftOutlined/>:<DoubleRightOutlined />
            }
        </PaginationItem>
    )
}
export default PaginationEllipse