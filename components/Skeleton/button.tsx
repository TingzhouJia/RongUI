import React from 'react'
import Element,{ SkeletonElementProps } from './element';
export interface SkeletonButtonProps extends Omit<SkeletonElementProps, 'size'> {
    size?: 'large' | 'small' | 'default';
  }
  
  const SkeletonButton:React.FC<SkeletonButtonProps> = (props) => {

    return  <Element  {...props} />
  };
  
  SkeletonButton.defaultProps = {
    size: 'default',
  };
  
  export default SkeletonButton;