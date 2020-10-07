import React from 'react'
import { ProgressProps } from './progress'
import { OuterLine, InnerLine, BgLine } from './wrapper'

const LineProgress:React.FC<ProgressProps>=(props)=>{
    const {size,percentage,width,background,color,active,children}=props
    return (<>
        <OuterLine>
            <InnerLine bg={background as string}>
                <BgLine active={active as boolean} width={percentage} size={size} bg={color}  >
                </BgLine>
            </InnerLine>
        </OuterLine>
        {children}
    </>)
}

export default LineProgress