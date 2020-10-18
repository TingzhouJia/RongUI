import styled, { css } from "styled-components";


export const HandleDiv=styled.div`
     position: absolute;
    width: 14px;
    height: 14px;
    margin-top: -5px;
    background-color: #fff ;
    border: solid 2px ${props=>props.theme.colors.primary};
    border-radius: 50%;
    box-shadow: 0;
    cursor: pointer;
    transition: border-color 0.3s, box-shadow 0.6s,
      transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
      &:focus {
      border-color: ${props=>props.theme.colors.primary};
      opacity:0.25;
      outline: none;
      box-shadow: 0 0 0 5px ${props=>props.theme.colors.primary};
    }
`

export const TrackBody=styled.div<{offset?:number,length?:number,vertical?:boolean,disabled?:boolean}>`
position: absolute;
    height: 4px;
    background-color: ${props=>props.disabled?"rgba(0,0,0,0.25)":props.theme.colors.primary};
    opacity:0.8;
    border-radius: 2px;
    transition: background-color 0.3s;
   ${
       props=>props.vertical?css`
        bottom: ${props.offset}%;
        top:auto;
       `:css`
       left: ${props.offset}%;
        right:auto;
       `
   }
   &:hover {
       background-color:${props=>props.theme.colors.primary};
       opacity:0.4;
   }

`

export const StepBody=styled.div<{vertical?:boolean}>`
position: absolute;
background: transparent;
   ${
       props=>props.vertical?css`
       width: 4px;
      height: 100%;
       `:css`
       
    width: 100%;
    height: 4px;
  
       `
   }

`

export const DotBody=styled.span<{disabled?:boolean,vertical?:boolean,active?:boolean,top?:string,right?:string}>`
position: absolute;
   ${props=>props.vertical?css`
    top: auto;
    bottom: ${props.top};
      left: 2px;
      margin-bottom: -4px;
   `:css`
   top: -2px;
   left :${props.right};
   margin-left: -4px;
   `}

    width: 8px;
    height: 8px;
    background-color: #fff ;
    border: 2px solid ${props=>props.disabled?"rgba(0,0,0,0.25)":props.active?props.theme.colors.primary:"hsv(0,0,94%)"};
    border-radius: 50%;
    cursor: ${props=>props.disabled?"not-allowed":"pointer"};
    box-shadow: none;
    &:first-child {
      margin-left: -4px;
    }
    &:last-child {
      margin-left: -4px;
    }

`

export const MarkerLabelWrap=styled.span<{vertical?:boolean,active?:boolean,val?:number,disabled?:boolean}>`
position: absolute;
    display: inline-block;
    text-align: center;
    word-break: keep-all;
    cursor: ${props=>props.disabled?"not-allowed":"pointer"};
    user-select: none;
    color: ${props=>props.active?"rgba(0,0,0,0.85)":props.disabled?"rgba(0,0,0,0.25)":"rgba(0,0,0,0.65)"};
    ${
        props=>props.vertical?css`

        margin-bottom:-50%;
        bottom: ${props.val}%;
        left: 4px;
      white-space: nowrap;
        `:css`
       transform: translateX(-50%);
       msTransform: translateX(-50%);
       left:${props.val}%;
        `
    }
`

export const MarkerDivWrap=styled.div<{vertical?:boolean}>`
position: absolute;
    font-size: 14px;

    ${props=>props.vertical?css`
      top: 0;
      left: 12px;
      width: 18px;
      height: 100%;
    `:css`
    top: 14px;
    left: 0;
    width: 100%;
    `}
`

export const SliderBodyBase=styled.div<{disabled?:boolean,vertical?:boolean,withMark?:boolean}>`
    ${props=>props.vertical?css`
    width: 12px;
    height: 100%;
    margin: 6px 10px;
    padding: 0 4px;
    `:css`
    height: 12px;
  margin: 10px 6px 10px;
    `}
position: relative;
  
  ${props=>props.withMark?css`
  margin-bottom:28px;
  `:null}

  padding: 4px 0;
  cursor: ${props=>props.disabled?"not-allowed":"pointer"};
  touch-action: none;

`

export const RailBody=styled.div`
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: rgba(0,0,0,0.25);
    border-radius: 2px;
    transition: background-color 0.3s;
    &:hover {
        background-color:#e1e1e1;
    }
`