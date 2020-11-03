import React, { useMemo } from 'react'
import { useSelectContext } from './context'
import { OptionWrap, Checkout } from './wrapper'
import { CheckOutlined } from '@ant-design/icons'

interface Props {
    value: string
    disabled?: boolean
    className?: string
    style?:React.CSSProperties
    divider?: boolean
    preventAllEvents?: boolean
  }
  type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
  export type SelectOptionProps = Props & NativeAttrs  



const SelectOption:React.FC<Props>=(props)=>{
    const {
        disabled= false,
        divider= false,
        preventAllEvents= false,
        ...rest
    }=props
    const { updateValue, value, disableAll,multiple } = useSelectContext()
    const isDisabled = useMemo(() => disabled || disableAll, [disabled, disableAll])
  
    const selected = useMemo(() => {
        if (!value) return false
        if (typeof value === 'string') {
          return props.value === value
        }
        return value.includes(`${props.value}`)
      }, [ value])
    const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        if (preventAllEvents) return
        event.stopPropagation()
        event.nativeEvent.stopImmediatePropagation()
        event.preventDefault()
        if (isDisabled ) return
        updateValue && updateValue(props.value)
      }

      return (
          <OptionWrap {...rest} id="rong-select-option" onClick={clickHandler} divider={divider}  disabled={disabled} select={selected} >
              <div>{props.children}</div>
              {multiple&&selected&&<Checkout><CheckOutlined /></Checkout>}
          </OptionWrap>
      )
}

export default SelectOption