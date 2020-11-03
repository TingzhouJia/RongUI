import React from 'react'
import Element,{ SkeletonElementProps } from './element';
import { ElemAvatar } from './wrapper';
export interface SkeletonAvatarProps extends Omit<SkeletonElementProps, 'shape'> {
    shape?: 'circle' | 'square';
    active?:boolean
  }
  
  const SkeletonAvatar :React.FC<SkeletonAvatarProps>= (props) => {
    const {className,style,active,...rest}=props
    return   <ElemAvatar id="skeleton-avatar" className={className} style={props.style}  active={props.active}><Element  {...rest}  /></ElemAvatar>;
  };
  
  SkeletonAvatar.defaultProps = {
    shape: 'circle',
  };
  
  export default SkeletonAvatar;