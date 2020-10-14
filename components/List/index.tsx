import React from 'react'
export type ListItemLayout = 'horizontal' | 'vertical';
export type ListSize = 'small' | 'default' | 'large';
export interface ListProps<T> {
    bordered?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    dataSource?: T[];
    extra?: React.ReactNode;
    grid?: {gap?:number,justify?:'center'};
    id?: string;
    itemLayout?: ListItemLayout;
   // loading?: boolean | SpinProps;
    loadMore?: React.ReactNode;
    pagination?: boolean;
    prefixCls?: string;
    rowKey?: ((item: T) => string) | string;
    renderItem?: (item: T, index: number) => React.ReactNode;
    size?: ListSize;
    split?: boolean;
    header?: React.ReactNode;
    footer?: React.ReactNode;
  }