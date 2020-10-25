import React from 'react'
export interface SkeletonTitleProps {

    className?: string;
    style?: object;
    width?: number | string;
  }
  
  const Title = ({className, width, style }: SkeletonTitleProps) => (
    <h3 className={ className} style={{ width, ...style }} />
  );
  
  export default Title;