import React, { useState, useEffect } from 'react'
import { tuple } from '../utils';
import { CloseOutlined } from '@ant-design/icons';
import { DrawerFooter, DrawerHeader, DrawerHeaderTitle, DrawerCloseBtn, DrawerBodyWrapper, DrawerBody } from './wrapper';
import DrawerWrapper from './drawerWrapper'
type EventType =
    | React.MouseEvent | React.KeyboardEvent

type getContainerFunc = () => HTMLElement;
const DrawerContext = React.createContext<typeof Drawer | null>(null);
const PlacementTypes = tuple('top', 'right', 'bottom', 'left');
type placementType = typeof PlacementTypes[number];
export interface PushState {
    distance: string | number;
}
export interface DrawerProps {
    closable?: boolean;
    closeIcon?: React.ReactNode;
    forceRender?: boolean;
    getContainer?:  getContainerFunc ;
    maskClosable?: boolean;
    mask?: boolean;
    maskStyle?: React.CSSProperties;
    style?: React.CSSProperties;
    drawerStyle?: React.CSSProperties;
    headerStyle?: React.CSSProperties;
    bodyStyle?: React.CSSProperties;
    title?: React.ReactNode;
    visible?: boolean;
    width?: number | string;
    height?: number | string;
    zIndex?: number;
    placement?: placementType;
    onClose?: (e: EventType) => void;
    afterVisibleChange?: (visible: boolean) => void;
    className?: string;
    handler?: React.ReactNode;
    keyboard?: boolean;
    footer?: React.ReactNode;
    footerStyle?: React.CSSProperties;
}

export interface IDrawerState {
    push?: boolean;
}



const Drawer: React.FC<DrawerProps> = (props) => {


    const renderHeader=()=> {
        const { title,  closable, headerStyle } = props;
        if (!title && !closable) {
          return null;
        }
        return (
          <DrawerHeader style={headerStyle}>
            {title && <DrawerHeaderTitle>{title}</DrawerHeaderTitle>}
            {closable && renderCloseIcon()}
          </DrawerHeader>
        );
      }
    
      const renderFooter=()=> {
        const { footer, footerStyle } = props;
        if (!footer) {
          return null;
        }
    
       
        return (
          <DrawerFooter style={footerStyle}>
            {footer}
          </DrawerFooter>
        );
      }
    
      const renderCloseIcon=()=> {
        const { closable, closeIcon = <CloseOutlined />, onClose } = props;
        return (
          closable && (
            // eslint-disable-next-line react/button-has-type
            <DrawerCloseBtn
              onClick={onClose}
              aria-label="Close"
            >
              {closeIcon}
            </DrawerCloseBtn>
          )
        );
      }
      
      const getOffsetStyle=()=> {
        const { placement, width, height, visible, mask } = props;
    
        if (!visible && !mask) {
          return {};
        }
        const offsetStyle: any = {};
        if (placement === 'left' || placement === 'right') {
          offsetStyle.width = width;
        } else {
          offsetStyle.height = height;
        }
        return offsetStyle;
      }

      
      const getDrawerStyle = () => {
        const { zIndex, placement, mask, style } = props;
      
    
        const offsetStyle = mask ? {} :getOffsetStyle();
        return {
          zIndex,
          
          ...offsetStyle,
          ...style,
        };
      };
     const renderBody = () => {
        const { bodyStyle, drawerStyle, visible } = props;
        if ( !visible) {
          return null;
        }

    
        const containerStyle: React.CSSProperties = {};

    
        return (
          <DrawerBodyWrapper
            style={{
              ...containerStyle,
              ...drawerStyle,
            }} 
          >
            {renderHeader()}
            <DrawerBody style={bodyStyle}>
              {props.children}
            </DrawerBody>
            {renderFooter()}
          </DrawerBodyWrapper>
        );
      };
    const renderProvider=()=>{
        const {
            placement,
            className,
            mask=true,
            zIndex=1000,
            visible,
            title,
            handler,
            ...rest
          } = props;
        return (<DrawerWrapper  open={visible}
                showMask={mask}
                handler={(handler as any)||false}
                getContainer={props.getContainer}
                style={getDrawerStyle()}
                placement={placement} 
                 {...rest}>
                    {renderBody()}
                </DrawerWrapper>)
    }
   
return (<>{renderProvider()}</>)
}
export default Drawer