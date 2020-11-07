import styled from "styled-components";
import { ToRGBA } from "../utils/hex_rgb";


export const AutoItemWrap=styled.div<{active?:boolean,}>`
 display: flex;
          justify-content: flex-start;
          align-items: center;
          font-weight: ${props=>props.active?'600':'normal'};
          white-space: pre;
          min-height: calc(1.688 * 10px);
          padding: 5px 12px;
          font-size:14px;
          background-color: ${props=>props.active?ToRGBA(props.theme.colors.primary,0.3):'#fff'};
          color: rgba(0,0,0,0.85);
          user-select: none;
          border: 0;
          cursor: pointer;
          transition: background 0.2s ease 0s, border-color 0.2s ease 0s;
          &:hover {
              background:#f2f2f2 ;
          }
`