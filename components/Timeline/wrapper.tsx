import styled, { css } from "styled-components";

export const TimeItemBase = styled.li`
 position: relative;
    margin: 0;
    padding-bottom: 20px;
    font-size: 14px;
    list-style: none;

`

export const ItemContent = styled.div<{ right?: boolean,labels?:boolean}>`
     position: relative;
      top: -4px;
      margin: 0 0 0  26px;
      word-break: break-word;
      ${
    props => !props.right ? css`
             width: ${props.labels?'calc(50% - 12px)':'calc(100% - 18px)'};
          margin: 0;
          text-align: right;
          `: css`
          ${
            props.labels?css`
            left: calc(50% - 4px);
            `:null
          }
           /* left: calc(50% - 4px);
          width: calc(50% - 14px); */
          text-align: left;
          `
    }
`

export const Itemlabel = styled.div<{ right?: boolean }>`
 position: absolute;
      top: -4px;
      width: calc(50% - 12px);
      text-align: right;
      ${
        props=>props.right?null:css`
        left: calc(50% + 16px);
    width: calc(50% - 14px);
    text-align: left;`
      }
`

export const ItemTail = styled.div<{ pending?: boolean ,right?:boolean,label?:boolean}>`

position: absolute;
${props => props.pending ? css` display: none;` : null}
      top: 10px;
 ${props=>props.right?
 css`left: 5px;`
:css`left: calc(100% - 4px);`};
      height: calc(100% - 10px);
      border-left: 2px solid #f0f0f0 ;
      &:last-child {
        display: none;
      }
      ${
        props=>props.label?css`left:calc(50% + 2px);`:null
      }
`

export const ItemHead = styled.div<{ dot?: boolean, color?: string, pending?: boolean,position?:'left'|'right',labels?:boolean }>`
${props => props.pending ? css` font-size: 12px;
      background-color: transparent;`: null}
      background-color: ${props=>props.theme.colors.background} ;
      border-color:${props => props.color};
      color:${props => props.color};
      ${props => props.dot ? css`
      position: absolute;
      top: 5.5px;
      left: ${props.position==='left'?'calc(100% - 10px)':"0px"};
      width: auto;
      height: auto;
      margin-top: 0;
      padding: 3px 1px;
      line-height: 1;
      text-align: center;
      border: 0;
      border-radius: 0;
      transform: translate(-50%, -50%);
      `: css`
      position: absolute;
      width: 10px;
      border-radius: 100px;
      left: ${props.position==='left'?'calc(100% - 10px)':"0px"};
      height: 10px;
      border: 2px solid ${props.color};
      `}
      ${
        props=>props.labels?css`
        left: 50%;
        margin-left: -4px;
        `:css``
      }
      
`

export const BasicTimeLine = styled.ul`
box-sizing: border-box;
    color: ${props=>props.theme.colors.fontColor};
    font-size: 14px;

    margin: 0;
    padding: 0;
    list-style: none;

`