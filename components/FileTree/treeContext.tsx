import React from 'react'

export interface TreeConfig {
  onFileClick?: (path: string) => void
  initialExpand: boolean
  isImperative: boolean
  disabled?:boolean
}

const defaultContext = {
  initialExpand: false,
  isImperative: false,
  disabled:false
}

export const TreeContext = React.createContext<TreeConfig>(defaultContext)

export const useTreeContext = (): TreeConfig => React.useContext<TreeConfig>(TreeContext)