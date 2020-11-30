import React from 'react'
import { ItemDivider } from './wrapper';
export interface DividerProps {
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
}

const Divider: React.FC<DividerProps> = ({
    className,

    style,
  }) => (
    <ItemDivider className={className} style={style} />
  );
  
export default Divider
