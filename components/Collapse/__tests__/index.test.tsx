import React from 'react'
import {mount} from 'enzyme'
import 'jest-styled-components'
import Collapse from '..'
describe("Collapse Test",()=>{
    it("should render basic collapse",()=>{
        const tree= mount(<Collapse>
        <Collapse.Panel >
            <p>aaaaa</p>
        </Collapse.Panel>
        </Collapse>)
        expect(tree.find("#collapse-arrow")).toBeTruthy()
        expect(tree.find("#collapse-panel-content").first()).toHaveStyleRule("display","none")

    })

    it("should render header",()=>{
        const tree= mount(<Collapse>
            <Collapse.Panel extra={<div>a</div>} header={<div id="simulate">aaa</div>}>
                <p>aaaaa</p>
            </Collapse.Panel>
            </Collapse>)
        expect(tree.find("#collapse-panel-header > #simulate")).toBeTruthy()
    })

    it("should render extra node",()=>{
        const tree= mount(<Collapse>
            <Collapse.Panel extra={<div>a</div>} header="aaa">
                <p>aaaaa</p>
            </Collapse.Panel>
            </Collapse>)
        expect(tree.find('#collapse-panel-header-extra')).toBeTruthy()
    })

    it("should render arrow in position right",()=>{
        const tree= mount(<Collapse>
            <Collapse.Panel position="right" header="aaa">
                <p>aaaaa</p>
            </Collapse.Panel>
            </Collapse>)

        expect(tree.find("#collapse-arrow").first()).toHaveStyleRule("right","16px")
    })

    it("should open collapse when click",()=>{
        const tree= mount(<Collapse>
            <Collapse.Panel position="right" header="aaa">
                <p>aaaaa</p>
            </Collapse.Panel>
            </Collapse>)
        tree.find("#collapse-panel").first().simulate('click')
        expect(tree.find("#collapse-panel-content").first()).toHaveStyleRule("display","block")
    })

    it("should open only one panel when accordian",()=>{
        const tree= mount(<Collapse accordion>
            <Collapse.Panel position="right" header="aaa">
                <p>aaaaa</p>
            </Collapse.Panel>
            <Collapse.Panel position="right" header="aaa">
                <p>aaaaa</p>
            </Collapse.Panel>
            </Collapse>)
          tree.find("#collapse-panel").first().simulate('click')
          tree.find("#collapse-panel").last().simulate('click')
          expect(tree.find("#collapse-panel-content").first()).toHaveStyleRule("display","none")
        
    })

    it("should be borderless",()=>{
        const tree= mount(<Collapse accordion bordered={false}>
           
            <Collapse.Panel  position="right" header="aaa">
                <p>aaaaa</p>
            </Collapse.Panel>
            </Collapse>)
        expect(tree.find("#collapse-base").first()).toHaveStyleRule("border","none")
    })

    it("should render custom arrow",()=>{
        const tree= mount(<Collapse accordion>
           
            <Collapse.Panel expandIcon={()=>(<div id="simulate">aa</div>)} position="right" header="aaa">
                <p>aaaaa</p>
            </Collapse.Panel>
            </Collapse>)
        expect(tree.find("#collapse-arrow > #simulate")).toBeTruthy()
    })

    it("should have same position when position set in collapse",()=>{
        const tree= mount(<Collapse expandIconPosition="left">
           
            <Collapse.Panel expandIcon={()=>(<div id="simulate">aa</div>)} position="right" header="aaa">
                <p>aaaaa</p>
            </Collapse.Panel>
            <Collapse.Panel expandIcon={()=>(<div id="simulate">aa</div>)} position="right" header="aaa">
                <p>aaaaa</p>
            </Collapse.Panel>
            </Collapse>)
          expect(tree.find("#collapse-arrow").first()).toHaveStyleRule("right","auto")
    })

    

})