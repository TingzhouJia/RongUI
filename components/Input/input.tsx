import { LiteralUnion, NormalSizes } from "../utils";
import { useState, useEffect, useRef } from "react";
import React from "react";
import ClearableLabeledInput from './clearable'
import { OuterInputWrapper } from "./wrapper";
import Password from "./password";
export interface InputBasicProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement|HTMLTextAreaElement>, 'size' | 'prefix' | 'type'> {
  size?: NormalSizes;
  type?: LiteralUnion<
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week',
    string
  >;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  allowClear?: boolean;
  bordered?: boolean;
}

export function resolveOnChange(
    target: HTMLInputElement | HTMLTextAreaElement,
    e:
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | React.MouseEvent<HTMLElement, MouseEvent>,
    onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  ) {
    if (onChange) {
      let event = e;
      if (e.type === 'click') {
        // click clear icon
        event = Object.create(e);
        event.target = target;
        event.currentTarget = target;
        const originalInputValue = target.value;
        // change target ref value cause e.target.value should be '' when clear input
        target.value = '';
        onChange(event as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
        // reset target ref value
        target.value = originalInputValue;
        return;
      }
      onChange(event as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
    }
  }

export interface InputProps extends React.FC<InputBasicProps> {
  Password:typeof Password
}

const Input:InputProps=(props)=>{
    const [removePasswordTimeout, setremovePasswordTimeout] = useState<number>()
  
    const [focused, setfocused] = useState(false)
    const [curvale, setCurvale] = useState(props.value||props.defaultValue||"")
    const ref = useRef<HTMLInputElement>(null)
    useEffect(() => {
        clearPasswordValueAttribute()
       
    }, [])
    const clearPasswordValueAttribute = () => {
    
        let a=setTimeout(() => {
            if (
              ref &&
              ref.current?.getAttribute('type') === 'password' &&
              ref.current?.hasAttribute('value')
            ) {
              ref.current?.removeAttribute('value');
            }
          })
        setremovePasswordTimeout(a)
      };
    const  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        clearPasswordValueAttribute()
        setCurvale(e.target.value)
        resolveOnChange(ref.current as HTMLInputElement, e, props.onChange);
      };
    
    const  handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { onPressEnter, onKeyDown } = props;
        if (e.keyCode === 13 && onPressEnter) {
          onPressEnter(e);
        }
        if (onKeyDown) {
          onKeyDown(e);
        }
      };
    
    
    const onFocus: React.FocusEventHandler<HTMLInputElement> = e => {
        const { onFocus } = props;
        if(props.disabled){
          return
        }
        setfocused(true)
        focus()
        clearPasswordValueAttribute()
        if (onFocus) {
          onFocus(e);
        }
      };
    
    const onBlur: React.FocusEventHandler<HTMLInputElement> = e => {
        const { onBlur } = props;
        setfocused(false)
        clearPasswordValueAttribute()
        blur()
        if (onBlur) {
          onBlur(e);
        }
      };
    const focus=()=>{
        ref.current?.focus()
    }
    const blur=()=>{
        ref.current?.blur()
    }

    const handleReset = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setCurvale('')
        focus()
        resolveOnChange((ref.current as HTMLInputElement), e, props.onChange);
      };
    const renderInput = () => {
    const { className, addonBefore, addonAfter, size: customizeSize="default", disabled,onPressEnter,prefix,suffix,allowClear,type,bordered:curBorder=true,style,...other } = props;

        return (
          <OuterInputWrapper
            id="outer-input"
            {...other}
            type={type}
            sizes={customizeSize as NormalSizes}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={handleKeyDown}
            ref={ref}
            disabled={disabled}
           
          />
        );
      };
      
     const renderComponent = () => {
       
        const { bordered = true,size } = props;

        return (
              <ClearableLabeledInput
                size={size}
                {...props}
                inputType="input"
                value={curvale}
                element={renderInput()}
                handleReset={handleReset}
                focused={focused}
                triggerFocus={focus}
                bordered={bordered}
              />
        );
      };
    return (<>{renderComponent()}</>)
}
Input.Password=Password
export default Input