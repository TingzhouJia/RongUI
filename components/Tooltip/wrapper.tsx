import styled from "styled-components";

export const TooltipBase=styled.div`
width: max-content;
          display: inline-block;
`
export const TooltopContentBase=styled.div<{top?:string,left?:string,bg?:string,color?:string,transform?:string,hasShadow?:boolean}>`
position: absolute;
            width: auto;
            top: ${props=>props.top};
            left: ${props=>props.left};
            transform: ${props=>props.transform};
            background-color: ${props=>props.bg};
            color: ${props=>props.color};
            border-radius: 2px;
            padding: 0;
            z-index: 1000;
            box-shadow: ${props=>props.hasShadow ? props.theme.expressiveness.shadowMedium : 'none'};
`
export const Inner=styled.div`
 padding: 5px 10px;
            position: relative;
`

export const TipIcon=styled.span<{left?:string,top?:string,right?:string,bottom?:string,bgColorWithDark?:string,transform?:string}>`
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 6px 7px 6px 0;
          border-color: transparent ${props=>props.bgColorWithDark} transparent transparent;
          position: absolute;
          left: ${props=>props.left};
          top: ${props=>props.top};
          right: ${props=>props.right};
          bottom: ${props=>props.bottom};
          transform: ${props=>props.transform};
`
