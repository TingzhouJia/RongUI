import React from 'react'
import 'jest-styled-components'
import Description from '../index'
import { mount } from 'enzyme'

describe('Description Test', () => {
    it("shoud render basic description",()=>{
        const wrap=mount(<Description title="aaaa">
            <Description.Item label="aaaa">
                <p>aaaa</p>
            </Description.Item>
        </Description>)
        expect(wrap.find('#description-title').first()).toBeTruthy()
        expect(wrap.find('#description-item-content > p').first()).toBeTruthy()
    })
    it("should render bordered description",()=>{
        const wrap=mount(<Description bordered title="aaaa">
        <Description.Item label="aaaa">
            <p>aaaa</p>
        </Description.Item>
    </Description>)
      expect(wrap.find('#description-view').first()).toHaveStyleRule("border-bottom","1px solid rgba(0,0,0,0.45)")
    })

    it("should render vertical description",()=>{
        const wrap=mount(<Description layout="vertical" title="aaaa">
        <Description.Item label="aaaa">
            <p>aaaa</p>
        </Description.Item>
    </Description>)
        expect(wrap.find("#description-item-container").first()).toHaveStyleRule("flex-direction","column")
    })
})
