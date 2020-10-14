import styled, { css } from "styled-components";

export const PaginationIemWrap=styled.li`
 margin-right: 6px;
          display: inline-block;
`

export const PaginationItemBtn=styled.button<{active?:boolean,disabled?:boolean}>`
          border: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          text-transform: capitalize;
          user-select: none;
          white-space: nowrap;
          text-align: center;
          vertical-align: middle;
          box-shadow: none;
          outline: none;
          height: 30px;
          min-width: 30px;
          font-size: inherit;
          cursor: ${props=>props.disabled?"not-allowed":"pointer"};
          color: ${props=>props.active?"#fff":props.disabled?"rgba(0,0,0,0.45)":props.theme.palette.success};
          ${props=>props.active?css`box-shadow:${props.theme.expressiveness.shadowSmall}`:null}
          border-radius: 2px;
          background-color: ${props=>props.active?props.theme.colors.primary:"transparent"};
          transition: all linear 200ms 0ms;
          ${props=>props.active?css`font-weight:bold;`:null}
          button:hover {
          background-color: ${props=>props.active?props.theme.colors.primary:props.disabled?"rgba(0,0,0,0.4)":props.theme.palette.background};
          opacity:0.6;
        }
`

export const PaginationNav=styled.nav`
            margin: 0;
          padding: 0;
          font-variant: tabular-nums;
          font-feature-settings: 'tnum';
          font-size: 14px;
         
`