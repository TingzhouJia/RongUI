import { mount, shallow, ReactWrapper } from "enzyme"
import { ThemeProvider } from 'styled-components'
import React from "react";

import { act } from 'react-dom/test-utils'
import { DefaultLightTheme } from "../styles";
export function mountWithTheme(child: any) {
    return mount(child, {
        wrappingComponent: ({ children }: { children: any }) => <ThemeProvider theme={DefaultLightTheme}>{children}</ThemeProvider>,
    });
}

export function shallowWithTheme(child: any) {
    return shallow(child, {
        wrappingComponent: ({ children }: { children: any }) => <ThemeProvider theme={DefaultLightTheme}>{children}</ThemeProvider>,
    });
}

export const mockNativeEvent = (fn: Function = () => { }) => ({
    nativeEvent: { stopImmediatePropagation: fn },
})

export const nativeEvent = mockNativeEvent()

export const sleep = (time: number) => {
    return new Promise(resolve => setTimeout(resolve, time))
}
export const updateWrapper = async (wrapper: ReactWrapper, time: number = 0) => {
    await act(async () => {
        await sleep(time)
        wrapper.update()
    })
}