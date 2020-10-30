import React from 'react'
import { NormalSizes} from '../utils'
import { ButtonGroupContext } from './btn-group-context'
import styled from 'styled-components'
interface Props {
    size?: NormalSizes
    disabled?:boolean
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
            border:none;
`
const ButtonGroup: React.FC<React.PropsWithChildren<ButtonGroupProps>> = (groupProps) => {
    const { children, size = "default", className,disabled } = groupProps
    return (
        <ButtonGroupContext.Provider value={{ size, isButtonGroup: true,disabled }}>
            <ButtonGroupDiv id="button-group" className={className}>
                {children}
            </ButtonGroupDiv>
        </ButtonGroupContext.Provider>
    )
}

export default ButtonGroup