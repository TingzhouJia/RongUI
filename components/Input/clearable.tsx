import { tuple, NormalTypes, NormalSizes } from "../utils";
import React, { useRef, cloneElement } from 'react'
import { CloseCircleFilled } from "@ant-design/icons";
import { CloseBtn, Suffix, Preffix, AffixWrapper, AddOnWrapper, GroupWrapper, WithAddOnWrapper, TextAreaWrapper } from "./wrapper";
import Button from "../Button";
export const ClearableInputType = tuple('text', 'input');

interface BasicProps {
  inputType: typeof ClearableInputType[number];
  value?: any;
  allowClear?: boolean;
  element: React.ReactElement;
  handleReset: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  focused?: boolean;
  readOnly?: boolean;
  bordered: boolean;
}
export function hasPrefixSuffix(props: ClearableInputProps) {
  return !!(props.prefix || props.suffix || props.allowClear);
}
/**
 * This props only for input.
 */
interface ClearableInputProps extends BasicProps {
  size?: NormalSizes;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  triggerFocus: () => void;
}

const ClearableTextField: React.FC<ClearableInputProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const onInputMouseUp: React.MouseEventHandler = e => {
    if (containerRef.current?.contains(e.target as Element)) {
      const { triggerFocus } = props;
      triggerFocus();
    }
  };
  const renderClearIcon = () => {
    const { allowClear, value, disabled, readOnly, inputType, handleReset } = props;

    if (!allowClear) {
      return null;
    }

    const needClear = !disabled && !readOnly && value;

    return (
      <CloseBtn hidden={!needClear} type={inputType}>
        <CloseCircleFilled
          onClick={handleReset}
          role="button"
        />
      </CloseBtn>
    );
  }
  const renderSuffix = () => {
    const { suffix, allowClear } = props;
    if (suffix || allowClear) {
      return (
        <Suffix id="suffix">
          {renderClearIcon()}
          {suffix}
        </Suffix>
      );
    }
    return null;
  }
  

  const renderLabeledIcon = (element: React.ReactElement) => {
    const {
      focused,
      value,
      prefix,
      size,
      suffix,
      disabled,
      allowClear,
      readOnly,
      bordered,
    } = props;
    const suffixNode = renderSuffix();

    const prefixNode = prefix ? <Preffix id="prefix" >{prefix}</Preffix> : null;
    return (
      <AffixWrapper
        id="affix-input-wrapper"
        disabled={disabled}
        borderless={!bordered}
        readonly={readOnly}
        withClear={suffix && allowClear && value}
        focused={focused}
        ref={containerRef}
        size={size || 'large'}
        onMouseUp={onInputMouseUp}
      >
        {prefixNode}
        {cloneElement(element, {
          value,
        })}
        {suffixNode}
      </AffixWrapper>
    );
  }

  const renderInputWithLabel = (labeledElement: React.ReactElement) => {
    const { addonBefore, addonAfter, style, size , className,bordered } = props;
    // Not wrap when there is not addons
 
    const addonBeforeNode = addonBefore ? (
      <AddOnWrapper size={size} id="add-before">{addonBefore}</AddOnWrapper>
    ) : null;
    const addonAfterNode = addonAfter ? <AddOnWrapper size={size} id="add-after">{addonAfter}</AddOnWrapper> : null;

    return (
      <GroupWrapper id="input-group-wrapper" className={className} size={size} style={style}>
        <WithAddOnWrapper borderless={!bordered} id="addon-wrapper" addon={!!addonBefore || !!addonAfter}>
          {addonBeforeNode}
          {labeledElement}
          {addonAfterNode}
        </WithAddOnWrapper>
      </GroupWrapper>
    );
  }
  const renderTextAreaWithClearIcon = (element: React.ReactElement) => {
    const { value, allowClear, className, style, bordered } = props;
    if (!allowClear) {
      return cloneElement(element, {
        value,
      });
    }

    return (
      <TextAreaWrapper borderless={!bordered} className={className} style={style}>
        {cloneElement(element, {
          style: null,
          value,
        })}
        {renderClearIcon()}
      </TextAreaWrapper>
    );
  }
  const { inputType, element } = props;
  if (inputType === ClearableInputType[0]) {
    return renderTextAreaWithClearIcon(element);
  }
  return renderInputWithLabel(renderLabeledIcon(element));
}

export default ClearableTextField