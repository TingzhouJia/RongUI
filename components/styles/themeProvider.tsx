
import styled, { ThemeProvider, createGlobalStyle, DefaultTheme } from "styled-components"
import { ThemeTypes } from "../utils"
import { DefaultDarkTheme, DefaultLightTheme } from "./themes"
import React from "react"

const Global = createGlobalStyle`
    body {
        color:${props => props.theme.colors.fontColor};
        font-family:${props => props.theme.font.mono + " " + props.theme.font.sans};
        font-size:${props => props.theme.size.default.size};
        line-height:${props => props.theme.size.default.height};
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
    }
`
export interface RongThemeProps {
    theme: Partial<DefaultTheme>
    mode: ThemeTypes
}
const RongTheme: React.FC<RongThemeProps> = ({ mode, theme, children }) => {
    const init = mode === 'dark' ? { ...DefaultDarkTheme, ...theme } : { ...DefaultLightTheme, ...theme }
    return <ThemeProvider theme={init}>
        <Global />
        {children}
    </ThemeProvider>
}

export default RongTheme