import React from 'react'
import styled from 'styled-components'
export interface BreadSeperator {
    className?:string

}

const SeperatorWrapper=styled.span`
         display: inline-flex;
          margin: 0 8px;
          user-select: none;
          pointer-events: none;
          color: rgba(0,0,0,0.45);
          align-items: center;
`
const BreadSeperator:React.FC<BreadSeperator>=({children,className})=>{
    return <SeperatorWrapper id="bread-seperator" className={className}>{children||'/'}</SeperatorWrapper>
}

export default BreadSeperator