import React from 'react'
import { ProgressProps } from './progress'
import { OuterLine, InnerLine, BgLine } from './wrapper'

const LineProgress:React.FC<ProgressProps>=(props)=>{
    const {percentage,width,background,color,active,children}=props
    return (<>
        <OuterLine id="outer-line">
            <InnerLine id="inner-line" bg={background as string}>
                <BgLine id="percentage-line" active={active as boolean} width={percentage} bg={color}  />
               
            </InnerLine>
            {children}
        </OuterLine>
    </>)
}

export default LineProgress