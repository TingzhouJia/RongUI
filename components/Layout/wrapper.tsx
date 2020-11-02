import styled, { css } from "styled-components";

export const Trigger=styled.span<{direction?:'left'|'right'}>`
        position: absolute;
        top: 64px;
        right: -36px;
        z-index: 1;
        width: 36px;
        height: 36px;
        color: #fff;
        font-size: 18px;
        line-height: 42px;
        text-align: center;
        background: #001529;
        border-radius: 0 2px 2px 0;
        cursor: pointer;
        transition: background 0.3s ease;

        &::after {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: transparent;
          transition: all 0.3s;
          content: '';
        }

        &:hover::after {
          background: rgba(255, 255, 255, 0.1);
        }
        ${props=>props.direction==='right'?css`left: -36px;
          border-radius: 2px 0 0 2px;`:null}
`

export const TriggerDiv=styled.div`
     position: fixed;
      bottom: 0;
      z-index: 1;
      height: 48px;
      color: #fff;
      line-height: 48px;
      text-align: center;
      background: #001529;
      cursor: pointer;
      transition: all 0.2s;
`

export const SIdeBaseWrapper=styled.aside<{collapsed?:boolean,trigger?:boolean,zerowid?:boolean}>`
position: relative;
${props=>props.trigger?css`padding-bottom: 48px;`:null}
${props=>props.zerowid?css`& > * {
        overflow: hidden;
      }`:null}
min-width: 0;
background: #001529 ;
transition: all 0.2s;
`

export const SideChildren=styled.div`
    height: 100%;
      margin-top: -0.1px;
   
      padding-top: 0.1px;
`

export const LayoutBase=styled.div<{hasside?:boolean}>`
display: flex;
  flex: auto;
  flex-direction: ${props=>props.hasside?'row':'column'};
  /* fix firefox can't set height smaller than content on flex item */
  min-height: 0;
  background: #fff ;
  &,
  * {
    box-sizing: border-box;
  }

`
export const LayoutHeader=styled.div<{sider?:boolean}>`
    flex: 0 0 auto;
    height: 54px;
    padding: 0 50px;
    color: rgba(0,0,0,0.85);
    line-height: 64px;
    background: #001529;
`

export const LayoutFooter=styled.div`
    flex: 0 0 auto;
    padding: 0 50px;
    color: rgba(0,0,0,0.85);
    font-size: 14px;
    background: #001529;
`

export const LayoutContent=styled.div<{sider?:boolean}>`
  flex: auto;
  min-height: 0;
`
