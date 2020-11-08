import { NormalSizes, NormalTypes, useCurrentState } from "../utils";
import { CSSProperties } from "styled-components";
import React, { useRef, useState, useEffect } from "react";
import AutoCompleteItem from "./item";
import { AutoCompleteContext } from "./context";
import Input from "../Input";
import AutoCompleteDropdown from "./dropdown";

export type AutoCompleteOption = {
    value?: string,
    text?: string
}

interface Props {
    options: AutoCompleteOption[]
    initialValue?: string
    placeholder?: string
    value?: string
    style?: CSSProperties
    onChange?: (value: string) => void
    onSearch?: (value: string) => void
    onSelect?: (value: string) => void
    allowClear?: boolean
    dropdownClassName?: string
    dropdownStyle?: object
    disabled?: boolean
    className?: string
}
const childrenToOptionsNode = (options: Array<AutoCompleteOption>) =>
    options.map((item, index) => {
        const key = `auto-complete-item-${index}`
        if (React.isValidElement(item)) return React.cloneElement(item, { key })
        const validItem = item as AutoCompleteOption
        return (
            <AutoCompleteItem key={key} value={validItem.value} text={validItem.text} />

        )
    })
export interface AutoCompleteProps extends React.FC<Props> {
    Option: typeof AutoCompleteItem
}
const AutoComplete: AutoCompleteProps = ({ options,
    initialValue: customInitialValue = "",
    onSelect,
    onSearch,
    onChange,
    children,
    value,
    placeholder,
    allowClear = true,
    disabled = false,
    dropdownClassName,
    dropdownStyle,
    ...props }) => {

    const ref = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const resetTimer = useRef<number>()
    const [state, setState, stateRef] = useCurrentState<string>(customInitialValue)
    const [selectVal, setSelectVal] = useState<string>(customInitialValue)
    const [visible, setVisible] = useState<boolean>(false)

    useEffect(() => {
        onChange && onChange(state)
    }, [state])

    useEffect(() => {
        if (value === undefined) return
        setState(value)
    }, [value])

    const updateValue = (val: string) => {
        if (disabled) return
        setSelectVal(val)
        onSelect && onSelect(val)
        setState(val)
        inputRef.current && inputRef.current.focus()
    }

    const updateVisible = (next: boolean) => setVisible(next)
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVisible(true)
        onSearch && onSearch(event.target.value)
        setState(event.target.value)
    }
    const resetInputValue = () => {
        if (!disabled) return
        if (!state || state === '') return
        if (state !== selectVal) {
            setState(selectVal)
        }
    }
    const toggleFocusHandler = (next: boolean) => {
        clearTimeout(resetTimer.current)
        // if (!state || state === '') return
        setVisible(next)
        if (next) {
            onSearch && onSearch(stateRef.current)
        } else {
            resetTimer.current = window.setTimeout(() => {
                resetInputValue()
                clearTimeout(resetTimer.current)
            }, 100)
        }
    }

    return (
        <AutoCompleteContext.Provider value={{ ref, updateValue, updateVisible, value: state, visible }}>

            <div ref={ref} >
                <Input onChange={onInputChange}
                    placeholder={placeholder}
                    onFocus={() => toggleFocusHandler(true)}
                    onBlur={() => toggleFocusHandler(false)}
                    allowClear={allowClear}
                    ref={inputRef} />
                <AutoCompleteDropdown
                    visible={visible}
                    className={dropdownClassName}

                    dropdownStyle={dropdownStyle}>
                    {childrenToOptionsNode(options)}
                    {children}
                </AutoCompleteDropdown>
            </div>

        </AutoCompleteContext.Provider>
    )
}

AutoComplete.Option = AutoCompleteItem

export default AutoComplete
