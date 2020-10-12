import styled, { css } from "styled-components";

const habs=css`
    position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const ImgBase=styled.div`
  display: inline-block;
  position: relative;

`

export const ImgPlaceholder=styled.div`
    ${habs}
    `

export const ImgWrap=styled.img<{place?:boolean}>`
width: 100%;
    height: auto;
${props=>props.place?css`
    background-color: #ebebeb ;
      background-repeat: no-repeat;
      background-position: center center;
`:null}
`