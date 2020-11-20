import { NormalSizes } from "components/utils";
import React, { useState, useEffect } from 'react'
import { RadioContext, useRadioContext } from "./context";
import { RadioLabel, RadioWrapper, RadioInput, RadioInner } from "./wrapper";
import { CSSProperties } from "styled-components";
import RadioGroup from './group'
 
interface CompoundedComponent
  extends React.ForwardRefExoticComponent<InnerRadioProps & React.RefAttributes<HTMLElement>> {
  Group: typeof RadioGroup;
 
}
interface RadioEventTarget {
    checked: boolean
  }
  
  export interface RadioEvent {
    target: RadioEventTarget
    stopPropagation: () => void
    preventDefault: () => void
    nativeEvent: React.ChangeEvent
  }
  
 export interface InnerRadioProps {
    checked?: boolean
    value?: string | number
    size?: NormalSizes
    className?: string
    style?:CSSProperties
    children?:any
    disabled?: boolean
    onChange?: (e: RadioEvent) => void
  }


const InnerRadio:React.ForwardRefRenderFunction<unknown,InnerRadioProps>=({checked,disabled,value:radioValue,onChange,children,className,style},ref)=>{
    const {value: groupValue, disabledAll, inGroup, updateState } = useRadioContext()
    const isDisabled=!!disabledAll||!!disabled
    const [selfChecked, setSelfChecked] = useState<boolean>(!!checked)
    useEffect(() => {
       if(inGroup){
        setSelfChecked(groupValue === radioValue)
       }
      }, [groupValue, radioValue])
    const changeHandler = (event: React.ChangeEvent) => {
        if (isDisabled) return
        const selfEvent: RadioEvent = {
          target: {
            checked: !selfChecked,
          },
          stopPropagation: event.stopPropagation,
          preventDefault: event.preventDefault,
          nativeEvent: event,
        }
        setSelfChecked(!selfChecked)
        if (inGroup) {
          updateState && updateState(radioValue as string | number)
        }
        onChange && onChange(selfEvent)
      }
      useEffect(() => {
        if (checked === undefined) return
        setSelfChecked(Boolean(checked))
      }, [checked])

      return (
          <RadioLabel>
              <RadioWrapper disabled={isDisabled}
              >
                  <RadioInput type="radio" value={radioValue}
          checked={selfChecked} onChange={changeHandler}/>
                  <RadioInner checked={selfChecked} disabled={isDisabled}/>
              </RadioWrapper>
              <span>{children}</span>
          </RadioLabel>
      )
}

const Radio = React.forwardRef<unknown, InnerRadioProps>(InnerRadio) as CompoundedComponent;
Radio.Group=RadioGroup
Radio.displayName = 'Radio';

export default Radio