import React, { MutableRefObject, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import usePortal from "../utils/usePortal";
import { AbsDropdown, SelectDropdownWrap } from "./wrapper";
import { useSelectContext } from "./context";

interface Props {
    parent?: MutableRefObject<HTMLElement | null> | undefined
    visible: boolean
    disableMatchWidth?: boolean
    getPopupContainer?: () => HTMLElement | null
    dropdownStyle?:React.CSSProperties
}

interface ReactiveDomReact {
    top: number
    left: number
    right: number
    width: number
}

const getOffset = (el?: HTMLElement | null | undefined) => {
    if (!el)
        return {
            top: 0,
            left: 0,
        }
    const { top, left } = el.getBoundingClientRect()
    return { top, left }
}

const defaultRect: ReactiveDomReact = {
    top: -1000,
    left: -1000,
    right: -1000,
    width: 0,
}

const getRect = (
    ref: MutableRefObject<HTMLElement | null>,
    getContainer?: () => HTMLElement | null,
): ReactiveDomReact => {
    if (!ref || !ref.current) return defaultRect
    const rect = ref.current.getBoundingClientRect()
    const container = getContainer ? getContainer() : null
    const scrollElement = container || document.documentElement
    const { top: offsetTop, left: offsetLeft } = getOffset(container)

    return {
        ...rect,
        width: rect.width || rect.right - rect.left,
        top: rect.bottom + scrollElement.scrollTop - offsetTop,
        left: rect.left + scrollElement.scrollLeft - offsetLeft,
    }
}


const AbstractDropdown: React.FC<React.PropsWithChildren<Props>> = React.memo(
    ({ children, parent, visible, disableMatchWidth, getPopupContainer }) => {
        const el = usePortal('dropdown', getPopupContainer)
        const [rect, setRect] = useState<ReactiveDomReact>(defaultRect)
        if (!parent) return null

        const updateRect = () => {
            const { top, left, right, width: nativeWidth } = getRect(parent, getPopupContainer)
            setRect({ top, left, right, width: nativeWidth })
        }


        const cal = () => {
            const { top, left } = getRect(parent, getPopupContainer)
            const shouldUpdatePosition = top !== rect.top || left !== rect.left
            if (!shouldUpdatePosition) return
            updateRect()
        }
        useEffect(() => {
            document.addEventListener('click', cal)
            window.addEventListener('resize', updateRect)
            if (!parent || !parent.current) return

            parent.current.addEventListener('mouseenter', updateRect)
            /* istanbul ignore next */
            return () => {
                if (!parent || !parent.current) return
                parent.current.removeEventListener('mouseenter', updateRect)
                document.removeEventListener('click', cal)
                window.removeEventListener('resize', updateRect)
            }
        }, [parent])

        const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
            event.stopPropagation()
            event.preventDefault()
        }

        if (!el) return null
        return createPortal(

            visible && <AbsDropdown
                disable={disableMatchWidth}
                rect={rect}
                onClick={clickHandler}>
                {children}

            </AbsDropdown>,

            el,
        )
    },
)
type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type SelectDropdownProps = Props & NativeAttrs
const SelectDropdown: React.FC<React.PropsWithChildren<SelectDropdownProps>> = ({
    visible,
    children,
    className,
    dropdownStyle,
    disableMatchWidth,
    getPopupContainer,
}) => {
    const { ref } = useSelectContext()
    return (
        <AbstractDropdown
          parent={ref}
          visible={visible}
          disableMatchWidth={disableMatchWidth}
          getPopupContainer={getPopupContainer}>
          <SelectDropdownWrap className={className} style={dropdownStyle}>
            {children}
          </SelectDropdownWrap>
        </AbstractDropdown>)
}

export default SelectDropdown

