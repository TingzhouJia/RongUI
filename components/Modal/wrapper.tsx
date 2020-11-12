import styled, { css } from "styled-components";

export const ModalContentWrap=styled.div`
position: relative;
    background-color: ${props=>props.theme.colors.background};
    background-clip: padding-box;
    border: 0;
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05);
    pointer-events: auto;

`

export const ModalTitleWrap=styled.div`
    margin: 0;
    color: ${props=>props.theme.colors.fontColor};
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    word-wrap: break-word;
`

export const ModalFooterWrap=styled.div`
    padding: 10px 16px;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    background: 0 0;
    border-top: 1px solid ${props=>props.theme.colors.borderColor};
    border-radius: 0 0 2px 2px;
    & > button {
        margin-left:20px;
    }
`

export const ModalHeaderWrap=styled.div`
    padding: 16px 24px;
    color: rgba(0,0,0,.85);
    background: ${props=>props.theme.colors.background};
    border-bottom: 1px solid ${props=>props.theme.colors.borderColor};
    border-radius: 2px 2px 0 0;
`

export const ModalCloseBtn=styled.button`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    padding: 0;
    color: rgba(0,0,0,.45);
    font-weight: 700;
    line-height: 1;
    text-decoration: none;
    background: 0 0;
    border: 0;
    outline: 0;
    cursor: pointer;
    transition: color .3s;
`

export const ModalContentBody=styled.div`
    padding: 24px;
    font-size: 14px;
    line-height: 1.5715;
`

export const ModalmaskWrap=styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    height: 100%;
    background-color: ${props=>props.theme.expressiveness.maskColor};  
`

export const ModalRenderRoot=styled.div``

export const ModalBodyWrap=styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    outline: 0;
    z-index:1000;
` 

export const ModalCloseX=styled.span`
 display: block;
      width: 56px;
      height:56px;
      font-size: 16px;
      font-style: normal;
      line-height: 56px;
      text-align: center;
      text-transform: none;
      text-rendering: auto;
      &:focus,
    &:hover {
      color: rgba(0,0,0,.75);
      text-decoration: none;
    }
`

export const ModalDocument=styled.div<{centered?:boolean}>`
    position:absolute;
    top:100px;
    left:50%;
    transform:translateX(-50%);
    ${
        props=>props.centered?css`
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
        `:null
    }
`

export const ConfirmBody=styled.div`
display:flex;
flex-direction:column;
`

export const ConfirmHeader=styled.div`
display:flex;
flex-direction:row;
justify-content:flex-start;
align-items:center;
`

export const ConfirmTitle=styled.span`
margin-left:15px;
font-size:18px;
`

export const ConfirmContent=styled.div`
margin-top:10px;
margin-left:38px;
`

export const ConfirmBtn=styled.div`
display:flex;
flex-direction:row;
justify-content:flex-end;
& > button {
    margin-left:10px;
}
`