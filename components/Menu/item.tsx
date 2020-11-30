import { HoverEventHandler, SelectEventHandler, MenuClickEventHandler, DestroyEventHandler, MenuHoverEventHandler, MenuMode, RenderIconType } from "./interface";
import React, { CSSProperties } from "react";
import {ItemWrapper} from './wrapper'

export interface MenuItemProps {
    className?: string;
    style?: React.CSSProperties;
    active?: boolean;
    eventKey?: React.Key;
    children?: React.ReactNode;
    //selectedKeys?: string[];
    disabled?: boolean;
    title?: string;
    role?: string
    onItemHover?: HoverEventHandler;
    onSelect?: SelectEventHandler;
    onClick?: MenuClickEventHandler;
    onDeselect?: SelectEventHandler;
    parentMenu?: React.ReactInstance;
    multiple?: boolean;
    isSelected?: boolean;
    itemIcon?: RenderIconType;
    mode?: MenuMode;
    inlineIndent?: number;
    level?: number;
}

const MenuItem = React.forwardRef<any, MenuItemProps>((props, ref) => {

    const onClick: React.MouseEventHandler<HTMLElement> = e => {
        const {
            eventKey,
            multiple,
            onClick,
            onSelect,
            onDeselect,
            isSelected,
        } = props;
        const info = {
            key: eventKey,
            keyPath: [eventKey],
            item: this,
            domEvent: e,
        };
        onClick && onClick(info as any);
        if (multiple) {
            if (isSelected) {
                onDeselect && onDeselect(info as any);
            } else {
                onSelect && onSelect(info as any);
            }
        } else if (!isSelected) {
            onSelect && onSelect(info as any);
        }
    };
    let attrs: {
        title?: string;
        className?: string;
        role?: string;
        'aria-disabled'?: boolean;
        'aria-selected'?: boolean;
    } = {
        title: typeof props.title === 'string' ? props.title : undefined,
        className: props.className,
        // set to menuitem by default
        role: props.role || 'menuitem',
        'aria-disabled': props.disabled,
    };

    const style: CSSProperties = {
        ...props.style,
    };
    if (props.mode === 'inline') {

        style.paddingLeft = (props.inlineIndent as any) * (props.level as any);

    }
    let icon = props.itemIcon;
    if (typeof props.itemIcon === 'function') {
        icon = props.itemIcon(props)
    }

    return (
        <ItemWrapper {...attrs} onClick={props.disabled?()=>{}:onClick} style={style} actived={!props.disabled&&props.active} disabled={!!props.disabled} selected={props.isSelected}>
            {props.children}
            {icon}
        </ItemWrapper>
    )
})

export default MenuItem