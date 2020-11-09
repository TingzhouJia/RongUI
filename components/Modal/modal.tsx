import Button, { ButtonProps } from "../Button";
import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { ModalCloseX } from "./wrapper";
import BaseModal from "./Dialog";
import { StatusTypes } from "../utils";

export const destroyFns: Array<() => void> = [];
export interface ModalProps {
    visible?: boolean;
    title?: React.ReactNode | string;
    closable?: boolean;
    onOk?: (e: React.MouseEvent<HTMLElement>) => void;
    onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
    afterClose?: () => void;
    centered?: boolean;
    width?: number;
    footer?: React.ReactNode;
    okText?: React.ReactNode;
    cancelText?: React.ReactNode;
    maskClosable?: boolean;
    okButtonProps?: ButtonProps;
    cancelButtonProps?: ButtonProps;
    style?: React.CSSProperties;
    className?: string;
    maskClassName?: string
    getContainer?: () => HTMLElement | HTMLElement;
    zIndex?: number;
    maskStyle?: React.CSSProperties;
    mask?: boolean;
    keyboard?: boolean;
    wrapProps?: any;
    closeIcon?: React.ReactNode;
}

export interface ModalFuncProps {
    className?: string;
    visible?: boolean;
    title?: React.ReactNode;
    content?: React.ReactNode;
    onOk?: (...args: any[]) => any;
    onCancel?: (...args: any[]) => any;
    okButtonProps?: ButtonProps;
    cancelButtonProps?: ButtonProps;
    centered?: boolean;
    width?: number;
    okText?: React.ReactNode;
    cancelText?: React.ReactNode;
    icon?: React.ReactNode;
    //masks
    mask?: boolean;
    maskClassName?: string
    maskClosable?: boolean;
    zIndex?: number;
    okCancel?: boolean;
    style?: React.CSSProperties;
    maskStyle?: React.CSSProperties;
    type?: StatusTypes | 'confirm';
    keyboard?: boolean;
    getContainer?: () => HTMLElement | HTMLElement;
}
interface ModalInterface extends React.FC<ModalProps> {

}

const Modal: ModalInterface = (props) => {
    const {
        footer,
        visible,
        getContainer,
        closeIcon,
        ...restProps
    } = props;
    const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { onCancel,afterClose } = props;
        if (onCancel) {
            onCancel(e);
        }
        afterClose&&afterClose()
    };

    const handleOk = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { onOk } = props;
        if (onOk) {
            onOk(e);
        }
    };
    const closeIconToRender = (
        <ModalCloseX id="close-x">
            {closeIcon || <CloseOutlined />}
        </ModalCloseX>
    );

    const renderFooter = () => {
        const { okText, cancelText, } = props;
        return okText&&cancelText?(
            <>
                {
                    cancelText && <Button className="cancel-button" onClick={handleCancel} {...props.cancelButtonProps}>
                        {cancelText || 'Cancel'}
                    </Button>
                }
                {
                    okText && <Button
                    className="ok-button"
                        onClick={handleOk}
                        type="primary"
                        {...props.okButtonProps}
                    >
                        {okText || 'Yes'}
                    </Button>
                }
            </>
        ):false
    };
    return (<BaseModal {...restProps}

        footer={footer || renderFooter()}
        visible={visible}
        onClose={handleCancel}
        closeIcon={closeIconToRender}
    />)

}


export default Modal
