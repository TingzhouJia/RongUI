import { OptGroupWrap } from "./wrapper"
import React from "react"
import Divider from "../Divider"

export interface OptionGroupProps{key?:string,label:React.ReactNode}

const OptionGroup:React.FC<OptionGroupProps>=(props)=>{
    return (<>
        <OptGroupWrap key={props.key} id="option-group-label">
            {props.label}
        </OptGroupWrap>
        {props.children}
        <Divider plain style={{margin:0}}/>
    </>)
}

export default OptionGroup