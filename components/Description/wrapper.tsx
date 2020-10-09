import styled, { css } from "styled-components";

export const DesItem=styled.div`
    padding-bottom: 0;
    vertical-align: top;
    > span {
      display: inline-flex;
      align-items: baseline;
    }
`

export const DesItemContainer=styled.div<{direction?:'vertical'|'horizontal',bordered?:boolean,column:number}>`
 display: flex;
 flex-direction:${props=>props.direction==='vertical'?'column':'row'};
 justify-content:start;
 align-items:center;
 border:${props=>props.bordered?'1px solid rgba(0,0,0,0.45)':'none'};
 width:${props=>100/props.column+'%'};
`

export const DesItemLabel=styled.span<{colon?:boolean,label?:boolean,bordered?:boolean,size?:'small'|'default'|'large'}>`
    padding:${props=>props.size==='small'?'8px 12px':props.size==='default'?'12px 16px':'16px 24px'}
    ${props=>props.bordered?css`
        background-color:#fafafa ;
        border-bottom:1px solid rgba(0,0,0,0.45);
    `:''}

    ${props=>props.label?css`
    color: rgba(0,0,0,0.85);
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    text-align: start;

    &::after {
      position: relative;
      content:${props.colon?":":" "}
      top: -0.5px;
      margin: 0 8px 0
        8px;
    }
    `:css`&::after {
      margin: 0;
      content: '';
    }`}
`


export const DesItemContent=styled.span<{size?:'small'|'large'|'default'}>`
display: table-cell;
    flex: 1;
    color: rgba(0,0,0,0.85);
    font-size: 14px;
    line-height: 22px;
    overflow-wrap: break-word;
    padding:${props=>props.size==='small'?'8px 12px':props.size==='default'?'12px 16px':'16px 24px'}
`



export const DesTitle=styled.div`
    flex: auto;
    overflow: hidden;
    color: rgba(0,0,0,0.85);
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    white-space: nowrap;
    text-overflow: ellipsis;
`

export const DesExtra=styled.div`
margin-left: auto;
    color: rgba(0,0,0,0.85);
    font-size: 14px;
`

export const DesHeader=styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`

export const DescBase=styled.div`
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items:flex-start;
    
`

export const DescView=styled.div`
    width: 100%;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:flex-start;
    flex-wrap:wrap;
    overflow: hidden;
    border-radius:2px;
`
