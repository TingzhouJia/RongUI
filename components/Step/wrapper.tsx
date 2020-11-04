import styled, { css } from "styled-components";
import { NormalSizes } from "../utils";
import { Status } from "./step";


export const StepBase = styled.div<{ custom?: boolean, active?: boolean, disabled?: boolean,notFirst?:boolean,dot?:boolean ,islast?:boolean}>`
  position: relative;
  ${
    props=>props.dot?css`
    display: inline-block;
    overflow: visible;
    vertical-align: top;
    display: inline-block;
    -webkit-box-flex: ${props.islast?0:1};
    flex: ${props.islast?'none':1};
    overflow: visible;
    vertical-align: top;
    `:css`
    display: flex;
  
  flex: ${props.islast?'none':1};
  overflow: hidden;
  vertical-align: top;
  ${
    props.notFirst?css`margin-left:20px;`:null
  }

    `
  }
`

export const StepsBase = styled.div<{ size?: 'default' | 'small', direction?: 'horizontal' | "vertical", dot?: boolean, nav?: boolean,islast?:boolean }>`
  
  

    display: flex;
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

position:relative;
${props => props.nav ? css` display: inline-block;
      height: 100%;
      margin-left: -16px;
      padding-bottom: 12px;
      text-align: left;
      transition: opacity 0.3s;`: css`
       
       ${
         props.direction==='horizontal'&&props.dot?css`
         display:block;
        flex:none;
         /* flex-direction:column;
         justify-content:center;
         align-items:center; */
         `:css`
          display:inline-flex;
          flex-direction:row;
          justify-content:flex-start;
          align-items:center;
         `
       }

      `}
`

export const StepTail = styled.div`
    position: absolute;
    top: 2px;
    width: 100%;
    margin: 0 0 0 70px;
    padding: 0;
    left:0;
    &::after {
      display: inline-block;
     
      width: calc(100% - 20px);
      height: 2px;
      margin-left: 12px;
      /* width: 9999px;
    height: 3px; */
    
      background: rgba(0,0,0,0.35);
      border-radius: 1px;
      transition: background 0.3s;
      content: '';
    }
`



export const StepContent = styled.div<{dot?:boolean}>`
    ${
      props=>props.dot?css`
        width:140px;
        display: block;
        margin-top: 8px;
        text-align: center;
      `:css`
      margin-left:12px;
display:flex;

flex-direction:column;
      `
    }
`

export const StepTitle = styled.div<{ nav?: boolean,islast?:boolean,actived?:boolean,vertical?:boolean,dot?:boolean}>`
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
    display: flex;
    flex-direction:row;
    padding-right: 16px;
    color: rgba(0,0,0,0.85);
    font-size: 16px;
    line-height: 32px;
   
    ${
      props.dot?css`
        display:block;
      `:css`
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
        margin-top:4px;
      left: 100%;
      display: block;
      width: ${props.islast?"0px":"9999px"};
      height: 1px;
       `
     }
      background: ${props.actived?props.theme.colors.primary:'rgba(0,0,0,0.25)'};
      content: '';
    }`
    }
`}
 
`

export const Steptitle=styled.h3<{status?:Status,active?:boolean}>`
    margin:0;
    font-weight:${props=>props.active?800:'normal'};
    color:${props=>props.status==='error'?props.theme.palette.error:'rgba(0,0,0,0.85)'};
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
        border: 1px solid ${props=>props.theme.colors.primary};
        color:${props=>props.theme.colors.primary};
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

export const StepIconDot = styled.div<{status?:Status,size?:'default'|'small',vertical?:boolean,islast?:boolean,actived?:boolean}>`
  /* width:10px;
  height:10px;
  border-radius:100%;
  background:red;
  display:inline-block;
  margin-left:64px; */
  width: 8px;
    height: 8px;
    margin-left: 67px;
    padding-right: 0;
    color:red;
    line-height: 8px;
    background: rgba(0,0,0,.25);
    border: 0;
  /* ${
    props=>css`
    &::after {
      position: absolute;
     ${
       props.vertical?css`
       top:100%;
       left:50%;
       width:1px;
       height:${props.islast?"0px":"9999px"};
       `:css`
        margin-top:4px;
        margin-left:20px;
      display: block;
      width: ${props.islast?"0px":"9999px"};
      height: 1px;
       `
     }
      background: ${props.actived?props.theme.colors.primary:'rgba(0,0,0,0.25)'};
      content: '';
    }
    `
  } */
`

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

