import { GenericSliderProps } from "./slider";
import keyCode from 'rc-util/lib/KeyCode'
import { findDOMNode } from "react-dom";

export const isVaild = (value: number, { min, max }: { min: number; max: number }) => {
    return value < min || value > max;
}
export function isNotTouchEvent(e: React.TouchEvent) {
    return e.touches.length > 1 || (e.type.toLowerCase() === 'touchend' && e.touches.length > 0);
}

export function getClosestPoint(val: number, { marks = {}, step = 1, min = 0, max = 100 }: Partial<GenericSliderProps>) {
    const points = Object.keys((marks) as object).map(parseFloat);
    if (step !== null) {
        const maxSteps = Math.floor((max - min) / step);
        const steps = Math.min((val - min) / step, maxSteps);
        const closestStep = Math.round(steps) * step + min;
        points.push(closestStep);
    }
    const diffs = points.map(point => Math.abs(val - point));
    return points[diffs.indexOf(Math.min(...diffs))];
}
export function getPrecision(step: number) {
    const stepString = step.toString();
    let precision = 0;
    if (stepString.indexOf('.') >= 0) {
        precision = stepString.length - stepString.indexOf('.') - 1;
    }
    return precision;
}
export function ensureValueInRange(val: number, { max = 100, min = 0 }: { max?: number; min?: number }) {
    if (val <= min) {
        return min;
    }
    if (val >= max) {
        return max;
    }
    return val;
}

export function ensureValuePrecision(val: number, props:Partial<GenericSliderProps>) {
    const { step } = props;
    const closestPoint = isFinite(getClosestPoint(val, props)) ? getClosestPoint(val, props) : 0; // eslint-disable-line
    return step === null ? closestPoint : parseFloat(closestPoint.toFixed(getPrecision(step||10)));
  }
  export function calculateNextValue(func:string, value:number, props:Partial<GenericSliderProps>) {
    const operations:{[index:string] : any } = {
      increase: (a:number, b:number) => a + b,
      decrease: (a:number, b:number) => a - b,
    };
  
    const indexToGet = operations[func](Object.keys((props.marks) as object).indexOf(JSON.stringify(value)), 1);
    const keyToGet = Object.keys((props.marks) as object)[indexToGet];
  
    if (props.step) {
      return operations[func](value, props.step);
    }
    if (!!Object.keys((props.marks) as object).length && !!(props.marks as any)[keyToGet]) {
      return (props.marks as any)[keyToGet];
    }
    return value;
  }
  
  export function getKeyboardValueMutator(
    e: React.KeyboardEvent,
    vertical: boolean,
  ) {
    const increase = 'increase';
    const decrease = 'decrease';
    let method = increase;
    switch (e.keyCode) {
      case keyCode.UP:
        method = increase;
        break;
      case keyCode.RIGHT:
        method = increase;
        break;
      case keyCode.DOWN:
        method = decrease;
        break;
      case keyCode.LEFT:
        method =  decrease;
        break;
  
      case keyCode.END:
        return (value:number, props:Partial<GenericSliderProps>) => props.max;
      case keyCode.HOME:
        return (value:number, props:Partial<GenericSliderProps>) => props.min;
      case keyCode.PAGE_UP:
        return (value:number, props:Partial<GenericSliderProps>) => value + (props.step||10) * 2;
      case keyCode.PAGE_DOWN:
        return (value:number, props:Partial<GenericSliderProps>) => value - (props.step||10) * 2;
  
      default:
        return undefined;
    }
    return (value:number, props:Partial<GenericSliderProps>) => calculateNextValue(method, value, props);
  }

  export function getHandleCenterPosition(vertical: boolean, handle: HTMLElement) {
    const coords = handle.getBoundingClientRect();
    return vertical
      ? coords.top + coords.height * 0.5
      : window.pageXOffset + coords.left + coords.width * 0.5;
  }

  export function isEventFromHandle(
    e: { target: HTMLElement },
    handles: any,
  ) {
    try {
      return Object.keys(handles).some(key => e.target === findDOMNode(handles[key]));
    } catch (error) {
      return false;
    }
  }