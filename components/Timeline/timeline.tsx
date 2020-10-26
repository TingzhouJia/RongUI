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



    return (
        <TimelineContext.Provider value={{ mode }}>
            <BasicTimeLine {...restProps}>
                {timeLineItems}
            </BasicTimeLine>
        </TimelineContext.Provider>
    )
}
Timeline.Item = TimelineItem