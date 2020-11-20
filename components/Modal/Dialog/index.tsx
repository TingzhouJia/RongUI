
import { ModalRenderRoot, ModalBodyWrap } from "../wrapper";
import Mask from "./mask";
import React, { useRef, ReactNode, CSSProperties } from "react";
import KeyCode from "rc-util/lib/KeyCode";
import Content, { ContentRef } from "./content";
import { createPortal } from "react-dom";
import usePortal from "../../utils/usePortal";
export interface DialogProps {
    className?: string;
    keyboard?: boolean;
    style?: CSSProperties;
    mask?: boolean;
    centered?:boolean
    children?: any;
    afterClose?: () => any;
    onClose?: (e: any) => any;
    closable?: boolean;
    maskClosable?: boolean;
    visible?: boolean;
    title?: ReactNode;
    footer?: ReactNode;
    maskStyle?: CSSProperties
    width?: number;
    height?: number;
    zIndex?: number;
    bodyProps?: any;
    maskProps?: any;
    wrapProps?: any;
    getContainer?: ()=>HTMLElement | false;
    closeIcon?: ReactNode;
    modalRender?: (node: ReactNode) => ReactNode;
  }

export const Dialog: React.FC<DialogProps> = (props) => {
    const {
        zIndex,
        visible = false,
        keyboard = true,
        
        onClose,
        afterClose,
        // Dialog
        closable = true,
        // Mask
        mask = true,
        maskClosable = true,
        maskStyle,
        maskProps,
    } = props;
   
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<ContentRef>(null);
  const contentClickRef = useRef(false);
  const onContentClick: React.MouseEventHandler = () => {
    clearTimeout(contentTimeoutRef.current);
    contentClickRef.current = true;

    contentTimeoutRef.current = setTimeout(() => {
      contentClickRef.current = false;
    });
  };

  const contentTimeoutRef = useRef<number>();
function onInternalClose(e: React.SyntheticEvent) {
        onClose&&onClose(e);
      }
    let onWrapperClick: (e: React.SyntheticEvent) => void = ()=>{};
  if (maskClosable) {
    onWrapperClick = (e) => {
      if (
        !contentClickRef.current &&
        !(contentRef?.current?.getDOM() as any)?.contains(e.target)
        
      ) {
        onInternalClose(e);
      }
    };
  }

  function onDialogVisibleChanged(newVisible: boolean) {
    if (newVisible) {
     
      if (! wrapperRef.current?.contains(document.activeElement)) {
        (contentRef?.current as any)?.focus();
      }
    } else {
      afterClose?.();
    }
  }

  function onWrapperKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (keyboard && e.keyCode === KeyCode.ESC) {
      e.stopPropagation();
      onInternalClose(e);
      return;
    }

    if (visible) {
      if (e.keyCode === KeyCode.TAB) {
        contentRef?.current?.changeActive(!e.shiftKey);
      }
    }
  }
    return <ModalRenderRoot id="modal-render-root">
        <Mask
            visible={mask && visible}
            style={{
                zIndex,
                ...maskStyle,
            }}
            maskProps={maskProps}
        />
        <ModalBodyWrap
        id="modal-body-wrap"
         tabIndex={-1}
         onKeyDown={onWrapperKeyDown}
         ref={wrapperRef}
         style={{zIndex,}}
         onClick={onWrapperClick}
         role="dialog"
        >
             <Content
          {...props}
          onClick={onContentClick}
          ref={contentRef}
          closable={closable}
          visible={visible}
          onClose={onInternalClose}
          onVisibleChanged={onDialogVisibleChanged}
        />
        </ModalBodyWrap>
    </ModalRenderRoot>
}


const BaseModal:React.FC<DialogProps>=(props)=>{
    const { visible=false, getContainer,  afterClose,style } = props;
  const [animatedVisible, setAnimatedVisible] = React.useState<boolean>(visible);
    const el=usePortal('modal',(getContainer as any))
  React.useEffect(() => {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]);
  return createPortal(visible?<Dialog   {...props} style={{...style,display: !animatedVisible ? 'none' : 'block' }} afterClose={() => {
    afterClose?.();
    setAnimatedVisible(false);
  }}></Dialog>:<></>,el as Element)
}

export default BaseModal