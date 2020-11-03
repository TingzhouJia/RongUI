import Grid from "../Grid"
import { MultiItem } from "./wrapper"
import React from "react"

interface Props {
    disabled: boolean
  }
  
  const SelectMultipleValue: React.FC<React.PropsWithChildren<Props>> = ({
    disabled,

    children,
  }) => {

    return (
        <MultiItem  disabled={disabled}> {children}</MultiItem>
    )
  }

export default SelectMultipleValue