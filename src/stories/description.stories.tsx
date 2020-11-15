import React from 'react'
import { Description } from '../../components'
import { themeIt } from './utils/withTheme'



export default {
    title: 'Data Display / Description',
    component: Comment as any,
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
        <Description title="Rong UI">
            <Description.Item label="intro"> This is the description</Description.Item>
            <Description.Item label="intro2"> This is the description2</Description.Item>
            <Description.Item label="intro3"> This is the description3</Description.Item>
        </Description>
    )
}

export const Vertical=()=>{
    return (
        <Description title="Rong UI" layout="vertical">
        <Description.Item label="intro"> This is the description</Description.Item>
        <Description.Item label="intro2"> This is the description2</Description.Item>
        <Description.Item label="intro3"> This is the description3</Description.Item>
    </Description>
    )
}

export const Bordered=()=>{
    return (
        <Description title="Rong UI" bordered>
        <Description.Item label="intro"> This is the description</Description.Item>
        <Description.Item label="intro2"> This is the description2</Description.Item>
        <Description.Item label="intro3"> This is the description3</Description.Item>
    </Description>
    )
}