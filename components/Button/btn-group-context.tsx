import React from 'react'
import { NormalSizes, ButtonModes } from '../utils'
export interface ButtonGroupConfig {
    size?: NormalSizes
    type?: ButtonModes
    ghost?: boolean
    disabled?: boolean
    isButtonGroup: boolean
}

const defaultContext = {
    isButtonGroup: false,
    disabled: false,
}

export const ButtonGroupContext = React.createContext<ButtonGroupConfig>(defaultContext)

export const useButtonGroupContext = (): ButtonGroupConfig =>
    React.useContext<ButtonGroupConfig>(ButtonGroupContext)