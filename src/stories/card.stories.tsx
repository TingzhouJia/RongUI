import React from 'react'
import { Card, Avatar } from '../../components'
import { themeIt } from './utils/withTheme'
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
export default {
    title: 'Data Display / Card',
    component: Card as any,
    decorators: [themeIt],
    parameters: {
        docs: {
            description: ''
        }
    },
    argTypes: {

    },

};

export const Basic=()=>(
    <Card title="title">content</Card>
)

export const Extra=()=>{
    return (
        <Card title="title" extra={<SettingOutlined/>}>content</Card>
    )
}

export const Meta=()=>{
    return (
        <Card 
        actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        cover={<img alt="example" src="https://images.unsplash.com/photo-1533882233514-8086852d08da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />}>
             <Card.Meta 
             title="Europe Street beat" 
             avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
             description="www.instagram.com" />
        </Card>
    )
}

export const Borderless=()=>(
    <Card  title="title" bordered={false} >content</Card>
)