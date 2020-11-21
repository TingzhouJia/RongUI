import React from 'react'
import { Avatar, Space } from '../../components'
import { themeIt } from './utils/withTheme'
import { UserOutlined } from '@ant-design/icons';
import { Meta } from '@storybook/react/types-6-0';
import  AvatrarGroup from '../../components/Avatar/avatar-group'
export default {
    title: 'Data Display / Avatar',
    component: Avatar ,
    decorators: [themeIt],
    parameters: {
        componentSubtitle: "Avatars can be used to represent people or objects. It supports images, Icons, or letters.",

    },
    argTypes: {
        shape: {
            description: "Shape of Avatar<br/><h6>type:</h6>",
            table: {
                type:{
                    summary:'"circle" | "square"'
                },
                defaultValue: { summary: "circle" }
            },
            control: {},
        },
        size: {
            description: "Size of <strong>Avatar</strong> or <strong>AvatarGroup</strong><br/><h6>type:</h6>",
            table: {
                type:{
                    summary:"'small' | 'default' | 'large' | number"
                },
                defaultValue: { summary: "default" }
            }
        },
        src: {
            table:{
                type:{
                    summary:"string",
                }
            },
            description: "Src for image avatar<br/><h6>type:</h6>"
        },
        icon: {
            table:{
                type:{
                    summary:"ReactNode",
                }
            },
            description: "Reactnode for icon avatar<br/><h6>type:</h6>"
        },
        alt: {
            table:{
                type:{
                    summary:"string",
                }
            },
            description: "Alternative text describing the image<br/><h6>type:</h6>"
        },
        srcSet: {
            table:{
                type:{
                    summary:"string",
                }
            },
            description: "list of sources to use for different screen resolutions<br/><h6>type:</h6>"
        },
        text: {
            table:{
                type:{
                    summary:"string",
                }
            },
            description: "text type avatar<br/><h6>type:</h6>"
        },
        style: {
            table:{
                type:{
                    summary:"CSSProperties",
                }
            },
            description: "The style object of container<br/><h6>type:</h6>",
        },
        className: {
            table:{
                type:{
                    summary:"string",
                }
            },
            description: "The className object of container<br/><h6>type:</h6>",
        },
        maxCount:{
            name:'maxCount',
            table:{
                type:{
                    summary:"number",
                }
            },
            description:"The max number of avatar to show in group.<strong>This property only works for AvatarGroup</strong><h6>type:</h6>"
        }
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