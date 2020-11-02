import React, { Dispatch, SetStateAction, useMemo } from "react";
import PaginationItem from "./item";
import PaginationEllipsis from './ellipse'
import { usePaginationContext } from "./context";
interface Props {
    limit: number
    count: number
    current: number
    setPage: Dispatch<SetStateAction<number>>
}
type PageProps = Omit<React.ButtonHTMLAttributes<any>, keyof Props> & Props
const PaginationPages: React.FC<PageProps> = ({ limit, count, current, setPage }) => {
    const showPage = (limit % 2 === 0 ? limit - 1 : limit) - 2
    const middleNumber = (showPage + 1) / 2
    const {disabled}=usePaginationContext()
    const [showBeforeEllipsis, showAfterEllipsis] = useMemo(() => {
        const showEllipsis = count > limit
        return [
            showEllipsis && current > middleNumber + 1,
            showEllipsis && current < count - middleNumber,
        ]
    }, [current, showPage, middleNumber, count, limit])
    const pagesArray = [...new Array(showPage)]
    const renderItem =
        (value: number, active: number) => (
            <PaginationItem 
                key={`pagination-item-${value}`}
                disabled={disabled}
                active={value === active}
                onClick={() => setPage(value)}>
                {value}
            </PaginationItem>
        )

    const startPages = pagesArray.map((_, index) => {
        const value = index + 2
        return renderItem(value, current)
    })
    const middlePages = pagesArray.map((_, index) => {
        const middleIndexNumber = middleNumber - (index + 1)
        const value = current - middleIndexNumber
        return (
            <PaginationItem
                key={`pagination-middle-${index}`}
                active={index + 1 === middleNumber}
                disabled={disabled}
                onClick={() => setPage(value)}>
                {value}
            </PaginationItem>
        )
    })
    const endPages = pagesArray.map((_, index) => {
        const value = count - (showPage - index)
        return renderItem(value, current)
    })
    if (count <= limit) {
        /* eslint-disable react/jsx-no-useless-fragment */
        return (
            <>
                {[...new Array(count)].map((_, index) => {
                    const value = index + 1
                    return (
                        <PaginationItem
                            key={`pagination-item-${value}`}
                            active={value === current}
                            disabled={disabled}
                            onClick={() => setPage(value)}>
                            {value}
                        </PaginationItem>
                    )
                })}
            </>
        )
        /* eslint-enable */
    }
    return (<>
        {renderItem(1, current)}
        {showBeforeEllipsis && (
            <PaginationEllipsis
                
                key="pagination-ellipsis-before"
                isBefore
                onClick={() => setPage(last => (last - 5 >= 1 ? last - 5 : 1))}
            />
        )}
        {showBeforeEllipsis && showAfterEllipsis
            ? middlePages
            : showBeforeEllipsis
                ? endPages
                : startPages}
        {showAfterEllipsis && (
            <PaginationEllipsis
                key="pagination-ellipsis-after"
                onClick={() => setPage(last => (last + 5 <= count ? last + 5 : count))}
            />
        )}
        {renderItem(count, current)}
    </>)

}

export default PaginationPages