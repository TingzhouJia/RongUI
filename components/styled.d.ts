// import original module declarations
import 'styled-components'
import { ThemePalette, ThemesExpressiveness } from './utils';
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors:{
      primary:string
    }
    type:'light'|'dark',
   

  }
}