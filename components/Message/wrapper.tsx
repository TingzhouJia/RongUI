import styled from "styled-components";
import { getColor } from "../utils/getColor";


export const IconRender=styled.div<{type:string}>`
    &,&>* {
        color:${props=>getColor(props.type,props.theme)};
    }
`