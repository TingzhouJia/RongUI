import styled, { css } from "styled-components";

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

export const OptionWrap=styled.div<{disabled?:boolean,select?:boolean,divider?:boolean,label?:boolean}>`
display: flex;
          max-width: 100%;
          justify-content: flex-start;
          align-items: center;
          font-weight: ${props=>props.select?"700":"normal"};
          font-size: 0.75rem;
          min-height: calc(1.688 * 10px);
          padding: 0 6px;
          background-color: ${props=>props.disabled?"#f2f2f2":props.select?props.theme.colors.primary:"white"};
          color: rgba(0,0,0,0.85);
          user-select: none;
          border: 0;
          cursor: ${props=>props.disabled ? 'not-allowed' : 'pointer'};
          transition: background 0.2s ease 0s, border-color 0.2s ease 0s;
          &:hover {
          background-color: rgba(0,0,0,0.35);
         
        }
        ${
            props=>props.divider?css` line-height: 0;
          height: 0;
          padding: 0;
          overflow: hidden;
          border-top: 1px solid #d2d2d2 ;
          margin: 0.5rem 0;
          width: 100%;`:null
        }
        ${
            props=>props.label?css`font-size: 0.875rem;
          color: rgba(0,0,0,0.65);
          border-bottom: 1px solid grey;
          text-transform: capitalize;
          cursor: default;`:null
        }

`

export const SelectWrap=styled.div<{multiple?:boolean,disabled?:boolean}>`
display: inline-flex;
            align-items: center;
            user-select: none;
            white-space: nowrap;
            position: relative;
            cursor: ${props=>props.disabled ? 'not-allowed' : 'pointer'};
            overflow: hidden;
            transition: border 0.2s ease 0s, color 0.2s ease-out 0s, box-shadow 0.2s ease 0s;
            border: 1px solid #d9d9d9 ;
            border-radius: 2px;
            padding: 0 2px 0 2px;
            min-height: 40px;
            min-width: 20px;
            overflow:ellipse;
            background-color: ${props=>props.disabled ? "#f2f2f2 ": "white"};

            &:hover {
            border-color: ${props=>props.disabled ? "#f2f2f2" : props.theme.colors.primary};
          }
`

export const ValueWrap=styled.div<{disabled?:boolean}>`
display: inline-flex;
            flex: 1;
            height: 100%;
            align-items: center;
            line-height: 1;
            padding: 0;
            margin-right: 1.25rem;
            font-size: 14px;
            color: ${props=>props.disabled ? "#f2f2f2": "rgba(0,0,0,0.85)"};
            width: calc(100% - 1.25rem);

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
        position: absolute;
            right: 5px;
            font-size: 14px;
            top: 50%;
            bottom: 0;
          
            pointer-events: none;
            transition: transform 200ms ease;
            display: flex;
            align-items: center;
            color: rgba(0,0,0,0.65);
`