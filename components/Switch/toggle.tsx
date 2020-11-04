
import React, { useState } from "react";
import KeyCode from 'rc-util/lib/KeyCode';
import { SwitchBase, InnerCheck, SwitchContent } from "./wrapper";
export type SwitchChangeEventHandler = (
    checked: boolean,
    event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
) => void;
export type SwitchClickEventHandler = SwitchChangeEventHandler;

export interface SwitchProps
    extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange' | 'onClick'> {
    className?: string;
    disabled?: boolean;
    size?: 'small' | 'default';
    checkedChildren?: React.ReactNode;
    unCheckedChildren?: React.ReactNode;
    onChange?: SwitchChangeEventHandler;
    onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
    onClick?: SwitchClickEventHandler;
    tabIndex?: number;
    checked?: boolean;
    defaultChecked?: boolean;
    style?: React.CSSProperties;
    title?: string;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
    (
        {
            className,
            checked,
            defaultChecked,
            disabled,
            checkedChildren,
            unCheckedChildren,
            size,
            onClick,
            onChange,
            onKeyDown,
            ...restProps
        },
        ref,
    ) => {
        const [innerChecked, setInnerChecked] = useState(checked || defaultChecked)

        function triggerChange(
            newChecked: boolean,
            event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
        ) {
            let mergedChecked = innerChecked;

            if (!disabled) {
                mergedChecked = newChecked;
                setInnerChecked(mergedChecked);
                onChange?.(mergedChecked, event);
            }

            return mergedChecked;
        }

        function onInternalKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
            if (e.which === KeyCode.LEFT) {
                triggerChange(false, e);
            } else if (e.which === KeyCode.RIGHT) {
                triggerChange(true, e);
            }
            onKeyDown?.(e);
        }

        function onInternalClick(e: React.MouseEvent<HTMLButtonElement>) {
            const ret = triggerChange(!innerChecked, e);
            // [Legacy] trigger onClick with value
            onClick?.(ret as boolean, e);
        }


        return (<SwitchBase
            id="rong-switch"
            {...restProps}
            type="button"
            small={size === "small"}
            innerCheck={innerChecked}
            role="switch"
            aria-checked={innerChecked}
            disabled={disabled}
            className={className}
            ref={ref}
            onKeyDown={onInternalKeyDown}
            onClick={onInternalClick}>
            <InnerCheck id="check-handler" checked={innerChecked} small={size === "small"}>
            </InnerCheck>
            <SwitchContent id="inner-content" checked={innerChecked} small={size === "small"}>
            {innerChecked ? checkedChildren : unCheckedChildren}
            </SwitchContent>
        </SwitchBase>)
    }) 
    Switch.displayName = 'Switch';
interface CompoundedComponent extends React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLElement>> {
    
}

export default Switch as CompoundedComponent

    