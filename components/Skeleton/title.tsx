import React from 'react'
import { ElemTitle } from './wrapper';
export interface SkeletonTitleProps {
    className?: string;
    style?: object;
    width?: number | string;
    active?:boolean
  }
  
  const Title = ({className, width, style,active }: SkeletonTitleProps) => (
    <ElemTitle id="skeleton-title" active={active} className={ className} style={{ width, ...style }} />
  );
  
  export default Title;