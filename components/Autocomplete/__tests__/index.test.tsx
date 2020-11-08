import { mountWithTheme } from "../../utils/testUtils"
import React from "react"
import AutoComplete from ".."
import 'jest-styled-components'
describe('Auto-Complete Test', () => {
    beforeEach(()=>{
        global.MutationObserver = (class {
            constructor(callback:any) {}
            disconnect() {}
            observe(element:any, initObject:any) {}
        }) as any;
    })
    it('should set input value from initial value', () => {
        let wrapper = mountWithTheme(<AutoComplete disabled options={[]}/>)
     
        expect((wrapper.find("input").first())).toHaveStyleRule("cursor","not-allowed")
    
      
      })
})
