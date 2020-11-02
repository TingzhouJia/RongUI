import React from 'react'
import 'jest-styled-components'
import List from '../index'
import { mount } from 'enzyme'
import { mountWithTheme } from '../../utils/testUtils'

describe('List test', () => {
    it('should render list directly', () => {
        const wrap = mount(<List>
            <List.Item >a</List.Item>
        </List>)
        expect(wrap.find("#list-item-li")).toBeTruthy()
    })

    it("should render header and footer", () => {
        const wrap = mount(<List header={<div>a</div>} footer={<div>b</div>}>

        </List>)
        expect(wrap.find("#list-header")).toBeTruthy()
        expect(wrap.find("#list-footer")).toBeTruthy()
    })

    it("should be borderless", () => {
        const wrap = mount(<List bordered={false} >
            <List.Item >a</List.Item>
        </List>)
        expect(wrap.find("#list-base").first()).toHaveStyleRule("border","none")
    })

    it("should be large size",()=>{
        const wrap = mount(<List size="large" >
            <List.Item >a</List.Item>
        </List>)
        expect(wrap.find("#list-item-li").first()).toHaveStyleRule("padding","16px 24px")
    })

    it("should have extra node",()=>{
        const wrap = mount(<List size="large" >
        <List.Item extra={<div>a</div>}>a</List.Item>
    </List>)
        expect(wrap.find("#list-item-extra")).toBeTruthy()
    })

    it("should have meta node",()=>{
        const wrap=mountWithTheme(<List>
            <List.Item
        >
          <List.Item.Meta
            avatar={<div></div>}
            title={'a'}
            description={'a'}
          />
          aaa

        </List.Item>
        </List>)
        expect(wrap.find("#list-item-meta")).toBeTruthy()
    })

    it("should have actions",()=>{
        const wrap = mount(<List size="large" >
        <List.Item actions={[<div>a</div>]}>a</List.Item>
    </List>)
        expect(wrap.find("#list-item-actions")).toBeTruthy()
    })

    it("should have data source render",()=>{
        const data=['aaaa']
    const wrap = mount(<List dataSource={data} renderItem={(item)=><List.Item>{item}</List.Item>} >
       
    </List>)
    expect(wrap.find("#list-item-li")).toBeTruthy()
    })

    it("should be horizontal layout",()=>{
        const data=['aaaa']
        const wrap = mountWithTheme(<List itemLayout="horizontal" dataSource={data} renderItem={(item)=><List.Item> <List.Item.Meta
            avatar={<div>a</div>}
            title="a"
            description="b"
          />
         aaaa

        </List.Item>} >
            
        </List>)
        expect(wrap.find("#list-item-li").first()).toHaveStyleRule("display","block")
    })
})

