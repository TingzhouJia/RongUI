import React from 'react'
import Pagination, { PaginationProps } from '../Pagination';
import { ListPagination, ListHeader, ListFooter, ListBase } from './wrapper';
import Item from './item'
export type ListItemLayout = 'horizontal' | 'vertical';
export type ListSize = 'small' | 'default' | 'large';
export interface BasicListProps {
  bordered?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  dataSource?: any[];
  grid?: { gap?: number, justify?: 'center' };
  pagination?: PaginationProps | boolean
  id?: string;
  itemLayout?: ListItemLayout;
  // loading?: boolean | SpinProps;
  loadMore?: React.ReactNode;
  rowKey?: ((item: any) => string) | string;
  renderItem?: (item: any, index: number) => React.ReactNode;
  size?: ListSize;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}
export interface ListConsumerProps {
  grid?: any;
  itemLayout?: ListItemLayout;
  size?: 'small' | 'large' | 'default';
  bordered?: boolean
}
export const ListContext = React.createContext<ListConsumerProps>({});
export const ListConsumer = ListContext.Consumer;

export interface ListProps extends React.FC<BasicListProps> {
  Item:typeof Item
}
const List:ListProps=({
  pagination = false as BasicListProps['pagination'],
  bordered = true,
  className,
  children,
  itemLayout="vertical",
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
}) =>{
  const paginationObj = pagination && typeof pagination === 'object' ? pagination : {};
  const [paginationCurrent, setPaginationCurrent] = React.useState(
    paginationObj.defaultCurrent || 1,
  );
  const [paginationSize, setPaginationSize] = React.useState(paginationObj.defaultPageSize || 10);
  const defaultPaginationProps = {
    current: 1,
    total: 0,
  };
  let keys: { [key: string]: string } = {};

  const triggerPaginationEvent = (eventName: string) => {
    return (page: number, pageSize?: number) => {
      setPaginationCurrent(page);
      setPaginationSize(pageSize || 0);
      if (pagination && (pagination as any)[eventName]) {
        (pagination as any)[eventName](page, pageSize);
      }
    };
  };
  const onPaginationChange = triggerPaginationEvent('onChange');

  //render item function
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


    return React.cloneElement((renderItem(item, index) as any),{key});
  };
  //
  const isSomethingAfterLastItem = () => {
    return !!(loadMore || pagination || footer);
  };

  const paginationProps = {
    ...defaultPaginationProps,
    total: dataSource.length,
    current: paginationCurrent,
    pageSize: paginationSize,
    ...(pagination as PaginationProps),
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
  const renderBySource=()=>{
    if(renderItem){
      return splitDataSource.map((item,index)=>{
       return renderInnerItem(item,index)
      })
    }
   
  }

  return (
    <ListContext.Provider value={{ grid, itemLayout, size, bordered }}>
      <ListBase id="list-base" layout={itemLayout} bordered={bordered} size={size} after={isSomethingAfterLastItem()}  {...rest}>

        {header && <ListHeader id="list-header" size={size} bordered={bordered}>{header}</ListHeader>}
        {renderBySource()}
        {React.Children.map(children,(item,index)=>{
          return React.cloneElement((item as any),{key:'list-item-by'+index})
        })}
        
        {footer && <ListFooter id="list-footer" size={size} bordered={bordered}>{footer}</ListFooter>}
        {loadMore ||
          (paginationContent)}
      </ListBase>
    </ListContext.Provider>
  )
}

List.Item=Item
export default List