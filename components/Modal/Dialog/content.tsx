import { DialogProps } from "..";
import React, { useRef } from "react";
import { ModalFooterWrap, ModalTitleWrap, ModalHeaderWrap, ModalCloseBtn, ModalContentWrap, ModalContentBody } from "../wrapper";
import { CloseOutlined } from "@ant-design/icons";

export interface ContentRef {
    focus?: () => void;
    getDOM: () => HTMLDivElement | null;
    changeActive: (next: boolean) => void;
}

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
            <ModalCloseBtn>
                {closeIcon || <CloseOutlined />}
            </ModalCloseBtn>
        );
    }

    const content = (
        <ModalContentWrap>
            {closer}
            {headerNode}
            <ModalContentBody style={bodyStyle} {...bodyProps}>
                {children}
            </ModalContentBody>
            {footerNode}
        </ModalContentWrap>
    );
    return <div key="dialog-element"
        role="document" onClick={onClick}>
        <div tabIndex={0} ref={sentinelStartRef} aria-hidden="true" />
        {modalRender ? modalRender(content) : content}
        <div tabIndex={0} ref={sentinelEndRef}  aria-hidden="true" />
    </div>
})

Content.displayName="Content"

export default Content