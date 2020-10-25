import { useState, useEffect, useRef } from "react"
import { ensureValueInRange, ensureValuePrecision, isVaild, getKeyboardValueMutator, getHandleCenterPosition, isEventFromHandle, isNotTouchEvent, } from './utlils'
import { Track, Step, Markers } from "./common"
import React from "react"

import { RailBody, SliderBodyBase } from "./wrapper"
import Handle from "./handler"
export interface GenericSliderProps {
    min?: number;
    max?: number;
    step?: number | null;
    vertical?: boolean;
    included?: boolean;
    disabled?: boolean;
    trackStyle?: React.CSSProperties | React.CSSProperties[];
    handleStyle?: React.CSSProperties | React.CSSProperties[];
    autoFocus?: boolean;
    onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
    className?: string;
    marks?: Record<number, React.ReactNode | { style?: React.CSSProperties; label?: string }>;
    dots?: boolean;
    style?: React.CSSProperties;
    railStyle?: React.CSSProperties;
    dotStyle?: React.CSSProperties;
    activeDotStyle?: React.CSSProperties;
    defaultValue?: number
    value?: number
    onChange?: (e: any) => void
    onBeforeChange?: (value: number) => void;
    onAfterChange?: (value: number) => void;
}



const Slider: React.FC<GenericSliderProps> = (props) => {
    const { defaultValue, max = 100, min = 0, marks, disabled, style } = props
    const [defaultVal, setdefaultVal] = useState<number>(defaultValue || props.value || min || 0)
    const [curVal, setcurVal] = useState(defaultVal)
    const [dragging, setdragging] = useState(false)
    const handlesRefs = useRef<HTMLDivElement>(null)
    const sliderRef = useRef<HTMLDivElement>(null)
    const [dragOffset, setdragOffset] = useState(0)
    const [startPos, setstartPos] = useState(0)
    function trimAlignValue(v: number, ) {
        if (v === null) {
            return null;
        }


        const val = ensureValueInRange(v, props);
        return ensureValuePrecision(val, props);
    }
    function calcValue(offset: number) {
        const { vertical, min = 0, max = 100 } = props;
        const ratio = Math.abs(Math.max(offset, 0) / getSliderLength());
        const value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
        return value;
    }

    function calcValueByPos(position: number) {

        const pixelOffset = 1 * (position - getSliderStart());
        const nextValue = trimAlignValue(calcValue(pixelOffset));
        return nextValue;
    }

    function calcOffset(value: number) {
        const { min = 0, max = 100 } = props;
        const ratio = (value - min) / (max - min);
        return Math.max(0, ratio * 100);
    }

    useEffect(() => {
        if (!(props.value || min || max)) {
            return;
        }
        trimAlignValue(props.value || defaultVal)
        if (isVaild(curVal, { min, max })) {
            onChange(curVal)
        }

    }, [dragging, curVal])

    function onChange(value: number) {

        const isNotControlled = !('value' in props);
        const nextState = value > max ? max : value;
        if (isNotControlled) {
            setcurVal(nextState)
        }
        const changedValue = nextState;
        props.onChange && props.onChange(changedValue);
    }

    function onStart(position: number) {
        setdragging(true)


        props.onBeforeChange && props.onBeforeChange(curVal);


        let value=calcValueByPos(position)
        setstartPos(position)

        if (curVal === value) return;

        onChange(value||0);
    }

    const onEnd = (force?: boolean) => {
        if (dragging || force) {
            props.onAfterChange && props.onAfterChange(curVal);
        }
        setdragging(false)
    };
    function onMove(e: Event, position: number) {
        e.preventDefault()
        const value=calcValueByPos(position)
        if (value === 0) return;

        onChange(value||0);
    }

    function onKeyboard(e: React.KeyboardEvent<Element>) {
        const { vertical = false } = props
        const valueMutator = getKeyboardValueMutator(e, vertical);
        if (valueMutator) {
            e.preventDefault()


            const mutatedValue = valueMutator(curVal, props);
            const value = trimAlignValue(mutatedValue);
            if (value === curVal) return;

            onChange(value || 0);
            props.onAfterChange && props.onAfterChange(value || 0);
            onEnd();
        }
    }

    const onMouseDown = (e: any) => {
        if (e.button !== 0) {
            return;
        }
        const isVertical = props.vertical || false;
        let position = isVertical ? e.clientY : e.pageX;
        if (!isEventFromHandle(e, handlesRefs)) {
            setdragOffset(0)
        } else {
            const handlePosition = getHandleCenterPosition(isVertical, e.target);
            setdragOffset(position - handlePosition)
            position = handlePosition;
        }
        removeDocumentEvents();
        onStart(position);
        addDocumentMouseEvents();
    };
    const onTouchStart = (e: any) => {
        if (isNotTouchEvent(e)) return;

        const isVertical = props.vertical;
        let position = isVertical ? e.touches[0].clientY : e.touches[0].pageX;
        if (isEventFromHandle(e, handlesRefs)) {
            setdragOffset(0)
        } else {
            const handlePosition = getHandleCenterPosition(isVertical || false, e.target);
            setdragOffset(position - handlePosition)
            position = handlePosition;
        }
        onStart(position);
        addDocumentTouchEvents();
        e.preventDefault()
    };
    const onFocus = (e: React.FocusEvent<HTMLDivElement>) => {
        const { onFocus, vertical = false } = props;
        if (isEventFromHandle(e, handlesRefs)) {
            const handlePosition = getHandleCenterPosition(vertical, e.target);
            setdragOffset(0)
            onStart(handlePosition);
            e.preventDefault()
            if (onFocus) {
                onFocus(e);
            }
            focus()
        }
    };
    function getSliderStart() {
        const slider = sliderRef.current;
        const { vertical, } = props;
        const rect = slider?.getBoundingClientRect();
        if (vertical) {
            return rect?.top || 0;
        }
        return window.pageXOffset + (rect?.left || 0);
    }

    function getSliderLength() {
        const slider = sliderRef.current;
        if (!slider) {
            return 0;
        }

        const coords = slider.getBoundingClientRect();
        return props.vertical ? coords.height : coords.width;
    }
    function focus() {
        if (!props.disabled) {
            handlesRefs?.current?.focus();
        }
    }
    const onTouchMove = (e: TouchEvent) => {
        if (isNotTouchEvent(e as unknown as React.TouchEvent<HTMLDivElement>) || !sliderRef) {
            onEnd();
            return;
        }

        const position = props.vertical ? e.touches[0].clientY : e.touches[0].pageX;
        onMove(e, position - dragOffset);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (sliderRef && isEventFromHandle(e as any, handlesRefs)) {
            onKeyboard(e);
        }
    };
    const onBlur = (e: React.FocusEvent<HTMLDivElement>) => {
        const { onBlur: Onblur } = props;
        onEnd();
        if (Onblur) {
            Onblur(e);
        }
    };

    const onMouseUp = () => {

        handlesRefs?.current?.focus();

    };

    const onMouseMove = (e: MouseEvent) => {
        if (!sliderRef) {
            onEnd();
            return;
        }
        const position = props.vertical ? e.clientY : e.clientX;
        onMove(e, position - dragOffset);
    };

    const onClickMarkLabel = (e: React.MouseEvent<HTMLDivElement>, value: any) => {
        e.stopPropagation();
        onChange(value);
        // eslint-disable-next-line react/no-unused-state
        setcurVal(value)
        onEnd(true)
    };

    function blur() {
        if (!props.disabled) {
            handlesRefs?.current?.blur()
        }
    }

    function addDocumentTouchEvents() {
        // just work for Chrome iOS Safari and Android Browser
        sliderRef && sliderRef.current?.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchend', () => onEnd());
    }

    function addDocumentMouseEvents() {
        sliderRef?.current?.addEventListener('mousemove', onMouseMove);
        sliderRef?.current?.addEventListener('mouseup', () => onEnd());
    }

    function removeDocumentEvents() {
        /* eslint-disable @typescript-eslint/no-unused-expressions */
        sliderRef?.current?.removeEventListener("touchmove", onTouchMove)
        sliderRef?.current?.removeEventListener("touchend", () => onEnd())
        sliderRef?.current?.removeEventListener('mousemove', onMouseMove);
        sliderRef?.current?.removeEventListener('mouseup', () => onEnd());
        /* eslint-enable no-unused-expressions */
    }
    const noop = () => { }

    const track = (<Track disabled={props.disabled||false} vertical={props.vertical || false}
        included={props.included || false}
        offset={calcOffset(startPos)||0}
        length={0} />)

    return (
        <SliderBodyBase 
            withMark={marks&&true}
            vertical={props.vertical}
            disabled={disabled}
            onTouchStart={disabled ? noop : onTouchStart}
            onMouseDown={disabled ? noop : onMouseDown}
            onMouseUp={disabled ? noop : onMouseUp}
            onKeyDown={disabled ? noop : onKeyDown}
            onFocus={disabled ? noop : onFocus}
            onBlur={disabled ? noop : onBlur} style={style} ref={sliderRef}>
            <RailBody style={props.railStyle} />
            {track}
            <Step
                vertical={props.vertical || false}
                marks={marks || {}}
                dots={props.dots || false}
                step={props.step || 1}
                included={props.included || true}
                lowerBound={min}
                upperBound={max}
                max={max}
                min={min}
                dotStyle={props.dotStyle}
                activeDotStyle={props.activeDotStyle}
            />
            <Handle
                vertical={props.vertical}
                disabled={props.disabled}
                offset={calcOffset(curVal)}
                handleRef={handlesRefs}
                
            />
            <Markers
                onClickLabel={disabled ? noop : onClickMarkLabel}
                vertical={props.vertical || false}
                marks={marks || {}}
                included={props.included || true}
                lowerBound={min}
                upperBound={max}
                max={max}
                min={min}
            />
            {props.children}
        </SliderBodyBase>
    )
}

export default Slider