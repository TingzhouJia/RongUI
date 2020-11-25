import React, { useMemo, useRef, useEffect, useCallback } from "react";
import { pickChild,useCurrentState } from "../utils";
import PaginationPrevious from "./prev";
import PaginationNext from "./next";
import { PaginationUpdateType ,PaginationConfig, PaginationContext} from "./context";
import { PaginationNav } from "./Wrapper";
import PaginationPages from "./page";

interface Props {
    total?: number;
    defaultCurrent?: number;
    disabled?: boolean;
    limit?:number;
    current?: number;
    defaultPageSize?: number;
    pageSize?: number;
    onChange?: (page: number, pageSize?: number) => void;
    style?: React.CSSProperties;
    className?: string;
  }
  
  


export const keyCodde= {
    ZERO: 48,
    NINE: 57,
  
    NUMPAD_ZERO: 96,
    NUMPAD_NINE: 105,
  
    BACKSPACE: 8,
    DELETE: 46,
    ENTER: 13,
  
    ARROW_UP: 38,
    ARROW_DOWN: 40,
  };
  
  type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
  export type PaginationProps =  NativeAttrs & Props

  const Pagination:React.FC<PaginationProps>=({children,current,defaultCurrent=1,total=0,limit=10,pageSize,defaultPageSize=10,disabled=false,
    onChange,...props})=>{
    const [page, setPage, pageRef] = useCurrentState(current||defaultCurrent)
    const totalPagi=useCallback(
      () => {
        return pageSize?Math.ceil(total/pageSize):Math.ceil(total/defaultPageSize)
      },
      [total,pageSize],
    )
    const ref=useRef<number>(current||defaultCurrent||20)
    const [, prevChildren] = pickChild(children, PaginationPrevious)
    const [, nextChildren] = pickChild(children, PaginationNext)
    const [prevItem, nextItem] = useMemo(() => {
        const hasChildren = (c: any) => React.Children.count(c) > 0
        const prevDefault = <PaginationPrevious>prev</PaginationPrevious>
        const nextDefault = <PaginationNext>next</PaginationNext>
        return [
          hasChildren(prevChildren) ? prevChildren : prevDefault,
          hasChildren(nextChildren) ? nextChildren : nextDefault,
        ]
      }, [prevChildren, nextChildren])
      const update = (type: PaginationUpdateType) => {
        if (type === 'prev' && ref.current > 1) {
          setPage(last => (last as number) - 1)
        }
        if (type === 'next' && ref.current < (pageSize||defaultPageSize)) {
          setPage(last => last + 1)
        }
      }
      const values = useMemo<PaginationConfig>(
        () => ({
          isFirst: page <= 1,
          isLast: page >= (totalPagi()),
          update,
          disabled
        }),
        [page],
      )
      useEffect(() => {
        onChange && onChange(page)
      }, [page])
      useEffect(() => {
        if (current !== undefined) {
          setPage(current)
        }
      }, [current])
      return (
          <PaginationContext.Provider value={values}>
              <PaginationNav id="pagination-nav" {...props}>
              {prevItem}
        <PaginationPages id="pagination-container" count={totalPagi()} current={page} limit={limit} setPage={setPage} />
        {nextItem}
              </PaginationNav>
          </PaginationContext.Provider>
      )
  }

  export default Pagination


