import React, { useState } from 'react'
import { Switch } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Data Collection / Switch',
    component: Switch as any,
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
    return <Switch/>
}


export const withContent=()=>{
    return <Switch checkedChildren="checked" unCheckedChildren="unchecked"/>
}