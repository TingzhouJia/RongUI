import styled, { css } from "styled-components";

export const Noticebase=styled.div<{closable?:boolean}>`
     padding: 7px 20px 7px 10px;
    border-radius: 3px 3px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background: ${props=>props.theme.colors.background};
    display: block;
    width: auto;
    line-height: 1.5;
    position: relative;
    margin: 10px 0;
    ${
        props=>props.closable?css` padding-right: 20px;`:null
    }
`

export const CloseIcon=styled.a`
position: absolute;
      right: 5px;
      top: 3px;
      color: #000;
      cursor: pointer;
      outline: none;
      font-size: 16px;
      font-weight: 700;
      line-height: 1;
      text-shadow: 0 1px 0 ${props=>props.theme.colors.background};
      filter: alpha(opacity=20);
      opacity: .2;
      text-decoration: none;

      &:hover {
        opacity: 1;
        filter: alpha(opacity=100);
        text-decoration: none;
      }
`
export const CloseX=styled.span`
      &::after{
        content: '×';
      }
`

export const NotificationBase=styled.div`
position: fixed;
  z-index: 1010;
  max-width: calc(100vw - 32px);
  margin-right: 24px;
`


export const WithIcon=styled.span`
position: absolute;
      margin-left: 4px;
      font-size: 24px;
      line-height: 24px;
`

export const AutoMargin=styled.span`

      display: block;
      
        width: 4px;
        background-color: transparent;
        pointer-events: none;
        &::before {
          display: block;
          content: '';
        }
`

export const Desc=styled.span<{icon?:boolean}>`
        font-size:14px;
        ${props=>props.icon?css`margin-left: 48px;`:null}
`

export const Msg=styled.span<{icon?:boolean}>`
      display: inline-block;
      margin-bottom: 8px;
      color: ${props=>props.theme.colors.fontColor};
      font-size: 16px;
      line-height: 24px;
      ${props=>props.icon?css`margin-bottom: 4px;
      margin-left: 48px;`:null}
`

export const Btn=styled.span`
float: right;
      margin-top: 16px;
`