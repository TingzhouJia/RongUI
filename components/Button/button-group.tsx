import React from 'react'
import { NormalSizes, ButtonTypes } from '../utils'
import { ButtonGroupContext } from './btn-group-context'
import styled from 'styled-components'
interface Props {
    size?: NormalSizes
    className?: string
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type ButtonGroupProps = Props & NativeAttrs

const ButtonGroupDiv = styled.div.attrs(props => ({ className: props.className }))`
            background-color: transparent;
            overflow: hidden;
            height: min-content;
            display: inline-flex;
            border-radius:0;
            padding:0;
            border:1px solid #d9d9d9;
`
const ButtonGroup: React.FC<React.PropsWithChildren<ButtonGroupProps>> = (groupProps) => {
    const { children, size = "medium", className, } = groupProps
    return (
        <ButtonGroupContext.Provider value={{ size, isButtonGroup: true, }}>
            <ButtonGroupDiv className={className}>
                {children}
            </ButtonGroupDiv>
        </ButtonGroupContext.Provider>
    )
}

export default ButtonGroup