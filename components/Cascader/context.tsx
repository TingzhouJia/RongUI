import { MutableRefObject } from "react";
import React from "react";

export interface CascaderConfig {
    value?:  string[]
    updateValue?: Function

    expandIcon?:React.ReactNode
  }



  const defaultContext = {
    value:[]
  }
  
  export const CascaderContext = React.createContext<CascaderConfig>(defaultContext)
  
  export const useCascaderContext = (): CascaderConfig => React.useContext<CascaderConfig>(CascaderContext)