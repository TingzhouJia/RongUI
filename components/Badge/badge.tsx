import { LiteralUnion, ResultType, NormalSizes } from "../utils";
import { BadgeBase, BadgeText, BadgeDot, BadgeNumber } from "./wrapper";
import React from "react";
import { palette } from "../styles";

export interface Props {
    /** Number to show in badge */
    count?: React.ReactNode;
    showZero?: boolean;
    /** Max count to show */
    maxCount?: number;
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


const Badge: React.FC<BadgeProps> = ({ children,
    status,
    text,
    color,
    count = null,
    maxCount = 99,
    dot = false,
    size = 'default',
    style,
    className,
    showZero = false,
    ...restProps }) => {

    const getNumberedDisplayCount = () => {
        const displayCount =
            (count as number) > (maxCount as number) ? `${maxCount}+` : count;
        return displayCount as string | number | null;
    };
    const isZero = () => {
        const numberedDisplayCount = getNumberedDisplayCount();
        return numberedDisplayCount === '0' || numberedDisplayCount === 0;
    };

  
  
    
    const renderStatusText = () => {
       
        return (color|| text||status)&& <BadgeText id="badge-text">
            {text}
        </BadgeText>
    };

    if (!children && (text||color||status)) {

        return (
            <BadgeBase
                id="badge-base"
                className={className}
            >
                <BadgeDot id="badge-dot" istext={!children||!!text}  status={status} colordot={color}/>
                <BadgeText id="badge-text-no-child" >
                    {text}
                </BadgeText>
            </BadgeBase>
        );
    }
    const renderBadgeNumber=()=>{
        if(isZero()&&!showZero){
            return <></>
        }
        return <BadgeNumber id="badge-number"   multi={ (count&&count.toString().length > 1) as boolean}
        small={size === 'small'}  style={style}
        className={className} >
        { getNumberedDisplayCount()}
    </BadgeNumber>
    }
   
    return (
        <BadgeBase
            id="badge-base"
        >
            {children}
            {
                dot?<BadgeDot id="badge-dot" istext={false} status={status} colordot={color} />:renderBadgeNumber()
            }
            {/* {renderStatusText()} */}
        </BadgeBase>
    )
}
export default Badge