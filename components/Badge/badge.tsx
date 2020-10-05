import { LiteralUnion, ResultType } from "../utils";
import { BadgeBase, BadgeText, BadgeDot, BadgeNumber } from "./components";
import React from "react";
import { palette } from "../styles";

export interface Props {
    /** Number to show in badge */
    count?: React.ReactNode;
    showZero?: boolean;
    /** Max count to show */
    overflowCount?: number;
    /** whether to show red dot without number */
    dot?: boolean;
    style?: React.CSSProperties;
    className?: string;
    status?: ResultType;
    color?: string;
    text?: React.ReactNode;
    size?: 'default' | 'small';

}
type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type BadgeProps = Props & NativeAttrs

const TypeBd = {
    error: palette.error,
    success: palette.success,
    warning: palette.warning,
    info: palette.info
}
const Badge: React.FC<BadgeProps> = ({ children,
    status,
    text,
    color,
    count = null,
    overflowCount = 99,
    dot = false,
    size = 'default',
    style,
    className,
    showZero = false,
    ...restProps }) => {

    const getNumberedDisplayCount = () => {
        const displayCount =
            (count as number) > (overflowCount as number) ? `${overflowCount}+` : count;
        return displayCount as string | number | null;
    };

    const hasStatus = (): boolean =>
        (status !== null && status !== undefined) || (color !== null && color !== undefined);
    const isZero = () => {
        const numberedDisplayCount = getNumberedDisplayCount();
        return numberedDisplayCount === '0' || numberedDisplayCount === 0;
    };

    const isDot = () => {
        return (dot && !isZero()) || hasStatus();
    };
    const bdot=isDot()
    const getDisplayCount = () => {
        // dot mode don't need count
        if (bdot) {
            return '';
        }
        return getNumberedDisplayCount();
    };
    const isHidden = () => {
        const displayCount = getDisplayCount();
        const isEmpty = displayCount === null || displayCount === undefined || displayCount === '';
        return (isEmpty || (isZero() && !showZero)) && !bdot;
    };
    const exactColor = () => {
        if (hasStatus()) {
            if (color) {
                return color
            }
            return TypeBd[status as ResultType]
        }else{
            return "#bfbfbf"
        }
    }
    const renderStatusText = () => {
        const hidden = isHidden();
        return hidden || !text ? null : <BadgeText>
            {text}
        </BadgeText>
    };

    if (!children && hasStatus()) {

        return (
            <BadgeBase 
            status={hasStatus()}
           {...restProps} 
            className={className} 
           >
                <BadgeDot color={exactColor()}  status={hasStatus()} />
                <BadgeText >
                    {text}
                </BadgeText>
            </BadgeBase>
        );
    }
    return (
        <BadgeBase 
        status={hasStatus()}
        className={className} 
       >
           {children}
        <BadgeNumber dot={isDot()} status={!!status} multi={(!bdot && count && count.toString && count.toString().length > 1) as boolean} 
        small={size==='small'} {...restProps} >
            {getDisplayCount()}
        </BadgeNumber>
        {renderStatusText()}
        </BadgeBase>
    )
}
export default Badge