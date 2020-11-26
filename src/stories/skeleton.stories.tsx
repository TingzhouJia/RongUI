import React, { useState } from 'react'
import { Skeleton } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Feedback / Skeleton',
    component: Skeleton as any,
    decorators: [themeIt],
    parameters: {
        componentSubtitle:"Provide a placeholder while waiting for content to load.",
        docs: {
            description: {
                component:"<h3>When To Use?</h3><ul><li>When a resource needs long time to load.</li><li>When the component contains lots of information, such as List or Card.</li></ul>"
            }
        }
    },
    argTypes: {
        size: {
            description: "The size of input<h6>type</h6>",
            table: {
                type: {
                    summary: '"small" | "default" | "large"'
                },
                defaultValue: {
                    summary: "default"
                }
            }
        },
        style: {
            description: "The  style object of container<br/><h6>type:</h6>",
            table: {
                type: {
                    summary: "CSSProperties"
                }
            }
        },
        className: {
            description: "The className object of container<br/><h6>type:</h6>",
            table: {
                type: {
                    summary: "string"
                }
            }
        },
        paragraph:{
            description:"Add paragraph block to Skeleton.<h6>type:</h6>",
            table:{
                type:{
                    summary:" {row:number,active?:boolean, width?:number} | boolean "
                },
                defaultValue:{
                    summary:"{row:3}"
                }
            },
        
        },
        title:{
            description:"Add title block to Skeleton.<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean "
                },
                defaultValue:{
                    summary:"false"
                }
            }
        },
        avatar:{
            description:"Add avatar block to Skeleton.<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean "
                },
                defaultValue:{
                    summary:"false"
                }
            }
        },
        loading:{
            description:"If loading, skeleton will show<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"true"
                }
            }
        },
        acitve:{
            description:"Animation of skeleton<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean"
                },
                defaultValue:{
                    summary:"false"
                }
            }
        },
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