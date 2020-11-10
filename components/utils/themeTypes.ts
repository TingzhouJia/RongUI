import { tuple } from "./type"
// const buttonTypes = tuple(
//   'default',
//   'secondary',
//   'success',
//   'warning',
//   'error',
//   'abort',
//   'secondary-light',
//   'success-light',
//   'warning-light',
//   'error-light',
// )
const statusTypes = tuple('success', 'info', 'danger', 'warning');
const resultTypes = tuple('success','error','info','warning')
const buttomMode = tuple('link', 'dashed', 'primary', 'ghost', 'text', 'default')

const normalSizes = tuple('small', 'large',"default")

const normalTypes = tuple('default', 'secondary', 'success', 'warning', 'error')

const themeTypes = tuple('dark', 'light')

const snippetTypes = tuple('default', 'secondary', 'success', 'warning', 'error', 'dark', 'lite')

const cardTypes = tuple(
    'default',
    'secondary',
    'success',
    'warning',
    'error',
    'dark',
    'lite',
    'alert',
    'purple',
    'violet',
    'cyan',
)

const copyTypes = tuple('default', 'slient', 'prevent')

const triggerTypes = tuple('hover', 'click')

const placement = tuple(
    'top',
    'topStart',
    'topEnd',
    'left',
    'leftStart',
    'leftEnd',
    'bottom',
    'bottomStart',
    'bottomEnd',
    'right',
    'rightStart',
    'rightEnd',
)

const dividerAlign = tuple('start', 'center', 'end', 'left', 'right')

export type StatusTypes = typeof statusTypes[number]

export type ResultType=typeof resultTypes[number]
export type ButtonModes = typeof buttomMode[number]
export type NormalSizes = typeof normalSizes[number]

export type NormalTypes = typeof normalTypes[number]

export type ThemeTypes = typeof themeTypes[number]

export type SnippetTypes = typeof snippetTypes[number]

export type CardTypes = typeof cardTypes[number]

export type CopyTypes = typeof copyTypes[number]

export type TriggerTypes = typeof triggerTypes[number]

export type Placement = typeof placement[number]

export type DividerAlign = typeof dividerAlign[number]

export type ThemePalette = {
    //primary
    primary: string
    primaryLighter:string
    primaryLight:string
    primaryDark:string
    //basic color
    background:string
    fontColor:string
    disabledColor:string
    disabledBackground:string
    borderColor:string
    //status
    success: string
    successLighter: string
    successLight: string
    successDark: string
    error: string
    errorLighter: string
    errorLight: string
    errorDark: string
    warning: string
    warningLighter: string
    warningLight: string
    warningDark: string
    info: string
    infoLighter: string
    infoLight: string
    infoDark: string

}
export interface ThemesExpressiveness {
    linkStyle: string
    linkHoverStyle: string
    dropdownBoxShadow: string
    shadowSmall: string
    shadowMedium: string
    shadowLarge: string
    maskColor: string
    borderRadius:string
}

export interface ThemesFont {
    sans: string
    mono: string
}


export interface ThemeFontType {
    small:{
        size:string
        weight:string
        height: string;
    }
    normal: {
        size: string;
        height: string;
        weight: string;
    }
    larger: {
        size: string;
        height: string;
        weight: string;
    }
}

export interface PaddingRule {
    lg:string
    md:string
    sm:string
}

export interface MarginRule {
    lg:string
    md:string
    sm:string
}