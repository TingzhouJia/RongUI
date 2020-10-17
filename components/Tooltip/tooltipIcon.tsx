import React, { useMemo } from 'react'
import { Placement } from '../utils'
import { getIconPosition } from './placement'
import { TipIcon } from './wrapper'
interface Props {
    placement: Placement
    bgColor: string
  }
  
const TooltipIcon:React.FC<Props>=({placement,bgColor,})=>{
    const content = useMemo(() => getIconPosition(placement, 3), [
        placement,
      ])
    return <TipIcon  {...content} bgColorWithDark={bgColor}/>
}

export default TooltipIcon