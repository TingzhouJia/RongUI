import styled, { css } from "styled-components";

export const AnchorWrapper=styled.div`
 position: relative;
 margin-left: -4px;
    padding-left: 4px;
    overflow: auto;
    background-color: transparent;
`

export const AnchorInner=styled.div<{active?:boolean}>`

`


export const AnchorInk=styled.div`
  position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    &::before {
      position: relative;
      display: block;
      width: 2px;
      height: 100%;
      margin: 0 auto;
      background-color: transparent;
      content: ' ';
    }
`

export const AnchorInnerInk=styled.span<{active?:boolean}>`
 position: absolute;
      left: 50%;
      display: none;
      width: 8px;
      height: 8px;
      background-color: ${props=>props.theme.colors.background};
      border: 2px solid ${props=>props.theme.colors.primary};
      border-radius: 8px;
      transform: translateX(-50%);
      transition: top 0.3s ease-in-out;
      ${props=>props.active?css`display:inline-block`:null}
`

export const LinkActive=styled.div`
    padding: 3px;
    line-height: 1.143;
`

export const LinkActiveTitle=styled.span<{active:boolean}>`
        position: relative;
      display: block;
      margin-bottom: 6px;
      overflow: hidden;
      color: ${props=>props.active?props.theme.colors.primary:props.theme.colors.fontColor};
      white-space: nowrap;
      text-overflow: ellipsis;
      transition: all 0.3s;

      &:only-child {
        margin-bottom: 0;
      }
`