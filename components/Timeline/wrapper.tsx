import styled, { css } from "styled-components";

export const TimeItemBase = styled.li`
 position: relative;
    margin: 0;
    padding-bottom: 20px;
    font-size: 14px;
    list-style: none;

`

export const ItemContent = styled.div<{ right?: boolean,label?:boolean}>`
     position: relative;
      top: -4px;
      margin: 0 0 0  26px;
      word-break: break-word;
      ${
    props => !props.right ? css`
             width: ${props.label?'calc(50% - 12px)':'calc(100% - 18px)'};
          margin: 0;
          text-align: right;
          `: css`
           /* left: calc(50% - 4px);
          width: calc(50% - 14px); */
          text-align: left;
          `
    }
`

export const Itemlabel = styled.div<{ right?: boolean }>`
 position: absolute;
      top: -7.001px;
      width: calc(50% - 12px);
      text-align: right;
    ${props => props.right ? css`
        /* left: calc(50% + 14px);
        width: calc(50% - 14px); */
        text-align: left;
    `: null}
`

export const ItemTail = styled.div<{ pending?: boolean ,right?:boolean}>`

position: absolute;
${props => props.pending ? css` display: none;` : null}
      top: 10px;
 ${props=>props.right?
 css`left: 5px;`
:css`left: calc(100% - 6px);`};
      height: calc(100% - 10px);
      border-left: 2px solid rgba(0,0,0,0.25);
      &:last-child {
        display: none;
      }
`

export const ItemHead = styled.div<{ dot?: boolean, color?: string, pending?: boolean,position?:'left'|'right' }>`
${props => props.pending ? css` font-size: 12px;
      background-color: transparent;`: null}
      background-color: #fff ;
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
      
`

export const BasicTimeLine = styled.ul`
box-sizing: border-box;
    color: rgba(0,0,0,.85);
    font-size: 14px;

    margin: 0;
    padding: 0;
    list-style: none;

`