import React, { useState } from 'react'
import { Slider } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Data Collection / Skeleton',
    component: Slider as any,
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
    return (<Slider/>)
}