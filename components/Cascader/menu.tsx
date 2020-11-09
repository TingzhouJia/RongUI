import { CascaderOption } from "./cascader";
import React, { RefObject, useState, useRef } from "react";
import { AbstractDropdown } from "../Select/dropdown";
import { MenuWrapper, MenuItemWrapper, MenuItemIcon } from "./wrapper";
import {useCascaderContext} from './context'
import { RightOutlined } from "@ant-design/icons";
export interface CascadeMenuOptions {
    isLeaf?: boolean
    index?:number
    items?: CascaderOption[]
    value?: string
    disabled?: boolean
    parent?: RefObject<any>
    visible?: boolean
}

const CascaderMenu: React.FC<CascadeMenuOptions> = (props) => {
    const {expandIcon,updateValue}=useCascaderContext()
    const [curValue, setCurValue] = useState(props.value || '')
    const ref = useRef<HTMLDivElement>(null)
    const [curChild, setCurChild] = useState<CascaderOption|null>(null)
    const handleClick = (item: CascaderOption) => {
        if (item.disabled) { return }
        setCurValue(item.value)
        setCurChild(item || null)
    }
    const menuSource = () => {
        return (
            <MenuWrapper withSub={!!curChild}>
                {
                    props.items?.map(item => (
                        <MenuItemWrapper focused={item.value === curValue} disabled={item.disabled} onClick={() => handleClick(item)}>
                            {item.label}
                            <MenuItemIcon>
                                {expandIcon||<RightOutlined/>}
                            </MenuItemIcon>
                        </MenuItemWrapper>
                    ))
                }
            </MenuWrapper>
        )
    }
    return (
        <div ref={ref}>
            <AbstractDropdown parent={props.parent} visible={props.visible || false}>
                {menuSource()}
                <CascaderMenu parent={ref} items={curChild?.children} visible={curValue===''}/>
            </AbstractDropdown>
        </div>
    )
}


export default CascaderMenu