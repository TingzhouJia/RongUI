
import React, { useState, useRef, useEffect, useContext } from 'react'

import Button from '../Button'
import {BaseButtonProps} from '../Button/button'
import TooltipContent from '../Tooltip/tooltipContent'
import { PopConfirmBase, PopconfirmButtons, PopconfirmMessage, PopconfirmTitle } from './wrapper'
import { Placement } from '../utils'
import { ExclamationCircleFilled } from '@ant-design/icons'
import { TooltipBase } from '../Tooltip/wrapper'
import { CSSProperties, ThemeContext } from 'styled-components'

export interface PopconfirmProps {
    cancelText?: string
    cancelType?: BaseButtonProps
    disabled?: boolean
    icon?: React.ReactNode
    confirmText?: string
    placement?: Placement
    title?: React.ReactNode
    confirmType?: BaseButtonProps,
    style?:CSSProperties
    className?:string
    onConfirm?: () => void
    onCancel?: () => void
}

const Popconfirm: React.FC<PopconfirmProps> = ({
    children,
    cancelText,
    cancelType,
    disabled = false,
    icon,
    confirmText,
    placement="top",
    style,
    confirmType,
    onCancel,
    onConfirm,
    title,
    className
}) => {
    const [visible, setVisible] = useState(false)
    const timer = useRef<number | undefined>(0)
    const ref = useRef<HTMLDivElement>(null)
    const theme=useContext(ThemeContext)
    const contentProps = {
        visible,
        offset: 12,
        placement,
        hideArrow: false,
        parent: ref,
        background: "#fff"
    }
    const changeVisible = (nextState: boolean) => {
        const clear = () => {
            clearTimeout(timer.current)
            timer.current = undefined
        }
        const handler = (nextState: boolean) => {
            setVisible(nextState)
            clear()
        }
        clear()
        if (nextState) {
            timer.current = window.setTimeout(() => handler(true), 200)
            return
        }
        timer.current = window.setTimeout(() => handler(false), 50)
    }
    useEffect(() => {
        const handler = (event: Event) => changeVisible(false)
        const callback = (event: Event) => {
            const el = ref.current
            if (!event || !el || el.contains((event as any).target)) return
            handler(event)
        }

        document.addEventListener('click', callback)
        return () => document.removeEventListener('click', callback)
    }, [ref,])
    const handleConfirm = () => {
        onConfirm && onConfirm()
        changeVisible(false)
    }
    const handleCancel = () => {
        onCancel && onCancel()
        changeVisible(false)
    }
    const content = (<PopConfirmBase className={className}>
        <PopconfirmMessage>
            {icon || <ExclamationCircleFilled style={{ color: theme.colors.warning,fontSize:"20px" }} />}
            <PopconfirmTitle>{title}</PopconfirmTitle>
        </PopconfirmMessage>
        <PopconfirmButtons>
            <Button size="small" {...cancelType} onClick={handleCancel}>{cancelText || 'No'}</Button>
            <Button size="small" type="primary" {...confirmType} onClick={handleConfirm} style={{marginLeft:"7px"}}>{confirmText || 'Yes'}</Button>
        </PopconfirmButtons>
    </PopConfirmBase>)
    const handleOpen = () => {
        if (disabled) { return }
        changeVisible(!visible)

    }
    return <TooltipBase style={style} id="popconfirm_base" onClick={handleOpen} ref={ref}>
        {children}
        <TooltipContent  {...contentProps}  >{content}</TooltipContent>
    </TooltipBase>
}

export default Popconfirm
