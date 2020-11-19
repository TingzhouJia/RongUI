import React from 'react'
import { Breadcrumb } from '../../components'
import { themeIt } from './utils/withTheme'

export default {
    title: 'Navigation / Breadcrumb',
    component: Breadcrumb as any,
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
        <Breadcrumb >
        <Breadcrumb.Item href='/a'>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Rong</Breadcrumb.Item>
        <Breadcrumb.Item>UI</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export const CustomizeSeperator=()=>{
    return (
        <Breadcrumb separator="%">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Rong</Breadcrumb.Item>
        <Breadcrumb.Item>UI</Breadcrumb.Item>
        </Breadcrumb>
    )
}