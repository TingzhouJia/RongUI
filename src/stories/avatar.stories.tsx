import React from 'react'
import { Avatar } from '../../components'
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

    },

};

export const SquareAvatar = () => <Avatar shape="square" icon={<UserOutlined />} />

export const BasicAvatar = () => {
    return <>
        <Avatar size="large" icon={<UserOutlined />} />
        <Avatar size="default" icon={<UserOutlined />} />
        <Avatar size="small" icon={<UserOutlined />} />
        <Avatar size={64} icon={<UserOutlined />} />
    </>
}

export const AvatarType=()=>{
    return <>
     <Avatar icon={<UserOutlined />} />
    <Avatar  size={40} text="USER"/>
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    </>
}

export const Group = () => {
    return <Avatar.Group maxCount={2}>
        <Avatar icon={<UserOutlined />} />
        <Avatar icon={<UserOutlined />} />
        <Avatar icon={<UserOutlined />} />
    </Avatar.Group>
}