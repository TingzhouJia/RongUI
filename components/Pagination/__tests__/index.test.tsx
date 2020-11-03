import React from 'react'
import 'jest-styled-components'
import {mountWithTheme} from '../../utils/testUtils'
import Pagination from '../pagination'

describe('pagination test', () => {
    it("should render pagination",()=>{
        const mockFunc=jest.fn()
        const wrap=mountWithTheme(<Pagination onChange={mockFunc} current={1}  total={50}/>)
        expect(wrap.find("#pagination-container")).toBeTruthy()
        wrap.find("#pagination-prev").first().simulate('click')
        expect(mockFunc).toHaveBeenCalled()
    })

    it("should be disabled ",()=>{
        const wrap=mountWithTheme(<Pagination disabled total={50}/>)
        expect(wrap.find("#pagination-item-btn").first()).toHaveStyleRule("cursor","not-allowed")
    })
})
