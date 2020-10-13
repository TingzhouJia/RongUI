import { tuple } from "../utils";
import React, { useRef, cloneElement } from 'react'
import { CloseCircleFilled } from "@ant-design/icons";
import { CloseBtn, Suffix, Preffix, AffixWrapper, AddOnWrapper, GroupWrapper, WithAddOnWrapper, TextAreaWrapper } from "./wrapper";
export const ClearableInputType = tuple('text', 'input');
export const SizeType = tuple('medium', 'large', 'small')
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
    size?: typeof SizeType[number];
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
                <Suffix >
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
            className,
            size,
            suffix,
            disabled,
            allowClear,
            style,
            readOnly,
            bordered,
        } = props;
        const suffixNode = renderSuffix();
        if (!hasPrefixSuffix(props)) {
            return cloneElement(element, {
                value,
            });
        }

        const prefixNode = prefix ? <Preffix >{prefix}</Preffix> : null;


        return (
            <AffixWrapper
                borderless={!bordered}
                readonly={readOnly}
                withClear={suffix && allowClear && value}
                focused={focused}
                ref={containerRef}
                size={props.size || 'large' }
                style={style}
                onMouseUp={onInputMouseUp}
            >
                {prefixNode}
                {/* {cloneElement(element, {
              style: null,
              value,
              className: getInputClassName( bordered, size, disabled),
            })} */}
                {suffixNode}
            </AffixWrapper>
        );
    }

    const renderInputWithLabel=(labeledElement: React.ReactElement)=> {
        const { addonBefore, addonAfter, style, size="large", className } = props;
        // Not wrap when there is not addons
        if (!addonBefore && !addonAfter) {
          return labeledElement;
        }
    
    
        const addonBeforeNode = addonBefore ? (
          <AddOnWrapper>{addonBefore}</AddOnWrapper>
        ) : null;
        const addonAfterNode = addonAfter ? <AddOnWrapper>{addonAfter}</AddOnWrapper> : null;

        return (
          <GroupWrapper className={className} size={size} style={style}>
            <WithAddOnWrapper addon={!!addonBefore|| !!addonAfter}>
              {addonBeforeNode}
              {labeledElement}
              {addonAfterNode}
            </WithAddOnWrapper>
          </GroupWrapper>
        );
      }
     const renderTextAreaWithClearIcon=(element: React.ReactElement) =>{
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
      const { inputType, element } =props;
      if (inputType === ClearableInputType[0]){
        return renderTextAreaWithClearIcon( element);
      }
      return renderInputWithLabel(renderLabeledIcon(element));
}

export default ClearableTextField