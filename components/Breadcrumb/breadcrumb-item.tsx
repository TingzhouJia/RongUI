import styled from "styled-components";
import React, { ReactNode } from "react";
import BreadSeperator from "./bread-seperator";
export interface BreadcrumbItemProps {
    href?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
}


const LinkWrapper = styled.a`
 color: rgba(0,0,0,0.85);
    transition: color 0.3s;
    &:hover {
      color: #ff7a45 ;
    };
    & >  span,
    >  a {
      margin-left: 4px;
    }
`
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

const SpanWrapper = styled.span(LinkWrapper)
const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({  href, children, ...rest }) => {
    const [withoutSepChildren] = pickChild(children, BreadSeperator)
    let link;
    if (href) {
        link = (<LinkWrapper {...rest} >{withoutSepChildren}</LinkWrapper>)
    } else {
        link = (<SpanWrapper  {...rest}>{withoutSepChildren}</SpanWrapper>)
    }
    if (children) {
        return (
                link
        )
    }
    return  (<></>)
}

export default BreadcrumbItem