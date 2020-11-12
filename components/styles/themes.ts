
import { palette ,DarkPalette} from "./palette";
import {expressiveness,defaultFont,defaultFontSize, defaultPadding, defaultMargin} from './design'
import { DefaultTheme } from "styled-components";
import { ThemesExpressiveness, ThemesFont, ThemeFontType, PaddingRule, MarginRule, ThemePalette } from "../utils";
export const DefaultLightTheme:DefaultTheme={
    colors:{
        primary:palette.primary,
        info:palette.info,
        error:palette.error,
        success:palette.success,
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
        success:DarkPalette.success,
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


export interface ThemeTy {
    colors:{
        primary:string
        info:string
        borderColor:string
        warning:string
        error:string
        background:string
        success:string
        fontColor:string
        disabledColor:string
        disabledBackground:string
      }
      expressiveness:ThemesExpressiveness,
      font:ThemesFont,
      size:ThemeFontType
      padding:PaddingRule
      margin:MarginRule
      palette:ThemePalette
    }
