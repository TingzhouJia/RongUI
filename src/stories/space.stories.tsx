import React, { useState } from 'react'
import { Space, Button } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Layout / Space',
    component: Space as any,
    decorators: [themeIt],
    parameters: {
        docs: {
            description: ''
        }
    },
    argTypes: {

    },

};


export const Basic =()=>{
    return <Space>
        <Button>left</Button>
        <Button>middle</Button>
        <Button>right</Button>
    </Space>
}