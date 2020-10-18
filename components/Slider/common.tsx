import { TrackBody, DotBody, StepBody, MarkerLabelWrap, MarkerDivWrap } from "./wrapper";
import React from "react";

interface TrackPorps {
    length:number
    offset:number
    included:boolean
    vertical:boolean
    disabled:boolean
}
interface StepProps {
    vertical:boolean,
  disabled?:boolean
  marks:Record<number, React.ReactNode | { style?: React.CSSProperties; label?: string }>,
  dots:boolean,
  step:number,
  included:boolean,
  lowerBound:number,
  upperBound:number,
  max:number,
  min:number,
  dotStyle?:React.CSSProperties,
  activeDotStyle?:React.CSSProperties
}
export const Track:React.FC<TrackPorps>=(props)=>{
    let {length,offset,included,vertical,disabled}=props
    if (length < 0) {
     
        length = Math.abs(length);
        offset = 100 - offset;
      }
      return included ? <TrackBody disabled={disabled} length={length} offset={offset}  vertical={vertical}/> : null;
}

const calcPoints = (
    vertical:boolean,
    marks: Record<number, React.ReactNode | { style?: React.CSSProperties; label?: string }>,
    dots: boolean,
    step: number,
    min: number,
    max: number,
  ) => {
    const points = Object.keys(marks)
      .map(parseFloat)
      .sort((a, b) => a - b);
    if (dots && step) {
      for (let i = min; i <= max; i += step) {
        if (points.indexOf(i) === -1) {
          points.push(i);
        }
      }
    }
    return points;
  };


export const Step:React.FC<StepProps>=(props)=>{

    const {vertical,marks,dots,step,min,max,included,upperBound,lowerBound,dotStyle,activeDotStyle,disabled}=props
    const range = max - min;
    const elements = calcPoints(vertical, marks, dots, step, min, max).map((point:number) => {
        const offset = `${(Math.abs(point - min) / range) * 100}%`;
    
        const isActived =
          (!included && point === upperBound) ||
          (included && point <= upperBound && point >= lowerBound);
        return <DotBody disabled={disabled} style={isActived?activeDotStyle:dotStyle} active={isActived} top={offset} right={offset}  key={point} />;
      });
    return <StepBody vertical={vertical}>
            {elements}
    </StepBody>
}

interface MarkerProps {
    vertical:boolean,
    marks:Record<number, React.ReactNode | { style?: React.CSSProperties; label?: string }>,
    included:boolean,
    upperBound:number,
    lowerBound:number,
    max:number,
    min:number,
    disabled?:boolean
    onClickLabel:(...args: any)=>void,
}
export const Markers:React.FC<MarkerProps>=(props)=>{

    const {vertical,marks,max,min,upperBound,lowerBound,included,onClickLabel,disabled}=props
    const marksKeys = Object.keys(marks);

  const range = max - min;
 
  const elements = marksKeys
    .map(parseFloat)
    .sort((a, b) => a - b)
    .map(point => {
      const markPoint = marks[point];
      const markPointIsObject = typeof markPoint === 'object' && !React.isValidElement(markPoint);
      const markLabel = markPointIsObject ? (markPoint as { style?: React.CSSProperties; label?: string })?.label : markPoint;
      if (!markLabel && markLabel !== 0) {
        return null;
      }
      const isActive =
      (!included && point === upperBound) ||
      (included && point <= upperBound && point >= lowerBound);
     

      return (
        <MarkerLabelWrap
        disabled={disabled}
        vertical={vertical}
        active={isActive}
        val={((point - min) / range) * 100}
        style={markPointIsObject?(markPoint as { style?: React.CSSProperties; label?: string })?.style:undefined}
          key={point}
          onMouseDown={e => onClickLabel(e, point)}
          onTouchStart={e => onClickLabel(e, point)}
        >
          {markLabel}
        </MarkerLabelWrap>
      );
    });
return (<MarkerDivWrap   vertical={vertical}>{elements}</MarkerDivWrap>)
}