// import original module declarations
import 'styled-components'
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    colors: {
      primary: string
      secondary: string
    }
    textTheme:{
        fontSize:string,
        fontWeight:string
    }
    buttonTheme:{
        borderWidth:string 
        borderStyle:string
        shadow:string
        paddingBase:string

    }
  }
}