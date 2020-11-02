import React, { useState } from 'react'
import Input, { InputBasicProps } from './input';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Pwd } from './wrapper';
export interface PasswordProps extends InputBasicProps {
    readonly action?: string;
    visibilityToggle?: boolean;
    iconRender?: (visible: boolean) => React.ReactNode;
}
const ActionMap: Record<string, string> = {
    click: 'onClick',
    hover: 'onMouseOver',
};

const Password: React.FC<PasswordProps> = (props) => {
    const [visible, setVisible] = useState(false);

    const onVisibleChange = () => {
        const { disabled } = props;
        if (disabled) {
            return;
        }

        setVisible(!visible);
    };
    const getIcon = () => {
        const { action, iconRender = (visible:boolean) => visible?<EyeOutlined id="open-eye"/>:<EyeInvisibleOutlined id="close-eye" /> } = props;
        const icon = iconRender(visible);
        const iconProps = {
            onClick: onVisibleChange,
            key: 'passwordIcon',
            onMouseDown: (e: MouseEvent) => {
                e.preventDefault();
            },
            onMouseUp: (e: MouseEvent) => {
                e.preventDefault();
            },
        };
    return <Pwd id="pwd-icon">{React.cloneElement(React.isValidElement(icon) ? icon : <></>, iconProps)}</Pwd>;
    };
    const renderPassword = () => {
        const {
            className,

            size,
            visibilityToggle=true,
            ...restProps
        } = props;


        const { suffix, iconRender, ...rest } = props
        const suffixIcon = visibilityToggle && getIcon();

      
        const omittedProps = {
            ...rest,
            
            type: visible ? 'text' : 'password',

            suffix: suffixIcon,
        };

        if (size) {
            omittedProps.size = size;
        }

        return <Input id="rong-password" {...omittedProps} />;
    };
    return (<>{renderPassword()}</>)
}

export default Password
