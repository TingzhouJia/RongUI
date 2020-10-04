import { StatusTypes } from "../utils";
import React, { useRef, ReactNode } from "react";
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';
import ExclamationCircleOutlined from '@ant-design/icons/ExclamationCircleOutlined';
import InfoCircleOutlined from '@ant-design/icons/InfoCircleOutlined';
import CloseCircleOutlined from '@ant-design/icons/CloseCircleOutlined';
import CheckCircleFilled from '@ant-design/icons/CheckCircleFilled';
import ExclamationCircleFilled from '@ant-design/icons/ExclamationCircleFilled';
import InfoCircleFilled from '@ant-design/icons/InfoCircleFilled';
import CloseCircleFilled from '@ant-design/icons/CloseCircleFilled';
import styled from "styled-components";

export interface AlertProps {
    type?: StatusTypes;
    description?: string;
    message?: string;
    banner: boolean
    closable?: boolean;
    closeText?: string | ReactNode
    showIcon?: boolean
    className: string;
    onClose?: React.MouseEventHandler<HTMLButtonElement>;
    afterClose?: () => void;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
const iconMapFilled = {
    success: CheckCircleFilled,
    info: InfoCircleFilled,
    error: CloseCircleFilled,
    warning: ExclamationCircleFilled,
};

const iconMapOutlined = {
    success: CheckCircleOutlined,
    info: InfoCircleOutlined,
    error: CloseCircleOutlined,
    warning: ExclamationCircleOutlined,
};

const CloseBtn = styled.button`
    position: absolute;
    top: 8px ;
    right: 10px;
    padding: 0;
    overflow: hidden;
    font-size: 14px;
    line-height:22px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`
const CloseText=styled.span`
    color: #d9d9d9;
    transition: color 0.3s;
    &:hover {
      color: #f0f0f0;
    }
`
const CloseMsg=styled.span`
    color:#434343;
`
const AlertIcon=styled.span`
    position: absolute;
    top: 50%;
    left: 16px;
`
const CloseDescription=styled.span`
    display:none;
    font-size: 14px;
    line-height: 22px;
`

const AlertDiv=styled.div<AlertProps>`
        display: ${props=>props.message?'block':'none'}; 
    position: relative;
`

const Alert: React.FC<AlertProps> = ({
    description,
    message,
    banner,
    className = '',
    onMouseEnter,
    onMouseLeave,
    onClick,
    afterClose,
    closable,
    closeText,
    ...props
}) => {
    const [closed, setClosed] = React.useState(false);
    const ref = useRef<HTMLElement>(null)
    const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        setClosed(true);
        props.onClose?.(e);
    };
    const isClosable = closeText ? true : closable;
    const renderCloseIcon = () => {
        return isClosable ? (
            <CloseBtn
                type="button"
                onClick={handleClose}

                tabIndex={0}
            >
                {closeText ? (
                    <CloseText >{closeText}</CloseText>
                ) : (
                        <CloseOutlined />
                    )}
            </CloseBtn>
        ) : null;
    };
    return (<div >
        {renderCloseIcon()}
    </div>)
}