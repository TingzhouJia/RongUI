import styled, { css } from "styled-components";

const habs=css`
    position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`

export const ImgBase=styled.div`
  display: inline-block;
  position: relative;

`

export const ImgPlaceholder=styled.div`
    ${habs};
    background:#f0f0f0;
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