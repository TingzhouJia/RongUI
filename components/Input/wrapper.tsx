import styled, { css } from "styled-components";
import { ClearableInputType } from "./clearable";
import { NormalSizes } from "../utils";


export const CloseBtn = styled.div<{ type?: typeof ClearableInputType[number], hidden?: boolean,other?:number}>`
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


  ${
    props=>props.other===1?css`margin-right:5px;`:null
  }
`
export const Pwd = styled.span<{ disabled?: boolean }>`
color:rgba(0,0,0,0.45);
  &:hover {
    color:rgba(0,0,0,0.85);
  }
`
export const Suffix = styled.span`
    position:relative;
    padding-left: 4px;
 
    display: flex;
    flex: 1;
    align-items: center;
`

export const Preffix = styled.span`
    padding-right: 4px;
    display: flex;
    flex: none;
    align-items: center;
`



const getDisabled = () => {
  return css`
    color: rgba(0,0,0,0.25);
  background-color: #d9d9d9 ;
  cursor: not-allowed;
  opacity: 1;
  outline:none;
  &:hover,&:active,&:focus {
      border:none;
  }  
    `
}


export const AffixWrapper = styled.div<{
  focused?: boolean,
  disabled?: boolean, size: NormalSizes, withClear?: boolean, readonly?: boolean, borderless?: boolean
}>`

display:flex;
flex-direction:row;
flex:none;
justify-content:space-between;
align-items:stretch;
outline:none;
padding: 0px 11px;
border-radius:2px;
${
  props => !props.disabled ? props.focused ? css`border:1px solid ${props.theme.colors.primary};box-shadow: 0 0 1px 1px ${props.theme.colors.primary};` : null : null
  }
&:hover,&:active {
    border:1px solid ${props => props.theme.colors.primary}; 
};
  display: inline-flex;
  ${props => props.disabled || props.readonly ? getDisabled() : null}
  > input {
      padding: 0;
      border: none;
      outline: none;
      &:focus {
        box-shadow: none;
      }
    }
  &::before {
      width: 0;
      visibility: hidden;
      content: '\a0';
    };

${props => props.borderless ? css`
    &,
    &:hover,
    &:focus {
      background-color: transparent;
      border: none;
      box-shadow: none;
    }
`: null};

`

export const GroupWrapper = styled.div<{ size?: NormalSizes }>`
  position: relative;
  display: flex;
  justify-content:flex-start;
  flex-direction:row;
  align-items:center;
  flex:1;
`

export const AddOnWrapper = styled.div<{ size?: 'small' | 'large' | 'default' }>`
    position: relative;
    padding: 0 10px;
    color: rgba(0,0,0,0.85);
    font-weight: normal;
    cursor:pointer;
    font-size: 14px;
    text-align: center;
   
    background-color: #f0f0f0 ;
    opacity:0.7;
    display:flex;
    justify-content:center;
    align-items:center;
    flex:none;
    transition: all 0.3s;
`

export const WithAddOnWrapper = styled.span<{ addon?: boolean, borderless?: boolean }>`
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:stretch;
  border:${props => props.borderless ? "none" : "1px solid #d9d9d9"};
  border-radius:2px;
`

export const TextAreaWrapper = styled.div<{ borderless?: boolean }>`
    height: auto;
    min-height: 32px;
    max-width:100%;
    line-height: 22px;
    vertical-align: bottom;
    transition: all 0.3s, height 0s;
`

export const OuterInputWrapper = styled.input<{ disabled?: boolean, sizes: "small" | "default" | 'large', }>`
font-size:${props => props.sizes === "small" ? "14px" : props.sizes === "default" ? "16px" : "18px"};
border:none;
margin:0 2px;
display:flex;
align-items:center;
flex:none;
outline:none;
background:transparent;
height:${props => props.sizes === 'small' ? "22px;" : props.sizes === "default" ? "26px" : "32px"};

${
  props => props.disabled ? css`cursor:not-allowed` : null
  }
&:-webkit-autofill {
    box-shadow:0 0 0px 32px #fff inset !important;
    -webkit-box-shadow: 0 0 0px 32px #fff inset !important; /**通过边框阴影遮挡住背景*/
    -webkit-text-fill-color: #333; /*自动填充内容的文本颜色*/
}

`

export const SearchIconWrapper = styled.div`
border-left:1px solid #d9d9d9;
padding-left:10px;
margin-left:10px;
display:flex;
height:100%;
justify-content:stretch;
align-items:center;
`

export const TextAreaBase=styled.textarea<{disabled?:boolean,bordered?:boolean}>`
    max-width: 100%; // prevent textearea resize from coming out of its container
    height: auto;
    min-height: 32px;
    line-height: 32px;
    vertical-align: bottom;
    transition: all 0.3s, height 0s;
    border:${props=>props.bordered?"1px solid #d9d9d9":null};
    outline:none;
    &:hover,&:active,&:focus {
      border-color:${props=>props.disabled?"none":props.theme.colors.primary};
    }
`

