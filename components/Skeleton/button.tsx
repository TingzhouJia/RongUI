import React from 'react'
import Element,{ SkeletonElementProps } from './element';
export interface SkeletonButtonProps extends Omit<SkeletonElementProps, 'size'> {
    size?: 'large' | 'small' | 'default';
  }
  
  const SkeletonButton = (props: SkeletonButtonProps) => {
    const renderSkeletonButton = () => {
      const {  className, active,...other } = props;
    
    

      return (
        <div >
          <Element  {...other} />
        </div>
      );
    };
    return <>{renderSkeletonButton}</>;
  };
  
  SkeletonButton.defaultProps = {
    size: 'default',
  };
  
  export default SkeletonButton;