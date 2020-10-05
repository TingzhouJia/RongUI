import {  ResultType } from "../utils";
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
import styled, { css } from "styled-components";
import {palette} from '../styles'
export interface AlertProps {
    type?: ResultType;
    description?: string;
    message?: string;
    icon?: ReactNode
    role?: string;
    closable?: boolean;
    closeText?: string | ReactNode
    showIcon?: boolean
    className?: string;
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

const TypeBg={
    error:palette.errorLight,
    success:palette.successLight,
    warning:palette.warningLight,
    info:palette.infoLight
}

const TypeBd={
    error:palette.error,
    success:palette.success,
    warning:palette.warning,
    info:palette.info
}


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
const CloseText = styled.span`
    color: #d9d9d9;
    transition: color 0.3s;
    &:hover {
      color: #f0f0f0;
    }
`
const CloseMsg = styled.span`
    color:#434343;
    display: block;
    margin-bottom: 4px;
`
const AlertIcon = styled.span<{type:ResultType}>`
    position: absolute;
    top: 50%;
    left: 16px;
    color:${props=>TypeBg[props.type]}
`
const CloseDescription = styled.span`
    display:none;
    font-size: 14px;
    line-height: 22px;
`

const AlertDiv = styled.div<AlertProps>`
    display: ${props => props.message ? 'block' : 'none'}; 
    position: relative;
    padding: ${props=>props.icon?"":'8px 15px 8px 37px'};
    background:${props=>TypeBg[props.type as ResultType]};
    font-size:14px;
    line-height: 22px;
    border: 1px solid ${props=>TypeBd[props.type as ResultType]};
    border-radius:2px;
    word-wrap: break-word;
    ${props=>props.closable?css`padding-right: 30px;`:''}
`


const Alert: React.FC<AlertProps> = ({
    description,
    message,
    type="info",
    className = '',
    onMouseEnter,
    onMouseLeave,
    onClick,
    afterClose,
    showIcon,
    closable,
    closeText,
    icon,
    ...props
}) => {
    const [closed, setClosed] = React.useState(false);
    const ref = useRef<HTMLDivElement>(null)
    const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        setClosed(true);
        props.onClose?.(e);
    };
    const renderIcon = () => {
       
        const iconType = type ? ((description ? iconMapOutlined : iconMapFilled)[type]) : null;
        return (<AlertIcon type={type}>{icon ? icon : iconType}</AlertIcon>)
    }
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
    return (<AlertDiv type={type} description={description} icon={icon} message={message} closable={closable} className={className} role="alert" ref={ref} >
        {showIcon ? renderIcon() : null}
        <CloseMsg>{message}</CloseMsg>
        <CloseDescription>{description}</CloseDescription>
        {renderCloseIcon()}
    </AlertDiv>)
}


export default Alert