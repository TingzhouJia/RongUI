import { mount, shallow } from "enzyme"
import {ThemeProvider} from 'styled-components'
import React from "react";
import { ThemeStore } from "../styles";
export function mountWithTheme(child:any) {
    return mount(child, {
        wrappingComponent: ({ children }:{children:any}) => <ThemeProvider theme={ThemeStore}>{children}</ThemeProvider>,
    });
}

export function shallowWithTheme(child:any) {
    return shallow(child, {
        wrappingComponent: ({ children }:{children:any}) => <ThemeProvider theme={ThemeStore}>{children}</ThemeProvider>,
    });
}

export const mockNativeEvent = (fn: Function = () => {}) => ({
    nativeEvent: { stopImmediatePropagation: fn },
  })
  
  export const nativeEvent = mockNativeEvent()