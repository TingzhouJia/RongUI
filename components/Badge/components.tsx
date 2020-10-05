import styled, { keyframes, css } from "styled-components";
import { BadgeProps } from "./badge";

export const BadgeBase = styled.span<{status?:boolean}>`
      position: relative;
  display: inline-block;
  color: unset;
  line-height: 1;
  ${props=>props.status?css`
  line-height: inherit;
    vertical-align: baseline;
  `:''}
`
const badgeAnim=keyframes`
 0% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  100% {
    transform: scale(2.4);
    opacity: 0;
  }
`

export const BadgeNumber=styled.span<{dot?:boolean,multi?:boolean,small?:boolean,status?:boolean}>`
padding: ${(props)=>props.small?"0":props.multi?'0px 8px':"0 6px"};
position: absolute;
top: 0;
right: 0;
transform: translate(50%, -50%);
transform-origin: 100% 0%;
${props=>props.dot?css`
   z-index: auto;
    width: 6px;
    height:6px;
    background: #ff4d4f ;
    border-radius: 100%;
    box-shadow: 0 0 0 1px #fff ;
`:`
z-index: auto;
color: white;
height:${props.small?'14px':'20px'};
width:${props.small?'14px':'20px'}
font-weight: 300;
font-size: ${props.small?"12px":"14px"};
line-height: 22px;
white-space: nowrap;
text-align: center;
background: #ff4d4f ;
border-radius: 10px;
box-shadow: 0 0 0 1px #fff ;
a,
a:hover {
  color: #fff ;
}
`}
`
export const BadgeDot = styled.span<{color?:string,status?:boolean}>`
     ${props=>props.status?css`
      position: relative;
      top: -1px;
      display: inline-block;
      width:3px;
      height: 3px;
      vertical-align: middle;
      border-radius: 50%;`:''}
      background:${props=>props.color};
      &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid ${props=>props.color};
        border-radius: 50%;
        animation: ${badgeAnim} 1.2s infinite ease-in-out;
        content: '';
      }
`

export const BadgeText = styled.span<{ color?: string }>`
 margin-left: 8px;
 color: rgba(0,0,0,0.85);
 font-size: 14px;
 
`