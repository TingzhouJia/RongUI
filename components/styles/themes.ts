
import { palette ,DarkPalette} from "./palette";
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
    expressiveness,
    font:defaultFont,
    size:defaultFontSize,
    margin:defaultMargin,
    padding:defaultPadding,
    palette:palette
}

export const DefaultDarkTheme:DefaultTheme={
    colors:{
        primary:DarkPalette.primary,
        info:DarkPalette.info,
        error:DarkPalette.error,
        warning:DarkPalette.warning,
        background:DarkPalette.background,
        fontColor:DarkPalette.fontColor,
        disabledColor:DarkPalette.disabledColor,
        disabledBackground:DarkPalette.disabledBackground,
        borderColor:DarkPalette.borderColor
    },
    expressiveness,
    font:defaultFont,
    size:defaultFontSize,
    margin:defaultMargin,
    padding:defaultPadding,
    palette:DarkPalette
    
}