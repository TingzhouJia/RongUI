import { NormalSizes } from "../utils";
import { MutableRefObject } from "react";
import React from "react";

export interface AutoCompleteConfig {
    value?: string
    updateValue?: Function
    visible?: boolean
    updateVisible?: Function
    ref?: MutableRefObject<HTMLElement | null>
  }
  
  const defaultContext = {
    visible: false,
  }
  export const AutoCompleteContext = React.createContext<AutoCompleteConfig>(defaultContext)

export const useAutoCompleteContext = (): AutoCompleteConfig =>
  React.useContext<AutoCompleteConfig>(AutoCompleteContext)