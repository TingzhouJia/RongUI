import { MenuClickEventHandler } from "./interface";
import { ItemGroupWrapper, ItemGroupTitleWrapper, ItemGroupList } from "./wrapper";
import React from "react";

export interface MenuItemGroupProps {
    disabled?: boolean;
    renderMenuItem?: (
      item: React.ReactElement,
      index: number,
      key: string,
    ) => React.ReactElement;
    index?: number;
    className?: string;
    subMenuKey?: string;
    title?: React.ReactNode;
    onClick?: MenuClickEventHandler;
  }

const MenuItemGroup:React.FC<MenuItemGroupProps>=(props)=>{
    const  renderInnerMenuItem = (item: React.ReactElement) => {
        const { renderMenuItem, index } = props;
        return renderMenuItem&&renderMenuItem(item, index as number, props.subMenuKey as string);
      };
    
    return (
        <ItemGroupWrapper className={props.className} >
            <ItemGroupTitleWrapper  title={typeof props.title === 'string' ? props.title : undefined}>
                {props.title}
            </ItemGroupTitleWrapper>
            <ItemGroupList>
                {
                    React.Children.map(props.children,renderInnerMenuItem)
                }
            </ItemGroupList>
        </ItemGroupWrapper>
    )
}

export default MenuItemGroup