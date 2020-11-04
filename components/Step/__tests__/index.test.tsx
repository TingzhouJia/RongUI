import 'jest-styled-components'
import React from 'react'
import Steps from '../index'
import { mountWithTheme } from '../../utils/testUtils'
import { palette } from '../../styles'

describe('Steps Test', () => {
    it("should render steps", () => {
        const wrap = mountWithTheme(<Steps>
            <Steps.Step title="Finished" subTitle="aaaaaaaaa" description="This is a description." >

            </Steps.Step>
        </Steps>)
        expect(wrap.find("#steps-base")).toBeTruthy()
    })

    it("should render active step",()=>{
        const wrap = mountWithTheme(<Steps current={1}>
            <Steps.Step title="Finished" subTitle="aaaaaaaaa" description="This is a description." >

            </Steps.Step>
        </Steps>)
        expect(wrap.find("#step-process-icon")).toBeTruthy()
    })
    it("should render dot step",()=>{
        const wrap = mountWithTheme(<Steps progressDot current={1}>
            <Steps.Step title="Finished" subTitle="aaaaaaaaa" description="This is a description." >

            </Steps.Step>
        </Steps>)
        expect(wrap.find("#step-dot-process")).toBeTruthy()
    })
    it("should render error ",()=>{
        const wrap = mountWithTheme(<Steps progressDot current={1}>
            <Steps.Step status="error" title="Finished" subTitle="aaaaaaaaa" description="This is a description." >

            </Steps.Step>
        </Steps>)
        expect(wrap.find("#step-error-icon")).toHaveStyleRule("color",palette.error)
    })
})
