import styled, { css } from "styled-components";


export const StepBase = styled.div<{ custom?: boolean, active?: boolean, disabled?: boolean }>`
 position: relative;
  display: inline-block;
  flex: 1;
  overflow: hidden;
  vertical-align: top;
  &:last-child {
    flex: none;
  }
`

export const StepsBase = styled.div<{ size?: 'default' | 'small', direction?: 'horizontal' | "vertical", dot?: boolean, nav?: boolean, label?: boolean }>`
display: flex;
  width: 100%;
  font-size: 0;
  text-align: initial;

`
export const StepItem = styled.div<{ nav?: boolean,click?:boolean }>`
${props=>props.click?css` cursor: pointer;
        &:hover {
          opacity: 0.85;
        }`:null}
outline: none;
${props => props.nav ? css` display: inline-block;
      height: 100%;
      margin-left: -16px;
      padding-bottom: 12px;
      text-align: left;
      transition: opacity 0.3s;`: null}
`

export const StepTail = styled.div`
position: absolute;
    top: 12px;
    left: 0;
    width: 100%;
    padding: 0 10px;

    &::after {
      display: inline-block;
      width: 100%;
      height: 1px;
      background: rgba(0,0,0,0.35);
      border-radius: 1px;
      transition: background 0.3s;
      content: '';
    }
`

export const StepIcon = styled.div``

export const StepContent = styled.div`
`

export const StepTitle = styled.div<{ nav?: boolean }>`
${props => props.nav ? css`
        max-width: 100%;
        padding-right: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        &::after {
          display: none;
        }

`: css`
    position: relative;
    display: inline-block;
    padding-right: 16px;
    color: rgba(0,0,0,0,85);
    font-size: 16px;
    line-height: 32px;

    &::after {
      position: absolute;
      top: 16px;
      left: 100%;
      display: block;
      width: 9999px;
      height: 1px;
      background: rgba(0,0,0,0.25);
      content: '';
    }
`}
 
`

export const StepSubtitle = styled.div`
  display: inline;
    margin-left: 8px;
    color:rgba(0,0,0,0.45);
    font-weight: normal;
    font-size: 14px;
`

export const StepDescription = styled.div``

export const StepIconDot = styled.div``

export const StepItIcon = styled.div``

