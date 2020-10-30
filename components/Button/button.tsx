import styled, { css, DefaultTheme } from 'styled-components'
import React, { useState, useRef } from 'react';
import { StatusTypes, ButtonModes, NormalSizes, ResultType } from '../utils';
import { filterPropsWithGroup } from './utils';
import { useButtonGroupContext } from './btn-group-context';
import ButtonGroup from './button-group';
import { palette } from '../styles';


export interface BaseButtonProps {
    size?: NormalSizes
    mode?: ButtonModes
    type?: StatusTypes
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

const dashedMixin = css`
    border: 1px dashed #d9d9d9 ;
    color:black ;
    background:transparent;
    &:hover,&:active,&:focus {
        border-color:${(props) => props.theme.colors.primary};
        color:${(props) => props.theme.colors.primary};
    }
`
const disabledMixin = css` 
    border:1px solid rgba(0,0,0,0.25) ;
    background: #f0f0f0 ;
    color: rgba(0,0,0,0.25) ;
    &:hover,&:focus, &:active,& {
        cursor:not-allowed;
    }
`
const normalMixin = css`
      border: 1px solid #f0f0f0 ;
      color: black;
      background: white;
      &:hover,&:active,&:focus {
        border-color:${(props) => props.theme.colors.primary};
        color:${(props) => props.theme.colors.primary};
    }

`
const textMixin = css`
    color:black ;
    border:none;
    background:transparent;

    &,&:active,&:hover {
        background:#fafafa;
    }
`



const primaryMixin = css`
color:white;
background: ${props => props.theme.colors.primary};
border: 1px solid transparent;
    &:hover,&:active,&:focus {
            opacity: 0.8;
    }
`
const linkMixin = css`
    border:none;
    background:transparent;
    color:${props => props.theme.colors.primary};
`

const Switcher = (mode?: ButtonModes) => {
    switch (mode) {
        case 'link':
            return linkMixin
        case 'primary':
            return primaryMixin
        case 'text':
            return textMixin
        case 'dashed':
            return dashedMixin
        default:
            return normalMixin
    }
}

const TypeBd={
    success:palette.success,
    error:palette.error,
    info:palette.info,
    warning:palette.warning,

}

const sizeSwicher = (size?: NormalSizes) => {
    switch (size) {
        case 'small':
            return css`font-size:11px;padding:2px 8px;`
        case 'large':
            return css`font-size: 18px; padding:8px 22px`
        default:
            return css`font-size:14px;padding:5px 17px;`
    }
}

const shapeSwitcher = (shape?: 'round' | 'circle',size?: NormalSizes) => {
    switch (shape) {
        case 'round':
            return css`border-radius:2px;`
        case 'circle':
            return css`border-radius:50%;
            ${size==='small'?'width:25px;height:25px;padding:3px;':size==='large'?'width:45px;height:45px;padding:10px;':'width:35px;height:35px;padding:7px;'};`
        default:
            return css`border-radius:2px;`
    }
}

const BaseButton = styled.button.attrs((props: NativeButtonProps) => ({ type: props.htmlType, className: props.className,ctype:props.type }))`

${props => (Switcher(props.mode))}

position: relative;
display: inline-block;
font-weight: 300;
${props => props.disabled ? disabledMixin : ''}

${props => sizeSwicher(props.size)}
${props => shapeSwitcher(props.shape)}
white-space: nowrap;
text-align: center;
display:flex;
justify-content:center;

align-items:center;
background-image: none;
overflow: hidden;
cursor: pointer;
transition: background-color 200ms ease 0ms, box-shadow 200ms ease 0ms,border 200ms ease 0ms, color 200ms ease 0ms;
user-select: none;
touch-action: manipulation;
${props=>props.ctype?css`color:white;border:none;background:${TypeBd[props.ctype as ResultType]};&:hover,&:focus, &:active{
    border:none;
    color:white;
    opacity:0.85;
}`:null}
${
    props=>props.block?css`width:100%;`:null
}
&,&:active, &:focus {
    outline: 0;
  }
`
const InnerButton: React.ForwardRefRenderFunction<unknown, Partial<NativeButtonProps>> = (props, ref) => {
    const groupConfig = useButtonGroupContext()
    let { loading, type, mode, size, disabled = false, shape="round", block = false, className = "", children, htmlType = "button", ...rest } =filterPropsWithGroup(props,groupConfig)
    const [innerLoading, setinnerLoading] = useState(!!loading)
    const buttonRef = (ref as any) || useRef<HTMLButtonElement>()
    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        const { onClick } = props;
        if (innerLoading||disabled) {
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
Button.Group=ButtonGroup
export default Button


