import React from 'react'
import { Badge, Button, Space } from '../../components'
import { themeIt } from './utils/withTheme'
import { SearchOutlined } from '@ant-design/icons';
export default {
    title: 'General / Button',
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
    return <Button>button</Button>
}

export const Type = () => {
    return (
        <Space>
            <Button type="primary">primary</Button>

            <Button type="dashed">dashed</Button>

            <Button type="link">link</Button>

            <Button type="text">text</Button>
        </Space>
    )
}

export const Status = () => {
    return (
        <>
            <Space>
                <Button mode="success">success</Button>

                <Button mode="success" type="dashed">success</Button>

                <Button mode="success" type="primary">success</Button>

                <Button mode="success" type="link">success</Button>
            </Space>

            <br />
            <br />
            <Space>
                <Button mode="info">info</Button>

                <Button mode="info" type="dashed">info</Button>

                <Button mode="info" type="primary">info</Button>

                <Button mode="info" type="link">info</Button>
            </Space>
            <br />
            <br />
            <Space>
                <Button mode="danger">danger</Button>

                <Button mode="danger" type="dashed">danger</Button>

                <Button mode="danger" type="primary">danger</Button>

                <Button mode="danger" type="link">danger</Button>
            </Space>
            <br />
            <br />
            <Space>
                <Button mode="warning">warning</Button>

                <Button mode="warning" type="dashed">warning</Button>

                <Button mode="warning" type="primary">warning</Button>

                <Button mode="warning" type="link">warning</Button>
            </Space>

        </>

    )
}

export const Shape = () => {
    return <Space>
        <Button shape="round">round </Button>
        <Button >default </Button>
        <Button shape="circle"><SearchOutlined /></Button>
    </Space>
}

export const Size = () => {
    return <Space>
        <Button size="small">small </Button>
        <Button>default</Button>
        <Button size="large">large</Button>
    </Space>
}

export const Block = () => {
    return <Button block>block button</Button>
}