
import styled, { ThemeProvider, createGlobalStyle, DefaultTheme } from "styled-components"
import { ThemeTypes } from "../utils"
import { DefaultDarkTheme, DefaultLightTheme, ThemeTy } from "./themes"
import React from "react"

const Global = createGlobalStyle`
    body {
        color:${(props:any) => props.theme.colors.fontColor};
        font-family:${(props:any) => props.theme.font.mono + " " + props.theme.font.sans};
        font-size:${(props:any) => props.theme.size.default.size};
        line-height:${(props:any) => props.theme.size.default.height};
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
    }
`
export interface RongThemeProps {
    theme: Partial<DefaultTheme|ThemeTy>
    mode: ThemeTypes
}
const RongTheme: React.FC<RongThemeProps> = ({ mode, theme, children }) => {
    const init= mode === 'dark' ? { ...DefaultDarkTheme, ...theme } : { ...DefaultLightTheme, ...theme }
    return <ThemeProvider theme={init as DefaultTheme}>
        <Global />
        {children}
    </ThemeProvider>
}

export default RongTheme