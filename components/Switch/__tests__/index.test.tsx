import React from 'react'
import 'jest-styled-components'
import Switch from '../index'
import { mountWithTheme } from '../../utils/testUtils'
import { palette } from '../../styles'
describe('Switch Test', () => {
    it("should render switch",()=>{
        const wrap=mountWithTheme(<Switch/>)
        wrap.find("#rong-switch").first().simulate('click')
        expect(wrap.find("#rong-switch").first()).toHaveStyleRule("background-color",palette.primary)
    })
    it("should contain inner content",()=>{
        const wrap=mountWithTheme(<Switch unCheckedChildren="1"/>)
        expect(wrap.find("#inner-content")).toBeTruthy()
    })
})
