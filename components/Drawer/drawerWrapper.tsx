import Portal from 'rc-util/lib/PortalWrapper';
import React, { useState, useRef } from 'react';
import { DrawerHandler, DrawerHanderIcon } from './wrapper';
import Child from './drawerChild'
export type IPlacement = 'left' | 'top' | 'right' | 'bottom';

type ILevelMove = number | [number, number];

type IStringOrHtmlElement = string | HTMLElement;
interface IProps extends Omit<React.HTMLAttributes<any>, 'onChange'> {
    width?: string | number;
    height?: string | number;
    open?: boolean;
    defaultOpen?: boolean;
    handler?: React.ReactElement | null | false;
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
    forceRender?: boolean;
    getContainer?: IStringOrHtmlElement | (() => IStringOrHtmlElement) | null | false;
}

export interface IDrawerChildProps extends IProps {
    getContainer?: () => HTMLElement;
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
        getContainer = 'body',
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
        forceRender = false, } = props
    const [curOpen, SetOpen] = useState(props.open || !!props.defaultOpen)
    const onHandleClick = (e: React.MouseEvent | React.KeyboardEvent) => {
        const { onHandleClick, open } = props
        if (onHandleClick) {
            onHandleClick(e);
        }
        if (!open) {
            SetOpen(!curOpen)
        }
    }

    const onClose = (e: React.MouseEvent | React.KeyboardEvent) => {
        const { onClose, open } = props
        if (onClose) {
            onClose(e);
        }
        SetOpen(!!open)
    }
    const dom = useRef<HTMLDivElement>(null)
    const $forceRender = !!handler || forceRender;
    if (!getContainer) {
        return (<div className={wrapperClassName} ref={dom}>
            <Child
                {...props}
                open={props.open||props.defaultOpen}
                handler={handler}
                getContainer={() => dom.current as HTMLDivElement}
                onClose={onClose}
                onHandleClick={onHandleClick}
            />
        </div>)
    }
    return (
        <Portal
            visible={props.open || defaultOpen}
            forceRender={$forceRender}
            getContainer={getContainer as string}
            wrapperClassName={wrapperClassName}
        >
            {({ visible, afterClose, getContainer, ...rest }: IChildProps) => (
 
                <Child
                    {...props}
                    {...rest}
                    getContainer={getContainer}
                    open={visible || props.open}
                    afterVisibleChange={afterClose !== undefined ? afterClose : props.afterVisibleChange}
                    handler={handler}
                    onClose={onClose}
                    onHandleClick={onHandleClick}
                />
            )}
        </Portal>
    )
}

export default DrawerWrapper

