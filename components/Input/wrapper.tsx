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
    flex: none;
    align-items: center;
`

export const Preffix = styled.span`
    padding-right: 4px;
    display: flex;
    flex: none;
    align-items: center;
`



export const AffixWrapper = styled.div<{
  focused?: boolean,
  disabled?: boolean, size: NormalSizes,  borderless?: boolean,withPS?:boolean
}>`
    position: relative;
    display: flex;
    flex-direction:row;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    padding: ${
      props=>props.withPS?(props.size==='small'?'0 7px':props.size==='default'?'4px 11px':'6.5px 11px'):'0'
    };
    &:hover {
      ${
        props=>!props.disabled&&!props.borderless&&props.withPS?css`
        border: 1px solid ${props.theme.colors.primary};
        `:null
      }
    }

    ${
      props=>props.withPS&&!props.disabled&&!props.borderless?css`
          border: 1px solid ${
            props.focused?props.theme.colors.primary:props.theme.colors.borderColor
          } ;
      `:null
    }
    ${
    props=>props.disabled&&!props.borderless?css`border:1px solid ${props.theme.colors.borderColor};color: ${props.theme.colors.disabledColor};
    background-color: ${props.theme.colors.disabledBackground}`:css`border:none;`
  }
  ${
    props=>props.disabled?css` cursor:not-allowed;`:null
  }
`

export const GroupWrapper = styled.div<{ size?: NormalSizes }>`
  position: relative;
  display: inline-block;
    width: 100%;
    text-align: start;
    vertical-align: top;
`

export const AddOnWrapper = styled.div<{ size?: 'small' | 'large' | 'default' ,right?:boolean}>`
    position: relative;
    padding: 0 11px;
    color: rgba(0,0,0,.85);
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    background-color: ${props=>props.theme.colors.background};
    border: 1px solid ${props=>props.theme.colors.borderColor};
    display:flex;
    border-radius:2px;
    ${
      props=>props.right?css`
       border-left:none;
       border-top-left-radius:0;
       border-bottom-right-radius:0;
      
      `:css`
      border-right:none;
      border-top-right-radius:0;
      border-bottom-right-radius:0;
      
      `
    }
   
    align-self: stretch;
    justify-content:center;
    align-items:center;
    transition: all 0.3s;
`

export const WithAddOnWrapper = styled.span<{disabled?:boolean}>`
  display:flex;
  flex-direction:row;
  justify-content:stretch;
  align-items:center;
  ${
    props=>props.disabled?css`
  
    &, &> * {
      color: ${props.theme.colors.disabledColor};
    background-color: ${props.theme.colors.disabledBackground};
    cursor:not-allowed;
    }
    
    `:null
  }
`

export const TextAreaWrapper = styled.div<{ borderless?: boolean }>`
    height: auto;
    min-height: 32px;
    max-width:100%;
    line-height: 22px;
    vertical-align: bottom;
    transition: all 0.3s, height 0s;
`

export const OuterInputWrapper = styled.input<{ disabled?: boolean, sizes: "small" | "default" | 'large',withPS?:boolean,bordered?:boolean,focused?:boolean }>`
font-size:${props => props.sizes === "small" ? "14px" : props.sizes === "default" ? "16px" : "18px"};

    width:100%;
    min-width: 0;
    padding: ${
      props=>props.withPS?'0':(props.sizes==='small'?'0 7px':props.sizes==='default'?'4px 11px':'6.5px 11px')
    };
    color: rgba(0,0,0,.85);
    height:${props=>props.sizes==='large'?'25px':'22px'};
    line-height: 1.5715;
    background-color: ${props=>props.theme.colors.background};
    background-image: none;
   
    ${
      props=>!props.withPS&&!props.disabled&&props.bordered?css`
      border: 1px solid ${
        props.focused?props.theme.colors.primary:props.theme.colors.borderColor
      } ; 
      &:hover {
        border-color:${props.theme.colors.primary};
      }
      
      `:css`border:none; &,&:focus,&:active {border:none;}`
    }
    &,&:active,&:hover {
      outline:none;
    }
${
  props => props.disabled ? css`cursor:not-allowed; background:${props.theme.colors.disabledBackground};` : null
  }

&:-webkit-autofill {
    box-shadow:0 0 0px 32px #fff inset !important;
    -webkit-box-shadow: 0 0 0px 32px #fff inset !important; 
    -webkit-text-fill-color: #333; 
}

`

export const SearchIconWrapper = styled.div`
border-left:1px solid ${props=>props.theme.colors.borderColor};
padding-left:15px;
margin-left:5px;
display:flex;
height:100%;
justify-content:stretch;
align-items:center;
`

export const TextAreaBase=styled.textarea<{disabled?:boolean,bordered?:boolean}>`
    max-width: 100%; 
    height: auto;
    min-height: 32px;
    line-height: 32px;
    vertical-align: bottom;
    transition: all 0.3s, height 0s;
    border:${props=>props.bordered?"1px solid "+props.theme.colors.borderColor:null};
    outline:none;
    &:hover,&:active,&:focus {
      border-color:${props=>props.disabled?"none":props.theme.colors.primary};
    }
`

