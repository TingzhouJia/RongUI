import React, { useState } from 'react'
import Checkbox from ".";
import {CheckboxGroup as CheckboxGroupWrap,CheckboxGroupItem} from './wrapper'
export type CheckboxValueType = string | number | boolean;

export interface CheckboxOptionType {
  label: React.ReactNode;
  value: CheckboxValueType;
  style?: React.CSSProperties;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface AbstractCheckboxGroupProps {
  className?: string;
  options?: Array<CheckboxOptionType | string>;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export interface CheckboxGroupProps extends AbstractCheckboxGroupProps {
  name?: string;
  defaultValue?: Array<CheckboxValueType>;
  value?: Array<CheckboxValueType>;
  onChange?: (checkedValue: Array<CheckboxValueType>) => void;
}

export interface CheckboxGroupState {
  value: CheckboxValueType[];
  registeredValues: CheckboxValueType[];
}

export interface CheckboxGroupContext extends CheckboxGroupProps {
  toggleOption?: (option: CheckboxOptionType) => void;
  value?: any;
  disabled?: boolean;
}

export const GroupContext = React.createContext<CheckboxGroupContext>({});
export const useCheckboxGroupContext = (): CheckboxGroupContext =>
    React.useContext<CheckboxGroupContext>(GroupContext)
const CheckboxGroup:React.FC<CheckboxGroupProps>=(props)=>{
    const {options=[],value=[],defaultValue}=props
    const [curValue, setcurValue] = useState<CheckboxValueType[]>(value||defaultValue||[])
    const [registeredValue, setregisteredValue] = useState<string[]>([])
    const getOptions=() =>{
        return (options as Array<CheckboxOptionType>).map(option => {
          if (typeof option === 'string') {
            return {
              label: option,
              value: option,
            } as CheckboxOptionType;
          }
          return option;
        });
    }
    const cancelValue = (value: string) => {
        setregisteredValue(( prev) => prev.filter(val => val !== value));
      };
    
     const registerValue = (value: string) => {
        setregisteredValue(( prev) => [...prev, value]);
      };

    const toggleOption = (option: CheckboxOptionType) => {
       
        const optionIndex = curValue.indexOf(option.value);
        const value = [...curValue];
        if (optionIndex === -1) {
          value.push(option.value);
        } else {
          value.splice(optionIndex, 1);
        }
        
        const { onChange } = props;
        if (onChange) {
          const options = getOptions();
          onChange(
            value
              .filter(val => registeredValue.indexOf(val.toString()) !== -1)
              .sort((a, b) => {
                const indexA = options.findIndex(opt => opt.value === a);
                const indexB = options.findIndex(opt => opt.value === b);
                return indexA - indexB;
              }),
          );
        }
      };
    const renderGroup=()=>{
        let {children,defaultValue,value,onChange,options,...domprops}=props
        if(options){
            children=getOptions().map(option => (
                <Checkbox
                
                  key={option.value.toString()}
                  disabled={'disabled' in option ? option.disabled : props.disabled}
                  value={option.value}
                  checked={curValue.indexOf(option.value) !== -1}
                  onChange={option.onChange}
                  style={option.style}
                >
                  {option.label}
                </Checkbox>
              ));  
        }
        const context = {
            toggleOption: toggleOption,
            value: curValue,
            disabled: props.disabled,
            name: props.name,
            registerValue: registerValue,
            cancelValue: cancelValue,
          };
        return (<CheckboxGroupWrap {...domprops}>
                <GroupContext.Provider value={context}>{children}</GroupContext.Provider>
        </CheckboxGroupWrap>)
    }
return (<>{renderGroup()}</>)
}

export default CheckboxGroup