import styled, { css, keyframes } from "styled-components";
import { palette } from "../styles";

const checkanimation = keyframes`
 0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
`

export const CheckBoxBase = styled.span<{ checked?: boolean, disabled?: boolean }>`
    position: relative;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    vertical-align: middle;
    outline: none;
    cursor: ${props=>props.disabled?"not-allowed":"pointer"};
    &:hover,&:focus {
        border-color: ${props=>props.theme.colors.primary};
    };
    &:hover::after {
        visibility: visible;
    }
    ${props=>props.checked?checkedcss:null}
    ${props=>props.disabled?css`
    & + span {
      color:${props.theme.colors.disabledColor};
      cursor: not-allowed;
    }
    `:null}

    & + span {
        padding-right: 8px;
        padding-left: 8px;
    }
    
`
export const CheckBoxInput = styled.input<{disabled?:boolean}>`
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      outline:none;
      width: 100%;
      height: 100%;
      cursor: ${props=>props.disabled?"not-allowed":"pointer"};
      opacity: 0;
      &:hover,&:focus {
        border-color: ${props=>props.disabled?props.theme.colors.borderColor:props.theme.colors.primary};
    }
`

    const checkedcss = css`
&::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 2px;
      visibility: hidden;
      animation: ${checkanimation} 0.36s ease-in-out;
      animation-fill-mode: backwards;
      content: '';
    }
`

export const CheckBoxLabel = styled.label<{disabled:boolean,checked?:boolean}>`
display: inline-block;
    line-height: unset;

    cursor:${props=>props.disabled?"not-allowed":'pointer'};
    &:hover {
        border-color: ${props=>props.disabled?props.theme.colors.borderColor:props.theme.colors.primary};
    }
    ${props=>props.checked?checkedcss:null}
    & + & {
      margin-left: 8px;
    }

`

export const CheckboxInner = styled.span<{ checked?: boolean,disabled?:boolean }>`
      position: relative;
      display: block;

      width:16px;
      height: 16px;
    /* z-index:1; */
      background-color: ${props=>props.checked?props.theme.colors.primary:props.disabled?props.theme.colors.disabledBackground:'#fff'} ;
      border: 1px solid ${props=>props.checked?props.theme.colors.primary:props.theme.colors.borderColor};
      border-radius: 2px;
      border-collapse: separate;
      transition: all 0.3s;
      cursor:${props=>props.disabled?"not-allowed":'pointer'};
      ${props => props.checked ? css`
        &::after {
            position: absolute;
            left:2px;
        
    opacity: 1;
    transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    text-align:center;
        content:'✓';
        color:white;
        }
    `: css` 
    &::after {
        position: absolute;
        top: 50%;
        left: 22%;
        display: table;
        cursor:${props.disabled?"not-allowed":'pointer'};
        width: ${(16 / 14) * 5} px;
        height:${(16 / 14) * 8} px;
        border-top: 0;
        border-left: 0;
        transform: rotate(45deg) scale(0) translate(-50%, -50%);
        opacity: 0;
        transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
        content: ' ';
      };
    `}
      &:hover {
        border-color: ${props=>props.disabled?"rgba(0,0,0,0.25)":props.theme.colors.primary};
    }
`

export const CheckboxGroup=styled.div`
display: inline-block;
`

export const CheckboxGroupItem=styled.div`
     display: inline-block;
      margin-right: 8px;
      &:last-child {
        margin-right: 0;
      }
      & + & {
        margin-left: 0;
      }
`