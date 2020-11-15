import React from 'react'
import { Image } from '../../components'
import { themeIt } from './utils/withTheme'



export default {
    title: 'Data Display / Image',
    component: Image as any,
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
        <Image src="https://images.unsplash.com/photo-1605365241072-490443f0139f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
    )
}

export const Error=()=>{
    return (
        <Image src="https://images.uns/photo-1605365241072-490443f0139f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
    )
}

export const FallBack=()=>{
    return (
        <Image src="https://images.uns/photo-16053652p&w=1950&q=80" fallback="https://images.unsplash.com/photo-1605365241072-490443f0139f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
    )
}