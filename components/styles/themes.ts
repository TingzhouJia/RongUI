
import { palette } from "./palette";
import {expressiveness,defaultFont,defaultFontSize, defaultPadding, defaultMargin} from './design'
import { DefaultTheme } from "styled-components";
export const DefaultLightTheme:DefaultTheme={
    colors:{
        primary:palette.primary,
        info:palette.info,
        error:palette.error,
        warning:palette.warning,
        background:palette.background,
        fontColor:palette.fontColor,
        disabledColor:palette.disabledColor,
        disabledBackground:palette.disabledBackground,
        borderColor:palette.borderColor
    },
    mode:'light',
    palette,
    expressiveness,
    font:defaultFont,
    size:defaultFontSize,
    margin:defaultMargin,
    padding:defaultPadding
}

export const DefaultDarkTheme={}