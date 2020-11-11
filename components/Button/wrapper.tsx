import styled, { css } from "styled-components"
import { StatusTypes, ButtonModes, NormalSizes } from "../utils"
import { getBg, getBorder, getColor } from '../utils/getColor'
import { ThemeTy } from "../styles"
import { NativeButtonProps } from "./button"
const dashedMixin = css`
    border: 1px dashed ${props=>props.theme.colors.borderColor} ;
    color:black ;
    background:transparent;
`
const disabledMixin = css` 
    border:1px solid ${props=>props.theme.colors.borderColor} ;
    background: ${props=>props.theme.colors.disabledBackground} ;
    color: ${props=>props.theme.colors.disabledColor} ;
    &:hover,&:focus, &:active,& {
        cursor:not-allowed;
    }
`
const normalMixin = css`
      border: 1px solid ${props=>props.theme.colors.borderColor} ;
      background: transparent;
     
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
border: none;
    &:hover,&:active,&:focus {
            opacity: 0.85;
    }
`

const linkMixin = css`
    border:none;
    background:transparent;
    color:${props => props.theme.colors.primary};
    &:hover,&:active,&:focus {
            opacity: 0.85;
    }
`

const Switcher = (mode?: StatusTypes, type?: ButtonModes) => {
    switch (type) {
        case 'link':
            return css`
                ${linkMixin}
                color:${props => props.theme.colors.primary};
                &:hover,&:active,&:focus {
                        opacity:0.75;
                    }
                `
        case 'primary':
            return css`
                    ${primaryMixin}
                    background:${props => getColor(mode, props.theme)}
                    &:hover,&:active,&:focus {
                        opacity:0.75;
                    }
                `
        case 'text':
            return css`
                ${textMixin}
                color:${props => props.theme.colors.fontColor};
                background:transparent;
                &:hover {
                    background: #f5f5f5;
                }
                `
        case 'dashed':
            return css`
                ${dashedMixin}
                color:${props => mode ? getColor(mode, props.theme) : props.theme.colors.fontColor};
                border-color:${props => mode ? getColor(mode, props.theme) : props.theme.colors.borderColor};
                ${
                mode ? css`
                     opacity:0.75;
                    `: css`
                     &:hover,&:active,&:focus {
                color:${props => props.theme.colors.primary};
                border-color:${props => props.theme.colors.primary};
                opacity:0.75;
                }
                    `
                }
                `
        default:
            return css`
                ${normalMixin}
                color:${props => props.theme.colors.fontColor};
                background:transparent;
                border-color:${props => mode ? getColor(mode, props.theme) : props.theme.colors.borderColor};
                &:hover,&:active,&:focus {
                    opacity:0.75;
                ${
                mode ? null : css`
                    border-color:${props => props.theme.colors.primary};
                    color:${props => props.theme.colors.primary};
                    `
                }         
                }
                `
    }
}



const shapeSwitcher = (shape?: 'round' | 'circle', size?: NormalSizes) => {
    switch (shape) {
        case 'round':
       
            return size==='small'?css`border-radius:24px;padding:0 12px;`:size==='default'? css`height: 32px;
    padding: 4px 16px;
    font-size: 14px;
    border-radius: 32px;`:css`height: 40px;
    padding: 6.4px 20px;
    font-size: 16px;
    border-radius: 40px;`
        case 'circle':
            return css`border-radius:50%;
            ${size === 'small' ? css`width: 24px;
    height: 24px;
    padding: 0;
    font-size: 14px;` : size === 'large' ? css`width: 40px;
    height: 40px;
    padding: 4.9px 0;
    font-size: 18px;` : css`width: 32px;
    height: 32px;
    padding: 2.4px 0;
    font-size: 16px;`};`
        default:
            return size==='small'?css`height: 24px;
    padding: 0 7px;
    font-size: 14px;
    border-radius: 2px;`:size==='default'?css`height: 32px;
    padding: 4px 15px;
    font-size: 14px;
    border-radius: 2px;`:css`    height: 40px;
    padding: 6.4px 15px;
    font-size: 16px;
    border-radius: 2px;`
    }
}

export 
const BaseButton = styled.button.attrs((props: NativeButtonProps) => ({ type: props.htmlType, className: props.className, ctype: props.type }))`

${props => (Switcher(props.mode,props.ctype))}

position: relative;
display: inline-block;
font-weight: 300;
${props => props.disabled ? disabledMixin : ''}


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

${
    props => props.block ? css`width:100%;` : null
    }
&,&:active, &:focus {
    outline: 0;
  }
`

export const ButtonGroupDiv = styled.div.attrs(props => ({ className: props.className }))`
            background-color: transparent;
            overflow: hidden;
            height: min-content;
            display: inline-flex;
            border-radius:0;
            padding:0;
            border:none;
`
