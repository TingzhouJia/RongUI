import React from 'react'
import { ModalmaskWrap } from '../wrapper';
export interface MaskProps {

    visible: boolean;
    style?: React.CSSProperties;
    maskProps?: React.HTMLAttributes<HTMLDivElement>;
  }

  export default function Mask(props: MaskProps) {
    const {  style, visible, maskProps } = props;
  
    return (
    
         visible? <ModalmaskWrap
         id="rong-modal-mask"
         style={{  ...style }}
         {...maskProps}
       />:<></>
    
    );
  }