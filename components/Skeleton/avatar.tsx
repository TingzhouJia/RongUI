import React from 'react'
import Element,{ SkeletonElementProps } from './element';
import { NormalSizes } from '../utils';
import { ElemAvatar } from './wrapper';
export interface SkeletonAvatarProps extends Omit<SkeletonElementProps, 'shape'> {
    shape?: 'circle' | 'square';
    active?:boolean
  }
  
  const SkeletonAvatar :React.FC<SkeletonAvatarProps>= (props) => {

    return   <ElemAvatar  active={props.active}><Element  {...props}  /></ElemAvatar>;
  };
  
  SkeletonAvatar.defaultProps = {
    shape: 'circle',
  };
  
  export default SkeletonAvatar;