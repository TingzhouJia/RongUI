import React from 'react'
import 'jest-styled-components'
import {mount} from 'enzyme'
import Image from '../index'
import renderer from 'react-test-renderer'
describe('Image Test', () => {
    it("should render image",()=>{
        const wrapper=mount(<Image src="https://images.unsplash.com/photo-1602524206684-fdf6393c7d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"/>)
        expect(wrapper.find("#image-base")).toBeTruthy()
    })

    it("should render fallback image when error",()=>{
        const wrapper=mount(<Image fallback="https://images.unsplash.com/photo-1602524206684-fdf6393c7d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" 
        src="error"/>)
        expect(wrapper.find("#default-fallback")).toBeTruthy()

    })

    it("should have snapshot",()=>{
        const wrapper=renderer.create(<Image src="https://images.unsplash.com/photo-1602524206684-fdf6393c7d89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=8"/>).toJSON()
        expect(wrapper).toMatchSnapshot()
    })
    
})
