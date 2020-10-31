import React from 'react'
import { DesItem, DesItemContainer, DesItemLabel, DesItemContent } from './wrapper';
import { NormalSizes } from '../utils';
export interface CellProps {
    size?:NormalSizes;
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
                <DesItemContainer id="description-item-container" size={size} style={style} className={className} direction={direction}  bordered={bordered} column={column}>
                    {label && (
                        <DesItemLabel
                        id="description-item-label"
                        size={size}
                        bordered={bordered}
                        layout={direction}
                        colon={colon} labelExist={label?true:false}
                        >
                            {label}
                        </DesItemLabel>)}
                    {content && <DesItemContent size={size} vertical={direction==='vertical'} id="description-item-content">{content}</DesItemContent>}
                </DesItemContainer>
    )
}

export default Cell