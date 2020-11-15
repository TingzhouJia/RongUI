import React from 'react'
import { Input } from '../../components'
import { themeIt } from './utils/withTheme'
import { SettingOutlined } from '@ant-design/icons';



export default {
    title: 'Data Collection / Input',
    component: Input as any,
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
    return <Input/>
}

export const Addon=()=>{
    return (
       <>
        <Input addonBefore="http://" addonAfter=".com" />
       </>
    )
}

export const PrefixSuffix=()=>{
    return (<Input prefix={<SettingOutlined/>} />)
}

export const Clearable=()=>{
    return <Input allowClear/>
}

export const Borderless=()=>{
    return <Input bordered={false} />
}

export const Password=()=>{
    return <Input.Password />
}

export const TextArea=()=>{
    return <Input.TextArea/>
}