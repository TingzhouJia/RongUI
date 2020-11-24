import React from 'react'
import { Image } from '../../components'
import { themeIt } from './utils/withTheme'
import { Meta } from '@storybook/react/types-6-0';



export default {
    title: 'Data Display / Image',
    component: Image as any,
    decorators: [themeIt],
    parameters: {
        componentSubtitle:"Image component",
        docs: {
            description: {
                component:"<h3>When To Use?</h3><ol><li>When you need to display pictures.</li><li>Display when loading a large image or fault tolerant handling when loading fail.</li></ol>"
            }
        }
    },
    argTypes: {
        src:{
            description:"Src of image<h6>type:</h6>",
            table:{
                type:{
                    summary:"string"
                }
            },
            control:{}
        },
        alt:{
            description:"Alt of image<h6>type:</h6>",
            table:{
                type:{
                    summary:"string"
                }
            }
        },
        width:{
            description:"Width of image<h6>type:</h6>",
            table:{
                type:{
                    summary:"string"
                }
            }
        },
        height:{
            description:"Height of image<h6>type:</h6>",
            table:{
                type:{
                    summary:"string"
                }
            }
        },
        placeholder:{
            description:"Placeholder of image<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                }
            }
        },
        fallback:{
            description:"A fallback url of image<h6>type:</h6>",
            table:{
                type:{
                    summary:"string"
                }
            }
        }
    },

} as Meta;

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