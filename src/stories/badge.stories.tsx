import React from 'react'
import { Badge, Avatar, Space } from '../../components'
import { themeIt } from './utils/withTheme'

import { UserOutlined } from '@ant-design/icons';
import { Meta } from '@storybook/react/types-6-0';
export default {
    title: 'Data Display / Badge',
    component: Badge as any,
    decorators: [themeIt],
    parameters: {
        componentSubtitle: "Small numerical value or status descriptor for an element",
        docs: {
            description: {
                component: "<h3>When To Use?</h3>Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying unread messages count."
            },
            source: {
                type: "code"
            }
        }
    },
    argTypes: {
        count: {
            description: "Number to show in badge<h6>type:</h6><code>ReactNode</code>"
        },
        dot: {
            description: "Whether to display a red dot instead of number<h6>type:</h6><code>boolean</code>",
            table: {
                defaultValue: { summary: "false" }
            }
        },
        showZero: {
            description: "Whether to display a badge if count is zero<h6>type:</h6><code>boolean</code>",
            table: {
                defaultValue: { summary: "false" }
            }
        },
        maxCount: {
            description: "An max count for badge<h6>type:</h6><code>number</code>",
            table: {
                defaultValue: { summary: 99 }
            }
        },
        status: {
            description: 'Status of badge, only works for dot <br/><h6>type:</h6><code>success</code> | <code>info</code> | <code>warning</code> | <code>error</code>',
        },
        style: {
            description: "The style object of container<br/><h6>type:</h6><code>CSSProperties</code>",

        },
        className: {
            description: "The className object of container<br/><h6>type:</h6><code>string</code>",
        },
        color:{
            description:"Color for dot badge<h6>type:</h6><code>string</code>"
        },
        text:{
            description:"Text for badge, only works when no children is wrapped in Badge<h6>type:</h6><code>string</code>"
        },
        size:{
            description:"Size of badge<h6>type:</h6><code>default<code> | <code>small</code>",
            table: {
                defaultValue: { summary: "small" }
            }
        }

    },

} as Meta

export const Basic = () => {
    return (
        <Badge count={20}>
            <Avatar size="large" shape="square" icon={<UserOutlined />} />
        </Badge>
    )
};

export const Dot = () => {
    return (
        <Space>
            <Badge dot>
                <Avatar size="large" shape="square" icon={<UserOutlined />} />
            </Badge>
            <Badge dot color="blue">
                <Avatar size="large" shape="square" icon={<UserOutlined />} />
            </Badge>
            <Badge dot status="info">
                <Avatar size="large" shape="square" icon={<UserOutlined />} />
            </Badge>
        </Space>
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
        <Space size="large">
            <Badge maxCount={10} count={1200}>
                <Avatar size="large" shape="square" icon={<UserOutlined />} />
            </Badge>
            <Badge maxCount={99} count={1200}>
                <Avatar size="large" shape="square" icon={<UserOutlined />} />
            </Badge>
            <Badge maxCount={999} count={1200}>
                <Avatar size="large" shape="square" icon={<UserOutlined />} />
            </Badge>
        </Space>
    )
};

export const SingleBadge = () => {
    return (
        <>
            <Badge status="error" text="error" />
            <br />
            <Badge status="info" text="info" />
            <br />
            <Badge status="success" text="success" />
            <br />
            <Badge status="warning" text="warning" />
        </>
    )
};