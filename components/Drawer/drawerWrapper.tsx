
import React, { useState, useRef, useEffect } from 'react';
import { DrawerHandler, DrawerHanderIcon } from './wrapper';
import Child from './drawerChild'
import { createPortal } from 'react-dom';
import usePortal from '../utils/usePortal';
export type IPlacement = 'left' | 'top' | 'right' | 'bottom';


interface IProps extends Omit<React.HTMLAttributes<any>, 'onChange'> {
    width?: string | number;
    height?: string | number;
    open?: boolean;
    defaultOpen?: boolean;
    handler?: React.ReactElement | false;
    placement?: IPlacement;
    duration?: string;
    ease?: string;
    showMask?: boolean;
    maskClosable?: boolean;
    maskStyle?: React.CSSProperties;
    onChange?: ((open?: boolean) => void);
    afterVisibleChange?: ((open: boolean) => void);
    onHandleClick?: ((e: React.MouseEvent | React.KeyboardEvent) => void);
    onClose?: ((e: React.MouseEvent | React.KeyboardEvent) => void);
    keyboard?: boolean;
}
export interface IDrawerProps extends IProps {
    wrapperClassName?: string;
    getContainer?: () => HTMLElement|null;
}

export interface IDrawerChildProps extends IProps {
    getContainer?: () => HTMLElement|null;
    getOpenCount?: () => number;
}



const DrawerWrapper: React.FC<IDrawerProps> = (props) => {
    const {
        placement = 'left',
        getContainer,
        defaultOpen = false,
        duration = '.3s',
        ease = 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
        onChange = () => { },
        afterVisibleChange = () => { },
        handler = (
            <DrawerHandler>
                <DrawerHanderIcon />
            </DrawerHandler>
        ),
        showMask = true,
        maskClosable = true,
        style,
        maskStyle = {},
        wrapperClassName = '',
        className = '',
        keyboard = true,
        } = props
    const [curOpen, SetOpen] = useState(props.open)

    const onHandleClick = (e: React.MouseEvent | React.KeyboardEvent) => {
        const { onHandleClick } = props
        if (onHandleClick) {
            onHandleClick(e);
        }
       
        SetOpen(false)
        
    }
    useEffect(() => {
        SetOpen(props.open)
       
    }, [props.open])
    const rest={showMask,maskClosable,wrapperClassName,maskStyle,className,keyboard,placement,duration,ease,onChange}

    const onClose = (e: React.MouseEvent | React.KeyboardEvent) => {
        const { onClose } = props
        if (onClose) {
            onClose(e);
        }
        SetOpen(false)
    }

    const el = usePortal('drawer', getContainer)
    if(!el) return <></>
    return (
      curOpen? createPortal( <Child
        {...rest}

        style={style}
        getContainer={getContainer}
        open={curOpen}
        afterVisibleChange={ afterVisibleChange}
        handler={handler}
        onClose={onClose}
        onHandleClick={onHandleClick}
      >{props.children}</Child>, el):<></>
    )
}

export default DrawerWrapper

