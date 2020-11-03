import React from 'react'
import Element,{ SkeletonElementProps } from './element';
import { ElemBtn } from './wrapper';
export interface SkeletonButtonProps {
    size?: 'large' | 'small' | 'default';
    active?:boolean
    className?:any
    style?:React.CSSProperties
  }
  
  const SkeletonButton:React.FC<SkeletonButtonProps> = (props) => {

    return  <ElemBtn id="skeleton-button" {...props}><Element /></ElemBtn>
  };
  
  SkeletonButton.defaultProps = {
    size: 'default',
  };
  
  export default SkeletonButton;