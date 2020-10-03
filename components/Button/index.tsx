import styled from 'styled-components'

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

const BaseButton=styled.button.attrs((props:NativeButtonProps)=>({
    className:props.className

}))`

position: relative;
display: inline-block;
font-weight: 300;
white-space: nowrap;
text-align: center;
background-image: none;
border: 1px @btn-border-style transparent;
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
    let {loading,type="",size,disabled=false,shape="",block=false,className="",}=props
    return (<BaseButton></BaseButton>)
}



