import 'jest-styled-components'
import React from 'react'
import Input from '../input'
import { mountWithTheme } from '../../utils/testUtils'

describe('Search Test', () => {
    it("should render search",()=>{
        const wrap=mountWithTheme(<Input.Search/>)
        expect(wrap.find("#suffix")).toBeTruthy()
    })
    it("should have enter button",()=>{
        const wrap=mountWithTheme(<Input.Search enterButton/>)
        expect(wrap.find("#enter-btn")).toBeTruthy()
    })
    it("should onSearch when keydown",()=>{
        const mockFUnc=jest.fn()
        const wrap=mountWithTheme(<Input.Search onSearch={mockFUnc} enterButton/>)
        wrap.find('#enter-btn').first().simulate('click')
        expect(mockFUnc).toHaveBeenCalled()
    })
})
