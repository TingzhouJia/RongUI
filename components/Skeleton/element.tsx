import { Elem } from "./wrapper";
import React from "react";

export interface SkeletonElementProps {
    className?: string;
    style?: object;
    size?: 'large' | 'small' | 'default' | number;
    shape?: 'circle' | 'square' | 'round';
    active?: boolean;
  }
  
const Element = (props: SkeletonElementProps) => {
    const {  className, style, size, shape } = props;
  
   
  
    const sizeStyle: React.CSSProperties =
      typeof size === 'number'
        ? {
            width: size,
            height: size,
            lineHeight: `${size}px`,
          }
        : {};
  
    return (
      <Elem
        size={(typeof size==='string')?size:'default'}
        shape={shape}
        className={className}
        style={{ ...sizeStyle, ...style }}
      />
    );
  };
  
  export default Element;