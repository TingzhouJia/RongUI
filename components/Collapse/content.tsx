
import React from 'react'
import { PanelContentWrap, PanelContentBox } from './wrapper'

const  PanelContent:React.FC<{isActive:boolean,border:boolean}>=({children,...rest})=> {
    return (
        <PanelContentWrap id="collapse-panel-content" {...rest}>
            {rest.isActive?<PanelContentBox border={rest.border} id="panel-content-active">{children}</PanelContentBox>:null}
        </PanelContentWrap>
    )
}
export default PanelContent