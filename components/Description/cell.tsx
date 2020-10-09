import React from 'react'
import { DesItem, DesItemContainer, DesItemLabel, DesItemContent } from './wrapper';
export interface CellProps {
    size?:'small'|'default'|'large';
    className?: string;
    style?: React.CSSProperties;
    column:number;
    bordered?: boolean;
    label?: React.ReactNode;
    content?: React.ReactNode;
    colon?: boolean;
    direction?:'vertical'|'horizontal'
}

const Cell: React.FC<CellProps> = ({ 
    className,
    style,
    column,
    bordered,
    direction,
    size,
    label,
    content,
    colon, }) => {
    
    return (
                <DesItemContainer style={style} className={className} direction={direction}  bordered={bordered} column={column}>
                    {label && (
                        <DesItemLabel
                        size={size}
                        bordered={bordered}
                        colon={colon} label={label?true:false}
                        >
                            {label}
                        </DesItemLabel>)}
                    {content && <DesItemContent size={size}>{content}</DesItemContent>}
                </DesItemContainer>
    )
}

export default Cell