import styled, { css } from "styled-components";
import { NormalSizes } from "../utils";

export const DesItem=styled.div`
    padding-bottom: 0;
    vertical-align: top;
    > span {
      display: inline-flex;
      align-items: baseline;
    }
`

export const DesItemContainer=styled.div<{direction?:'vertical'|'horizontal',bordered?:boolean,column:number,size?:NormalSizes}>`
 display: flex;
 flex:auto;
 flex-direction:${props=>props.direction==='vertical'?'column':'row'};
 justify-content:flex-start;
 align-self:stretch;
    justify-self:stretch;
 align-items:${props=>props.direction==='vertical'?'flex-start':'flex-start'};
 border-left:${props=>props.bordered?'1px solid '+props.theme.colors.borderColor:'none'};
 border-top:${props=>props.bordered?'1px solid '+props.theme.colors.borderColor:'none'};
 /* width:${props=>100/props.column+'%'}; */
`

export const DesItemLabel=styled.span<{colon?:boolean,layout?:'vertical'|'horizontal',labelExist?:boolean,bordered?:boolean,size?:'small'|'default'|'large'}>`
    /* position:relative; */
    padding:${props=>props.size==='small'?'8px 12px':props.size==='default'?'12px 16px':'16px 24px'};
    display:flex;
    flex:1;
    align-self:stretch;
    ${props=>props.bordered?css`
        background-color:#fafafa ;
       ${props.layout==='vertical'?css` border-bottom:1px solid ${props.theme.colors.borderColor} ;`:css` border-right:1px solid ${props.theme.colors.borderColor} ;`}
    `:''}

    ${props=>props.labelExist?css`
    color: ${props.theme.colors.fontColor};
    font-weight: normal;

    font-size: 14px;
    font-weight:500;
    line-height: 22px;
    text-align: start;
    margin: ${props.layout==='vertical'?'0':'0 4px 0 0px'};
    &::after {
      position: relative;
       ${props.colon?css`content:" :"`:null}
      /* top: -0.5px; */
      
    }
    `:css`&::after {
      margin: 0;
      content: '';
    }`
    }
`


export const DesItemContent=styled.span<{vertical?:boolean,size?:NormalSizes}>`
    display: flex;
    flex: 1;
    color: ${props=>props.theme.colors.fontColor};
    font-size: 14px;
    line-height: 22px;
    align-self:stretch;
    justify-self:stretch;
    overflow-wrap: break-word;
    ${props=>props.vertical?css`padding:${props.size==='small'?'8px 12px':props.size==='default'?'8px 16px':'8px 24px'};;`:null}
   
`

 /* padding:${props=>props.size==='small'?'8px 12px':props.size==='default'?'12px 16px':'16px 24px'} */

export const DesTitle=styled.h3<{size:NormalSizes,bordered?:boolean}>`
    flex: auto;
    overflow: hidden;
    color: ${props=>props.theme.colors.fontColor};
    font-weight: bold;
    font-size: ${props=>props.size==='small'?'16px':props.size==='default'?'20px':'24px'};
    padding-left:${props=>props.bordered?'0':props.size==='small'?'12px':props.size==='default'?'16px':'20px'};
    line-height: ${props=>props.size==='small'?'16px':props.size==='default'?'20px':'24px'};
    margin-bottom:0;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const DesExtra=styled.div`
    margin-left: auto;
    color: ${props=>props.theme.colors.fontColor};
    font-size: 14px;
`

export const DesHeader=styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`

export const DescBase=styled.div`
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items:flex-start; 
`

export const DescView=styled.div<{bordered?:boolean}>`
    width: 100%;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:flex-start;
    flex-wrap:wrap;
    overflow: hidden;
    border-radius:2px;
    border-bottom:${props=>props.bordered?'1px solid '+props.theme.colors.borderColor:'none'};
    border-right:${props=>props.bordered?'1px solid '+props.theme.colors.borderColor:'none'};
`
