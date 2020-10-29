import React from 'react'
import Avatar from '../index'
import { shallow, mount } from 'enzyme'
import 'jest-styled-components'

describe('Avatar and avatar group test', () => {
    it("should render basic avarar",()=>{
        const tree=shallow(<Avatar/>)
        expect(tree.find("#avatar-container").first()).toHaveStyleRule("border-radius","50%")
        expect(tree.find("#avatar-container").first()).toHaveStyleRule("width","40px")
    })

    it("should render text with limited length",()=>{
        const tree=shallow(<Avatar text="aaaaaaaaaaaaaaaaaaaaaaaaa"/>)
        expect(tree.find("#avatar-text").first().text()).toHaveLength(4)
    })
    it("should render avatar with image",()=>{
        const tree=shallow(<Avatar src="aaaaaaaaaaaaaaaaaaaaaaaaa"/>)
        expect(tree.find("#avatar-img").first()).toBeTruthy()
    })

    it("should render max number of avatar in group",()=>{
        const tree=mount(<Avatar.Group maxCount={2}>
            <Avatar/>
            <Avatar/>
            <Avatar/>
            <Avatar/>
        </Avatar.Group>)
        expect(tree.find("#avatar-container")).toHaveLength(6)
    })
    it("should render avatar in same size in group",()=>{
        const tree=mount(<Avatar.Group maxCount={2}>
            <Avatar size="large"/>
            <Avatar/>
            <Avatar size="small"/>
            <Avatar/>
        </Avatar.Group>)
        expect(tree.find("#avatar-container").first()).toHaveStyleRule("width","40px")
    })
})
