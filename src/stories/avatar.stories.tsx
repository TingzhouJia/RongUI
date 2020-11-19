import React from 'react'
import { Avatar, Space } from '../../components'
import { themeIt } from './utils/withTheme'
import { UserOutlined } from '@ant-design/icons';
export default {
    title: 'Data Display / Avatar',
    component: Avatar as any,
    decorators: [themeIt],
    parameters: {
        docs: {
            description: ''
        }
    },
    argTypes: {
        message: { control: 'text', name: 'message', description: 'content of message', type: { name: 'string', required: true }, },
        type: { name: 'type', description: 'info | error | wanring | success ', },
        className: { name: 'className', description: 'classname for alert' },
        onClick: { name: 'onClick', description: 'onclick action' },
        description: { name: 'description', description: '' },
        closeText: { name: 'closeText', description: 'customized close button' },
        afterClose: { name: 'afterClose', description: 'afterClose callback' }
    },
}

export const SquareAvatar = () => (<Avatar shape="square" icon={<UserOutlined />} />);

export const BasicAvatar = () => {
    return <Space>
         <Avatar size={64} icon={<UserOutlined />} />
        <Avatar size="large" icon={<UserOutlined />} />
        <Avatar size="default" icon={<UserOutlined />} />
        <Avatar size="small" icon={<UserOutlined />} />
       
    </Space>
};

export const AvatarType=()=>{
    return <Space
    >
     <Avatar icon={<UserOutlined />} />
    <Avatar  text="USER"/>
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    </Space>
};

export const Group = () => {
    return <Avatar.Group maxCount={2}>
        <Avatar icon={<UserOutlined />} />
        <Avatar icon={<UserOutlined />} />
        <Avatar icon={<UserOutlined />} />
    </Avatar.Group>
};