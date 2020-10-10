import {IDrawerChildProps} from './drawerWrapper'
import KeyCode from 'rc-util/lib/KeyCode';
import { useState, useEffect, useRef } from 'react';
import { DrawerBase, DrawerMask, DrawerContentWrapper, DrawerContent } from './wrapper';
import React from 'react';

const DrawerChild:React.FC<IDrawerChildProps>=(props)=>{
    const {showMask,maskClosable,onClose,maskStyle,children,handler,onHandleClick,placement="right",open,keyboard}=props
    const [levelDom, setlevelDom] = useState<Element[]>([])
    const getLevelDom = ({ level, getContainer }: IDrawerChildProps) => {
        if (!window||!window.document) {
          return;
        }
        const container = getContainer && getContainer();
        const parent = container ? (container.parentNode as HTMLElement) : null;
        setlevelDom([])
        if (level === 'all') {
          const children: HTMLElement[] = parent
            ? Array.prototype.slice.call(parent.children)
            : [];
          children.forEach((child: HTMLElement) => {
            if (
              child.nodeName !== 'SCRIPT' &&
              child.nodeName !== 'STYLE' &&
              child.nodeName !== 'LINK' &&
              child !== container
            ) {
                setlevelDom([...levelDom,child])
        
            }
          });
        } else if (level) {
            let list=Array.isArray(level)?level:[level]
            list.forEach(key => {
            document.querySelectorAll(key).forEach(item => {
                setlevelDom([...levelDom,item])   
            });
          });
        }
      };
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
    // 百分比与像素动画不同步，第一次打用后全用像素动画。
    // const defaultValue = !this.contentDom || !level ? '100%' : `${value}px`;
    const placementPos =
      placement === 'left' || placement === 'top' ? '-100%' : '100%';
    const transform = open ? '' : `${placementName}(${placementPos})`;
      const ref = useRef(null)
      const maskRef=useRef(null)
      const contentWrapRef = useRef(null)
      const contentRef=useRef(null)
      const handleRef=useRef(null)
    const domFocus=()=>{}
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