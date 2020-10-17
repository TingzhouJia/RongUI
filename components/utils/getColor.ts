import { SnippetTypes } from "./themeTypes";
import {palette} from '../styles/palette'
export const getColor=(type:SnippetTypes)=>{
    if(type==="warning"){
        return palette.warning
    }
    if(type==="error"){
        return palette.error
    }
    if(type==="success"){
        return palette.success
    }
    return "white"
}