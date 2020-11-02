import React from "react";
import { ItemMetaContent, ItemMetaTitle, ItemMetaDescription, ItemMetaAvatar, ItemMeta, ItemAction, ItemEachAction, ItemActionSplit, ItemMain, ItemExtra, ItemLi, ItemWrap } from "./wrapper";
import Grid from "../Grid";
import { ListContext } from ".";
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
      <ItemMetaContent id="list-item-meta-content">
        {title && <ItemMetaTitle id="list-item-meta-title">{title}</ItemMetaTitle>}
        {description && <ItemMetaDescription id="list-item-meta-desciption">{description}</ItemMetaDescription>}
      </ItemMetaContent>
    );
  
    return (
      <ItemMeta id="list-item-meta" {...others} >
        {avatar && <ItemMetaAvatar id="list-item-meta-avatar">{avatar}</ItemMetaAvatar>}
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
    const { grid, itemLayout,bordered,size} = React.useContext(ListContext);
  
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
      <ItemAction id="list-item-actions" key="actions">
        {actions.map((action: React.ReactNode, i: number) => (
          <ItemEachAction id="list-item-action" key={`item-action-${i}`}>
            {action}
            {i !== actions.length - 1 && <ItemActionSplit />}
          </ItemEachAction>
        ))}
      </ItemAction>
    );
    const Element = itemLayout === 'vertical' && extra
    ? [
        <ItemMain id="list-item-main" key="content">
          {children}
          {actionsContent}
        </ItemMain>,
        <ItemExtra id="list-item-extra" key="extra">
          {extra}
        </ItemExtra>,
      ]
    : [children,  extra?React.cloneElement(extra as React.ReactElement, { key: 'extra',style:{marginTop:"15px"} }):<></>,actionsContent]
    const itemChildren = (
      grid?<ItemWrap
      id="list-item"
      bordered={bordered}
      size={size}
        flex={isFlexMode()}
        {...(others as any)} // `li` element `onCopy` prop args is not same as `div`
      >
       {Element}
    </ItemWrap>:<ItemLi id="list-item-li" flex={isFlexMode()}  bordered={bordered}
      size={size}  {...(others as any)}>{Element}</ItemLi>
    );
  
    return grid ? (
        <Grid >
            {itemChildren}
      </Grid>
    ) : (
      itemChildren
    );
  };
  
  Item.Meta = Meta;
  
  export default Item;