
import React, { useState, useRef } from 'react';
import { DrawerHandler, DrawerHanderIcon } from './wrapper';
import Child from './drawerChild'
import { createPortal } from 'react-dom';
import usePortal from '../utils/usePortal';
export type IPlacement = 'left' | 'top' | 'right' | 'bottom';

type ILevelMove = number | [number, number];

type IStringOrHtmlElement = string | HTMLElement;
interface IProps extends Omit<React.HTMLAttributes<any>, 'onChange'> {
    width?: string | number;
    height?: string | number;
    open?: boolean;
    defaultOpen?: boolean;
    handler?: React.ReactElement | false;
    placement?: IPlacement;
    level?: null | string | string[];
    levelMove?: ILevelMove | ((e: { target: HTMLElement, open: boolean }) => ILevelMove);
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
    switchScrollingEffect?: (close?: boolean) => void;
}


interface IChildProps extends IDrawerChildProps {
    visible?: boolean;
    afterClose?: () => void;
}
const DrawerWrapper: React.FC<IDrawerProps> = (props) => {
    const {
        placement = 'left',
        getContainer,
        defaultOpen = false,
        level = 'all',
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
        maskStyle = {},
        wrapperClassName = '',
        className = '',
        keyboard = true,
        } = props
    const [curOpen, SetOpen] = useState(props.open || !!defaultOpen)

    const onHandleClick = (e: React.MouseEvent | React.KeyboardEvent) => {
        const { onHandleClick, open } = props
        if (onHandleClick) {
            onHandleClick(e);
        }
        if (!open) {
            SetOpen(!curOpen)
        }
    }
    const rest={showMask,maskClosable,wrapperClassName,maskStyle,className,keyboard,placement,level,duration,ease,onChange}

    const onClose = (e: React.MouseEvent | React.KeyboardEvent) => {
        const { onClose, open } = props
        if (onClose) {
            onClose(e);
        }
        SetOpen(!!open)
    }

    const el = usePortal('drawer', getContainer)
    if(!el) return <></>
    return (
       createPortal(curOpen? <Child
        {...rest}
        getContainer={getContainer}
        open={curOpen}
        afterVisibleChange={ afterVisibleChange}
        handler={handler}
        onClose={onClose}
        onHandleClick={onHandleClick}
    />:<></>, el)
    )
}

export default DrawerWrapper

