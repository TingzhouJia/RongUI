import React from 'react'
import 'jest-styled-components'
import {mountWithTheme} from '../../utils/testUtils'
import Pagination from '../pagination'

describe('pagination test', () => {
    it("should render pagination",()=>{
        const wrap=mountWithTheme(<Pagination total={50}/>)
        expect(wrap.find("#pagination-container")).toBeTruthy()
        expect(wrap.find("#pagination-prev").first()).toHaveStyleRule("cursor","not-allowed")
    })

    it("should be disabled ",()=>{
        const wrap=mountWithTheme(<Pagination disabled total={50}/>)
        expect(wrap.find("#pagination-item-btn").first()).toHaveStyleRule("cursor","not-allowed")
    })
})
