import React, { useState, ReactText } from 'react'
import { RightOutlined } from '@ant-design/icons';
import { CollapseArrow, CollapseBase } from './wrapper';
import CollapsePanel,{CollapsePanelProps} from './Panel';
export type ExpandIconPosition = 'left' | 'right' | undefined;

export interface CollapseProps {
    activeKey?: Array<string | number> | string | number;
    defaultActiveKey?: Array<string | number> | string | number;
    accordion?: boolean;
    onChange?: (key: string | string[]) => void;
    style?: React.CSSProperties;
    className?: string;
    bordered?: boolean;
    expandIcon?: (panelProps: CollapsePanelProps) => React.ReactNode;
    expandIconPosition?: ExpandIconPosition;
  }

  interface CollapseInterface extends React.FC<CollapseProps> {
    Panel: typeof CollapsePanel;
  }
const Collapse:CollapseInterface=(props)=>{
  const {accordion=false,bordered=true}=props
  const [activeKey, setactiveKey] = useState<ReactText[]>([])
  const getIconPosition = (childP?:'left'|'right') => {
    const { expandIconPosition } = props;
    if (expandIconPosition !== undefined) {
      return expandIconPosition;
    }else if (childP){
      return childP
    }
    return  'left';
  };

  const renderExpandIcon = (panelProps: CollapsePanelProps = {}) => {
    const { expandIcon } = props;
    const icon = (expandIcon ? (
      expandIcon(panelProps)
    ) : (
      <RightOutlined rotate={panelProps.isActive ? 90 : undefined} />
    )) as React.ReactNode;
    return <CollapseArrow id="collapse-arrow" disabled={panelProps.disabled} right={panelProps.position==='right'}>{icon}</CollapseArrow>
  };

  const getNewChild = (child: React.ReactElement, index: number) => {
   
    if (!child) return null;
    // If there is no key provide, use the panel order as default key
    const key = child.key || String(index);
    const { header, headerClass, disabled } = child?.props;
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
   
    const props= {
      ...child.props,
      key,
      panelKey: key,
      header,
      headerClass,
      isActive,
      position:getIconPosition(child.props.position),
      bordered,
      children: child.props.children,
      onItemClick: disabled ? undefined : onClickItem,
      expandIcon:renderExpandIcon
    };


    if (typeof child.type === 'string') {
      return child;
    }

    return React.cloneElement(child, props);
  };

  const  getItems = () => {
    const { children } = props
    return React.Children.map(children,(item,index)=>{
      if(item!==undefined){
       return getNewChild(item as React.ReactElement,index)
      }
    });
  };

return (<CollapseBase id="collapse-base" style={props.style} className={props.className}  border={bordered}>{getItems()}</CollapseBase>)
}
Collapse.Panel=CollapsePanel
export default Collapse