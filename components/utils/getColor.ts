import {  StatusTypes, ResultType } from "./themeTypes";
import { DefaultTheme } from "styled-components";
export const getColor = (type: StatusTypes|ResultType | string,theme:DefaultTheme) => {
    if (type === "warning") {
        return theme.palette.warning
    }
    if (type === "error") {
        return theme.palette.error
    }
    if (type === "success") {
        return theme.palette.success
    }
    if(type==="danger"){
        return theme.palette.error
    }
    if (type === "info") {
        return theme.palette.info
    }
    return theme.palette.primary
}


export const getBg=(type:StatusTypes|ResultType,theme:DefaultTheme,)=>{
   
        switch(type){
            case 'danger':
                return theme.palette.errorLighter
            case 'error':
                return theme.palette.errorLighter
            case 'info':
                return theme.palette.infoLighter
            case 'success':
                return theme.palette.successLighter
            case 'warning':
                return theme.palette.warningLighter
            default: 
                return theme.palette.primaryLighter
        }
}

export const getBorder=(type:StatusTypes|ResultType,theme:DefaultTheme,)=>{
    switch(type){
        case 'danger':
            return theme.palette.errorLight
        case 'error':
            return theme.palette.errorLight
        case 'info':
            return theme.palette.infoLight
        case 'success':
            return theme.palette.successLight
        case 'warning':
            return theme.palette.warningLight
        default:
            return theme.palette.primaryLight
    }
}