import React from 'react'
import {shallow, mount} from 'enzyme'
import Badge from '../badge'
import 'jest-styled-components'
import { palette } from '../../styles'
describe("Badge Test",()=>{
    it("should render basic badge",()=>{
        const tree=shallow(<Badge  count={20}>
            <div></div>
        </Badge>)
        expect(tree.find("#badge-number").first().text()).toBe("20")
    })

    it("should be limited by maxCount",()=>{
        const tree=shallow(<Badge maxCount={30} count={35}>
            <div></div>
        </Badge>)
        expect(tree.find("#badge-number").first().text()).toBe("30+")
    })

    it("should render badge dot",()=>{
        const tree=mount(<Badge dot maxCount={30} count={35}>
            <div></div>
        </Badge>)
        expect(tree.find("#badge-number").first()).toHaveStyleRule("border-radius","100%")
    })
    it("should render status badge",()=>{
        const tree=mount(<Badge status="info" text="good"/>)
        expect(tree.find("#badge-dot").first()).toHaveStyleRule("background",palette.info)
    })
})