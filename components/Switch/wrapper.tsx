import styled, { css } from "styled-components";

export const SwitchBase=styled.button<{innerCheck?:boolean,disabled?:boolean,small?:boolean}>`
    position: relative;
  display: inline-block;
  box-sizing: border-box;
  min-width: ${props=>props.small?"28px":"44px"};
  height:${props=>props.small?"16px":"22px"};
  line-height:${props=>props.small?"16px":"22px"};
  vertical-align: middle;
  background-color: ${props=>props.innerCheck?props.theme.colors.primary:"rgba(0,0,0,0.25)"};
  border: 0;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s;
  user-select: none;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
  }

  &-checked:focus {
    box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
  }

  &:focus:hover {
    box-shadow: none;
  }

  ${props=>props.disabled?css`
  cursor: not-allowed;
    opacity: 0.4;
    * {
      box-shadow: none;
      cursor: not-allowed;
    }
  `:null}

`
const checkmargin=(checked?:boolean,small?:boolean)=>{
    if(checked){
        if(small){
            return `0 ${Math.ceil(16*1.1)} 0 ${Math.ceil(16*0.3)}` 
        }
        return `0 ${Math.ceil(22*1.1)} 0 ${Math.ceil(22*0.3)}`
    }else {
        if(small){
           return `0 ${Math.ceil(16*0.3)} 0 ${Math.ceil(16*1.1)}`
        }
        return `0 ${Math.ceil(22*0.3)} 0 ${Math.ceil(22*1.1)}`
    }
}

export const InnerCheck=styled.span<{checked?:boolean,small?:boolean}>`
     display: block;
    margin: ${props=>checkmargin(props.checked,props.small)};
    color: white;
    font-size: 12px;
    transition: margin 0.4s;
`