import React from 'react'
import Element,{ SkeletonElementProps } from './element';
export interface SkeletonAvatarProps extends Omit<SkeletonElementProps, 'shape'> {
    shape?: 'circle' | 'square';
  }
  
  const SkeletonAvatar = (props: SkeletonAvatarProps) => {
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
  
  SkeletonAvatar.defaultProps = {
    shape: 'circle',
  };
  
  export default SkeletonAvatar;