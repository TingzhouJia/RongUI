import { useState, useEffect } from "react";
import { Noticebase, CloseIcon, CloseX } from "./wrapper";
import React from "react";
import ReactDOM from "react-dom";

export interface NoticeProps {
    style?: React.CSSProperties;
    className?: string;
    duration?: number | null;
    children?: React.ReactNode;
    updateMark?: string;
    props?:HTMLDivElement
    closeIcon?: React.ReactNode;
    closable?: boolean;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onClose?: () => void;

    holder?: HTMLDivElement;
}


const Notice: React.FC<NoticeProps> = (props) => {
    const { onClose = () => { },holder,
        duration = 1.5, } = props
    const [closeTimer, setcloseTimer] = useState<number | null>(null)
    const clearCloseTimer = () => {
        if (closeTimer) {
            clearTimeout(closeTimer);
            setcloseTimer(null)
        }
    };
    const close = (e?: React.MouseEvent<HTMLAnchorElement>) => {
        if (e) {
            e.stopPropagation();
        }
        clearCloseTimer();
        const { onClose } = props;
        if (onClose) {
            onClose();
        }
    };

    useEffect(() => {
        clearCloseTimer()
        startCloseTimer()
        return () => {
            clearCloseTimer()
        }
    }, [duration, props.updateMark])

    const startCloseTimer = () => {
        if (duration) {
            setcloseTimer(window.setTimeout(() => {
                close();
            }, duration * 1000))
        }
    };
    const node = (
        <Noticebase style={props.style}
            onMouseEnter={clearCloseTimer}
            onMouseLeave={startCloseTimer}
            onClick={props.onClick} closable={props.closable}>
            {props.closable ? (
                <CloseIcon tabIndex={0} onClick={close} >
                    {props.closeIcon || <CloseX />}
                </CloseIcon>
            ) : null}
        </Noticebase>
    )
    if (holder) {
        return ReactDOM.createPortal(node, holder);
      }
    return node
}

export default Notice