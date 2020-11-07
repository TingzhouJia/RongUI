import Button, { ButtonProps } from "../Button";
import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { ModalCloseX } from "./wrapper";
import BaseModal from "./Dialog";


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
    destroyOnClose?: boolean;
    style?: React.CSSProperties;
    className?: string;
    maskClassName?:string
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
    width?: string | number;
    okText?: React.ReactNode;
    cancelText?: React.ReactNode;
    icon?: React.ReactNode;
    //masks
    mask?: boolean;
    maskClassName?:string
    maskClosable?: boolean;
    zIndex?: number;
    okCancel?: boolean;
    style?: React.CSSProperties;
    maskStyle?: React.CSSProperties;
    type?: string;
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
        const { onCancel } = props;
        if (onCancel) {
            onCancel(e);
        }
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
        return (
            <>
                <Button onClick={handleCancel} {...props.cancelButtonProps}>
                    {cancelText || 'Cancel'}
                </Button>
                <Button
                    onClick={handleOk}
                    type="primary"
                    {...props.okButtonProps}
                >
                    {okText || 'Yes'}
                </Button>
            </>
        );
    };
    return (<BaseModal {...restProps}
        footer={renderFooter()}
        visible={visible}
        onClose={handleCancel}
        closeIcon={closeIconToRender}
    ></BaseModal>)

}


export default Modal
