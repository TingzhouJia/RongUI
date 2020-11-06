import {IDrawerChildProps} from './drawerWrapper'
import KeyCode from 'rc-util/lib/KeyCode';
import { useState, useEffect, useRef } from 'react';
import { DrawerBase, DrawerMask, DrawerContentWrapper, DrawerContent } from './wrapper';
import React from 'react';

const DrawerChild:React.FC<IDrawerChildProps>=(props)=>{
    const {showMask,maskClosable,onClose,maskStyle,children,handler,onHandleClick,placement="right",open,keyboard}=props


     const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.keyCode === KeyCode.ESC) {
          const { onClose } = props;
          e.stopPropagation();
          if (onClose) {
            onClose(e as any);
          }
        }
    }
    const getHorizontalBoolAndPlacementName = () => {
        const { placement } = props;
        const isHorizontal = placement === 'left' || placement === 'right';
        const placementName = `translate${isHorizontal ? 'X' : 'Y'}`;
        return {
          isHorizontal,
          placementName,
        };
      };
      const { placementName } = getHorizontalBoolAndPlacementName();

    const placementPos =
      placement === 'left' || placement === 'top' ? '-100%' : '100%';
    const transform = open ? '' : `${placementName}(${placementPos})`;
      const ref = useRef(null)
      const maskRef=useRef(null)
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
        <DrawerBase ref={ref} open={ref?open:false} placement={placement} mask={showMask} onKeyDown={open && keyboard ?onKeyDown : undefined}>
            {showMask && (
          <DrawerMask
            onClick={maskClosable ? onClose : undefined}
            style={maskStyle}
            ref={maskRef}
          />
        )}
        <DrawerContentWrapper open={ref?open:false}  placement={placement}  ref={contentWrapRef}>
           <DrawerContent open={ref?open:false} ref={contentRef}>
           {children}
           </DrawerContent>
           {handlerChildren}
        </DrawerContentWrapper >
        </DrawerBase>
    )
}   

export default DrawerChild