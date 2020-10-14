import React from "react";
import { ItemMetaContent, ItemMetaTitle, ItemMetaDescription, ItemMetaAvatar, ItemMeta, ItemAction, ItemEachAction, ItemActionSplit, ItemMain, ItemExtra, ItemLi, ItemWrap } from "./wrapper";
import Grid from "../Grid";
const {Container}=Grid
export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    extra?: React.ReactNode;
    actions?: React.ReactNode[];
  }

export interface ListItemMetaProps {
    avatar?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
    description?: React.ReactNode;
    style?: React.CSSProperties;
    title?: React.ReactNode;
}

export const Meta: React.FC<ListItemMetaProps> = ({
    className,
    avatar,
    title,
    description,
    ...others
  }) => {

    const content = (
      <ItemMetaContent>
        {title && <ItemMetaTitle>{title}</ItemMetaTitle>}
        {description && <ItemMetaDescription>{description}</ItemMetaDescription>}
      </ItemMetaContent>
    );
  
    return (
      <ItemMeta {...others} >
        {avatar && <ItemMetaAvatar>{avatar}</ItemMetaAvatar>}
        {(title || description) && content}
      </ItemMeta>
    );
  };
  export interface ListItemTypeProps extends React.FC<ListItemProps> {
    Meta: typeof Meta;
  }
  const Item: ListItemTypeProps = ({

    children,
    actions,
    extra,
    className,
    ...others
  }) => {
    const { grid, itemLayout } = React.useContext(ListContext);
  
    const isItemContainsTextNodeAndNotSingular = () => {
      let result;
     if(React.Children.count(children) > 1){
        React.Children.forEach(children as React.ReactElement[], (element: React.ReactElement<any>) => {
            if (typeof element === 'string') {
              result = true;
            }
          });
     }
      return result && React.Children.count(children) > 1;
    };
  
    const isFlexMode = () => {
      if (itemLayout === 'vertical') {
        return !!extra;
      }
      return !isItemContainsTextNodeAndNotSingular();
    };
  
    const actionsContent = actions && actions.length > 0 && (
      <ItemAction key="actions">
        {actions.map((action: React.ReactNode, i: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <ItemEachAction key={`item-action-${i}`}>
            {action}
            {i !== actions.length - 1 && <ItemActionSplit />}
          </ItemEachAction>
        ))}
      </ItemAction>
    );
    const Element = itemLayout === 'vertical' && extra
    ? [
        <ItemMain key="content">
          {children}
          {actionsContent}
        </ItemMain>,
        <ItemExtra key="extra">
          {extra}
        </ItemExtra>,
      ]
    : [children, actionsContent, extra?React.cloneElement(extra as React.ReactElement, { key: 'extra' }):<></>]
    const itemChildren = (
      grid?<ItemWrap
        flex={isFlexMode()}
        {...(others as any)} // `li` element `onCopy` prop args is not same as `div`
       
      >
       {Element}
    </ItemWrap>:<ItemLi  {...(others as any)}>{Element}</ItemLi>
    );
  
    return grid ? (
        <Grid.Container >
            {itemChildren}
      </Grid.Container>
    ) : (
      itemChildren
    );
  };
  
  Item.Meta = Meta;
  
  export default Item;