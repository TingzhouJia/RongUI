import Grid from "../Grid"
import { MultiItem } from "./wrapper"
import React from "react"
import Tag from "../Tag"
import { useSelectContext } from "./context"

interface Props {
    disabled: boolean
    value:string
  }
  
  const SelectMultipleValue: React.FC<React.PropsWithChildren<Props>> = ({
    value,
    disabled,
    children,
  }) => {
    const {updateValue}=useSelectContext()
    const updateHandler=(event:React.MouseEvent<any>)=>{
      event.stopPropagation()
      event.nativeEvent.stopImmediatePropagation()
      event.preventDefault()
      if(disabled) return
      updateValue&&updateValue(value)
    }
    return (
        <Tag closable onClose={updateHandler} style={{margin:"2px"}}>{children}</Tag>
    )
  }

export default SelectMultipleValue