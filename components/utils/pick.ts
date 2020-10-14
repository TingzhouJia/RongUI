import { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState,ReactNode } from 'react'
import React from "react"

export const pickChild = (
    children: ReactNode | undefined,
    targetChild: React.ElementType,
  ): [ReactNode | undefined, ReactNode | undefined] => {
    let target: ReactNode[] = []
    const withoutTargetChildren = React.Children.map(children, item => {
      if (!React.isValidElement(item)) return item
      if (item.type === targetChild) {
        target.push(item)
        return null
      }
      return item
    })
  
    const targetChildren = target.length >= 0 ? target : undefined
  
    return [withoutTargetChildren, targetChildren]
  }
  


  export type CurrentStateType<S> = [S, Dispatch<SetStateAction<S>>, MutableRefObject<S>]
  
export  const useCurrentState = <S>(initialState: S | (() => S)): CurrentStateType<S> => {
    const [state, setState] = useState<S>(() => {
      return typeof initialState === 'function' ? (initialState as () => S)() : initialState
    })
    const ref = useRef<S>(initialState as S)
  
    useEffect(() => {
      ref.current = state
    }, [state])
  
    const setValue = (val: SetStateAction<S>) => {
      const result = typeof val === 'function' ? (val as (prevState: S) => S)(ref.current) : val
      ref.current = result
      setState(result)
    }
  
    return [state, setValue, ref]
  }
  
