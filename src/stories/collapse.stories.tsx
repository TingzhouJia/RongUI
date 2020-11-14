import React from 'react'
import { Checkbox, Collapse } from '../../components'
import { themeIt } from './utils/withTheme'
import { CaretRightOutlined, SettingOutlined } from '@ant-design/icons';

export default {
    title: 'Data Display / Collapse',
    component: Checkbox as any,
    decorators: [themeIt],
    parameters: {
        docs: {
            description: ''
        }
    },
    argTypes: {

    },

};

export const Basic = () => {
    return (
        <Collapse>
            <Collapse.Panel header="panel1">content1</Collapse.Panel>
            <Collapse.Panel header="panel2">content2</Collapse.Panel>
        </Collapse>
    )
}

export const Accordion = () => {
    return (
        <Collapse accordion>
            <Collapse.Panel header="panel1">content1</Collapse.Panel>
            <Collapse.Panel header="panel2">content2</Collapse.Panel>
        </Collapse>
    )
}

export const Borderless=()=>(
    <Collapse bordered={false}>
            <Collapse.Panel header="panel1">content1</Collapse.Panel>
            <Collapse.Panel header="panel2">content2</Collapse.Panel>
        </Collapse>
)

export const CustomizedIcon=()=>{
    return (
        <Collapse expandIcon={({isActive}) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}>
            <Collapse.Panel header="panel1">content1</Collapse.Panel>
            <Collapse.Panel header="panel2">content2</Collapse.Panel>
        </Collapse>
    )
}

export const NoArrow=()=>{
    return (
        <Collapse >
        <Collapse.Panel showArrow={false} header="panel1">content1</Collapse.Panel>
        <Collapse.Panel header="panel2">content2</Collapse.Panel>
    </Collapse>
    )
}

export const Extra=()=>{
    return (
        <Collapse >
        <Collapse.Panel extra={<SettingOutlined/>} header="panel1">content1</Collapse.Panel>
        <Collapse.Panel header="panel2">content2</Collapse.Panel>
    </Collapse>)
}

export const PositionedArrow=()=>{
    return (
        <Collapse >
        <Collapse.Panel position="left" header="panel1">content1</Collapse.Panel>
        <Collapse.Panel header="panel2">content2</Collapse.Panel>
    </Collapse>)
}