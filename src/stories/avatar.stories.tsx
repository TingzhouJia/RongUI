import React from 'react'
import { Avatar, Space } from '../../components'
import { themeIt } from './utils/withTheme'
import { UserOutlined } from '@ant-design/icons';
import { Meta } from '@storybook/react/types-6-0';
export default {
    title: 'Data Display / Avatar',
    component: Avatar as any,
    decorators: [themeIt],
    parameters: {
        componentSubtitle: "Avatars can be used to represent people or objects. It supports images, Icons, or letters.",

    },
    argTypes: {
        shape: {
            description: "shape of avatar<br/><h6>type:</h6><code>square</code> | <code>circle</code>",
            table: {
                defaultValue: { summary: "circle" }
            },
            control: {},
        },
        size: {
            description: "size of avatar<br/><h6>type:</h6><code>small</code> | <code>default</code> | <code>large</code> |<code>number</code>",
            table: {
                defaultValue: { summary: "default" }
            }
        },
        src: {
            description: "src for image avatar<br/><h6>type:</h6><code>string</code>"
        },
        icon: {
            description: "reactnode for icon avatar<br/><h6>type:</h6><code>ReactNode</code>"
        },
        alt: {
            description: "alternative text describing the image<br/><h6>type:</h6><code>string</code>"
        },
        srcSet: {
            description: "list of sources to use for different screen resolutions<br/><h6>type:</h6><code>string</code>"
        },
        text: {
            description: "text type avatar<br/><h6>type:</h6><code>string</code>"
        },
        style: {
            description: "The style object of container<br/><h6>type:</h6><code>CSSProperties</code>",
        },
        className: {
            description: "The className object of container<br/><h6>type:</h6><code>string</code>",
        },
    },
} as Meta

export const SquareAvatar = () => (<Avatar shape="square" icon={<UserOutlined />} />);

export const BasicAvatar = () => {
    return <Space>
        <Avatar size={64} icon={<UserOutlined />} />
        <Avatar size="large" icon={<UserOutlined />} />
        <Avatar size="default" icon={<UserOutlined />} />
        <Avatar size="small" icon={<UserOutlined />} />

    </Space>
};

export const AvatarType = () => {
    return <Space
    >
        <Avatar icon={<UserOutlined />} />
        <Avatar text="USER" />
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