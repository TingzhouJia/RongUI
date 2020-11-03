import styled, { keyframes, css } from "styled-components";
import { ToRGBA } from "../utils/hex_rgb";
import { NormalSizes } from "../utils";
const ani = keyframes`
   0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }

`
const skeletonAnim = css`
background: linear-gradient(
    90deg,
    #f2f2f2 25%,
    ${ToRGBA("#f2f2f2", 0.5)} 37%,
    #f2f2f2 63%
  );
  background-size: 400% 100%;
  animation: ${ani} 1.4s ease infinite;
`

export const ParaWrap = styled.ul<{active?:boolean}>`
        margin-top:0;
        padding: 0;
      > li {
        width: 100%;
        height: 16px;
        list-style: none;
        ${
  props => props.active ? skeletonAnim : css`
     background:  #f2f2f2 ;
    `
  }

        &:last-child:not(:first-child):not(:nth-child(2)) {
          width: 61%;
        }

        + li {
          margin-top: 16px;
        }
      }
`
const getSize = (size?: NormalSizes ): string => {
    
    const sizes: { [key in NormalSizes]: string } = {
        small: '30px',
        default:'40px',
        large: '65px',
    }
  
    return sizes[size?size:'default']
}
export const Elem = styled.span<{ size?: 'large' | 'small' | 'default', shape?: 'circle' | 'square' | 'round' }>`
 
      width:${props=>getSize(props.size)};
      height:${props=>getSize(props.size)};
      border-radius:${props=>props.shape==='circle'?"50%":props.shape==="round"?"10px":"2px"};
      background:transparent;
      display:block;
`

export const ElemBtn = styled(Elem) <{ active?: boolean }>`
 display: inline-block;
  vertical-align: top;
  ${
  props => props.active ? skeletonAnim : css`
     background:  #f2f2f2 ;
    `
  }
  border-radius: 2px;
`

export const ElemTitle = styled.h3<{ active?: boolean }>`
    width: 100%;
      height: 16px;
      margin-top:0;
      margin-bottom: 16px;
      ${
  props => props.active ? skeletonAnim : css`
     background:  #f2f2f2 ;
    `
  }
`

export const ElemAvatar = styled.div<{ active?: boolean }>`
  margin-right:16px;
  border-radius:50%;
  display:inline-block;
  ${
  props => props.active ? skeletonAnim : css`
     background:  #f2f2f2 ;
    `
  }
`



export const ElemContent = styled.div`
    display: flex;
    width: 100%;
    flex-direction:column;

`

export const SkeletonBase = styled.div`
  display: flex;
  width: 100%;
  flex-direction:row;
  justify-content:flex-start;
  align-items:flex-start;
`

