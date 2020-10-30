import React from 'react'
import Button from '../index'
import { mountWithTheme } from '../../utils/testUtils'
import { palette } from '../../styles'
import 'jest-styled-components'
describe('Button Test', () => {
    it('should render basic button', () => {
        const tree = mountWithTheme(<Button>aaa</Button>)
        expect(tree.find("#base-button").first()).toHaveStyleRule("font-size", "14px")
    })

    it("should render link button", () => {
        const tree = mountWithTheme(<Button type="link">aaa</Button>)
        expect(tree.find("#base-button").first()).toHaveStyleRule("border", "none")
    })

    it("should render dashed button", () => {
        const tree = mountWithTheme(<Button type="dashed">aaa</Button>)
        expect(tree.find("#base-button").first()).toHaveStyleRule("border", "1px dashed #d9d9d9")
    })

    it("should render text button", () => {
        const tree = mountWithTheme(<Button type="text">aaa</Button>)
        expect(tree.find("#base-button").first()).toHaveStyleRule("color", "black")
    })

    it("should render disabled button", () => {
        const tree = mountWithTheme(<Button disabled>aaa</Button>)
        expect(tree.find("#base-button").first()).toHaveStyleRule("cursor", "not-allowed")
    })

    it("should render primary button", () => {
        const tree = mountWithTheme(<Button type="primary">aaa</Button>)
        expect(tree.find("#base-button").first()).toHaveStyleRule("color", "white")
    })

    it("should render success button", () => {
        const tree = mountWithTheme(<Button mode="success">aaa</Button>)
        expect(tree.find("#base-button").first()).toHaveStyleRule("color", palette.success)
    })

    it("should render normal Buttton Group", () => {
        const tree = mountWithTheme(<Button.Group >
            <Button type="dashed" size="large">aaaa</Button>
            <Button mode="success" size="small">aaaa</Button>
        </Button.Group>)
        expect(tree.find("#base-button").first()).toHaveStyleRule("font-size", "14px")
    })

    it("should render group in round shape",()=>{
        const tree = mountWithTheme(<Button.Group >
            <Button shape="circle">aaaa</Button>
            <Button mode="success" size="small">aaaa</Button>
        </Button.Group>)
        expect(tree.find("#base-button").first()).toHaveStyleRule("border-radius", "2px")
    })
})
