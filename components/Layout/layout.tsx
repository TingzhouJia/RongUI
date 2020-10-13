import React, { useState } from 'react'
import Sider from './sider'
import { LayoutBase, LayoutHeader, LayoutFooter, LayoutContent } from './wrapper';
export {SiderProps} from './sider'
export interface GeneratorProps {
    tagName: 'header' | 'footer' | 'main' | 'section';
    displayName: string;
}
export interface BasicProps extends React.HTMLAttributes<HTMLDivElement> {

    hasSider?: boolean;
}

export interface LayoutContextProps {
    siderHook: {
        addSider: (id: string) => void;
        removeSider: (id: string) => void;
    };
}
export const LayoutContext = React.createContext<LayoutContextProps>({
    siderHook: {
        addSider: () => null,
        removeSider: () => null,
    },
});

export interface LayoutInterface extends React.FC<BasicProps> {

    Header:typeof Header
    Sider: typeof Sider
    Content:typeof Content
    Footer:typeof Footer
 }


const Layout: LayoutInterface = (props) => {
    const [siders, setsiders] = useState<string[]>([])
    const getSiderHook = () => {
        return {
            addSider: (id: string) => {
                setsiders([...siders, id])
            },
            removeSider: (id: string) => {
                setsiders(siders.filter(currentId => currentId !== id))
            },
        };
    }
    const renderComponent = () => {
        const { className, children, hasSider, ...others } = props;


        return (
            <LayoutContext.Provider value={{ siderHook: getSiderHook() }}>
                <LayoutBase className={className} {...others}>
                    {children}
                </LayoutBase>
            </LayoutContext.Provider>
        );
    };
    return (<>{renderComponent()}</>)
}

const Header: React.FC = (props) => {
    return <LayoutHeader>
        {props.children}
    </LayoutHeader>
}

const Footer: React.FC = (props) => {
    return (<LayoutFooter>{props.children}</LayoutFooter>)
}

const Content:React.FC=(props)=>{
return (<LayoutContent>{props.children}</LayoutContent>)
}

Layout.Sider=Sider
Layout.Content=Content
Layout.Header=Header
Layout.Footer=Footer

export default Layout