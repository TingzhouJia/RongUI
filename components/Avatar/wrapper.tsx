import styled, { DefaultTheme } from "styled-components"
import { NormalSizes } from "../utils"
import { getSize } from "../utils/getColor"


export const AvatarContainer = styled.span<{ width: string, radius: string,size:NormalSizes }>`
    width:${props => props.width};
    height:${props => props.width};
    border-radius:${props => props.radius};
    display: inline-block;
    cursor:pointer;
    
    position: relative;
    overflow: hidden;
    vertical-align: top;
    background-color: #ccc;
    vertical-align: top;
    &,&>* {
        color:#fff;
        font-size:${props=>getSize(props.size,props.theme)};
    }
`
export const AvatarText=styled.span`
 position: absolute;
 left: 50%;
 top: 50%;
 font-size: 1em;
 text-align: center;
 text-overflow:ellipsis;
 transform: translate(-50%, -50%) scale(0.65);
 white-space: nowrap;
 user-select: none;
`
export const AvatarImg=styled.img<{radius:string}>`
display: inline-block;
width: 100%;
height: 100%;
object-fit: cover;
background:transparent;
border-radius: ${props=>props.radius};
`