import 'jest-styled-components'
import React from 'react'
import Tabs from '../index'
import { mountWithTheme } from '../../utils/testUtils'

describe('Tabs Test', () => {
    it("should render first tab if no default",()=>{
        const wrap=mountWithTheme( <Tabs>
            <Tabs.Pane tab="good" tabKey="1">
              aaa
            </Tabs.Pane>
            <Tabs.Pane tab="bad" tabKey="2">
              vvv
            </Tabs.Pane>
          </Tabs>)
        expect(wrap.find("#tab-body-1")).toBeTruthy()
    })
    it("should change tabs",()=>{
        const wrap=mountWithTheme( <Tabs>
            <Tabs.Pane tab="good" tabKey="1">
              aaa
            </Tabs.Pane>
            <Tabs.Pane tab="bad" tabKey="2">
              vvv
            </Tabs.Pane>
          </Tabs>)
          wrap.find("#tab-header-2").first().simulate('click')
          expect(wrap.find("#tab-body-2")).toBeTruthy()
    })
})
