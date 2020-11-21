import styled, { css } from "styled-components";

export const DividerBase=styled.div<{hasChildren?:boolean,plain?:boolean,dashed?:boolean,orientation:'left' | 'right' | 'center',type?:'vertical'|'horizontal'}>`
border-top: 1px solid rgba(0,0,0,0.06);
${props=>props.dashed?css`
    background-color: none;
    border-style: dashed;
    border-color: rgba(0,0,0,0.06);
    
    border-width: 1px 0 0;
`:null};
border-style:${props=>props.dashed?'dashed':'normal'};
${props=>props.type==='vertical'?css`
    position: relative;
    top: -0.06em;
    display: inline-block;
    height: 0.9em;
    margin: 0 8px;
    vertical-align: middle;
    ${props.dashed?css`border-width: 0 0 0 1px;`:null}
    border-top: 0;
    border-left: 1px solid rgba(0,0,0,0.06);
`:css`display: flex;
    clear: both;
    width: 100%;
    min-width: 100%; 
    margin: 24px 0;`}
    ${props=>props.hasChildren?css`
    display: flex;
    margin: 16px 0;
    color: rgba(0,0,0,0.85);
    font-weight: ${props.plain?'normal':'500'};
    font-size: ${props.plain?'14px':'16px'};
    white-space: nowrap;
    text-align: center;
    border-color: rgba(0,0,0,0.06);
    border-top: 0;
    &::before {
      position: relative;
      top: 50%;
      width: ${props.orientation==='left'?'5%':props.orientation==='right'?'95%':'50%'};
     
      border-top: 1px solid transparent;
      border-top-color: rgba(0,0,0,0.06);
      border-bottom: 0;
      ${props.dashed?css`border-style: dashed none none;`:null};
      transform: translateY(50%);
      content: '';
    };
    &::after {
      position: relative;
      top: 50%;
     width: ${props.orientation==='left'?'95%':props.orientation==='right'?'5%':'50%'};
      border-top: 1px solid transparent;
      ${props.dashed?css`border-style: dashed none none;`:null}
      border-top-color: rgba(0,0,0,0.06);
      border-bottom: 0;
      transform: translateY(50%);
      content: '';
    }
    `:null};
   

`

export const DivideInner=styled.span`
  display: inline-block;
    padding: 0 1em;
`