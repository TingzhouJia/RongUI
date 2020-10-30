
import { palette } from "./palette";
import {expressiveness,defaultBreakpoints,defaultFont,defaultFontSize} from './design'
import { DefaultTheme } from "styled-components";
export const ThemeStore:DefaultTheme={
    colors:{
        primary:palette.primary
    },
    type:'light',
    palette,
    expressiveness,
    breakpoints:defaultBreakpoints,
    font:defaultFont,
    size:defaultFontSize
}