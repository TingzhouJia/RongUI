import React, { useState } from 'react'
import { Space, Button } from '../../components'
import { themeIt } from './utils/withTheme'


export default {
    title: 'Layout / Space',
    component: Space as any,
    decorators: [themeIt],
    parameters: {
        
        docs: {
            description: {
                component:"<h3>When To Use?</h3>Avoid components clinging together and set a unified space. "
            }
        }
    },
    argTypes: {
        size:{
            description:"Size of space<h6>type:</h6>",
            table:{
                type:{
                    summary:"number | 'small' | 'default' | 'large'"
                },
                defaultValue:{
                    summary:"default"
                }
            }
        },
        direction:{
            description:"Space direction<h6>type:</h6>",
            table:{
                type:{
                    summary:"'horizontal' | 'vertical'"
                },
                defaultValue:{
                    summary:"horizontal"
                }
            }
        },
        align:{
            description:"Align items<h6>type:</h6>",
            table:{
                type:{
                    summary:"'flex-start' | 'flex-end' | 'center' | 'baseline'"
                }
            }
        },
        split:{
            description:"Customized split item<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                }
            }
        }
    },


};


export const Basic =()=>{
    return <Space>
        <Button>left</Button>
        <Button>middle</Button>
        <Button>right</Button>
    </Space>
}
export const Sizes=()=>{
    return <>
    <Space size="small">
        <Button>left</Button>
        <Button>middle</Button>
        <Button>right</Button>
    </Space>
    <br/>
    <br/>
    <Space size="default">
        <Button>left</Button>
        <Button>middle</Button>
        <Button>right</Button>
    </Space>
    <br/>
    <br/>
    <Space size="large">
        <Button>left</Button>
        <Button>middle</Button>
        <Button>right</Button>
    </Space>
    </>
}