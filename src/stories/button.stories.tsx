import React from 'react'
import { Badge, Button, Space } from '../../components'
import { themeIt } from './utils/withTheme'
import { SearchOutlined } from '@ant-design/icons';
import { Meta } from '@storybook/react/types-6-0';
export default {
    title: 'General / Button',
    component: Badge as any,
    decorators: [themeIt],
    parameters: {
        componentSubtitle:"To trigger an operation.",
        docs:{
            description:{
                component:"<h3>When To Use?</h3><br/>A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic."+
                "<br/>We provided 5 types of button:"+
                "<ul><li>Primary button: indicate the main action.</li>"+
                "<li>Default button: indicate a series of actions without priority.</li><li>Dashed button: used for adding action commonly.</li>"
                +"<li>Text button: used for the most secondary action.</li><li>Link button: used for external links.</li>"
                +"</ul>"
                ,
                
            },
            source:{
                type:"code"
            }
        }
    },
    argTypes: {
        size: {
            description: "size of avatar<br/><h6>type:</h6>",
            table: {
                type:{
                    summary:"'small' | 'default' | 'large' | number"
                },
                defaultValue: { summary: "default" }
            },
            control:{}
        },
        type:{
            description:"type of button<br/><h6>type:</h6>",
            table: {
                type:{
                    summary:'"primary" | "default" | "dashed" | "link" | "text"'
                },
                defaultValue: { summary: "default" }
            },
        },
        mode:{
            table:{
                type:{
                    summary:'"success" | "danger" | "warning" | "info" '
                }
            },
            description:"status of button<br/><h6>type:</h6>"
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
        disabled:{
            description:"Whether button could be clicked<br/><h6>type:</h6>",
            table: {
                defaultValue: { summary: "false" },
                type:{
                    summary:"Boolean"
                }
            },
        },
        block:{
            description:"Fit button width to its parent width.<br/><h6>type:</h6>",
            table: {
                defaultValue: { summary: "false" },
                type:{
                    summary:"Boolean"
                }
            },
        },
        shape:{
            description:"Set button shape.<br/><h6>type:</h6>",
            table: {
                defaultValue: { summary: "default" },
                type:{
                    summary:'"circle" | "default" | "round"'
                }
            },
        }
    },

} as Meta

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