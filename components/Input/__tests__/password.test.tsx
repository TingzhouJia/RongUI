import React from 'react'
import 'jest-styled-components'
import { mount } from 'enzyme'
import Input from '../input'
import { mountWithTheme } from '../../utils/testUtils'

describe('Password Test', () => {
    it("should render password", () => {
        const wrap = mountWithTheme(<Input.Password />)
        expect(wrap.find("#rong-password")).toBeTruthy()
        expect(wrap.find("#pwd-icon")).toBeTruthy()
    })

    it("should be visble toggle", () => {
        const wrap = mountWithTheme(<Input.Password />)
        wrap.find("#close-eye").first().simulate('click')
        expect(wrap.find("#open-eye")).toBeTruthy()
    })

    it("should not toggle visibility if disabled ", () => {
        const wrap = mountWithTheme(<Input.Password disabled />)
        wrap.find("#close-eye").first().simulate('click')
        expect(wrap.find('input').at(0).getDOMNode().getAttribute('type')).toBe("password");
    })


})
