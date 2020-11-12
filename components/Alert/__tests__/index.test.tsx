import Alert, { AlertProps } from '../alert'
import 'jest-styled-components'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import React from 'react'
import { palette } from '../../styles'
describe('Test Alert', () => {
    // it("should render basic alert if no props added",()=>{
    //     const tree=renderer.create(<Alert/>).toJSON()
    //     expect(tree).toMatchSnapshot()
    // })

    it("should have icon rendered",()=>{
        const tree=mount(<Alert showIcon/>)
        expect(tree.find('#alert-icon').first()).toHaveStyleRule("color",palette.infoDark)
    })

    it("should have different style when type are different",()=>{
        const tree=shallow(<Alert type="error"/>)
        expect(tree).toHaveStyleRule('background',palette.errorLighter)
        
    })
    it("should render close button when props assigned",()=>{
        const tree=shallow(<Alert closable/>)
        expect(tree.find("#close-btn")).toBeTruthy()
    })

    it("should close alert when click close button",()=>{
        const tree=shallow(<Alert closable/>)
        tree.find("#close-btn").first().simulate('click')
        expect(tree.find("#alert_base")).toHaveStyleRule("display","none")
    })
})


