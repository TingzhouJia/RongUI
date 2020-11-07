import { useAutoCompleteContext } from "./context"
import { AutoItemWrap } from "./wrapper"
import React from "react"

export interface Props {
    value?: string
    text:string
  }


const AutoCompleteItem:React.FC<Props>=(props)=>{
    const { value, updateValue, updateVisible } = useAutoCompleteContext()
    const handleClick=()=>{
        updateValue && updateValue(props.value||props.text)
        updateVisible && updateVisible(false)
    }
    return <AutoItemWrap  active={props.value===value||props.text===value} key={props.value||props.text} onClick={handleClick}>
        {props.text}
    </AutoItemWrap>
}

export default AutoCompleteItem

