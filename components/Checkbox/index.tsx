import React from 'react'
import {CheckBoxLabel} from './wrapper'
import CheckBoxItem from './checkbox'
import CheckboxGroup ,{CheckboxGroupProps,useCheckboxGroupContext} from './group'
export {CheckboxGroupProps}
export interface AbstractCheckboxProps {
    className?: string;
    defaultChecked?: boolean;
    checked?: boolean;
    style?: React.CSSProperties;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: React.MouseEventHandler<HTMLElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLElement>;
    onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
    value?: any;
    tabIndex?: number;
    name?: string;
    children?: React.ReactNode;
    id?: string;
    autoFocus?: boolean;
    type?: string;
  }
  
  export interface CheckboxChangeEventTarget extends CheckboxProps {
    checked: boolean;
  }
  

  
  export interface CheckboxProps extends React.FC<AbstractCheckboxProps> {
    Group:typeof CheckboxGroup
  }

const Checkbox:CheckboxProps=(props)=>{

    const {children,onMouseEnter,onMouseLeave,...rest}=props
    const groupData=useCheckboxGroupContext()
    let restData={...rest}
    const renderCheckBox=()=>{
        if(Object.keys(groupData).length>0){
            restData.onChange=(...args)=>{
                if (rest.onChange) {
                    rest.onChange(...args);
                  }
            }
            if(groupData.toggleOption){
                groupData.toggleOption({ label: children, value: props.value })
            }
            restData.name=groupData.name
            restData.disabled=props.disabled||groupData.disabled||false
            restData.checked=groupData.value.indexOf(props.value) !== -1
        }
     return (<CheckBoxLabel id="checkbox-base" checked={restData.checked} disabled={restData.disabled ||false} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <CheckBoxItem id="rong-checkbox" {...restData} />
            {children && <span>{children}</span>}
        </CheckBoxLabel>)
    }
return (<>{renderCheckBox()}</>)
}

Checkbox.Group=CheckboxGroup

export default Checkbox