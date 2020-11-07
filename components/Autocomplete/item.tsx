import { useAutoCompleteContext } from "./context"
import { AutoItemWrap } from "./wrapper"
import React from "react"
import { AutoCompleteOption } from "./auto-complete"




const AutoCompleteItem:React.FC<AutoCompleteOption>=(props)=>{
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

