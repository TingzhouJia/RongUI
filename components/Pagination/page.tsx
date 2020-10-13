import React,{ Dispatch, SetStateAction } from "react";
import PaginationItem from "./item";

interface Props {
    limit: number
    count: number
    current: number
    setPage: Dispatch<SetStateAction<number>>
  }

  const Paginationpages:React.FC<Props>=({ limit, count, current, setPage })=>{
    const showPage=() => {
        const oddLimit = limit % 2 === 0 ? limit - 1 : limit
        return oddLimit - 2
      }
      const middleNumber = (showPage() + 1) / 2
    //   const [showBeforeEllipsis, showAfterEllipsis]=() => {
    //     const showEllipsis = count > limit
    //     return [
    //       showEllipsis && current > middleNumber + 1,
    //       showEllipsis && current < count - middleNumber,
    //     ]
    //   }
      const pagesArray=() => [...new Array(showPage())]
      const renderItem = 
        (value: number, active: number) => (
          <PaginationItem
            key={`pagination-item-${value}`}
            active={value === active}
            onClick={() => setPage(value)}>
            {value}
          </PaginationItem>
        )
    
        return (<></>)
       
  }