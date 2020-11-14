import React from 'react'
import { Badge, Button } from '../../components'
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

};

export const Basic=()=>{
    return <Button>button</Button>
}

export const Type=()=>{
    return (
        <>
        <Button type="primary">primary</Button>
        &nbsp;&nbsp;
        <Button type="dashed">dashed</Button>
        &nbsp;&nbsp;
        <Button type="link">link</Button>
        &nbsp;&nbsp;
        <Button type="text">text</Button>
        </>
    )
}

export const Status=()=>{
    return (
        <>
        <Button mode="success">success</Button>
        &nbsp;&nbsp;
        <Button mode="success" type="primary">success</Button>
        &nbsp;&nbsp;
        <Button mode="success" type="dashed">success</Button>
        &nbsp;&nbsp;
        <Button mode="success" type="link">success</Button>
        <br/>
        <Button mode="info">info</Button>
        &nbsp;&nbsp;
        <Button mode="info" type="primary">info</Button>
        &nbsp;&nbsp;
        <Button mode="info" type="dashed">info</Button>
        &nbsp;&nbsp;
        <Button mode="info" type="link">info</Button>
        <br/>
        <Button mode="danger">danger</Button>
        &nbsp;&nbsp;
        <Button mode="danger" type="primary">danger</Button>
        &nbsp;&nbsp;
        <Button mode="danger" type="dashed">danger</Button>
        &nbsp;&nbsp;
        <Button mode="danger" type="link">danger</Button>
        <br/>
        <Button mode="warning">warning</Button>
        &nbsp;&nbsp;
        <Button mode="warning" type="primary">warning</Button>
        &nbsp;&nbsp;
        <Button mode="warning" type="dashed">warning</Button>
        &nbsp;&nbsp;
        <Button mode="warning" type="link">warning</Button>
        <br/>
        </>
        
    )
}

export const Shape=()=>{
    return <>
    <Button shape="round">round </Button>
    &nbsp;&nbsp;
    <Button shape="circle"><SearchOutlined/></Button>
    </>
}

export const Size=()=>{
    return <>
    <Button size="small">small </Button>
    &nbsp;&nbsp;
    <Button size="large">large</Button>
    &nbsp;&nbsp;
    <Button>default</Button>
    </>
}

export const Block=()=>{
    return <Button block>block button</Button>
}