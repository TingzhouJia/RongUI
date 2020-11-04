import styled, { css } from "styled-components";
import { NormalSizes } from "../utils";
import { Status } from "./step";


export const StepBase = styled.div<{ custom?: boolean, active?: boolean, disabled?: boolean,notFirst?:boolean  }>`
 position: relative;
  display: inline-block;
  flex: 1;
  overflow: hidden;
  vertical-align: top;
  ${
    props=>props.notFirst?css`margin-left:20px;`:null
  }
  &:last-child {
    flex: none;
  }
`

export const StepsBase = styled.div<{ size?: 'default' | 'small', direction?: 'horizontal' | "vertical", dot?: boolean, nav?: boolean, }>`
display: flex;
  width: 100%;
  font-size: 0;
  text-align: initial;
  flex-direction:${props=>props.direction==='horizontal'?'row':'column'};
  
`
export const StepItem = styled.div<{ nav?: boolean,click?:boolean,dot?:boolean,direction?:'horizontal' | "vertical" }>`
${props=>props.click?css` cursor: pointer;
        &:hover {
          opacity: 0.85;
        }`:null}
outline: none;
${props => props.nav ? css` display: inline-block;
      height: 100%;
      margin-left: -16px;
      padding-bottom: 12px;
      text-align: left;
      transition: opacity 0.3s;`: css`
        display:inline-flex;
       ${
         props.direction==='horizontal'&&props.dot?css`
         flex-direction:column;
         justify-content:center;
         align-items:flex-start;
         `:css`
          flex-direction:row;
          justify-content:flex-start;
          align-items:cetner;
         `
       }

      `}
`

export const StepTail = styled.div`
    position: absolute;
    top: 12px;
    left: 0;
    width: 100%;
    padding: 0 10px;

    &::after {
      display: inline-block;
      width: 100%;
      height: 1px;
      background: rgba(0,0,0,0.35);
      border-radius: 1px;
      transition: background 0.3s;
      content: '';
    }
`

export const StepIcon = styled.div<{}>`

    
`

export const StepContent = styled.div`
margin-left:12px;

`

export const StepTitle = styled.div<{ nav?: boolean,islast?:boolean,actived?:boolean,vertical?:boolean}>`
${props => props.nav ? css`
        max-width: 100%;
        padding-right: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        &::after {
          display: none;
        }

`: css`
    position: relative;
    display: inline-block;
    padding-right: 16px;
    color: rgba(0,0,0,0.85);
    font-size: 16px;
    line-height: 32px;
   
    &::after {
      position: absolute;
     ${
       props.vertical?css`
       top:100%;
       left:50%;
       width:1px;
       height:${props.islast?"0px":"9999px"};
       `:css`
       top: 50%;
      left: 100%;
      display: block;
      width: ${props.islast?"0px":"9999px"};
      height: 1px;
       `
     }
      background: ${props.actived?props.theme.colors.primary:'rgba(0,0,0,0.25)'};
      content: '';
    }
`}
 
`

export const Steptitle=styled.h3<{status?:Status}>`
    margin:0;
    ${props=>renderStatusTD(props.status)};
`

export const StepSubtitle = styled.div<{status?:Status}>`
    display: inline;
    margin-left: 8px;
    font-weight: normal;
    font-size: 14px;
    ${props=>renderStatusTD(props.status)};
`
const renderStatus=(s?:Status)=>{
  switch(s){
    case 'error':
      return css`
        border: 1px solid ${props=>props.theme.palette.error};
        color:${props=>props.theme.palette.error};
      `
      case 'finish':
      return css`
        border: 1px solid ${props=>props.theme.palette.info};
        color:${props=>props.theme.palette.info};
        background:white;
      
      `
      case 'process':
      return css`
        background:${props=>props.theme.colors.primary};
        color:white;
      `
      case 'wait':
      return css`
      border: 1px solid rgba(0,0,0,0.25) ;
      color: rgba(0,0,0,0.25) ;
      `
      default:
      return null
  }
}
const renderStatusTD=(status?:Status)=>{
  switch(status){
      case 'error':
      return css`
        color:${props=>props.theme.palette.error};
      `
      case 'process':
      return css`
        color:rgba(0,0,0,0.85);
      `
     default:
      return css`
        color:rgba(0,0,0,0.25);
      `
 
  }
}

export const StepDescription = styled.div<{status:Status}>`
${props=>renderStatusTD(props.status)};

font-size:12px;
display: block;
width:100%;
`

export const StepIconDot = styled.div<{status?:Status}>``

export const StepItIcon = styled.div<{status?:Status,disabled?:boolean,size?:'small'|'default'}>`
${props=>renderStatus(props.status)};

    width:${props=>props.size==='default'?"44px":"32px"};
    height:${props=>props.size==='default'?"44px":"32px"};
    font-size:${props=>props.size==='small'?'14px':'18px'};
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;    
`

