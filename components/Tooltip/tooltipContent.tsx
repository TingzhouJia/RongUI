import React, { MutableRefObject, useEffect, useRef, useState } from "react"
import { Placement, SnippetTypes } from "../utils"
import usePortal from "../utils/usePortal"
import { TooltipPosition, defaultTooltipPosition, getPosition } from "./placement"
import { createPortal } from "react-dom"
import { Inner, TooltopContentBase } from "./wrapper"
import { getColor } from "../utils/getColor"
import TooltipIcon from "./tooltipIcon"
interface Props {
    parent?: MutableRefObject<HTMLElement | null> | undefined
    placement: Placement
    type: SnippetTypes
    visible: boolean
    hideArrow: boolean
    offset: number
    className?: string
    background?:string

}

interface ReactiveDomReact {
    top: number
    bottom: number
    left: number
    right: number
    width: number
    height: number
}

const defaultRect: ReactiveDomReact = {
    top: -1000,
    left: -1000,
    right: -1000,
    bottom: -1000,
    width: 0,
    height: 0,
}
const getRect = (ref: MutableRefObject<HTMLElement | null>): ReactiveDomReact => {
    if (!ref || !ref.current) return defaultRect
    const rect = ref.current.getBoundingClientRect()
    return {
        ...rect,
        width: rect.width || rect.right - rect.left,
        height: rect.height || rect.bottom - rect.top,
        top: rect.top + document.documentElement.scrollTop,
        bottom: rect.bottom + document.documentElement.scrollTop,
        left: rect.left + document.documentElement.scrollLeft,
        right: rect.right + document.documentElement.scrollLeft,
    }
}

const TooltipContent: React.FC<Props> = (props) => {
    const { children,
        parent,
        visible,
        offset,
        placement,
        background="#fff",
        type,
    
        className,
        hideArrow, } = props
        if (!parent) return null
    const el = usePortal('tooltip')
    const selfRef = useRef<HTMLDivElement>(null)
    const hasShadow = type === 'default'
    const [rect, setRect] = useState<TooltipPosition>(defaultTooltipPosition)
    const updateRect = () => {
        const position = getPosition(placement, getRect(parent as any), offset)
        setRect(position)
    }
    const preventHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        event.nativeEvent.stopImmediatePropagation()
    }
    const cur=getColor(type)
    useEffect(() => {
        updateRect()
    }, [visible])
    useEffect(() => {
        const fn = () => updateRect()
        fn()
        window.addEventListener('resize', fn)
        return () => window.removeEventListener('resize', fn)
    }, [])
    useEffect(() => {
        const callback = (event: Event) => updateRect()

        document.addEventListener('click', callback)
        return () => document.removeEventListener('click', callback)
    }, [updateRect])

    return (
        visible?createPortal(
            <TooltopContentBase hasShadow={hasShadow} transform={rect.transform} color={cur} top={rect.top} left={rect.left} bg={background} ref={selfRef} onClick={preventHandler}>
                <Inner>
                {!hideArrow && (
            <TooltipIcon placement={placement} bgColor={background} />
          )}
          {children}
                </Inner>
            </TooltopContentBase>,el as Element
        ):<></>
    )
}

export default TooltipContent
