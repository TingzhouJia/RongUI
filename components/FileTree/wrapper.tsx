import styled, { css } from "styled-components";

export const TreeIndentSpan=styled.span<{index:number}>`
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 100%;
          background-color: rgba(0,0,0,0.35);
          margin-left: -5px;
          left: calc(-1.875rem * ${props=>props.index + 1} + 0.75rem);
`

export const TreeFileWrapper=styled.div<{level:number,disabled?:boolean}>`
          cursor: ${props=>props.disabled?"not-allowed":"pointer"};
          line-height: 1;
          display:flex;
          flex-direction:row;
          align-items:center;
          position:relative;
          user-select: none;

          margin-left: calc(1.875rem * ${props=>props.level});
          ${props=>props.disabled?css`
          & > * {
            color:rgba(0,0,0,0.25);
          }
          `:null}
`

export const TreeFileName=styled.div`
          display: flex;
          height: 1.75rem;
          align-items: center;
          position: relative;
`

export const FileIcon=styled.span<{disabled?:boolean}>`
          width: 1.5rem;
          height: 100%;
          display: inline-flex;
          align-items: center;
         
          color:rgba(0,0,0,0.45);
`

export const FileNameWrap=styled.span<{disabled?:boolean}>`

          transition: opacity 100ms ease 0ms;
          color: ${props=>props.disabled?"rgba(0,0,0,0.45)":"rgba(0,0,0,0.85)"};
          white-space: nowrap;
          font-size: 0.875rem;
          &:hover {
              opacity:0.7
          }
`

export const FileNameExtra=styled.span`
          font-size: 0.75rem;
          align-self: baseline;
          padding-left: 4px;
          color: rgba(0,0,0,0.55);
          &:hover {
              opacity:0.7
          }
`

export const FolderWrapper=styled.div<{disabled?:boolean}>`
         cursor: ${props=>props.disabled?"not-allowed":"pointer"};
          line-height: 1;
          user-select: none;
         
`
export const FolderStatus=styled.span`
          position: absolute;
          left: calc(-1.4rem);
          top: 50%;
          transform: translate(-50%, -50%);
          width: 0.675rem;
          height: 0.675rem;
          z-index: 10;
          background-color: ${props=>props.theme.palette.background};
          display: inline-flex;
          align-items: center;
          justify-content: center;
          &:hover {
              color:${props=>props.theme.colors.primary}
          }
`

export const FolderContent=styled.div`
          display: flex;
    
          flex-direction: column;
          height: auto;
`

export const TreeBase=styled.div`
padding-left: 1.5rem;
&,&:hover,&:active,&>* {
  outline:none;
}
`