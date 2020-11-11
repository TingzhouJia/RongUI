import styled from "styled-components";
import React, { ReactNode } from "react";
import BreadSeperator from "./bread-seperator";
import { LinkWrapper, SpanWrapper } from "./wrapper";
export interface BreadcrumbItemProps {
    href?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
}


export const pickChild = (
    children: ReactNode | undefined,
    targetChild: React.ElementType,
  ): [ReactNode | undefined, ReactNode | undefined] => {
    let target: ReactNode[] = []
    const withoutTargetChildren = React.Children.map(children, item => {
      if (!React.isValidElement(item)) return item
      if (item.type === targetChild) {
        target.push(item)
        return null
      }
      return item
    })
  
    const targetChildren = target.length >= 0 ? target : undefined
  
    return [withoutTargetChildren, targetChildren]
  }


const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({  href, children, ...rest }) => {
    const [withoutSepChildren] = pickChild(children, BreadSeperator)
    let link;
    if (href) {
        link = (<LinkWrapper id="bread-item-link" href={href} {...rest}  >{withoutSepChildren}</LinkWrapper>)
    } else {
        link = (<SpanWrapper id="bread-item-span"  {...rest}>{withoutSepChildren}</SpanWrapper>)
    }
    if (children) {
        return (
                link
        )
    }
    return  (<></>)
}

export default BreadcrumbItem