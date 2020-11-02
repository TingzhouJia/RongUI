import 'jest-styled-components'
import React from 'react'
import Progress from '../index'
import { mount } from 'enzyme'
import { palette } from '../../styles'

describe('Progress Test', () => {
    it("should have basic progress",()=>{
        const wrap=mount(<Progress percentage={50}/>)
        expect(wrap.find("#inner-line").first()).toHaveStyleRule("background-color","#f0f0f0")
    })

    it("should be render status",()=>{
        const wrap=mount(<Progress percentage={50} status="success"/>)
        expect(wrap.find("#percentage-line").first()).toHaveStyleRule("background-color",palette.success)
    })

    it("should have custom background",()=>{
        const wrap=mount(<Progress percentage={50} background={"yellow"}/>)
        expect(wrap.find("#inner-line").first()).toHaveStyleRule("background-color","yellow")
    })
})
