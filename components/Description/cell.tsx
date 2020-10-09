import React from 'react'
import { DesItem, DesItemContainer, DesItemLabel, DesItemContent } from './wrapper';
export interface CellProps {
    span: number;
    className?: string;
    component: string;
    style?: React.CSSProperties;
    bordered?: boolean;
    label?: React.ReactNode;
    content?: React.ReactNode;
    colon?: boolean;
}

const Cell: React.FC<CellProps> = ({ component,
    span,
    className,
    style,
    bordered,
    label,
    content,
    colon, }) => {
    
    const Component = component as any;
    if (bordered) {
        return (
            <Component style={style} colSpan={span} className={className}>
                <DesItemLabel colon={colon} label={label?true:false}>
                    <DesItemContent >
                        {label ? label : content}
                    </DesItemContent>
                </DesItemLabel>
            </Component>
        )
    }
    return (
        <Component style={style} colSpan={span}>
            <DesItem className={className}>
                <DesItemContainer>
                    {label && (
                        <DesItemLabel
                        colon={colon} label={label?true:false}
                        >
                            {label}
                        </DesItemLabel>)}
                    {content && <DesItemContent>{content}</DesItemContent>}
                </DesItemContainer>
            </DesItem>
        </Component>
    )
}

export default Cell