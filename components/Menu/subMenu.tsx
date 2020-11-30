import { MenuClickEventHandler, OpenEventHandler, HoverEventHandler, SelectEventHandler, TriggerSubMenuAction, DestroyEventHandler, MenuHoverEventHandler, MiniStore, MenuMode, LegacyFunctionRef, RenderIconType, BuiltinPlacements } from "./interface";
import { useState } from "react";
import React from "react";
import { ArrowRightOutlined, RightOutlined } from "@ant-design/icons";
import { SubMenuTitle, SubMenuTitleArrow, SubMenuTitleIcon } from "./wrapper";

export interface SubMenuProps {
    parentMenu?: React.ReactElement & {
        isRootMenu: boolean;
        subMenuInstance: React.ReactInstance;
    };
    title?: React.ReactNode;
    children?: React.ReactNode;
    selectedKeys?: string[];
    openKeys?: string[];
    onClick?: MenuClickEventHandler;
    onOpenChange?: OpenEventHandler;
    eventKey?: string;
    multiple?: boolean;
    active?: boolean;
    onItemHover?: HoverEventHandler;
    onSelect?: SelectEventHandler;
    triggerSubMenuAction?: TriggerSubMenuAction;
    onDeselect?: SelectEventHandler;
    onDestroy?: DestroyEventHandler;

    isOpen?: boolean;
    mode?: MenuMode;
    itemIcon?: RenderIconType;
    expandIcon?: RenderIconType;
    inlineIndent?: number;
    level?: number;
    builtinPlacements?: BuiltinPlacements;
    disabled?: boolean;
    className?: string;
    popupClassName?: string;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {

    const onOpenChange: OpenEventHandler = e => {
        props.onOpenChange && props.onOpenChange(e);
    };
    const onSelect: SelectEventHandler = info => {
        props.onSelect && props.onSelect(info);
    };

    const onDeselect: SelectEventHandler = info => {
        props.onDeselect && props.onDeselect(info);
    }

    const [isOpen, setisOpen] = useState(props.isOpen)
    let isInline = props.mode === 'inline'
    let isHorizontal = props.mode === 'horizontal'
    let icon = null;
    if (!isHorizontal) {
        icon = props.expandIcon || <RightOutlined rotate={isOpen ? 90 : 0} />;// ReactNode
        if (typeof props.expandIcon === 'function') {
            icon = React.createElement(props.expandIcon as any, {
                ...props,
            });
        }
    }
    let itemIcon = null
    if (typeof props.itemIcon === "function") {
        itemIcon = React.createElement(props.itemIcon as any, { ...props })
    }
    const style: React.CSSProperties = {};



    if (isInline) {
     
        style.paddingLeft = (props.inlineIndent as any) * (props.level as any);
      
    }
    const title = (
        <SubMenuTitle
            role="button"
            aria-haspopup="true"
            title={typeof props.title === 'string' ? props.title : undefined}
        >
            <SubMenuTitleIcon>
                {itemIcon}
            </SubMenuTitleIcon>
            {props.title}
            <SubMenuTitleArrow>
                {icon}
            </SubMenuTitleArrow>
        </SubMenuTitle>
    );
    let children
    const renderSub=()=>{
        
    }
    return (
        <li className={props.className} style={style}>
            {title}
            {isInline?children:null}
        </li>
    )
}