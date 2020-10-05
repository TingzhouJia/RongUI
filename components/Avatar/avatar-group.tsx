import React, { ReactNode, ReactElement } from "react";
import styled from "styled-components";
import Avatar from './avatar'
export interface GroupProps {
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    maxCount?: number;
    maxStyle?: React.CSSProperties;
    maxPopoverPlacement?: 'top' | 'bottom';
  }

const AvatarGroup=styled.div`
display: inline-flex;
border:1px solid transparent;
&:not(:first-child) {
    margin-left:10px;
}

`
  const Group :React.FC<GroupProps>=(props)=>{
    const { children, maxPopoverPlacement = 'top',maxCount,className } = props;
    const childrenWithProps =children? React.Children.map(children, (child ) => {
        return React.cloneElement(child as ReactElement);
      }):[];
      const numOfChildren = (childrenWithProps as ReactElement[]).length;
      if(maxCount&& maxCount<numOfChildren){
        const childrenShow = (childrenWithProps as ReactElement[]).slice(0, maxCount);
        const childrenHidden = (childrenWithProps as ReactElement[]).slice(maxCount, numOfChildren);
        childrenShow.push(<Avatar text={`+${numOfChildren - maxCount}`}></Avatar>)
        return <AvatarGroup className={className}>
            {childrenShow}
        </AvatarGroup>
      }
      return (<AvatarGroup className={className}>
          {children}
      </AvatarGroup>)
  }

  export default Group