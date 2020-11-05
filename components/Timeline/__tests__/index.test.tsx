import 'jest-styled-components'
import React from 'react'
import Timeline from '../index'
import { mountWithTheme } from '../../utils/testUtils'
describe('Timeline Test', () => {
    it("should render basic timeline in right mode",()=>{
        const wrapper=mountWithTheme(<Timeline><Timeline.Item>aa</Timeline.Item></Timeline>)
        expect(wrapper.find("#timeline-content").first()).toHaveStyleRule("text-align","left")
    })

    it("should be left mode",()=>{
        const wrapper=mountWithTheme(<Timeline mode="left"><Timeline.Item>aa</Timeline.Item></Timeline>)
        expect(wrapper.find("#timeline-content").first()).toHaveStyleRule("text-align","right")
    })
    it("should have label in right mode",()=>{
        const wrapper=mountWithTheme(<Timeline><Timeline.Item label="aaaa">aa</Timeline.Item></Timeline>)
        expect(wrapper.find("#timeline-item-label").first()).toHaveStyleRule("text-align","right")
    })
    it("should have label in left mode",()=>{
        const wrapper=mountWithTheme(<Timeline mode="left"><Timeline.Item label="aaaa">aa</Timeline.Item></Timeline>)
        expect(wrapper.find("#timeline-item-label").first()).toHaveStyleRule("text-align","left")
    })

    it("should have status node",()=>{
        const wrapper=mountWithTheme(<Timeline><Timeline.Item status='error'>aa</Timeline.Item></Timeline>)
        expect(wrapper.find("#timeline-item-dot-error")).toBeTruthy()
    })
})  
