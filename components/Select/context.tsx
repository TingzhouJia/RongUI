import React, { MutableRefObject } from 'react'
import { NormalSizes } from '../utils'


export interface SelectConfig {
  value?: string | string[]
  updateValue?: Function
  visible?: boolean
  updateVisible?: Function
  disableAll?: boolean
  ref?: MutableRefObject<HTMLElement | null>
}

const defaultContext = {
  visible: false,
  size: 'medium' as NormalSizes,
  disableAll: false,
}

export const SelectContext = React.createContext<SelectConfig>(defaultContext)

export const useSelectContext = (): SelectConfig => React.useContext<SelectConfig>(SelectContext)