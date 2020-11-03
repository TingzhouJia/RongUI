import React, { useState, useMemo, useRef, useEffect, ReactNode } from 'react'
import { useCurrentState } from '../utils'
import { SelectConfig, SelectContext } from './context'
import SelectMultipleValue from './mutivalue'
import { SelectWrap, ValueWrap, IconWrap, CloseBtn, MultiItemContainer } from './wrapper'
import SelectOption from './option'
import SelectDropDown from './dropdown'
import { UpOutlined, DownOutlined, CloseCircleFilled } from '@ant-design/icons'
interface Props {
    disabled?: boolean
    value?: string | string[]
    initialValue?: string | string[]
    placeholder?: React.ReactNode | string
    onChange?: (value: string | string[]) => void
    pure?: boolean
    multiple?: boolean
    bordered?:boolean
    className?: string
    width?: string
    dropdownClassName?: string
    dropdownStyle?: object
    disableMatchWidth?: boolean
    getPopupContainer?: () => HTMLElement | null
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type SelectProps = Props & NativeAttrs


export const pickChildByProps = (
    children: ReactNode | undefined,
    key: string,
    value: any,
): [ReactNode | undefined, ReactNode | undefined] => {
    let target: ReactNode[] = []
    const isArray = Array.isArray(value)
    const withoutPropChildren = React.Children.map(children, item => {
        if (!React.isValidElement(item)) return null
        if (!item.props) return item
        if (isArray) {
            if (value.includes(item.props[key])) {
                target.push(item)
                return null
            }
            return item
        }
        if (item.props[key] === value) {
            target.push(item)
            return null
        }
        return item
    })

    const targetChildren = target.length >= 0 ? target : undefined

    return [withoutPropChildren, targetChildren]
}

const Select: SelectComponent<ComponentProps> = (props) => {
    const { disabled = false,
        pure = false,
        multiple = false,
        className = '',
        bordered=true,
        onChange,
        initialValue: init,
        value: customValue,
        disableMatchWidth = false, ...rest } = props

    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState<boolean>(false)
    const [value, setValue, valueRef] = useCurrentState<string | string[] | undefined>(() => {
        if (!multiple) return init
        if (Array.isArray(init)) return init
        return typeof init === 'undefined' ? [] : [init]
    })
    const isEmpty = useMemo(() => {
        if (!Array.isArray(value)) return !value
        return value.length === 0
    }, [value])
    const updateVisible = (next: boolean) => setVisible(next)
    const [showClear, setshowClear] = useState(false)
    const updateValue = (next: string) => {
        setValue(last => {
            if (!Array.isArray(last)) return next
            if (!last.includes(next)) return [...last, next]
            return last.filter(item => item !== next)
        })
        onChange && onChange(valueRef.current as string | string[])
        if (!multiple) {
            setVisible(false)
        }
    }

    const initialValue: SelectConfig = useMemo(
        () => ({
            value,
            visible,
            updateValue,
            updateVisible,
            multiple,
            ref,
            disableAll: disabled,
        }),
        [visible, disabled, ref, value, multiple],
    )
    const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        event.nativeEvent.stopImmediatePropagation()
        event.preventDefault()
        if (disabled) return
        setVisible(!visible)
    }
    useEffect(() => {
        document.addEventListener('click', () => setVisible(false))
        return () => {
            document.removeEventListener('click', () => setVisible(false))
        }
    }, [])
    useEffect(() => {
        if (customValue === undefined) return
        setValue(customValue)
    }, [customValue])

    const handleReset=(e:any)=>{
            e.preventDefault()
            e.stopPropagation()
            setValue(prev=>{
                if (!Array.isArray(prev)) return undefined
                return []
            })
            setshowClear(false)
    }

    const selectedChild = useMemo(() => {
        const [, optionChildren] = pickChildByProps(props.children, 'value', value)
        return React.Children.map(optionChildren, child => {
            if (!React.isValidElement(child)) return null
            const el = child.props.children
        if (!multiple) return <div id="selected-item">{el}</div>
            return (
                <SelectMultipleValue disabled={disabled}>
                    {el}
                </SelectMultipleValue>
            )
        })
    }, [value, props.children, multiple])

    return (
        <SelectContext.Provider value={initialValue}>
            <SelectWrap bordered={bordered} disabled={disabled} focused={visible} ref={ref} onClick={clickHandler} style={props.style} className={className}
            >
                {isEmpty && (
                    <ValueWrap id="select-placeholder" style={{ color: "rgba(0,0,0,0.25)" }}>
                        {props.placeholder}
                    </ValueWrap>
                )}
                {value && !multiple && <ValueWrap id="one-value-selcted">{selectedChild}</ValueWrap>}
                {value && multiple && <MultiItemContainer>{selectedChild}</MultiItemContainer>}
                <SelectDropDown
                    visible={visible}
                    className={props.dropdownClassName}
                    dropdownStyle={props.dropdownStyle}
                    disableMatchWidth={disableMatchWidth}
                    getPopupContainer={props.getPopupContainer}>
                    {props.children}
                </SelectDropDown>
                {!pure && (
                    <IconWrap onMouseEnter={()=>!isEmpty?setshowClear(true):null} onMouseLeave={()=>!isEmpty?setshowClear(false):null} id="select-arrow">
                        {
                            showClear?<CloseBtn id="clear-button" onClick={handleReset}> <CloseCircleFilled
                           
                            role="button"
                          /></CloseBtn>:visible?<UpOutlined />:<DownOutlined />
                        }
                    </IconWrap>
                )}
            </SelectWrap>
        </SelectContext.Provider>
    )
}

type SelectComponent<P = {}> = React.FC<P> & {
    Option: typeof SelectOption
  }
  
  type ComponentProps = 
    Props &
    NativeAttrs
  
Select.Option=SelectOption

export default Select
