import styled from "styled-components";

export const PopConfirmBase=styled.div`
padding: 12px 16px;
    color: ${props=>props.theme.colors.fontColor};
  border-radius:2px;
`

export const PopconfirmMessage=styled.div`
    position: relative;
    display:flex;
    flex-direction:row;
    padding: 4px 0 12px;
    color: ${props=>props.theme.colors.fontColor};
    font-size: 14px;
`
export const PopconfirmTitle=styled.div`
    padding-left:22px
`
export const PopconfirmButtons=styled.div`
margin-bottom: 4px;
display:flex;
flex-direction:row;
justify-content:flex-end;
`

