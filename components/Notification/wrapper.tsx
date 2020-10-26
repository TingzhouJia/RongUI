import styled, { css } from "styled-components";

export const Noticebase=styled.div<{closable?:boolean}>`
     padding: 7px 20px 7px 10px;
    border-radius: 3px 3px;
    border: 1px solid #999;;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border: 0px solid rgba(0, 0, 0, 0);;
    background: #fff;
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
      text-shadow: 0 1px 0 #fff;
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

export const NotificationBase=styled.div``