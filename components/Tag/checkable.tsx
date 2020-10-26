import React from 'react'
import { CheckItem } from './wrapper';

export interface CheckableTagProps {

    className?: string;
    style?: React.CSSProperties;
    checked: boolean;
    onChange?: (checked: boolean) => void;
    onClick?: (e: React.MouseEventHandler<HTMLElement>) => void;
  }

  const CheckableTag: React.FC<CheckableTagProps> = props => {
  
    const handleClick = (e: React.MouseEventHandler) => {
      const { checked, onChange, onClick } = props;
      if (onChange) {
        onChange(!checked);
      }
      if (onClick) {
        onClick(e);
      }
    };
  
    const {  className, checked,onChange, ...restProps } = props;
 
  
   // TypeScript cannot check delete now.
    return <CheckItem checked={checked} {...(restProps as any)} className={className} onClick={handleClick} />;
  };
  
  export default CheckableTag;