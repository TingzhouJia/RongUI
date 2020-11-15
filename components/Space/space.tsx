import React from "react";
import { NormalSizes } from "components/utils";
import { SpacerBase } from "./wrapper";
import Item from "./item";

export const LastIndexContext = React.createContext(0);


export interface SpaceProps {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    size?: NormalSizes | number;
    direction?: 'horizontal' | 'vertical';
    align?: 'flex-start' | 'flex-end' | 'center' | 'baseline';
    split?: React.ReactNode;
}

const Space: React.FC<SpaceProps> = (props) => {
    const {
        size = 'small',
        align,
        className,
        children,
        direction = 'horizontal',
        split,
        ...otherProps
    } = props;
    const childNodes = React.Children.toArray(children)
    if (childNodes.length === 0) {
        return null;
    }

    const mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
    let latestIndex = 0;
    const nodes = childNodes.map((child, i) => {
        if (child !== null && child !== undefined) {
            latestIndex = i;
        }

        /* eslint-disable react/no-array-index-key */
        return (
            <Item

                key={`rong-space-${i}`}
                direction={direction}
                size={size}
                index={i}
                marginDirection={'marginRight'}
                split={split}
            >
                {child}
            </Item>
        );
        /* eslint-enable */
    });
    return (
        <SpacerBase {...otherProps} align={mergedAlign} direction={direction}>
            <LastIndexContext.Provider value={latestIndex}>{nodes}</LastIndexContext.Provider>
        </SpacerBase>
    )
}

export default Space