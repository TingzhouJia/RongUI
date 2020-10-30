import React from "react"
import BreadSeperator from "./bread-seperator"
import BreadcrumbItem from "./breadcrumb-item";
import styled from "styled-components";

export interface Route {
  path: string;
  breadcrumbName: string;
  children?: Omit<Route, 'children'>[];
}

export interface BreadcrumbProps {

  separator?: React.ReactNode;
  className?: string;
}
function getBreadcrumbName(route: Route, params: any) {
  if (!route.breadcrumbName) {
    return null;
  }
  const paramsKeys = Object.keys(params).join('|');
  const name = route.breadcrumbName.replace(
    new RegExp(`:(${paramsKeys})`, 'g'),
    (replacement, key) => params[key] || replacement,
  );
  return name;
}

function defaultItemRender(route: Route, params: any, routes: Route[], paths: string[]) {
  const isLastItem = routes.indexOf(route) === routes.length - 1;
  const name = getBreadcrumbName(route, params);
  return isLastItem ? <span>{name}</span> : <a href={`#/${paths.join('/')}`}>{name}</a>;
}

const getPath = (path: string, params: any) => {
  path = (path || '').replace(/^\//, '');
  Object.keys(params).forEach(key => {
    path = path.replace(`:${key}`, params[key]);
  });
  return path;
};

const Nav = styled.nav`
      margin: 0;
          padding: 0;
          line-height: inherit;
          color: #d9d9d9;
          font-size: 14px;
          box-sizing: border-box;
          display: flex;
          align-items: center;

          & > span:last-child {
    color: black;
    opacity:0.85;
    a {
      color: ${props => props.theme.colors.primary};
      cursor:pointer;
    }
  }
`
interface BreadcrumbInterface extends React.FC<BreadcrumbProps> {
  Item: typeof BreadcrumbItem;
  Separator: typeof BreadSeperator;
}

const Breadcrumb: BreadcrumbInterface = ({ separator = "/", className, children
}) => {
  const childrenArray = React.Children.toArray(children)

  const withSeparatorChildren = childrenArray.map((item, index) => {
    if (!React.isValidElement(item)) return item
    const last = childrenArray[index - 1]
    const lastIsSeparator = React.isValidElement(last) && last.type === BreadSeperator
    const currentIsSeparator = item.type === BreadSeperator
    if (!lastIsSeparator && !currentIsSeparator && index > 0) {
      return (
        <React.Fragment key={index}>
          <BreadSeperator >{separator}</BreadSeperator>
          {item}
        </React.Fragment>
      )
    }
    return item
  })
  let crumbs
  if (children) {
    crumbs = withSeparatorChildren
  }
  return (<Nav className={className}>
    {crumbs}
  </Nav>)

}


Breadcrumb.Item = BreadcrumbItem
Breadcrumb.Separator = BreadSeperator
export default Breadcrumb


