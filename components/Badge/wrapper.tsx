import styled, { keyframes, css } from "styled-components";
import {getColor} from '../utils/getColor'

export const BadgeBase = styled.span<{status?:boolean}>`
  position: relative;
  display: inline-block;
  color: unset;
  list-style: none;
`


export const BadgeNumber=styled.span<{dot?:boolean,multi:boolean,small?:boolean,}>`

position: absolute;
top: 0;
display:flex;
justify-content:center;
align-items:center;
right: 0;
transform: translate(50%, -50%);
transform-origin: 100% 0%;
font-size: ${props=>props.small?props.theme.size.small:props.theme.size.default};
span {
  font-size: ${props=>props.small?"8px":"14px"};
}

z-index: auto;
color: white;
padding: ${props=>props.small?props.multi?"0px 6px":"0px":props.multi?'0px 8px':"5px"};
height:${props=>props.small?'14px':'20px'};
line-height:${props=>props.small?'14px':'20px'};
min-width:${props=>props.small?'14px':'20px'};
font-weight: 300;
white-space: nowrap;

text-align: center;
background: #ff4d4f ;
border-radius: ${props=>props.multi?"10px":"50%"};
box-shadow: 0 0 0 1px #fff ;
cursor:pointer;
& :hover {
  color: #fff ;
}

`

export const BadgeDot = styled.span<{color?:string,status:string,istext?:boolean}>`
      width:6px;
      height: 6px;
      border-radius: 100%;
     ${props=>props.istext?css`
      position: relative;
      top: -1px;
      display: inline-block;
      vertical-align: middle;
      `:css`
      position: absolute;
    top: 0;
    right: 0;
      
      
      `}
      background:${props=>props.color||(getColor(props.status,props.theme))};

`

export const BadgeText = styled.span`
 margin-left: 8px;
 color: rgba(0,0,0,0.85);
 font-size: 14px;
`