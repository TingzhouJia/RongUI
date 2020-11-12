
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
    const {colors,padding,palette,expressiveness,font,size,margin}=theme
    const curcolor={...(mode === 'dark'?DefaultDarkTheme.colors:DefaultLightTheme.colors),...colors}
    const curpadding={...(DefaultLightTheme.padding),...padding}
    const curmargin={...(DefaultLightTheme.margin),...margin}
    const curpalette={...(mode === 'dark'?DefaultDarkTheme.palette:DefaultLightTheme.palette),...palette}
    const curfont={...DefaultLightTheme.font,...font}
    const curexpres={...DefaultDarkTheme.expressiveness,...expressiveness}
    const cursize={...DefaultDarkTheme.size,...size}
    const init:DefaultTheme= {colors:curcolor,padding:curpadding,margin:curmargin,palette:curpalette,font:curfont,expressiveness:curexpres,size:cursize}
    return <ThemeProvider theme={init }>
        <Global />
        {children}
    </ThemeProvider>
}

export default RongTheme