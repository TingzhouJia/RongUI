import React from 'react'
import { Badge,Avatar } from '../../components'
import { themeIt } from './utils/withTheme'

import { UserOutlined } from '@ant-design/icons';
export default {
    title: 'Data Display / Badge',
    component: Badge as any,
    decorators: [themeIt],
    parameters: {
        docs: {
            description: ''
        }
    },
    argTypes: {

    },

}

export const Basic = () => {
    return (
        <Badge count={20}>
            <Avatar size="large" shape="square" icon={<UserOutlined />} />
        </Badge>
    )
};

export const Dot = () => {
    return (
        <Badge count={20} dot>
            <Avatar size="large" shape="square" icon={<UserOutlined />} />
        </Badge>
    )
};

export const showZero = () => {
    return (
        <>
            <Badge count={0} >
                <Avatar size="large" shape="square" icon={<UserOutlined />} />
            </Badge>
            &nbsp;&nbsp;
            <Badge count={0} showZero>
                <Avatar size="large" shape="square" icon={<UserOutlined />} />
            </Badge>
        </>
    )
};

export const Overflow = () => {
    return (
        <Badge maxCount={99} count={200}>
            <Avatar size="large" shape="square" icon={<UserOutlined />} />
        </Badge>
    )
};

export const SingleBadge=()=>{
    return (
       <>
        <Badge status="error" text="error" />
        <br/>
        <Badge status="info" text="info" />
        <br/>
        <Badge status="success" text="success" />
        <br/>
        <Badge status="warning" text="warning" />
       </>
    )
};