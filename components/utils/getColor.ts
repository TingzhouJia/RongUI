import { SnippetTypes } from "./themeTypes";
import {palette} from '../styles/palette'
export const getColor=(type:SnippetTypes|string)=>{
    if(type==="warning"){
        return palette.warning
    }
    if(type==="error"){
        return palette.error
    }
    if(type==="success"){
        return palette.success
    }
    if(type==="disabled"){
        return "#f2f2f2"
    }
    if(type==="default"){
        return palette.info
    }
    return "white"
}