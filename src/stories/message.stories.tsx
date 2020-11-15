import React from 'react'
import { message, Button } from '../../components'
import { themeIt } from './utils/withTheme'
import Space from 'components/Space';

export default {
    title: 'Feedback / message',
    component: message as any,
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
    return (
        <Button onClick={()=>message.info({content:'message it'})}>message</Button>
    )
}

export const MessageType=()=>{
    return (
        <Space>
             <Button onClick={()=>message.error({content:'message error'})}>error</Button>
             <Button onClick={()=>message.warn({content:'message warning'})}>warning</Button>
             <Button onClick={()=>message.success({content:'message success'})}>success</Button>
        </Space>
    )
}