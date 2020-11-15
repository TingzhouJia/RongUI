import styled, { css } from "styled-components";

export const SpacerBase=styled.div<{direction?:'horizontal' | 'vertical',align?:'flex-start' | 'flex-end' | 'center' | 'baseline'}>`
 display: inline-flex;
 ${props=>props.direction==='vertical'?css`flex-direction: column;`:null}
 align-items: ${props=>props.align};



`




export const SpaceItemBase=styled.div`
&:empty {
    display:none;
}
`