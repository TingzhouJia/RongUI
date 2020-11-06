import { DialogProps } from "..";
import { ModalRenderRoot, ModalBodyWrap } from "../wrapper";
import Mask from "./mask";
import React, { useRef } from "react";
import KeyCode from "rc-util/lib/KeyCode";
import Content, { ContentRef } from "./content";
import { createPortal } from "react-dom";
import usePortal from "../../utils/usePortal";


const Dialog: React.FC<DialogProps> = (props) => {
    const {

        zIndex,
        visible = false,
        keyboard = true,


        // Wrapper
        title,
        wrapClassName,
        wrapProps,
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
        onClose?.(e);
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

    // keep focus inside dialog
    if (visible) {
      if (e.keyCode === KeyCode.TAB) {
        contentRef?.current?.changeActive(!e.shiftKey);
      }
    }
  }
    return <ModalRenderRoot>
        <Mask
            visible={mask && visible}
            style={{
                zIndex,
                ...maskStyle,
            }}
            maskProps={maskProps}
        />
        <ModalBodyWrap
         tabIndex={-1}
         onKeyDown={onWrapperKeyDown}
         className={ wrapClassName}
         ref={wrapperRef}
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
    const { visible=false, getContainer,  afterClose } = props;
  const [animatedVisible, setAnimatedVisible] = React.useState<boolean>(visible);
    const el=usePortal('modal',(getContainer as any))
  React.useEffect(() => {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]);
  return createPortal(visible?<Dialog   {...props} afterClose={() => {
    afterClose?.();
    setAnimatedVisible(false);
  }}></Dialog>:<></>,el as Element)
}