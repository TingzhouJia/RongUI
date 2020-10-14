import React from 'react'
import Pagination, { PaginationProps } from '../Pagination';
import { ListPagination, ListHeader, ListFooter, ListBase } from './wrapper';
export type ListItemLayout = 'horizontal' | 'vertical';
export type ListSize = 'small' | 'default' | 'large';
export interface ListProps<T> {
    bordered?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    dataSource?: T[];
    extra?: React.ReactNode;
    grid?: { gap?: number, justify?: 'center' };
    pagination?: PaginationProps | boolean
    id?: string;
    itemLayout?: ListItemLayout;
    // loading?: boolean | SpinProps;
    loadMore?: React.ReactNode;

    prefixCls?: string;
    rowKey?: ((item: T) => string) | string;
    renderItem?: (item: T, index: number) => React.ReactNode;
    size?: ListSize;
    split?: boolean;
    header?: React.ReactNode;
    footer?: React.ReactNode;
}
export interface ListConsumerProps {
    grid?: any;
    itemLayout?: string;
    size?:'small'|'large'|'default';
    bordered?:boolean
}
export const ListContext = React.createContext<ListConsumerProps>({});
export const ListConsumer = ListContext.Consumer;


function List<T>({
    pagination = false as ListProps<any>['pagination'],
    prefixCls: customizePrefixCls,
    bordered = false,
    split = true,
    className,
    children,
    itemLayout,
    loadMore,
    grid,
    dataSource = [],
    size,
    header,
    footer,
    // loading = false,
    rowKey,
    renderItem,
    ...rest
}: ListProps<T>) {
    const paginationObj = pagination && typeof pagination === 'object' ? pagination : {};
    const [paginationCurrent, setPaginationCurrent] = React.useState(
        paginationObj.defaultCurrent || 1,
    );
    const [paginationSize, setPaginationSize] = React.useState(paginationObj.defaultPageSize || 10);
    const defaultPaginationProps = {
        current: 1,
        total: 0,
    };
    const keys: { [key: string]: string } = {};

    const triggerPaginationEvent = (eventName: string) => {
        return (page: number, pageSize?: number) => {
            setPaginationCurrent(page);
            setPaginationSize(pageSize||0);
            if (pagination && (pagination as any)[eventName]) {
                (pagination as any)[eventName](page, pageSize);
            }
        };
    };
    const onPaginationChange = triggerPaginationEvent('onChange');

  
    const renderInnerItem = (item: any, index: number) => {
        if (!renderItem) return null;
    
        let key;
    
        if (typeof rowKey === 'function') {
          key = rowKey(item);
        } else if (typeof rowKey === 'string') {
          key = item[rowKey];
        } else {
          key = item.key;
        }
    
        if (!key) {
          key = `list-item-${index}`;
        }
    
        keys[index] = key;
    
        return renderItem(item, index);
      };
      const isSomethingAfterLastItem = () => {
        return !!(loadMore || pagination || footer);
      };
    
      const paginationProps = {
        ...defaultPaginationProps,
        total: dataSource.length,
        current: paginationCurrent,
        pageSize: paginationSize,
        ...(pagination as PaginationProps) ,
      };
      const largestPage = Math.ceil(paginationProps.total / paginationProps.pageSize);
      if (paginationProps.current > largestPage) {
        paginationProps.current = largestPage;
      }
      const paginationContent = pagination ? (
        <ListPagination bordered={bordered}>
          <Pagination
            {...paginationProps}
            onChange={onPaginationChange}
          />
        </ListPagination>
      ) : null;

      let splitDataSource = [...dataSource];
      if (pagination) {
        if (dataSource.length > (paginationProps.current - 1) * paginationProps.pageSize) {
          splitDataSource = [...dataSource].splice(
            (paginationProps.current - 1) * paginationProps.pageSize,
            paginationProps.pageSize,
          );
        }
      }
    //   let childrenContent
    //   if (splitDataSource.length > 0) {
    //     const items = splitDataSource.map((item: any, index: number) => renderInnerItem(item, index));
    //     const childrenList = React.Children.map(items, (child: any, index) => (
    //       <div key={keys[index]} style={colStyle}>
    //         {child}
    //       </div>
    //     ));
    //     childrenContent = grid ? (
    //       <Row gutter={grid.gutter}>{childrenList}</Row>
    //     ) : (
    //       <ul className={`${prefixCls}-items`}>{items}</ul>
    //     );
    //   } else if (!children && !isLoading) {
    //     childrenContent = renderEmptyFunc(prefixCls, renderEmpty);
    //   }
    return (
        <ListContext.Provider value={{ grid, itemLayout,size,bordered }}>
      <ListBase layout={itemLayout} bordered={bordered} size={size} after={isSomethingAfterLastItem()} split={split} {...rest}>
     
        {header && <ListHeader size={size} bordered={bordered}>{header}</ListHeader>}

          {children}

        {footer && <ListFooter size={size} bordered={bordered}>{footer}</ListFooter>}
        {loadMore ||
          (  paginationContent)}
      </ListBase>
    </ListContext.Provider>
    )
}