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
    shape?: 'circle' | 'round'|'default'
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
    let {  type="default", mode, size="default", disabled = false, shape = "default", block = false, className = "", children, htmlType = "button", ...rest } = filterPropsWithGroup(props, groupConfig)

    const buttonRef = (ref as any) || useRef<HTMLButtonElement>()
    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        const { onClick } = props;
        if ( disabled) {
          
        }
        if (onClick) {
            (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
        }
    };

    return (<BaseButton
        id="base-button"
       type={htmlType as any}
        ctype={type}
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


