import 'jest-styled-components'
import React from 'react'
import Select from '../select'
import { mountWithTheme, nativeEvent } from '../../utils/testUtils'
import { mount } from 'enzyme'

describe('Select Test', () => {
    beforeEach(()=>{
        global.MutationObserver = (class {
            constructor(callback:any) {}
            disconnect() {}
            observe(element:any, initObject:any) {}
        }) as any;
    })
    it("should render basic Select",()=>{
       
        const wrap=mountWithTheme(<Select>
               <Select.Option className="iii" value="abaaa">bb</Select.Option>
        </Select>)
        wrap.find("#select-base").first().simulate('click',nativeEvent)
        expect(wrap.find(".iii")).toBeTruthy()
    })

    it("should be disabled",()=>{
        const wrap=mountWithTheme(<Select disabled>
            <Select.Option className="iii" value="abaaa">bb</Select.Option>
     </Select>)
     expect(wrap.find("#select-base").first()).toHaveStyleRule("background-color","#f2f2f2")
    })

    it("should be multiple",()=>{
        const wrap=mountWithTheme(<Select multiple initialValue={['abaaa']}>
            <Select.Option className="iii" value="abaaa">bb</Select.Option>
     </Select>)
     expect(wrap.find("#multi-selected-container")).toBeTruthy()
    })

})
