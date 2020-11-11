import React from 'react'
import { SeperatorWrapper } from './wrapper'

export interface BreadSeperator {
    className?:string

}


const BreadSeperator:React.FC<BreadSeperator>=({children,className})=>{
    return <SeperatorWrapper id="bread-seperator" className={className}>{children||'/'}</SeperatorWrapper>
}

export default BreadSeperator