import React, { useState, useEffect } from 'react'
import { isNumber } from 'util';
import { BarsOutlined, RightOutlined, LeftOutlined } from '@ant-design/icons';
import { Trigger, TriggerDiv, SideChildren, SIdeBaseWrapper } from './wrapper';
import { LayoutContext, LayoutContextProps } from './layout';
const dimensionMaxMap = {
    xs: '479.98px',
    sm: '575.98px',
    md: '767.98px',
    lg: '991.98px',
    xl: '1199.98px',
    xxl: '1599.98px',
};

export interface SiderContextProps {
    siderCollapsed?: boolean;
    collapsedWidth?: string | number;
}
export const SiderContext: React.Context<SiderContextProps> = React.createContext({});

export type CollapseType = 'clickTrigger' | 'responsive';

export type SiderTheme = 'light' | 'dark';

export interface SiderProps extends React.HTMLAttributes<HTMLDivElement> {
    collapsible?: boolean;
    collapsed?: boolean;
    defaultCollapsed?: boolean;
    reverseArrow?: boolean;
    onCollapse?: (collapsed: boolean, type: CollapseType) => void;
    zeroWidthTriggerStyle?: React.CSSProperties;
    trigger?: React.ReactNode;
    width?: number | string;
    collapsedWidth?: number | string;
    breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    theme?: SiderTheme;
    onBreakpoint?: (broken: boolean) => void;
}
type InternalSideProps = SiderProps & LayoutContextProps



const InnerSider: React.FC<InternalSideProps> = (props) => {

    const { collapsible = false,
        defaultCollapsed = false,
        collapsedWidth = 80,
        theme = 'dark' as SiderTheme, } = props
    const setMql = () => {
        let matchMedia;
        if (typeof window !== 'undefined') {
            matchMedia = window.matchMedia;
        }
        if (matchMedia && props.breakpoint && props.breakpoint in dimensionMaxMap) {
            setMediaList(matchMedia(`(max-width: ${dimensionMaxMap[props.breakpoint]})`))
        }
    }
    const [collapsed, setcollapsed] = useState(defaultCollapsed || collapsible)
    const [mediaList, setMediaList] = useState<MediaQueryList>()
    const [below, setbelow] = useState(false)
    const setCollapsed = (collapsed: boolean, type: CollapseType) => {
        if (!props.collapsed) {
            setcollapsed(collapsed)
        }
        const { onCollapse } = props;
        if (onCollapse) {
            onCollapse(collapsed, type);
        }
    };
    useEffect(() => {
        setMql()
        mediaList?.addListener(responsiveHandler)
        responsiveHandler(mediaList as MediaQueryList)

        return () => {
            mediaList?.removeListener(responsiveHandler)
        }
    }, [mediaList])
    const responsiveHandler = (mql: MediaQueryListEvent | MediaQueryList) => {
        setbelow(mql.matches)
        const { onBreakpoint } = props;

        if (onBreakpoint) {
            onBreakpoint(mql.matches);
        }
        if (collapsed !== mql.matches) {
            setCollapsed(mql.matches, 'responsive');
        }
    };
    const toggle = () => {

        setCollapsed(!collapsed, 'clickTrigger');
    };
    const renderSider = () => {
        const { className,
            theme,
            collapsible,
            reverseArrow=false,
            trigger,
            style,
            width=200,
            breakpoint,
            onBreakpoint,
            collapsedWidth,
            zeroWidthTriggerStyle,
            children,
            ...others } = props
        const rawWidth = collapsed ? collapsedWidth : width;
        const siderWidth = isNumber(rawWidth) ? `${rawWidth}px` : String(rawWidth)

        const zeroWidthTrigger =
            parseFloat(String(collapsedWidth || 0)) === 0 ? (
                <Trigger
                direction={reverseArrow ? 'right' : 'left'}
                    onClick={toggle}
                    className={className}
                    style={zeroWidthTriggerStyle}
                >
                    {trigger || <BarsOutlined />}
                </Trigger>
            ) : null;
        const iconObj = {
            expanded: reverseArrow ? <RightOutlined /> : <LeftOutlined />,
            collapsed: reverseArrow ? <LeftOutlined /> : <RightOutlined />,
        };
        const status = collapsed ? 'collapsed' : 'expanded';
        const defaultTrigger = iconObj[status]
        const triggerDom =
            trigger !== null
                ? zeroWidthTrigger || (
                    <TriggerDiv

                        onClick={toggle}
                        style={{ width: siderWidth }}
                    >
                        {trigger || defaultTrigger}
                    </TriggerDiv>
                )
                : null;
        const divStyle = {
            ...style,
            flex: `0 0 ${siderWidth}`,
            maxWidth: siderWidth,
            minWidth: siderWidth,
            width: siderWidth,
        };
        return (
            <SIdeBaseWrapper zerowid={parseFloat(siderWidth) === 0} trigger={collapsible && trigger !== null && !zeroWidthTrigger} style={divStyle}>
                <SideChildren>{children}</SideChildren>
                {collapsible || (below && zeroWidthTrigger) ? triggerDom : null}
            </SIdeBaseWrapper>
        )
    }
    return (
        <SiderContext.Provider
          value={{
            siderCollapsed: collapsed,
            collapsedWidth,
          }}
        >
          {renderSider()}
        </SiderContext.Provider>
      );

}

const Sider:React.FC<InternalSideProps>=(props)=>{
    return (<LayoutContext.Consumer>
            {(context: LayoutContextProps) => <InnerSider {...context} {...props} />}
    </LayoutContext.Consumer>)
}

export default Sider