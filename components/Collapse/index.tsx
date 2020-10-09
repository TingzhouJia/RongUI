import React, { useState, ReactText } from 'react'
import { RightOutlined } from '@ant-design/icons';
import { CollapseArrow, CollapseBase } from './wrapper';
import toArray from '../utils/toArray';
import CollapsePanel from './Panel';
export type ExpandIconPosition = 'left' | 'right' | undefined;
interface PanelProps {
    isActive?: boolean;
    header?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    showArrow?: boolean;
    forceRender?: boolean;
    disabled?: boolean;
    extra?: React.ReactNode;
  }
export interface CollapseProps {
    activeKey?: Array<string | number> | string | number;
    defaultActiveKey?: Array<string | number> | string | number;
    /** 手风琴效果 */
    accordion?: boolean;
    onChange?: (key: string | string[]) => void;
    style?: React.CSSProperties;
    className?: string;
    bordered?: boolean;
    expandIcon?: (panelProps: PanelProps) => React.ReactNode;
    expandIconPosition?: ExpandIconPosition;
    ghost?: boolean;
  }

  interface CollapseInterface extends React.FC<CollapseProps> {
    Panel: typeof CollapsePanel;
  }
const Collapse:CollapseInterface=(props)=>{
  const {accordion=false,expandIcon,bordered=false,ghost=false}=props
  const [activeKey, setactiveKey] = useState<ReactText[]>([])
  const getIconPosition = () => {
    const { expandIconPosition } = props;
    if (expandIconPosition !== undefined) {
      return expandIconPosition;
    }
    return  'right';
  };

  const renderExpandIcon = (panelProps: PanelProps = {}) => {
    const { expandIcon } = props;
    const icon = (expandIcon ? (
      expandIcon(panelProps)
    ) : (
      <RightOutlined rotate={panelProps.isActive ? 90 : undefined} />
    )) as React.ReactNode;
    return <CollapseArrow>{icon}</CollapseArrow>
  };

  const getNewChild = (child: React.ReactElement, index: number) => {
   
    if (!child) return null;
    // If there is no key provide, use the panel order as default key
    const key = child.key || String(index);
    const { header, headerClass, disabled } = child.props;
    let isActive = false;
    if (accordion) {
      isActive = activeKey[0] === key;
    } else {
      isActive = activeKey.indexOf(key.toString()) > -1;
    }
    const onClickItem = (key: React.Key) => {
      let ActiveKey;
      if (accordion) {
       ActiveKey=activeKey[0] === key ? [] : [key]
      } else {
        ActiveKey = [...activeKey];
        const index = ActiveKey.indexOf(key);
        const isActive = index > -1;
        if (isActive) {
          // remove active state
          ActiveKey.splice(index, 1);
        } else {
          ActiveKey.push(key);
        }
      }
      setactiveKey(ActiveKey);
    };
    const renderedIcon=renderExpandIcon()
    const props = {
      key,
      panelKey: key,
      header,
      headerClass,
      isActive,
      ghost,
      position:getIconPosition(),
      bordered,
      children: child.props.children,
      onItemClick: disabled ? null : onClickItem,
      expandIcon:renderedIcon
    };


    if (typeof child.type === 'string') {
      return child;
    }

    return React.cloneElement(child, props);
  };

  const  getItems = () => {
    const { children } = props
    return toArray(children).map(getNewChild);
  };

return (<CollapseBase ghost={ghost} border={bordered}>{getItems()}</CollapseBase>)
}
Collapse.Panel=CollapsePanel
export default Collapse