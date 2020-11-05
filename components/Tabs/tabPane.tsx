import { useTabsContext } from "./context"
import { useMemo, useEffect } from "react"
import React from "react"
import { Holder } from "./wrapper"


export interface TabPaneProps {
    tab: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    children?: React.ReactNode;
   // Pass by TabPaneList
    tabKey: string;
  }

  const TabsItem: React.FC<React.PropsWithChildren<TabPaneProps>> = ({
    children,
    tabKey,
    tab,
    disabled=false,
  }) => {
    const { register, currentValue } = useTabsContext()
    const isActive = useMemo(() => currentValue === tabKey, [currentValue, tabKey])
  
    useEffect(() => {
      register && register({ value:(tabKey as string), label:tab, disabled })
    }, [tabKey, tab, disabled])
  
    /* eslint-disable react/jsx-no-useless-fragment */
    return isActive ? <Holder id={`tab-body-${tabKey}`}>{children}</Holder> : null
  }

export default TabsItem