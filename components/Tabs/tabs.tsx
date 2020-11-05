import React, { useState, useMemo, useEffect } from 'react'
import { TabsLabelItem, TabsConfig, TabsContext } from './context'
import { TabItem, TabHeader } from './wrapper'
import TabPane from './tabPane'
interface Props {
    initialValue?: string
    value?: string
    hideDivider?: boolean
    onChange?: (val: string) => void
    className?: string
}
type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export interface TabsProps extends React.FC<Props & NativeAttrs> {
    Pane:typeof TabPane
}

const Tabs: TabsProps = ({
    initialValue: userCustomInitialValue,
    value,
    hideDivider,
    children,
    onChange,
    className,
    ...props
}) => {
    const setInitial=(items:React.ReactNode):string|undefined=>{
        let cur:React.ReactNode=undefined;
        React.Children.map(items,(item,index)=>{
            if (!React.isValidElement(item)) return null
            if (!item.props) return null
            if(item.props['tabKey']&&!cur){
                cur=item
            }
        })
        if(cur){
            return (cur as any).props.tabKey
        }
        return cur
    }
    const [selfValue, setSelfValue] = useState<string | undefined>(userCustomInitialValue||setInitial(children))
  
    const [tabs, setTabs] = useState<Array<TabsLabelItem>>([])
    const register = (next: TabsLabelItem) => {
        setTabs(last => {
            const hasItem = last.find(item => item.value === next.value)
            if (!hasItem) return [...last, next]
            return last.map(item => {
                if (item.value !== next.value) return item
                return {
                    ...item,
                    label: next.label,
                    disabled: next.disabled,
                }
            })
        })
    }

    const initialValue = useMemo<TabsConfig>(
        () => ({
            register,
            currentValue: selfValue,
            inGroup: true,
        }),
        [selfValue],
    )

    useEffect(() => {
        if (value === undefined) return
        setSelfValue(value)
    }, [value])
    const clickHandler = (item: TabsLabelItem) => {
        if (item.disabled) return
        setSelfValue(item.value)
        onChange && onChange(item.value)
    }

    return (
        <TabsContext.Provider value={initialValue}>
            <TabHeader>
                {tabs.map(item => (
                    <TabItem
                        id={`tab-header-${item.value}`}
                        active={selfValue === item.value}
                        disabled={item.disabled}
                        role="button"
                        key={item.value}
                        onClick={() => clickHandler(item)}>
                        {item.label}
                    </TabItem>
                ))}
            </TabHeader>
            {children}
        </TabsContext.Provider>
    )
}

Tabs.Pane=TabPane
export default Tabs