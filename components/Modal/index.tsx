import { ReactNode, SyntheticEvent, CSSProperties } from "react";

export interface DialogProps {
    className?: string;
    keyboard?: boolean;
    style?: CSSProperties;
    mask?: boolean;
    children?: any;
    afterClose?: () => any;
    onClose?: (e: SyntheticEvent) => any;
    closable?: boolean;
    maskClosable?: boolean;
    visible?: boolean;
    mousePosition?: {
      x: number;
      y: number;
    };
    title?: ReactNode;
    footer?: ReactNode;
    bodyStyle?: CSSProperties
    maskStyle?: CSSProperties
    wrapClassName?: string;
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