import React, { useRef, useState, useEffect, useImperativeHandle } from 'react'
import { HandleDiv } from './wrapper'

export interface HandleProps {
    className?: string;
    vertical?: boolean;
    style?: React.CSSProperties;
    disabled?: boolean;
    offset?: number;
    onMouseEnter?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
  }
export interface HandleRefProps {
  blur: () => void;
  clickFocus: () => void;

}
const Handle=React.forwardRef<HandleRefProps,HandleProps>((props,ref)=>{
  const {vertical,offset,disabled}=props
  const handleRef=useRef<HTMLDivElement>(null)
  const [clickFocus, setclickFocus] = useState(false)
  const positionStyle = vertical
  ? {
      [ 'bottom']: `${offset}%`,
      ['top']: 'auto',
      left:"50%",
      transform: `translate(-50%,+50%)`,
    }
  : {
      [ 'left']: `${offset}%`,
      [ 'right']: 'auto',
      "top":"50%",
      transform: `translate(${'-'}50%,-50%)`,
    };

  useEffect(() => {
      document.addEventListener("mouseup",handleMouseUp)
      return () => {
          document.removeEventListener("mouseup",handleMouseUp)
      }
  }, [])
  useImperativeHandle(
    ref,
    () => ({
        blur:handleBlur,
        clickFocus:OnclickFocus,
        
    }),
    [ref],
  )
  const handleMouseUp = () => {
      if (document.activeElement === handleRef?.current) {
       setclickFocus(true);
      }
    };
  
    const handleMouseDown = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {  
      e.preventDefault();
    };
  
    const handleBlur = () => {

      setclickFocus(false);
      
    };
  
    const handleKeyDown = () => {

      setclickFocus(false);
    };
  
    const OnclickFocus=() =>{

      setclickFocus(true);
     
    }
  
  return (
      <HandleDiv id="handle-slider" focused={!disabled&&clickFocus} onClick={(e)=>{
        e.stopPropagation()
        e.preventDefault()
        OnclickFocus()
      }} style={{...positionStyle} as React.CSSProperties} ref={handleRef} onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onMouseDown={handleMouseDown}>

      </HandleDiv>
  )
})

export default Handle