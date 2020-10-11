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
    destroyOnClose?: boolean;
    forceRender?: boolean;
    getContainer?: string | HTMLElement | getContainerFunc | false;
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
    push?: boolean | PushState;
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

const defaultPushState: PushState = { distance: 180 };

const Drawer: React.FC<DrawerProps> = (props) => {

    const { width = 256,
        height = 256,
        closable = true,
        placement = 'right' as placementType,
        maskClosable = true,
        mask = true,
        keyboard = true,
        push = defaultPushState, } = props
    const [curpush, setpush] = useState(false)
    const [destroyClose, setdestoryState] = useState(false)
    const [parentDrawer, setparentDrawer] = useState<typeof Drawer|null>(null)

    const pushIt = () => {
        if (props.push) {
            setpush(true)
        }
    }
    const pullIt = () => {
        if (props.push) {
            setpush(false)
        }
    }

    useEffect(() => {
        const {visible}=props
        if(visible&&parentDrawer){
            if(visible){
            
            }
        }
        
    }, [])
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
      const getPushDistance = () => {
        const { push } = props;
        let distance: number | string;
        if (typeof push === 'boolean') {
          distance = push ? defaultPushState.distance : 0;
        } else {
          distance = push!.distance;
        }
        return parseFloat(String(distance || 0));
      };
      const getPushTransform = (placement?: placementType) => {
        const distance = getPushDistance();
    
        if (placement === 'left' || placement === 'right') {
          return `translateX(${placement === 'left' ? distance : -distance}px)`;
        }
        if (placement === 'top' || placement === 'bottom') {
          return `translateY(${placement === 'top' ? distance : -distance}px)`;
        }
      };
      const getDrawerStyle = () => {
        const { zIndex, placement, mask, style } = props;
      
    
        const offsetStyle = mask ? {} :getOffsetStyle();
        return {
          zIndex,
          transform: push ? getPushTransform(placement) : undefined,
          ...offsetStyle,
          ...style,
        };
      };
     const renderBody = () => {
        const { bodyStyle, drawerStyle, visible ,destroyOnClose} = props;
        if (destroyClose && !visible) {
          return null;
        }
        setdestoryState(false)
    
        const containerStyle: React.CSSProperties = {};
    
        const isDestroyOnClose = destroyOnClose && !props.visible;
    
        if (isDestroyOnClose) {
          // Increase the opacity transition, delete children after closing.
          containerStyle.opacity = 0;
          containerStyle.transition = 'opacity .3s';
        }
    
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
            mask,
            zIndex,
            style,
            closable,
            closeIcon,
            destroyOnClose,
            drawerStyle,
            headerStyle,
            bodyStyle,
            footerStyle,
            footer,
            visible,
            title,
            push,
            width,
            children,
            handler,
            height,
            ...rest
          } = props;
        return (<DrawerWrapper  open={visible}
                showMask={mask}
                handler={false}
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