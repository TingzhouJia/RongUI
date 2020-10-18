import React, { useRef, useState, useEffect } from 'react'
import { HandleDiv } from './wrapper'

export interface HandleProps {
    className?: string;
    vertical?: boolean;
    style?: React.CSSProperties;
    handleRef?:React.RefObject<HTMLDivElement>
    disabled?: boolean;
    offset?: number;
    onMouseEnter?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
  }

const Handle:React.FC<HandleProps>=(props)=>{
    const {vertical,offset,handleRef}=props
   // const handleRef=useRef<HTMLDivElement>(null)
    const [clickFocus, setclickFocus] = useState(false)
    const positionStyle = vertical
    ? {
        [ 'bottom']: `${offset}%`,
        ['top']: 'auto',
        transform: `translateY(+50%)`,
      }
    : {
        [ 'left']: `${offset}%`,
        [ 'right']: 'auto',
        transform: `translateX(${'-'}50%)`,
      };

    useEffect(() => {
        document.addEventListener("mouseup",handleMouseUp)
        return () => {
            document.removeEventListener("mouseup",handleMouseUp)
        }
    }, [])
    const handleMouseUp = () => {
        if (document.activeElement === handleRef?.current) {
         setclickFocus(true);
        }
      };
    
      const handleMouseDown = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
       
        e.preventDefault();
       
        focus();
      };
    
      const handleBlur = () => {
        setclickFocus(false);
        blur()
      };
    
      const handleKeyDown = () => {
        setclickFocus(false);
      };
    
      const OnclickFocus=() =>{
        setclickFocus(true);
        focus();
      }
    
      const focus=()=>{
        handleRef?.current?.focus();
      }
    
      const blur=()=> {
        handleRef?.current?.blur();
      }
    return (
        <HandleDiv onClick={(e:any)=>OnclickFocus()} style={{...positionStyle} as React.CSSProperties} ref={handleRef} onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onMouseDown={handleMouseDown}>

        </HandleDiv>
    )
}

export default Handle