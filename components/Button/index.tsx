import styled,{css} from 'styled-components'
import React,{ useState } from 'react';

interface BaseButtonProps {
    size?: 'small' | 'middle' | 'large'
    type?: 'text' | 'link' | 'dashed' | 'primary' |'danger' |'ghost'
    className?:string,
    disabled?:boolean
    shape?:'circle' | 'round'
    loading?:boolean
    block?:boolean
   
}
export type NativeButtonProps = {
    htmlType?:'submit'|'button'|'reset',
    onClick?: React.MouseEventHandler<HTMLElement>;
  } & BaseButtonProps &
    Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

    const complexMixin = css`
  
  `
const BaseButton=styled.button<NativeButtonProps>`

position: relative;
display: inline-block;
font-weight: 300;
white-space: nowrap;
text-align: center;
background-image: none;
border: 1px solid transparent;

box-shadow: @btn-shadow;
cursor: pointer;
transition: all 0.3s @ease-in-out;
user-select: none;
touch-action: manipulation;
&,&:active, &:focus {
    outline: 0;
  }

`
const InnerButton:React.ForwardRefRenderFunction<unknown, Partial<NativeButtonProps>>=(props,ref)=>{
    let {loading,type="",size,disabled=false,shape="",block=false,className="",children}=props
    const [innerLoading, setinnerLoading] = useState(!!loading)
    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        const { onClick } = props;
        if (innerLoading) {
          return;
        }
        if (onClick) {
          (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
        }
      };

    return (<BaseButton className={className}>{children}</BaseButton>)
}


const Button =React.forwardRef<unknown,NativeButtonProps>(InnerButton)
Button.displayName='Button'

export default Button
