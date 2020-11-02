import { PaginationIemWrap, PaginationItemBtn } from "./Wrapper"
import React from "react"

interface Props {
    active?: boolean
    disabled?: boolean
    onClick?: (e: React.MouseEvent) => void
}

type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof Props>
export type PaginationItemProps = Props & NativeAttrs

const PaginationItem: React.FC<PaginationItemProps> = ({ active,
    children,
    disabled,
    onClick,
    ...props }) => {

    const clickHandler = (event: React.MouseEvent) => {
        if (disabled) return
        onClick && onClick(event)
    }
    return (
        <PaginationIemWrap id="pagination-item">
            <PaginationItemBtn id={`pagination-item-btn${active?'-active':''}`} onClick={clickHandler} {...props} active={active} disabled={disabled}>{children}</PaginationItemBtn>
        </PaginationIemWrap>
    )
}

export default PaginationItem