import React from "react"
import BreadSeperator from "./bread-seperator"
import BreadcrumbItem from "./breadcrumb-item";
import styled, { CSSProperties } from "styled-components";
import { Nav } from "./wrapper";


interface Route {
  path: string;
  breadcrumbName: string;
  children?: Omit<Route, 'children'>[];
}

export interface BreadcrumbProps {

  separator?: React.ReactNode;
  className?: string;
  style?:CSSProperties
}




interface BreadcrumbInterface extends React.FC<BreadcrumbProps> {
  Item: typeof BreadcrumbItem;
  Separator: typeof BreadSeperator;
}

const Breadcrumb: BreadcrumbInterface = ({ separator = "/", className, children,style
}) => {

  const childrenArray = React.Children.toArray(children)


  const withSeparatorChildren = childrenArray.map((item, index) => {
    if (!React.isValidElement(item)) return item
    if (index > 0) {
      return (
        <React.Fragment key={index}>
          <BreadSeperator >{separator}</BreadSeperator>
          {
            React.cloneElement(item,{key:`rong-breadcrumb-item-${index}`,})
          }
          
        </React.Fragment>
      )
    }
    return React.cloneElement(item,{key:`rong-breadcrumb-item-${index}`})
  })
  let crumbs
  if (children) {
    crumbs = withSeparatorChildren
  }
  return (<Nav className={className} style={style}>
    {crumbs}
  </Nav>)

}


Breadcrumb.Item = BreadcrumbItem
Breadcrumb.Separator = BreadSeperator
export default Breadcrumb


