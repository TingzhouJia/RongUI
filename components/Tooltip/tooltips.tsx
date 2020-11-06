import { TriggerTypes, SnippetTypes, Placement, StatusTypes } from "../utils";
import { useRef, useState, useEffect } from "react";
import { TooltipBase } from "./wrapper";
import React from "react";
import TooltipContent from "./tooltipContent";

export type TooltipOnVisibleChange = (visible: boolean) => void

interface Props {
    text?: string | React.ReactNode
    type?: StatusTypes
    placement?: Placement
    visible?: boolean
    initialVisible?: boolean
    hideArrow?: boolean
    trigger?: TriggerTypes
    enterDelay?: number
    leaveDelay?: number
    offset?: number
    className?: string
    portalClassName?: string
    portalStyle?:React.CSSProperties
    onVisibleChange?: TooltipOnVisibleChange
}


type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type TooltipProps = Props & NativeAttrs


const Tooltip: React.FC<TooltipProps> = ({
    children,
    initialVisible=false,
    text,
    type,
    offset=12,
    placement='top',
    enterDelay=100,
    leaveDelay=20,
    trigger='hover',
    onVisibleChange,
    portalClassName,
    portalStyle,
    hideArrow=false,
    visible: customVisible,
    ...props
}) => {

    const timer = useRef<number>()
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState<boolean>(initialVisible)
    const contentProps = {
        type,
        visible,
        offset,
        placement,
        hideArrow,
        parent: ref,
      portalClassName,
      portalStyle
    }
    const changeVisible = (nextState: boolean) => {
        const clear = () => {
          clearTimeout(timer.current)
          timer.current = undefined
        }
        const handler = (nextState: boolean) => {
          setVisible(nextState)
         onVisibleChange&&onVisibleChange(nextState)
          clear()
        }
        clear()
        if (nextState) {
          timer.current = window.setTimeout(() => handler(true), enterDelay)
          return
        }
        timer.current = window.setTimeout(() => handler(false), leaveDelay)
      }
      const mouseEventHandler = (next: boolean) => trigger === 'hover' && changeVisible(next)
      const clickEventHandler = () => trigger === 'click' && changeVisible(!visible)
      useEffect(() => {
          const handler=(event:Event) => trigger === 'click' && changeVisible(false)
        const callback = (event: Event) => {
          const el = ref.current
          if (!event || !el || el.contains((event as any).target)) return
          handler(event)
        }
    
        document.addEventListener('click', callback)
        return () => document.removeEventListener('click', callback)
      }, [ref,])
    

      useEffect(() => {
        if (customVisible === undefined) return
        changeVisible(customVisible)
      }, [customVisible])

      return (
          <TooltipBase
          id="tooltip-base"
          {...props}
           ref={ref}
          onClick={clickEventHandler}
          onMouseEnter={() => mouseEventHandler(true)}
          onMouseLeave={() => mouseEventHandler(false)}>
               {children}
               <TooltipContent {...contentProps} >{text}</TooltipContent>
          </TooltipBase>
      )
}

export default Tooltip