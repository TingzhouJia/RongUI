import styled, { keyframes, css } from "styled-components";

const anim=keyframes`
0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
`
export const RadioLabel = styled.label`
    box-sizing: border-box;
    padding: 0;
    color: rgba(0,0,0,.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    outline: none;
    position: relative;
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    margin: 0 8px 0 0;
`

export const RadioWrapper=styled.span<{disabled:boolean}>`
    ${
        props=>props.disabled?css`
        &,&>* {
            cursor:not-allowed;
        }
        `:null
    }
`

export const RadioInput=styled.input`
position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    cursor: pointer;
    opacity: 0;
`

export const RadioInner=styled.span<{checked?:boolean,disabled?:boolean}>`
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 16px;
    height: 16px;
    background-color: ${props=>props.disabled?props.theme.colors.disabledBackground: props.theme.colors.background};
    border: 1px solid ${props=>props.checked?props.theme.colors.primary:props.theme.colors.borderColor};
    border-radius: 100px;
    &::after {
        position: absolute;
    top: 3px;
    left: 3px;
    display: table;
    width: 8px;
    height: 8px;
    background-color: ${props=>props.theme.colors.primary};
    border-top: 0;
    border-left: 0;
    border-radius: 8px;
    transform: ${props=>props.checked?'scale(1)':'scale(0)'};
    opacity: ${props=>props.checked?'1':'0'};
    transition: all .3s cubic-bezier(.78,.14,.15,.86);
    content: " ";
    }
`

export const GroupWrapper=styled.div<{row?:boolean}>`
            display: flex;
          flex-direction: ${props=>props.row ? 'row' : 'column'};
          
`