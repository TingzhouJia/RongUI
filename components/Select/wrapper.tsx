import styled, { css } from "styled-components";
import { NormalSizes } from "../utils";
import { ToRGBA } from "../utils/hex_rgb";

export const AbsDropdown=styled.div<{rect?:any,disable?:boolean}>`
  position: absolute;
                top: ${props=>props.rect.top + 2}px;
                left: ${props=>props.rect.left}px;
                z-index: 1100;
                ${props=>props.disable?css`min-width:${props.rect.width}px;`:css`width:${props.rect.width}px;`}
`

export const SelectDropdownWrap=styled.div`
            border-radius: 2px;
            box-shadow: ${props=>props.theme.expressiveness.shadowLarge};
            background-color: white;
            max-height: 15rem;
            overflow-y: auto;
            overflow-anchor: none;
            padding: 4px 0;
`

export const MultiItem=styled.div<{disabled?:boolean}>`
            display: inline-flex;
            min-height: 20px;

            align-items: center;
            line-height: 1;
            padding: 0 0.5rem;
            font-size: 12px;
            border-radius: 2px;
            background-color: #d9d9d9;
            color: ${props=>props.disabled ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.65)"};
            & > :global(div),
          & > :global(div:hover) {
            border-radius: 0;
            background-color: transparent;
            padding: 0;
            margin: 0;
            color: inherit;
          }

`

export const OptGroupWrap=styled.span`
color:rgba(0,0,0,0.45);
padding: 5px 3px;
display:flex;
flex-direction:row;
align-items:center;

font-size:14px;
font-weight:300;

`

export const OptionWrap=styled.div<{disabled?:boolean,select?:boolean,divider?:boolean,label?:boolean}>`
          display: flex;
          max-width: 100%;
          justify-content: space-between;
          align-items: center;
          font-weight: ${props=>props.select?"700":"normal"};
          font-size:14px;
          min-height: calc(1.688 * 10px);
          padding: 5px 12px;
          opacity:1;
          background: ${props=>props.select?ToRGBA(props.theme.colors.primary,0.2):props.disabled?"transparent":"white"};
          color: ${props=>props.disabled?"rgba(0,0,0,0.35)":"rgba(0,0,0,0.85)"};
          user-select: none;
          border: 0;
          cursor: ${props=>props.disabled ? 'not-allowed' : 'pointer'};
          transition: background 0.2s ease 0s, border-color 0.2s ease 0s;
         ${props=>!props.select&&!props.disabled?css` &:hover {
          background-color:#f5f5f5;
          
        }`:null}
        ${
            props=>props.divider?css` line-height: 0;
          height: 0;
          padding: 0;
          overflow: hidden;
          border-top: 1px solid #d2d2d2 ;
          margin: 0.5rem 0;
          width: 100%;`:null
        }
`

export const SelectWrap=styled.div<{multiple?:boolean,disabled?:boolean,size?:NormalSizes,focused?:boolean,bordered?:boolean}>`
            display: inline-flex;
            align-items: center;
            user-select: none;
            white-space: nowrap;
            outline:none;
            position: relative;
            cursor: ${props=>props.disabled ? 'not-allowed' : 'pointer'};
            overflow-x: hidden;
            transition: border 0.2s ease 0s, color 0.2s ease-out 0s, box-shadow 0.2s ease 0s;
           
            border-radius: 2px;
            padding: ${props=>props.size==="large"?"5px 7px":props.size==="small"?"2px 5px":"3px 5px"};
            min-height: ${props=>props.size==="large"?"35px":props.size==="small"?"24px":"28px"};
            min-width: 60px;
            text-overflow:ellipsis;
            background-color: ${props=>props.disabled ? "#f2f2f2 ": "white"};
            ${
              props=>props.bordered?css`
               border: 1px solid #d9d9d9 ;
              ${
              props.focused?css`border-color: ${props.theme.colors.primary}`:null
              }
              &:hover {
            border-color: ${props.disabled ? "#d9d9d9" : props.theme.colors.primary};
            }`:css` border: 1px solid #d9d9d9 ;`
            }
            &,&:focus,&:active,&:hover {
              outline:none;
            }
`

export const CloseBtn = styled.div`
  color: rgba(0,0,0,0.25);
  font-size: 12px;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: rgba(0,0,0,0.45);
  }
  &:active {
    color: rgba(0,0,0,0.85);
  }
`

export const Checkout=styled.span`
  color:${props=>props.theme.colors.primary};
`

export const ValueWrap=styled.div<{disabled?:boolean,size?:NormalSizes}>`
            display: inline-flex;
            flex: 1;
            height: 100%;
            width:100%;
            align-items: center;
            line-height: 1;

            margin-right: 1.25rem;
            font-size: 14px;
            color: ${props=>props.disabled ? "#f2f2f2": "rgba(0,0,0,0.85)"};
            /* width: calc(100% - 1.25rem); */

            & > * {
                &:hover {
                    border-radius: 0;
            background-color: transparent;
            padding: 0;
            margin: 0;
            color: inherit;
                }
            }
`

export const IconWrap=styled.div`
            font-size: 14px;
            z-index:100;
       
            transition: transform 200ms ease;
            display: flex;
            flex-direction:column;
            align-items: center;
            color: rgba(0,0,0,0.65);
`

export const MultiItemContainer=styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  flex:1;
`