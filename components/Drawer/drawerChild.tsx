import {IDrawerChildProps} from './drawerWrapper'
import KeyCode from 'rc-util/lib/KeyCode';
import { useState, useEffect, useRef } from 'react';
import { DrawerBase, DrawerMask, DrawerContentWrapper, DrawerContent } from './wrapper';
import React from 'react';

const DrawerChild:React.FC<IDrawerChildProps>=(props)=>{
    const {showMask,maskClosable=true,onClose,maskStyle,children,handler,onHandleClick,placement="right",open,keyboard,style}=props


     const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.keyCode === KeyCode.ESC) {
          const { onClose } = props;
          e.stopPropagation();
          if (onClose) {
            onClose(e as any);
          }
        }
    }
  
      const ref = useRef(null)
      const maskRef=useRef<HTMLDivElement>(null)
      const contentWrapRef = useRef(null)
      const contentRef=useRef(null)
      const handleRef=useRef(null)
    const handlerChildren =
    handler &&
    React.cloneElement(handler, {
      onClick: (e: React.MouseEvent) => {
        if (handler.props.onClick) {
          handler.props.onClick();
        }
        if (onHandleClick) {
          onHandleClick(e);
        }
      },
      ref: handleRef
    });
  
    return (
        <DrawerBase id="drawer-base" ref={ref} open={ref?open:false} placement={placement} mask={showMask?1:0} onKeyDown={open && keyboard ?onKeyDown : undefined}>
            {showMask && (
          <DrawerMask
              id="drawer-mask"
             onClick={maskClosable ? onClose : undefined}
           
            style={{...maskStyle}}
            ref={maskRef}
          />
        )}
        <DrawerContentWrapper onClick={()=>console.log('bd')} style={{...style}} id="drawer-content" open={ref?open:false}  placement={placement}  ref={contentWrapRef}>
           <DrawerContent open={ref?open:false} ref={contentRef}>
           {children}
           </DrawerContent>
           {handlerChildren}
        </DrawerContentWrapper >
        </DrawerBase>
    )
}   

export default DrawerChild