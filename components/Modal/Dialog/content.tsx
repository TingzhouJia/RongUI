import { DialogProps } from "..";
import React, { useRef, useEffect } from "react";
import { ModalFooterWrap, ModalTitleWrap, ModalHeaderWrap, ModalCloseBtn, ModalContentWrap, ModalContentBody } from "../wrapper";
import { CloseOutlined } from "@ant-design/icons";
import { offset } from "../utils";

export interface ContentRef {
    focus?: () => void;
    getDOM: () => HTMLDivElement | null;
    changeActive: (next: boolean) => void;
}
const sentinelStyle = { width: 0, height: 0, overflow: 'hidden', outline: 'none' };
export interface ContentProps extends DialogProps {

    onVisibleChanged: (visible: boolean) => void;
    onClick: React.MouseEventHandler;
}
const Content = React.forwardRef<ContentRef, ContentProps>((props, ref) => {
    const {
        closable,
        width,
        height,
        footer,
        title,
        closeIcon,
        style,
        className,
        visible,
        bodyStyle,
        bodyProps,
        children,
        modalRender,
        onClose,
        onVisibleChanged,
        onClick,
        mousePosition,
    } = props;

    const sentinelStartRef = useRef<HTMLDivElement>(null);
    const sentinelEndRef = useRef<HTMLDivElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);
    React.useImperativeHandle(ref, () => ({
        focus: () => {
            sentinelStartRef.current?.focus();
        },
        getDOM: () => dialogRef?.current,
        changeActive: (next) => {
            const { activeElement } = document;
            if (next && activeElement === sentinelEndRef.current) {
                sentinelStartRef?.current?.focus();
            } else if (!next && activeElement === sentinelStartRef.current) {
                sentinelEndRef?.current?.focus();
            }
        },
    }));
    const [transformOrigin, setTransformOrigin] = React.useState<string>();
    const contentStyle: React.CSSProperties = {};
    useEffect(() => {
        if (width !== undefined) {
            contentStyle.width = width;
          }
          if (height !== undefined) {
            contentStyle.height = height;
          }
          if (transformOrigin) {
            contentStyle.transformOrigin = transformOrigin;
          }
        
          function onPrepare() {
            const elementOffset = offset(dialogRef.current as any);
        
            setTransformOrigin(
              mousePosition
                ? `${mousePosition.x - elementOffset.left}px ${mousePosition.y - elementOffset.top}px`
                : '',
            );
          }
          onPrepare()
       
    }, [])
    let footerNode: React.ReactNode;
    if (footer) {
        footerNode = <ModalFooterWrap>{footer}</ModalFooterWrap>;
    }

    let headerNode: React.ReactNode;
    if (title) {
        headerNode = (
            <ModalHeaderWrap>
                <ModalTitleWrap>
                    {title}
                </ModalTitleWrap>
            </ModalHeaderWrap>
        );
    }

    let closer: React.ReactNode;
    if (closable) {
        closer = (
            <ModalCloseBtn id="modal-close-btn">
                {closeIcon || <CloseOutlined />}
            </ModalCloseBtn>
        );
    }

    const content = (
        <ModalContentWrap id="rong-modal-content">
            {closer}
            {headerNode}
            <ModalContentBody id="rong-modal-content-body" style={bodyStyle} {...bodyProps}>
                {children}
            </ModalContentBody>
            {footerNode}
        </ModalContentWrap>
    );
    return <div key="dialog-element"
        role="document" onClick={onClick}
        style={contentStyle}>
        <div tabIndex={0} ref={sentinelStartRef} aria-hidden="true" />
        {modalRender ? modalRender(content) : content}
        <div tabIndex={0} ref={sentinelEndRef}  aria-hidden="true" />
    </div>
})

Content.displayName="Content"

export default Content