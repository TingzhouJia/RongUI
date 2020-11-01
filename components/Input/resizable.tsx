import { TextAreaProps } from "./textArea";
import { useState, useRef, useEffect, useImperativeHandle } from "react";
import calculateNodeHeight from "./utils";
import ResizeObserver from '../utils/resize'
import React from "react";
import { TextAreaBase } from "./wrapper";
enum RESIZE_STATUS {
    NONE,
    RESIZING,
    RESIZED,
}

export interface AutoSizeType {
    minRows?: number;
    maxRows?: number;
}

export interface ResizeArea {
    resizeTextarea: () => void,
    focus:()=>void,blur:()=>void, 
    textArea?: HTMLTextAreaElement|null
}

const ResizableTextArea= React.forwardRef<ResizeArea,TextAreaProps>(((props,ref) => {
    const [textCSS, settextCSS] = useState<React.CSSProperties>({})
    const [status, setstatus] = useState<RESIZE_STATUS>()
    const [resizeFrameId, setresizeFrameId] = useState(0)
    const [nextFrameActionId, setnextFrameActionId] = useState(0)
    const textArea = useRef<HTMLTextAreaElement>(null)
    const fixFirefoxAutoScroll = () => {
        try {
            if (document.activeElement === textArea.current) {
                const currentStart = textArea?.current?.selectionStart||0;
                const currentEnd = textArea?.current?.selectionEnd||0;
                textArea?.current?.setSelectionRange(currentStart, currentEnd);
            }
        } catch (e) {
            // Fix error in Chrome:
            // Failed to read the 'selectionStart' property from 'HTMLInputElement'
            // http://stackoverflow.com/q/21177489/3040605
        }
    }
    useImperativeHandle(
        ref,
        () => ({
            resizeTextarea,
            focus:()=>textArea.current?.focus(),
            blur:()=>textArea.current?.blur(),
            textArea:textArea?.current
        }),
        [props],
    )
    const handleResize = (size: { width: number; height: number }) => {
      
        const { autoSize, onResize } =props;
        if (status !== RESIZE_STATUS.NONE) {
          return;
        }
    
        if (typeof onResize === 'function') {
          onResize(size);
        }
        if (autoSize) {
          resizeOnNextFrame();
        }
      };
    const resizeOnNextFrame = () => {
        cancelAnimationFrame(nextFrameActionId);
        setnextFrameActionId(requestAnimationFrame(resizeTextarea))
      };
    const resizeTextarea = () => {
        const { autoSize } = props;
        if (!autoSize || !textArea.current) {
            return;
        }
        const { minRows, maxRows } = autoSize as AutoSizeType;
        const textareaStyles = calculateNodeHeight(
            (textArea.current as any),
            false,
            minRows,
            maxRows,
        );
        settextCSS(textareaStyles)
        setstatus(RESIZE_STATUS.RESIZING)

        cancelAnimationFrame(resizeFrameId);
        setresizeFrameId(requestAnimationFrame(() => {
            setstatus(RESIZE_STATUS.RESIZED)

            setresizeFrameId(requestAnimationFrame(() => {
                setstatus(RESIZE_STATUS.NONE)
                fixFirefoxAutoScroll();
            }))

        }))

    };
    useEffect(() => {
        resizeTextarea()
        return () => {
            cancelAnimationFrame(nextFrameActionId);
            cancelAnimationFrame(resizeFrameId);
        }
    }, [props])
    const renderTextArea=()=>{
        const {
            autoSize,
            onResize,
            disabled,
          } = props;
        
          const style: React.CSSProperties = {
            ...props.style,
            ...textCSS,
            ...(status === RESIZE_STATUS.RESIZING
              ? // React will warning when mix `overflow` & `overflowY`.
                // We need to define this separately.
                { overflowX: 'hidden', overflowY: 'hidden' }
              : null),
          };
        // return (
        //     <ResizeObserver
        //     onResize={handleResize}
        //     disabled={!(autoSize || onResize)}
        //     >
        //         <TextAreaBase disabled={disabled} style={style} ref={textArea}></TextAreaBase>
        //     </ResizeObserver>
        // )
         return (<TextAreaBase  disabled={disabled} style={style} ref={textArea}></TextAreaBase>)
    }
return (<>{renderTextArea()}</>)
}))

export default ResizableTextArea