import React, { useState, useRef } from 'react'
import { CheckBoxBase, CheckBoxInput, CheckboxInner } from './wrapper';


  export interface Props {
    className?: string;
    style?: React.CSSProperties;
    name?: string;
    id?: string;
    type?: string;
    defaultChecked?:  boolean;
    checked?:  boolean;
    disabled?: boolean;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    tabIndex?:  number;
    readOnly?: boolean;
    required?: boolean;
    autoFocus?: boolean;
    value?: any;
  }

const CheckBoxItem:React.FC<Props>=(props)=>{
    let {defaultChecked=false,checked,name,id,type,tabIndex,required,readOnly,disabled,autoFocus,value,onBlur,onFocus,onClick}=props
    const [curCheck,setCheck]=useState<boolean>(checked||defaultChecked)
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { disabled, onChange } = props;
        if (disabled) {
          return;
        }
        if (!checked) {
         setCheck(e.target.checked)
        }
        if (onChange) {
          onChange(e);
        }
      };


      return (<CheckBoxBase checked={!!curCheck} disabled={disabled}>
          <CheckBoxInput type='checkbox' checked={!!curCheck} onFocus={onFocus} onClick={onClick} readOnly={readOnly} value={value} autoFocus={autoFocus} onBlur={onBlur} required={required} name={name} onChange={handleChange} id={id} tabIndex={tabIndex} >
          </CheckBoxInput>
          <CheckboxInner disabled={disabled} checked={!!curCheck}/>
      </CheckBoxBase>)
}

export default CheckBoxItem