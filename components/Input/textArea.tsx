import ResizableTextArea, { AutoSizeType, ResizeArea } from "./resizable";
import {  resolveOnChange,fixControlledValue } from './input';
import { useState, useRef, useImperativeHandle } from "react";
import React from "react";
import ClearableLabeledInput from './clearable'
export type HTMLTextareaProps = React.TextareaHTMLAttributes<
  HTMLTextAreaElement
>;
export interface TextAreaProps extends BasicTextAreaProps {
    allowClear?: boolean;
    bordered?: boolean;
}
export interface BasicTextAreaProps extends HTMLTextareaProps {

  className?: string;
  style?: React.CSSProperties;
  autoSize?: boolean | AutoSizeType;
  onPressEnter?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onResize?: (size: { width: number; height: number }) => void;
}
interface OuterTextArea {
    focus: () => void;
    blur: () => void;
    area?: HTMLTextAreaElement | null;
}
const TextArea=React.forwardRef<OuterTextArea,BasicTextAreaProps>((props,refs)=>{
    const [value, setvalue] = useState('')
    const ref = useRef<ResizeArea>(null)
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { onChange } = props;
       setvalue(e.target.value)
       ref.current?.resizeTextarea()
        if (onChange) {
          onChange(e);
        }
      };
    useImperativeHandle(
        refs,
        () => ({
            focus,
            blur,
            area:ref?.current?.textArea
        }),
        [],
    )
    const focus=()=>{
        ref?.current?.focus()
    }
    const blur=()=>{
        ref?.current?.blur()
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        const { onPressEnter, onKeyDown } = props;
        if (e.keyCode === 13 && onPressEnter) {
          onPressEnter(e);
        }
        if (onKeyDown) {
          onKeyDown(e);
        }
      };
      return (
        <ResizableTextArea
          {...props}
          value={value}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          ref={ref}
        />
      );
})

const RTextArea:React.FC<TextAreaProps>=(props)=>{
    const textarea=useRef<OuterTextArea>(null)
    const [value, setvalue] = useState( props.value||props.defaultValue)
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setvalue(e.target.value);
        if(props.onChange){
            resolveOnChange((textarea?.current?.area as HTMLTextAreaElement), e, props.onChange as any );
        }
      };
    
    const  handleReset = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setvalue('')

        resolveOnChange((textarea.current?.area as HTMLTextAreaElement), e, props.onChange as any);
      };
    const renderTextArea=()=>{
        const {allowClear,bordered,...rest}=props
        return <TextArea key="out-text-area" {...rest} onChange={handleChange} ref={textarea} >

        </TextArea>
    }
    const renderComponent = () => {
  
        const { bordered = true } = props;
       
        return (
          <ClearableLabeledInput
            {...props}
       
            inputType="text"
            value={fixControlledValue(value)}
            element={renderTextArea()}
            handleReset={handleReset}
            triggerFocus={focus}
            bordered={bordered}
          />
        );
      };
    return (<>{renderComponent()}</>)
}

export default RTextArea

