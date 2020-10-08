
import React from 'react'
import { PanelContentWrap, PanelContentBox } from './wrapper'

const  PanelContent:React.FC<{isActive:boolean,border:boolean,ghost:boolean}>=({children,...rest})=> {
    return (
        <PanelContentWrap {...rest}>
            {rest.isActive?<PanelContentBox border={rest.border} ghost={rest.ghost}>{children}</PanelContentBox>:null}
        </PanelContentWrap>
    )
}
export default PanelContent