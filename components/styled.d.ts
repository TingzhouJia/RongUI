// import original module declarations
import 'styled-components'
import { ThemePalette, ThemesExpressiveness } from './utils';
import {expressiveness,defaultBreakpoints,defaultFont,defaultFontSize} from './styles/themes'
import { ThemeStore } from './styles';
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors:{
      primary:string
    }
    type:'light'|'dark',
    palette:ThemePalette,
    expressiveness:ThemesExpressiveness,
    breakpoints:defaultBreakpoints,
    font:defaultFont,
    size:defaultFontSize

  }
}