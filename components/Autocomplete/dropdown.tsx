import { AbstractDropdown } from "../Select/dropdown"
import React from "react"
import { useAutoCompleteContext } from "./context"
import { SelectDropdownWrap } from "../Select/wrapper"

interface Props {
    visible: boolean
    className?: string
    dropdownStyle?: object
}

const AutoCompleteDropdown: React.FC<Props> = ({ visible, className, dropdownStyle, children }) => {
    const { ref } = useAutoCompleteContext()
    const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
        event.stopPropagation()
        event.nativeEvent.stopImmediatePropagation()
    }
    return <AbstractDropdown parent={ref} visible={visible}>
        <SelectDropdownWrap onClick={clickHandler} className={className} style={dropdownStyle}>
            {children}
        </SelectDropdownWrap>
    </AbstractDropdown>

}

export default AutoCompleteDropdown