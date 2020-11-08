import 'jest-styled-components'
import React from 'react'
import Input from '../input'
import { mountWithTheme } from '../../utils/testUtils'
describe('Input Test', () => {
        it("should render input",()=>{
            const wrap=mountWithTheme(<Input/>)
            expect(wrap.find("#outer-input")).toBeTruthy()
        })

        it("should have clear btn if allowClear",()=>{
            const wrap=mountWithTheme(<Input allowClear/>)
           
            wrap.find('input').simulate('change',{target:{value:'111'}})
            expect(wrap.find("#close-button")).toBeTruthy()
        })
        it("should have suffix",()=>{
            const wrap=mountWithTheme(<Input suffix={<div></div>}/>)
            expect(wrap.find("#suffix")).toBeTruthy()
        })

        it("should have addOnAfter",()=>{
            const wrap=mountWithTheme(<Input addonAfter={<div></div>}/>)
            expect(wrap.find("#add-after")).toBeTruthy()
        })
        it("should be borderless",()=>{
            const wrap=mountWithTheme(<Input bordered={false}/>)
            expect(wrap.find("#affix-input-wrapper").first()).toHaveStyleRule("border","none")
        })
        it("should have larger size",()=>{
            const wrap=mountWithTheme(<Input size="large"/>)
            expect(wrap.find("input").first()).toHaveStyleRule("height","25px")
        })

})
