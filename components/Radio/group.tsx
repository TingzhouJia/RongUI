import { useState, useMemo, useEffect, CSSProperties } from "react"
import Radio, { RadioEvent } from "./radio";
import React from "react";
import { RadioContext } from "./context";
import { GroupWrapper } from "./wrapper";


export interface Props {
    value?: string | number
    initialValue?: string | number
    disabled?: boolean
    onChange?: (value: string | number) => void
    className?: string
    useRow?: boolean
    options?:{label:string,value:string|number,disabled?:boolean,style?:CSSProperties}[]
  }



const RadioGroup:React.FC<Props>=(props,)=>{
    const {initialValue,value:curValue,onChange,disabled,children,options,useRow}=props
    const [value, setValue] =useState(initialValue||curValue)
    const updateState = (nextValue: string | number) => {
        setValue(nextValue)
        onChange && onChange(nextValue)
      }
      const providerValue = useMemo(() => {
        return {
          updateState,
          disabledAll: !!disabled,
          inGroup: true,
          value,
        }
      }, [disabled, value])
      useEffect(() => {
        if (curValue === undefined) return
        setValue(curValue)
      }, [value])
      let childrenToRender = children;
      if (options && options.length > 0) {
     
        childrenToRender = options.map(option => {
         
          return (
            <Radio
              key={`radio-group-value-options-${option.value}`}
              disabled={option.disabled || disabled}
              value={option.value}
              checked={value === option.value}
              style={option.style}
            >
              {option.label}
            </Radio>
          );
        });
      }
      return (
            <RadioContext.Provider value={providerValue}>
                    <GroupWrapper row={!!useRow}>
                        {childrenToRender}
                    </GroupWrapper>
            </RadioContext.Provider>
      )
}

export default RadioGroup