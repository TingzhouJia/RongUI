import styled, { css, DefaultTheme } from 'styled-components'
import React, { useState, useRef } from 'react';
import { StatusTypes, ButtonModes, NormalSizes } from '../utils';
import { filterPropsWithGroup } from './utils';
import { useButtonGroupContext } from './btn-group-context';
import ButtonGroup from './button-group';
import { BaseButton } from './wrapper';


export interface BaseButtonProps {
    size?: NormalSizes
    type?: ButtonModes
    mode?: StatusTypes
    className?: string
    disabled?: boolean
    shape?: 'circle' | 'round'
    loading?: boolean
    block?: boolean
}

export type NativeButtonProps = {
    htmlType?: 'submit' | 'button' | 'reset',
    onClick?: React.MouseEventHandler<HTMLElement>;
} & Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'> & BaseButtonProps;

interface CompoundedComponent
    extends React.ForwardRefExoticComponent<Partial<NativeButtonProps> & React.RefAttributes<HTMLElement>> {
    Group: typeof ButtonGroup;

}




const InnerButton: React.ForwardRefRenderFunction<unknown, Partial<NativeButtonProps>> = (props, ref) => {
    const groupConfig = useButtonGroupContext()
    let { loading, type="default", mode, size, disabled = false, shape = "round", block = false, className = "", children, htmlType = "button", ...rest } = filterPropsWithGroup(props, groupConfig)
    const [innerLoading, setinnerLoading] = useState(!!loading)
    const buttonRef = (ref as any) || useRef<HTMLButtonElement>()
    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        const { onClick } = props;
        if (innerLoading || disabled) {
            return;
        }
        if (onClick) {
            (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
        }
    };

    return (<BaseButton
        id="base-button"
        {...rest}
        type={type}
        ref={buttonRef}
        onClick={handleClick}
        mode={mode}
        block={block}
        size={size}
        disabled={disabled}
        shape={shape} className={className}>{children || " "}</BaseButton>)
}


const Button = React.forwardRef<unknown, NativeButtonProps>(InnerButton) as CompoundedComponent
Button.displayName = 'Button'
Button.Group = ButtonGroup
export default Button


