import { StatusTypes } from "../utils";
import React from 'react'
import { TimeItemBase, ItemContent, Itemlabel, ItemTail, ItemHead } from "./wrapper";
import { getColor } from "../utils/getColor";
import { useTimelineContext } from "./context";
export interface TimeLineItemProps {
    className?: string;
    status?: 'success'|'error'|'default'|'disabled';
    color?:string
    dot?: React.ReactNode;
    pending?: boolean;
    position?: string;
    style?: React.CSSProperties;
    label?: React.ReactNode;
  }

  const TimelineItem: React.FC<TimeLineItemProps> = props => {
   const {mode}=useTimelineContext()
    const {
     
      className,
      status="default",
      children,
      pending=false,
      dot,
      color,
      label,
      position,
      ...restProps
    } = props;
  

  
  
    return (
      <TimeItemBase {...restProps} className={className}>
        {label && <Itemlabel right={mode==="right"}>{label}</Itemlabel>}
        <ItemTail pending={pending} right={mode==="right"}/>
        <ItemHead
          dot={dot?true:false}
          pending={pending}
          color={color||getColor(status)}
        >
          {dot}
        </ItemHead>
        <ItemContent right={mode==="right"} label={label?true:false}>{children}</ItemContent>
      </TimeItemBase>
    );
  };
  

  
  export default TimelineItem;