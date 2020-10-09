import React from 'react'
export interface DescriptionsItemProps {
    className?: string;
    style?: React.CSSProperties;
    label?: React.ReactNode;
    children: React.ReactNode;
    span?: number;
  }
  
  const DescriptionsItem: React.FC<DescriptionsItemProps> = ({ children }) => children as JSX.Element;
  
  export default DescriptionsItem;