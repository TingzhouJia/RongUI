import { LiteralUnion } from "../utils";
import { useState, useEffect, useRef } from "react";
import React from "react";
import ClearableLabeledInput, { SizeType } from './clearable'
import { OuterInputWrapper } from "./wrapper";
export interface InputBasicProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'type'> {
  prefixCls?: string;
  size?: 'small'|'large'|'medium';
  // ref: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#%3Cinput%3E_types
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

}

const Input:InputProps=(props)=>{
    const [removePasswordTimeout, setremovePasswordTimeout] = useState<number>()
    const [input, setinput] = useState<HTMLInputElement>()
    const [focused, setfocused] = useState(false)
    const [curvale, setCurvale] = useState(props.value||props.defaultValue)
    const ref = useRef<HTMLInputElement>(null)
    useEffect(() => {
        clearPasswordValueAttribute()
       
    }, [])
    const clearPasswordValueAttribute = () => {
    
        let a=setTimeout(() => {
            if (
              input &&
              input?.getAttribute('type') === 'password' &&
              input?.hasAttribute('value')
            ) {
              input?.removeAttribute('value');
            }
          })
        setremovePasswordTimeout(a)
      };
    const  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        clearPasswordValueAttribute()
        setCurvale(e.target.value)
        resolveOnChange(this.input, e, props.onChange);
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
        setfocused(true)
        clearPasswordValueAttribute()
        if (onFocus) {
          onFocus(e);
        }
      };
    
      const onBlur: React.FocusEventHandler<HTMLInputElement> = e => {
        const { onBlur } = props;
        setfocused(false)
        clearPasswordValueAttribute()
        if (onBlur) {
          onBlur(e);
        }
      };
    const renderInput = (
        prefixCls: string,
        size: typeof SizeType[number] | undefined,
        bordered: boolean,
       
      ) => {
    const { className, addonBefore, addonAfter, size: customizeSize, disabled,onPressEnter,prefix,suffix,allowClear,type,bordered:curBorder,...other } = props;

        return (
          <OuterInputWrapper
          
            {...other}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={handleKeyDown}
           
            ref={ref}
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
                element={renderInput( size, bordered, input)}
                handleReset={handleReset}
                ref={this.saveClearableInput}
      
                focused={focused}
                triggerFocus={focus}
                bordered={bordered}
              />
           
        );
      };
}

export default Input