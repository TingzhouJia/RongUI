import styled, { css } from "styled-components";

export const DesItem=styled.div`
 padding-bottom: 0;
    vertical-align: top;
    > span {
      display: inline-flex;
      align-items: baseline;
    }
   


`

export const DesItemContainer=styled.div`
 display: flex;
`

export const DesItemLabel=styled.span<{colon?:boolean,label?:boolean}>`
    ${props=>props.colon?css``:css`
        &::after {
      content: ' ';
    }
    `}
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


export const DesItemContent=styled.span`
display: table-cell;
    flex: 1;
    color: rgba(0,0,0,0.85);
    font-size: 14px;
    line-height: 22px;
    overflow-wrap: break-word;
`

export const DescRow=styled.tr`
    &> th,
    &> td {
      padding-bottom: 16px;
    }
    &:last-child {
      border-bottom: none;
    }
`

