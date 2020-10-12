import styled, { css } from "styled-components";
import { ClearableInputType } from "./clearable";


export const CloseBtn=styled.div<{type?:typeof ClearableInputType[number],hidden?:boolean}>`
color: rgba(0,0,0,0.25);
  font-size: 12px;

  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: rgba(0,0,0,0.45);
  }

  &:active {
    color: rgba(0,0,0,0.85);
  }

  + i {
    margin-left: 6px;
  }
  ${props=>props.type==='input'?css` margin: 0 4px;
  vertical-align: -1px;

  &:last-child {
    margin-right: 0;
  }`:css`position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  margin: 8px 8px 0 0;`}
`

export const Suffix=styled.span`
margin-left: 4px;
display: flex;
    flex: none;
    align-items: center;
`

export const Preffix=styled.span`
margin-right: 4px;
display: flex;
    flex: none;
    align-items: center;
`

const getHover=(color:string)=>{
    return css`
    border-color: ${color};
  border-right-width: 1px !important;
    `
}
const getActive=(color:string,)=>{
    return css`
    border-color:${props=>props.theme.type==='light'?color:"white"};
    border-right-width: 1px !important;
    outline: 0;
    `
}
const getDisabled=()=>{
    return css`
    color: rgba(0,0,0,0.25);
  background-color: rgba(232, 232, 232, 1);
  cursor: not-allowed;
  opacity: 1;

  &:hover {
    ${props=>getHover(props.theme.colors.primary)}
  }  
    `
}
const BasicInput=styled.div`

position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  padding: 3px 11px;
  color: rgba(0,0,0,0.85);
  font-size: 14px;
  line-height: 22px;
  background-color: #fff ;
  background-image: none;
  border: 1px solid rgba(0,0,0,0.45);
  border-radius: 2px;
  transition: all 0.3s;
  &:hover {
      ${props=>getHover(props.theme.colors.primary)}
  };
  &:focus {
      ${props=>getActive(props.theme.colors.primary)}
  }
`
export const AffixWrapper=styled(BasicInput)<{focused?:boolean,
disabled?:boolean,size:'small'|'large'|'default',withClear?:boolean,readonly?:boolean,borderless?:boolean}>`
    ${props=>props.withClear?css`padding: 0 !important;
  border: 0 !important;`:null}
  display: inline-flex;
  ${props=>props.disabled?css`background: transparent;`:null}
  > input {
      padding: 0;
      border: none;
      outline: none;
      &:focus {
        box-shadow: none;
      }
    }
  &::before {
      width: 0;
      visibility: hidden;
      content: '\a0';
    }
`
