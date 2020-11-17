import React, { useState } from 'react'
import { Skeleton } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Feedback / Skeleton',
    component: Skeleton as any,
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
    return (
        <Skeleton/>
    )
}

export const ParagraphSkeleton=()=>{
    return (
        <Skeleton paragraph={{rows:4}} />
    )
}

export const WithAvatar=()=>{
    return <Skeleton avatar paragraph={{rows:4}} />
}

export const Image=()=>{
    return <Skeleton.Image/>
}

export const Avatar=()=>{
    return <Skeleton.Avatar/>
}