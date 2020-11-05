import 'jest-styled-components'
import React from 'react'
import Tag from '../index'
import { mountWithTheme } from '../../utils/testUtils'

describe('Tag Test', () => {
    it("should render basic tag",()=>{
        const wrapper=mountWithTheme(<Tag>aaaaa</Tag>)
        expect(wrapper.find("#rong-tag")).toBeTruthy()
    })
    it("should be colored",()=>{
        const wrapper=mountWithTheme(<Tag color="red">aaaaa</Tag>)
        expect(wrapper.find("#rong-tag").first()).toHaveStyleRule("background","red")
    })
    it("should be clickable",()=>{
        const func=jest.fn()
        const wrapper=mountWithTheme(<Tag  onClose={func} >aaaaa</Tag>)
        wrapper.find("#close-btn").first().simulate('click')
        expect(wrapper.find("#rong-tag").first()).toHaveStyleRule('display',"none")
    })
})
