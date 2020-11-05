import TimelineItem, { TimeLineItemProps } from "./item";
import React from "react";
import { BasicTimeLine } from "./wrapper";
import { TimelineContext } from './context'
export interface TimelineProps {
    className?: string;
    style?: React.CSSProperties;
    reverse?: boolean;
    mode?: 'left' | 'right';
}

interface TimelineType extends React.FC<TimelineProps> {
    Item: React.FC<TimeLineItemProps>;
}

const Timeline: TimelineType = (props) => {
    const {
        children,
        className,
        reverse = false,
        mode = "right",
        ...restProps
    } = props;

    const timeLineItems = reverse
        ? [...React.Children.toArray(children).reverse()]
        : [...React.Children.toArray(children)];
    const truthyItems = timeLineItems.filter(item => !!item);
    const cnumber=React.Children.count(truthyItems)
    const items=React.Children.map((truthyItems as any),(ele: React.ReactElement<any>, idx)=>{
        return React.cloneElement(ele,{key:`rong-timeline-item-${idx}`,last:cnumber===idx+1})
    })
    return (
        <TimelineContext.Provider value={{ mode }}>
            <BasicTimeLine {...restProps}>
                {items}
            </BasicTimeLine>
        </TimelineContext.Provider>
    )
}
Timeline.Item = TimelineItem

export default Timeline