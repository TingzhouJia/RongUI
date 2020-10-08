import React from 'react'
import { PanelBase, PanelExtra, CollapseHeader } from './wrapper';
import PanelContent from './content';
export interface CollapsePanelProps {
    id?: string;
    header?: string | React.ReactNode;
    headerClass?: string;
    showArrow?: boolean;
    className?: string;
    style?: object;
    isActive?: boolean;
    disabled?: boolean;
    destroyInactivePanel?: boolean;
    bordered?:boolean,
    position:'left'|'right'
    extra?: string | React.ReactNode;
    onItemClick?: (panelKey: string | number) => void;
    expandIcon?: (props: object) => React.ReactNode;
    panelKey?: string | number;
    ghost?:boolean
    role?: string;
}


const CollapsePanel: React.FC<CollapsePanelProps> = (props) => {
    const {
        className,
        id,
        header,
        bordered=false,
        children,
        ghost=false,
        isActive=false,
        showArrow,
        position,
        disabled,
        expandIcon,
        extra,
      } = props;
    const handleItemClick = () => {
        const { onItemClick, panelKey } = props;

        if (typeof onItemClick === 'function') {
            onItemClick(panelKey as string | number);
        }
    };
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
            handleItemClick();
        }
    };
    const icon:React.ReactNode=expandIcon?expandIcon(props):<i className="arrow" />
    return (
        <PanelBase disable={disabled} active={isActive}  tabIndex={disabled ? -1 : 0}
        aria-expanded={isActive} id={id} className={className} onClick={handleItemClick} onKeyPress={handleKeyPress} >
           <CollapseHeader arrow={showArrow} right={position==='right'}>
           {showArrow&&icon}
            {header}
            {extra&&<PanelExtra>{extra}</PanelExtra>}
           </CollapseHeader>
            <PanelContent ghost={ghost} border={bordered } isActive={isActive}>{children}</PanelContent>
        </PanelBase>
    )
}

export default CollapsePanel