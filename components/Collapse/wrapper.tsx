import styled, { css } from "styled-components";
import { clearfix } from "../Card/wrapper";

export const CollapseArrow = styled.div<{ disabled?: boolean,right?:boolean }>`
      position: absolute;
      top: 50%;
      right: ${props=>props.right?'16px':'auto'};
      left:${props=>!props.right?'16px':'auto'};
      cursor:${props => props.disabled ? 'not-allowed' : 'pointer'};
      z-index: 1;
      width: 12px;
      height: 12px;
      margin-top: -6px;
      color: rgba(0,0,0,0.25);
      transform: translateY(-50%);
      font-size: 12px;
      line-height: 12px;
      & svg {
          transition: transform 0.24s;
        }
      &:focus {
        outline: none;
      }
`

export const CollapseBase = styled.div<{ border?: boolean, ghost?: boolean }>`
  background-color: ${props => props.ghost ? "transparent" : "#fff"} ;
  border: ${props => props.border ? '1px solid rgba(0,0,0,0.45)' : 0};
  border-bottom: 0;
  border-radius:2px;
`


export const CollapseHeader = styled.div<{ arrow?: boolean,right?:boolean }>`
      position: relative;
      padding: 16px;
      padding-left: ${props => props.arrow ? "12px" : '40px'};
      padding-right:${props=>props.right?'40px':'12px'};
      color:rgba(0,0,0,0.85);
      line-height: 22px;
      cursor: pointer;
      transition: all 0.3s;
     ${clearfix}
     &:focus {
        outline: none;
      }
`

export const PanelBase = styled.div<{ active?: boolean, disable?: boolean,ghost?:boolean }>`
    border-bottom: ${props=>props.ghost?"0":"1px solid rgba(0,0,0,0.45)"};
    &:last-child {
      &,
      & > div {
        border-radius: 0 0 2px 2px;
      }
    }
`

export const PanelExtra = styled.div`
 float: right;
`

export const PanelContentWrap = styled.div<{isActive:boolean,border?:boolean,ghost?:boolean}>`
    overflow: hidden;
    display:${props=>props.isActive?'block':'none'};
    color: rgba(0,0,0,0.85);
    background-color: ${props=>props.border||props.ghost?"transparent":"#fff"} ;
    border-top: ${props=>props.border?"1px solid rgba(0,0,0,0.45)":"0"};

`

export const PanelContentBox = styled.div<{border?:boolean,ghost?:boolean}>`
${props=>props.border?null:css`padding-top: 4px;`}
padding:16px;
${props=>props.ghost?css` padding-top: 12px;
          padding-bottom: 12px;`:null}
`