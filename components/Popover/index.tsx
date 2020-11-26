import { TriggerTypes, SnippetTypes, Placement } from "../utils";
import { useRef, useState, useEffect } from "react";
import Tooltip from "../Tooltip";
import React from "react";
import { Flexbox } from "./wrapper";
import Divider from "../Divider";

export interface PopoverProps {
    content?: React.ReactNode | (() => React.ReactNode)
    trigger?: TriggerTypes
    placement?: Placement
    title?:React.ReactNode,
    popClassname?:string
  }

const Popover:React.FC<PopoverProps>=({
    content,
    children,
    title,
    popClassname,
    ...props
})=>{
const contentNode=(<Flexbox className={popClassname}>{title}<Divider plain/>{content}</Flexbox>)
return <Tooltip {...props} text={contentNode}>{children}</Tooltip>
}

export default Popover

