
import React, { useRef } from "react";
import { ModalFooterWrap, ModalTitleWrap, ModalHeaderWrap, ModalCloseBtn, ModalContentWrap, ModalContentBody, ModalDocument } from "../wrapper";
import { CloseOutlined } from "@ant-design/icons";
import { DialogProps } from ".";

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
        width=520,
        footer,
        style,
        title,
        closeIcon,
        bodyProps,
        children,
        modalRender,
        onClose,
        onClick,
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
 

    let footerNode: React.ReactNode;
    if (footer) {
        footerNode = <ModalFooterWrap id="modal-footer">{footer}</ModalFooterWrap>;
    }

    let headerNode: React.ReactNode;
    if (title) {
        headerNode = (
            <ModalHeaderWrap id="modal-header">
                <ModalTitleWrap id="modal-title">
                    {title}
                </ModalTitleWrap>
            </ModalHeaderWrap>
        );
    }

    let closer: React.ReactNode;
    if (closable) {
        closer = (
            <ModalCloseBtn id="modal-close-btn" onClick={onClose}>
                {closeIcon || <CloseOutlined />}
            </ModalCloseBtn>
        );
    }

    const content = (
        <ModalContentWrap id="rong-modal-content">
            {closer}
            {headerNode}
            <ModalContentBody id="rong-modal-content-body"  {...bodyProps}>
                {children}
            </ModalContentBody>
            {footerNode}
        </ModalContentWrap>
    );
   
    return <ModalDocument key="dialog-element"
        role="document" onClick={onClick}
        centered={props.centered}
        style={{...style,width}}
      >
        <div tabIndex={0} style={sentinelStyle} ref={sentinelStartRef} aria-hidden="true" />
        {modalRender ? modalRender(content) : content}
        <div tabIndex={0} style={sentinelStyle} ref={sentinelEndRef}  aria-hidden="true" />
    </ModalDocument>
})

Content.displayName="Content"

export default Content