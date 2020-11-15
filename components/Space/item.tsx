import { LastIndexContext } from './space';
import React from 'react'
import { NormalSizes } from 'components/utils';
import {  SpaceItemBase } from './wrapper';


const spaceSize = {
    small: 8,
    middle: 16,
    large: 24,
  };
  
  export interface ItemProps {
    children: React.ReactNode;
    index: number;
    direction?: 'horizontal' | 'vertical';
    size?: NormalSizes | number;
    marginDirection: 'marginLeft' | 'marginRight';
    split?: string | React.ReactNode;
  }

  export default function Item({
    direction,
    index,
    size,
    marginDirection,
    children,
    split,
  }: ItemProps) {
    const latestIndex = React.useContext(LastIndexContext);
    const style =
    index >= latestIndex
      ? {}
      : {
          [direction === 'vertical' ? 'marginBottom' : marginDirection]:
            ((typeof size === 'string' ? spaceSize[size as 'small'|'middle'|'large'] : size) ?? 0) / (split ? 2 : 1),
        };

        return (
            <>
              <SpaceItemBase style={style}>
                {children}
              </SpaceItemBase>
              {index < latestIndex && split && (
                <span style={style}>
                  {split}
                </span>
              )}
            </>
          );

}