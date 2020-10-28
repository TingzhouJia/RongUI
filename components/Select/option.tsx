import React, { useMemo } from 'react'
import { useSelectContext } from './context'
import { OptionWrap } from './wrapper'

interface Props {
    value?: string
    disabled?: boolean
    className?: string
    divider?: boolean
    label?: boolean
    preventAllEvents?: boolean
  }
  type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
  export type SelectOptionProps = Props & NativeAttrs  



const SelectOption:React.FC<Props>=(props)=>{
    const {
        disabled= false,
        divider= false,
        label= false,
        className= '',
        preventAllEvents= false,
        ...rest
    }=props
    const { updateValue, value, disableAll } = useSelectContext()
    const isDisabled = useMemo(() => disabled || disableAll, [disabled, disableAll])
    const isLabel = useMemo(() => label || divider, [label, divider])
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
        if (isDisabled || isLabel) return
        updateValue && updateValue(props.value)
      }

      return (
          <OptionWrap onClick={clickHandler} divider={divider} label={label} disabled={disabled} select={selected} >
              {props.children}
          </OptionWrap>
      )
}

export default SelectOption