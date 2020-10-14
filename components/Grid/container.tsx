import React from 'react'
import {GridBasicItemProps} from './items'
import { Wrap } from './types';
import { GridContainerWrap } from './wrapper';
interface Props {
    gap?: number
    wrap?: Wrap
    className?: string
  }

export type GridContainerProps = Props & GridBasicItemProps

const GridContainer:React.FC<React.PropsWithChildren<GridContainerProps>>=(props)=>{
    const {gap=0,
        wrap='wrap',
        children,
        className="",
        ...rest}=props
    const getUnit=() => {
        return `calc(${gap} * 4pt)`
      }
    return (<GridContainerWrap unit={getUnit()} wrap={wrap} >
        {children}
    </GridContainerWrap>)
}

export default GridContainer