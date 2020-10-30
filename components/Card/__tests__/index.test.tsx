import React from 'react'
import 'jest-styled-components'
import Card from '../index'
import { mount } from 'enzyme'
import { SettingOutlined } from '@ant-design/icons'

describe('Card Test', () => {
    it("should render basic card",()=>{
        const tree=mount(<Card
           
            title="card title"  extra={<a >extra</a>} style={{width:'300px'}}>
                <p>aaaa</p>
            </Card>)
        expect(tree.find("#card-header-title").first().text()).toBe("card title")
    })

    it("should render card with cover",()=>{
        const tree=mount(<Card
            cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            title="card title"  extra={<a >extra</a>} style={{width:'300px'}}>
                <p>aaaa</p>
            </Card>)
        expect(tree.find("img").first()).toBeTruthy()
    })

    it("should render borderless card",()=>{
        const tree=mount(<Card
            bordered={false}
            title="card title"   style={{width:'300px'}}>
                <p>aaaa</p>
            </Card>)
        expect(tree.find("#basic-card").first()).toHaveStyleRule('border','none')
    })

    it("should render action bar",()=>{
        const tree=mount(<Card
            actions={[
                <SettingOutlined key="setting" />,
               
              ]} 
            title="card title"   style={{width:'300px'}}>
                <p>aaaa</p>
            </Card>)
        expect(tree.find("#card-actions").first()).toBeTruthy()
    })
})
