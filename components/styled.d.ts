// import original module declarations
import 'styled-components'

import {ThemeTy} from './styles'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTy {}
   
}