// import original module declarations
import 'styled-components'
import { ThemePalette, ThemesExpressiveness, ThemesFont, ThemeFontType, ThemeTypes, PaddingRule, MarginRule } from './utils';
import {} from './styles/'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors:{
      primary:string
      info:string
      borderColor:string
      warning:string
      error:string
      background:string
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
}