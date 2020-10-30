import React from 'react'
import Breadcrumb from '../index'
import { shallowWithTheme, mountWithTheme } from '../../utils/testUtils'
import { mount } from 'enzyme'

describe('Breadcrumb Test', () => {
    it("should render basic breadcrumb",()=>{
        const tree=mountWithTheme(<Breadcrumb>
            <Breadcrumb.Item>a</Breadcrumb.Item>
            <Breadcrumb.Item>b</Breadcrumb.Item>
        </Breadcrumb>)
        expect(tree.find('#bread-seperator').first().text()).toBe("/")
    })

    it("should have custom seperator",()=>{
        const tree=mountWithTheme(<Breadcrumb separator="%">
            <Breadcrumb.Item>a</Breadcrumb.Item>
            <Breadcrumb.Item>b</Breadcrumb.Item>
        </Breadcrumb>)
         expect(tree.find('#bread-seperator').first().text()).toBe("%")
    })
})
