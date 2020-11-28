import { StatusTypes } from "../utils";
import React, { useContext } from 'react'
import { TimeItemBase, ItemContent, Itemlabel, ItemTail, ItemHead } from "./wrapper";
import { getColor } from "../utils/getColor";
import { useTimelineContext } from "./context";
import { ThemeContext } from "styled-components";
export interface TimeLineItemProps {
    className?: string;
    status?: 'success'|'error'|'info'|'disabled'|'warning';
    color?:string
    dot?: React.ReactNode;
    pending?: boolean;
    last?:boolean
    position?: string;
    style?: React.CSSProperties;
    label?: React.ReactNode;
  }

  const TimelineItem: React.FC<TimeLineItemProps> = props => {
   const {mode}=useTimelineContext()
    const {
     
      className,
      status,
      children,
      last,
      pending=false,
      dot,
      color,
      label,
      position,
      ...restProps
    } = props;
  
    const theme=useContext(ThemeContext)
    
  
    return (
      <TimeItemBase id="rong-timeline-item" {...restProps} className={className}>
      {label && <Itemlabel id="timeline-item-label" right={mode==="right"}>{label}</Itemlabel>}
       {!last&& <ItemTail label={label?true:false} pending={pending} right={mode==="right"}/>}
        <ItemHead
        id={`timeline-item-dot-${status}`}
          dot={dot?true:false}
          position={mode}
          pending={pending}
          labels={label?true:false}
          color={color?color:status?getColor(status,theme):theme.colors.primary}
        >
          {dot}
        </ItemHead>
        <ItemContent id="timeline-content" right={mode==="right"} labels={label?true:false}>{children}</ItemContent>
      </TimeItemBase>
    );
  };
  

  
  export default TimelineItem;