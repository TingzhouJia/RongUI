import {  ResultType } from "../utils";
import React, { useRef, ReactNode } from "react";
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import { AlertIcon, iconMapOutlined, iconMapFilled, CloseBtn, CloseText, AlertDiv, CloseMsg ,CloseDescription} from "./wrapper";
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
}


const Alert: React.FC<AlertProps> = ({
    description,
    message,
    type="info",
    className = '',
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
        props.onClose&&props.onClose(e)
    };
    const renderIcon = () => {
       
        const iconType = (description ? iconMapOutlined : iconMapFilled)[type]
        return (<AlertIcon withDescription={!!description} id="alert-icon" type={type}>{icon ? icon : iconType}</AlertIcon>)
    }
    const isClosable = closeText ? true : closable;
    const renderCloseIcon = () => {
        return isClosable ? (
            <CloseBtn
                type="button"
                onClick={handleClose}
                id="close-btn"
                tabIndex={0}
            >
                {closeText ? (
                    <CloseText id="close-text" >{closeText}</CloseText>
                ) : (
                        <CloseOutlined />
                    )}
            </CloseBtn>):null
    }
    
    return (<AlertDiv id="alert_base" closed={!!closed} type={type} description={description?1:0} icon={showIcon||icon?1:0} message={!!message} closable={!!closable} className={className} role="alert" ref={ref} >
        {showIcon ? renderIcon() : null}
        <CloseMsg id="alert-msg">{message}</CloseMsg>
        <CloseDescription id="alert-desc">{description}</CloseDescription>
        {renderCloseIcon()}
    </AlertDiv>)
}


export default Alert