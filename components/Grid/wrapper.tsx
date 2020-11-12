import styled, { css } from "styled-components";
import { ItemLayoutValue } from "./items";
import { Wrap } from "./types";

export const GridItemWrap=styled.div<{justify?:string, direction?:string,
    alignItems?:string,
    alignContent?:string,
    layout:{ [key in ['xs', 'sm', 'md', 'lg', 'xl'][number]]: ItemLayoutValue},
    type:'xs'|'sm'|'md'|'lg'|'xl'}>`

    ${props=>props.justify?css`
    justify-content: ${props.justify};
    `:null};
    ${props=>props.direction?css`
   flex-direction: ${props.direction};
    `:null};
    ${props=>props.alignContent?css`
    align-content: ${props.alignContent};
    `:null}
    ${props=>props.alignItems?css`
    align-items: ${props.alignItems};
    `:null}
  
    flex-grow: ${props=>props.layout[props.type].grow};
    max-width: ${props=>props.layout[props.type].width};
    flex-basis: ${props=>props.layout[props.type].basis};

 `

export const GridContainerWrap=styled.div<{wrap:Wrap,unit:string}>`
    display: flex;
    flex-wrap: ${props=>props.wrap};
    box-sizing: border-box;
    margin: calc(-1 * ${props=>props.unit});
    width: calc(100% + ${props=>props.unit} * 2);

`