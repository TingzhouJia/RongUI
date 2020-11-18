import React, { useState } from 'react'
import {  Tag, Space } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Data Display / Tag',
    component: Tag as any,
    decorators: [themeIt],
    parameters: {
        docs: {
            description: ''
        }
    },
    argTypes: {

    },
}

export const Basic=()=>{
    return (
        <Tag>Rong tag</Tag>
    )
}

export const Status=()=>{
    return (<Space>
        <Tag status="success">Rong success tag</Tag>
        <Tag status="error">Rong error tag</Tag>
        <Tag status="warning">Rong warning tag</Tag>
    </Space>)
}

export const Closable=()=>{
    return (<Tag closable>Rong tag</Tag>)
}
