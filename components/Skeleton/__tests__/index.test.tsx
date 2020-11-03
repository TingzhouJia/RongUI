import 'jest-styled-components'
import React from 'react'
import Skeleton from '../skeleton'
import { mount } from 'enzyme'

describe('Skeleton test', () => {
    it("should have skeleton",()=>{
        const wrap=mount(<Skeleton/>)
        expect(wrap.find("#skeleton-base")).toBeTruthy()
    })

    it("should render avatar",()=>{
        const wrap=mount(<Skeleton avatar/>)
        expect(wrap.find("#skeleton-avatar")).toBeTruthy()
    })

    it("should render title",()=>{
        const wrap=mount(<Skeleton title/>)
        expect(wrap.find("#skeleton-title")).toBeTruthy()
    })
})
