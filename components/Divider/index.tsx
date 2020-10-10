import { DividerBase, DivideInner } from "./wrapper";
import React from "react";

export interface DividerProps {
    type?: 'horizontal' | 'vertical';
    orientation?: 'left' | 'right' | 'center';
    className?: string;
    children?: React.ReactNode;
    dashed?: boolean;
    style?: React.CSSProperties;
    plain?: boolean;
  }

  const Divider:React.FC<DividerProps>=(props)=>{
    const {type = 'horizontal',
    orientation = 'center',
    className,
    children,
    dashed,
    plain,
    ...restProps
  } = props;
  const hasChildren = !!children;
    return (<DividerBase hasChildren={hasChildren} {...restProps} className={className} orientation={orientation} dashed={dashed} plain={plain}>
        {children&&<DivideInner>{children}</DivideInner>}
    </DividerBase>)
  }

export default Divider