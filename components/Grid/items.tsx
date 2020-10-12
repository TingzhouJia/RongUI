import { Justify, Direction, AlignItems, AlignContent } from "./types"
import React from 'react'
import { GridItemWrap } from "./wrapper"
type BreakpointsValue = number | boolean
interface Props {
  xs?: BreakpointsValue
  sm?: BreakpointsValue
  md?: BreakpointsValue
  lg?: BreakpointsValue
  xl?: BreakpointsValue
  justify?: Justify
  direction?: Direction
  alignItems?: AlignItems
  alignContent?: AlignContent
  className?: string
}


type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>

export type GridBasicItemProps = Props  & NativeAttrs
export type ItemLayoutValue = {
  grow: number
  width: string
  basis: string
  display: string
}
const getItemLayout = (val: BreakpointsValue): ItemLayoutValue => {
  const display = val === 0 ? 'display: none;' : ''
  if (typeof val === 'number') {
    const width = (100 / 24) * val
    const ratio = width > 100 ? '100%' : width < 0 ? '0' : `${width}%`
    return {
      grow: 0,
      display,
      width: ratio,
      basis: ratio,
    }
  }
  return {
    grow: 1,
    display,
    width: '100%',
    basis: '0',
  }
}

const GridItem:React.FC<GridBasicItemProps>=(props)=>{
  const {xs=false as BreakpointsValue,
  sm=false as BreakpointsValue,
  md=false as BreakpointsValue,
  lg=false as BreakpointsValue,
  xl=false as BreakpointsValue,
  justify,
  direction,
  alignItems,
  alignContent,
  children,
  className="",
  ...rest
}=props

const getType=():'xs'|'sm'|'md'|'lg'|'xl'=>{

  return 'xs'
}
 
  
  const layout=() => ({
    xs: getItemLayout(xs),
    sm: getItemLayout(sm),
    md: getItemLayout(md),
    lg: getItemLayout(lg),
    xl: getItemLayout(xl),
  })
  return (<GridItemWrap type={getType()} layout={layout()} justify={justify} direction={direction} alignContent={alignContent} alignItems={alignItems}>
    {children}
  </GridItemWrap>)
}

export default GridItem