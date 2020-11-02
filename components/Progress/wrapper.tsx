import styled, { keyframes, css } from "styled-components";
import { palette } from "../styles";

export const ProgressText = styled.span`
    display: inline-block;
    width: 2em;
    margin-left: 8px;
    color: #666;
    font-size: 14px;
    line-height: 1;
    white-space: nowrap;
    text-align: left;
    vertical-align: middle;
    word-break: normal;
`
export const OuterLine=styled.div`
    display: flex;
    width: 100%;
    flex-direction:row;
    align-items:center;
`

export const InnerLine=styled.div<{bg:string,size?:string}>`
position: relative;
    display: inline-block;
    width: 100%;
    overflow: hidden;
    vertical-align: middle;
    background-color: ${props=>props.bg||"#f0f0f0"};
    height:${props=>props.size==='small'?6:8}px;
    border-radius: 100px;
`

export const BgLine=styled.div<{active?:boolean,width?:number,bg?:string}>`
width:${props=>props.width}%;
position: relative;
transition:all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
height:100%;
border-radius:100px;
background-color:${props=>props.bg};
&::before {
    ${props=>props.active?anim:''}
    position:absolute;
    top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color:#fff ;
      border-radius: 10px;
      opacity: 0;
      content:''
}
`


const CircleText=css`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 1;
    white-space: normal;
    text-align: center;
    transform: translate(-50%, -50%);
`


const ProgressAnimi = keyframes`
    0% {
    width: 0;
    opacity: 0.1;
  }
  20% {
    width: 0;
    opacity: 0.5;
  }
  100% {
    width: 100%;
    opacity: 0;
  }
`
const anim=css`animation: ${ ProgressAnimi } 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite;`